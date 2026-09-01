import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import { auth, login, register, logout, subscribeUserData, saveUserData, subscribeLogs, addLog, deleteLogDoc, migrateLogsToSubcollection, onAuthStateChanged, FIREBASE_CONFIGURED } from './firebase.js'

// ─── Constants ───────────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: 'work',          name: '工作', nameEn: 'Work',    color: '#3b82f6', icon: '💼' },
  { id: 'learning',      name: '学习', nameEn: 'Study',   color: '#10b981', icon: '📚' },
  { id: 'sports',        name: '运动', nameEn: 'Sports',  color: '#f59e0b', icon: '🏃' },
  { id: 'entertainment', name: '娱乐', nameEn: 'Fun',     color: '#ef4444', icon: '🎮' },
  { id: 'social',        name: '社交', nameEn: 'Social',  color: '#8b5cf6', icon: '👥' },
  { id: 'rest',          name: '休息', nameEn: 'Rest',    color: '#06b6d4', icon: '😴' },
  { id: 'other',         name: '其他', nameEn: 'Other',   color: '#6b7280', icon: '📝' },
]
// Textarea that grows with its content (no inner scroll — everything on one page)
function AutoTextarea({ value, onChange, className, placeholder, ...rest }) {
  const ref = useRef(null)
  const resize = () => { const el = ref.current; if (el) { el.style.height = 'auto'; el.style.height = el.scrollHeight + 'px' } }
  useEffect(() => { resize() }, [value])
  return (
    <textarea ref={ref} className={className} placeholder={placeholder} value={value}
      rows={1} onChange={e => { onChange(e); resize() }} {...rest} />
  )
}

// Strip Markdown to plain text for compact list previews
function mdToPlain(src) {
  return String(src||'')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/gm, '')     // table separator rows
    .replace(/\|/g, ' ')                                   // table pipes
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')               // links → text
    .replace(/[*_#>`]/g, '')                               // md marks
    .replace(/[ \t]{2,}/g, ' ')
    .split('\n').map(l => l.trim()).filter(Boolean).join(' · ')
    .trim()
}

// Minimal Markdown → HTML (bold, italic, headings, tables, lists, links). Self-notes only.
function mdToHtml(src) {
  const escInline = txt => {
    let s = String(txt).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    s = s.replace(/(^|[\s(])(https?:\/\/[^\s<)]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>')
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
    return s
  }
  const isSep = l => l.includes('-') && /^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(l)
  const parseRow = l => l.replace(/^\s*\|/,'').replace(/\|\s*$/,'').split('|').map(c=>c.trim())
  const lines = String(src||'').replace(/\r\n/g,'\n').split('\n')
  let html = '', i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.includes('|') && i+1 < lines.length && isSep(lines[i+1])) {
      const header = parseRow(line); i += 2; const rows = []
      while (i < lines.length && lines[i].includes('|')) { rows.push(parseRow(lines[i])); i++ }
      html += '<div class="md-table-wrap"><table class="md-table"><thead><tr>' +
        header.map(h=>`<th>${escInline(h)}</th>`).join('') + '</tr></thead><tbody>' +
        rows.map(r=>'<tr>'+header.map((_,ci)=>`<td>${escInline(r[ci]||'')}</td>`).join('')+'</tr>').join('') +
        '</tbody></table></div>'
      continue
    }
    const hm = line.match(/^(#{1,6})\s+(.*)$/)
    if (hm) { html += `<div class="md-h md-h${hm[1].length}">${escInline(hm[2])}</div>`; i++; continue }
    if (/^\s*[-*]\s+/.test(line)) {
      const items = []
      while (i<lines.length && /^\s*[-*]\s+/.test(lines[i])) { items.push(lines[i].replace(/^\s*[-*]\s+/,'')); i++ }
      html += '<ul class="md-ul">'+items.map(it=>`<li>${escInline(it)}</li>`).join('')+'</ul>'; continue
    }
    if (/^\s*\d+\.\s+/.test(line)) {
      const items = []
      while (i<lines.length && /^\s*\d+\.\s+/.test(lines[i])) { items.push(lines[i].replace(/^\s*\d+\.\s+/,'')); i++ }
      html += '<ol class="md-ol">'+items.map(it=>`<li>${escInline(it)}</li>`).join('')+'</ol>'; continue
    }
    if (line.trim()==='') { i++; continue }
    html += `<div class="md-p">${escInline(line)}</div>`; i++
  }
  return html
}

// Downscale + compress an image file to a base64 JPEG (keeps notes small enough to sync)
function compressImage(file, maxDim = 1000, quality = 0.6) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload = e => {
      const img = new Image()
      img.onerror = reject
      img.onload = () => {
        let { width, height } = img
        if (width > height && width > maxDim) { height = Math.round(height*maxDim/width); width = maxDim }
        else if (height > maxDim) { width = Math.round(width*maxDim/height); height = maxDim }
        const canvas = document.createElement('canvas')
        canvas.width = width; canvas.height = height
        canvas.getContext('2d').drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL('image/jpeg', quality))
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  })
}

const BREAK_MSG = lang => ({
  micro: { title: lang==='zh'?'微休息':'Micro-break', body: lang==='zh'?'看看远处，活动一下眼睛和肩颈 👀':'Look away, relax your eyes and shoulders 👀' },
  rest:  { title: lang==='zh'?'该休息了':'Time for a break', body: lang==='zh'?'起身走动几分钟，喝口水 🚶':'Stand up, walk around, hydrate 🚶' },
  daily: { title: lang==='zh'?'今日已达上限':'Daily limit reached', body: lang==='zh'?'今天已经很努力了，注意休息 🌙':"You've worked hard today — time to rest 🌙" },
})
const POMODORO_WORK       = 25 * 60
const POMODORO_BREAK      =  5 * 60
const POMODORO_LONG_BREAK = 15 * 60

const TASK_ICONS = ['📋','🎯','🚀','💪','📖','💰','🏆','🌱','❤️','🎨','🏠','🎵','✈️','💧','🌅','🧘','⚽','🍎','💻','📝']
const TASK_COLORS = ['#3b82f6','#10b981','#f59e0b','#ef4444','#8b5cf6','#06b6d4','#f97316','#ec4899']
const WEEK_LABELS_ZH = ['日','一','二','三','四','五','六']
const WEEK_LABELS_EN = ['Su','Mo','Tu','We','Th','Fr','Sa']

// ─── i18n ────────────────────────────────────────────────────────────────────
const T = {
  zh: {
    timer:'计时', tasks:'任务', stats:'统计',
    start:'▶ 开始', stopSave:'⏹ 停止保存', pause:'⏸ 暂停', reset:'↻ 重置',
    category:'分类', taskDesc:'任务描述（可选）', linkTask:'关联任务（可选）',
    templates:'快捷模板', saveAsTemplate:'保存为模板',
    focusMode:'🎯 专注模式', exitFocus:'退出专注',
    todayTotal:'今日已记录', installApp:'📱 添加到主屏幕，随时快速打开', install:'安装',
    pomWork:'🍅 专注时间', pomBreak:'☕ 休息时间', pomLong:'🌿 长休息', focusTitle:'专注中',
    cancel:'取消', save:'保存', add:'添加', edit:'编辑', delete:'删除', archive:'归档', restore:'恢复',
    addTask:'+ 新建任务', taskTitle:'任务名称', taskTitlePh:'任务名称...',
    description:'描述', descPh:'详细描述...',
    repeat:'重复设置', repeatNone:'不重复', repeatDaily:'每天', repeatWeekly:'每周', repeatCustom:'每隔N天',
    intervalDays:'间隔天数', deadline:'截止日期', date:'日期',
    subtasks:'子任务', addSubtask:'添加子任务...',
    todayTab:'今天', allTab:'全部', archTab:'归档',
    doneToday:'今天已完成', streak:'连续', days:'天',
    noTasks:'还没有任务，点击"新建任务"开始吧！',
    noTodayTasks:'今天没有待办，添加一个任务或休息一下 😊',
    totalTime:'总时长', sessions:'记录次数', daily:'日均',
    thisWeek:'过去7天趋高', byCategory:'分类占比', activityLog:'活动记录',
    taskProgress:'任务进度', completionRate:'完成率',
    noLogs:'该时间段暂无记录',
    today:'今天', thisWeekTab:'本周', thisMonth:'本月',
    notes:'备忘录', newNote:'+ 新建', searchNotes:'搜索备忘录...', noNotes:'还没有备忘录，记下你的第一个想法吧！',
    noteTitlePh:'标题（可选）', noteContentPh:'记下你的思路、点子或想法...', pinned:'已置顶',
    pin:'置顶', unpin:'取消置顶', addListItem:'添加一项...', switchToList:'切换为清单', switchToText:'切换为文本',
    goalMins:'每日目标（分钟）', calTab:'日历', checkinDay:'天打卡',
    motivTitle:'加油！你做得很棒', weekBetter:'比上周进步', weekSame:'与上周持平', weekLess:'比上周少了',
    keepGoing:'继续加油，每天积累一点！', bestStreak:'最长连续',
    manualAdd:'+ 手动添加', addLogTitle:'手动添加记录', editLogTitle:'编辑记录',
    tagAuto:'自动', tagManual:'手动', durationLabel:'时长', startAt:'开始时间',
    hoursUnit:'小时', minsUnit:'分钟', durationRequired:'请输入大于 0 的时长',
  },
  en: {
    timer:'Timer', tasks:'Tasks', stats:'Stats',
    start:'▶ Start', stopSave:'⏹ Stop & Save', pause:'⏸ Pause', reset:'↻ Reset',
    category:'Category', taskDesc:'Task Description (optional)', linkTask:'Link Task (optional)',
    templates:'Quick Templates', saveAsTemplate:'Save as Template',
    focusMode:'🎯 Focus Mode', exitFocus:'Exit Focus',
    todayTotal:"Today's total", installApp:'📱 Add to home screen', install:'Install',
    pomWork:'🍅 Focus Time', pomBreak:'☕ Break', pomLong:'🌿 Long Break', focusTitle:'Focusing',
    cancel:'Cancel', save:'Save', add:'Add', edit:'Edit', delete:'Delete', archive:'Archive', restore:'Restore',
    addTask:'+ New Task', taskTitle:'Task Name', taskTitlePh:'Task name...',
    description:'Description', descPh:'Details...',
    repeat:'Repeat', repeatNone:'No repeat', repeatDaily:'Every day', repeatWeekly:'Weekly', repeatCustom:'Every N days',
    intervalDays:'Interval (days)', deadline:'Deadline', date:'Date',
    subtasks:'Subtasks', addSubtask:'Add subtask...',
    todayTab:'Today', allTab:'All', archTab:'Archived',
    doneToday:'Done today', streak:'Streak', days:'days',
    noTasks:'No tasks yet. Click "New Task" to start!',
    noTodayTasks:'Nothing due today — add a task or take a break 😊',
    totalTime:'Total Time', sessions:'Sessions', daily:'Daily Avg',
    thisWeek:'Last 7 Days', byCategory:'By Category', activityLog:'Activity Log',
    taskProgress:'Task Progress', completionRate:'Completion Rate',
    noLogs:'No records in this period',
    today:'Today', thisWeekTab:'This Week', thisMonth:'This Month',
    notes:'Notes', newNote:'+ New', searchNotes:'Search notes...', noNotes:'No notes yet. Write down your first idea!',
    noteTitlePh:'Title (optional)', noteContentPh:'Write your thoughts, ideas or plans...', pinned:'Pinned',
    pin:'Pin', unpin:'Unpin', addListItem:'Add item...', switchToList:'Switch to list', switchToText:'Switch to text',
    goalMins:'Daily Goal (min)', calTab:'Calendar', checkinDay:'day streak',
    motivTitle:'Great work!', weekBetter:'more than last week', weekSame:'same as last week', weekLess:'less than last week',
    keepGoing:'Keep going — every session adds up!', bestStreak:'Best streak',
    manualAdd:'+ Add manually', addLogTitle:'Add record manually', editLogTitle:'Edit record',
    tagAuto:'Auto', tagManual:'Manual', durationLabel:'Duration', startAt:'Start time',
    hoursUnit:'h', minsUnit:'min', durationRequired:'Enter a duration greater than 0',
  }
}
const t = (lang, key) => T[lang]?.[key] ?? key

// ─── Helpers ─────────────────────────────────────────────────────────────────
function fmt(s) {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), ss = s % 60
  if (h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(ss).padStart(2,'0')}`
  return `${String(m).padStart(2,'0')}:${String(ss).padStart(2,'0')}`
}
function fmtH(s) {
  const h = s / 3600
  return h < 0.017 ? '< 1分' : h < 1 ? `${Math.round(h * 60)}分` : `${h.toFixed(1)}h`
}
// Local-date YYYY-MM-DD (not UTC) so "today" rolls over at local midnight.
function dateKey(d = new Date()) {
  const x = new Date(d)
  return `${x.getFullYear()}-${String(x.getMonth()+1).padStart(2,'0')}-${String(x.getDate()).padStart(2,'0')}`
}
function todayStr() { return dateKey() }

// Collision-resistant id (falls back to time+random where crypto is unavailable)
function uid() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `${Date.now()}-${Math.random().toString(36).slice(2,10)}`
}

// Merge time logs across devices by union of ids (never lose an addition),
// dropping any id that has been tombstoned (deleted). Newest first.
function mergeLogs(local, remote, tombstones) {
  const dead = new Set((tombstones||[]).map(String))
  const map = new Map()
  ;[...(remote||[]), ...(local||[])].forEach(l => {
    if (!l || l.id==null) return
    const id = String(l.id)
    if (dead.has(id) || map.has(id)) return
    map.set(id, l)
  })
  return [...map.values()].sort((a,b)=>new Date(b.date)-new Date(a.date))
}

// Whether a task is due today
function isDueToday(task) {
  const today = todayStr()
  const rep = task.repeat || 'none'
  if (rep === 'none')   return !task.deadline || task.deadline <= today
  if (rep === 'daily')  return true
  if (rep === 'weekly') return (task.weekDays || []).includes(new Date().getDay())
  if (rep === 'custom') {
    if (!task.createdAt) return false
    const diff = Math.floor((Date.now() - new Date(task.createdAt)) / 86400000)
    return diff % Math.max(task.intervalDays || 1, 1) === 0
  }
  return false
}

// Whether a task is scheduled on a specific date (YYYY-MM-DD)
function isDueOnDate(task, dateStr) {
  const rep = task.repeat || 'none'
  if (rep === 'none')   return (task.deadline || todayStr()) === dateStr
  const d = new Date(dateStr + 'T12:00')
  if (rep === 'daily')  return true
  if (rep === 'weekly') return (task.weekDays || []).includes(d.getDay())
  if (rep === 'custom') {
    if (!task.createdAt) return false
    const diff = Math.floor((new Date(dateStr) - new Date(dateKey(new Date(task.createdAt)))) / 86400000)
    return diff >= 0 && diff % Math.max(task.intervalDays || 1, 1) === 0
  }
  return false
}

const isRecurring = task => task && task.repeat && task.repeat !== 'none'
// A task is either a one-off "task" (dated to-do) or a recurring "habit" (ongoing goal).
const taskKind = task => task?.kind || (isRecurring(task) ? 'habit' : 'task')

// Completion: recurring tasks are "done" only for the given day; one-off todos are
// done permanently once completed (so they don't reappear the next day).
function isTaskDone(task, dateStr = todayStr()) {
  if (isRecurring(task)) return (task.history || []).includes(dateStr)
  return (task.history || []).length > 0
}

// Subtask completion: recurring tasks track per-day (resets daily); one-off tasks use a flag.
function subDoneOn(sub, task, dateStr = todayStr()) {
  if (isRecurring(task)) return (sub.doneDates || []).includes(dateStr)
  return !!sub.done
}
// A subtask's daily time goal is met when logged time on it for the day reaches goalMinutes.
function subMetByTime(sub, task, logs, dateStr = todayStr()) {
  if (!(sub.goalMinutes > 0)) return false
  const sec = (logs || []).filter(l => l.taskId === String(task.id) && l.subTaskId === String(sub.id) && dateKey(new Date(l.date)) === dateStr).reduce((a,b)=>a+b.duration,0)
  return sec >= sub.goalMinutes * 60
}
function toggleSubDone(sub, task, dateStr = todayStr()) {
  if (isRecurring(task)) {
    const dd = sub.doneDates || []
    return { ...sub, doneDates: dd.includes(dateStr) ? dd.filter(d => d !== dateStr) : [...dd, dateStr] }
  }
  return { ...sub, done: !sub.done }
}

function calcStreak(history) {
  let streak = 0
  const d = new Date()
  for (let i = 0; i < 365; i++) {
    const ds = new Date(d); ds.setDate(d.getDate() - i)
    if ((history || []).includes(dateKey(ds))) streak++
    else if (i > 0) break
  }
  return streak
}

// ─── SVG Charts ──────────────────────────────────────────────────────────────
function WeeklyBarChart({ logs }) {
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i))
    const ds = dateKey(d)
    return { label: ['日','一','二','三','四','五','六'][d.getDay()], total: logs.filter(l => dateKey(new Date(l.date)) === ds).reduce((a, b) => a + b.duration, 0), ds }
  })
  const maxV = Math.max(...days.map(d => d.total), 3600)
  const W = 280, H = 100, BW = 28, GAP = (W - 7 * BW) / 8
  return (
    <svg viewBox={`0 0 ${W} ${H + 24}`} style={{ width: '100%', maxWidth: 360 }}>
      {days.map((d, i) => {
        const bh = Math.max((d.total / maxV) * H, d.total > 0 ? 4 : 0)
        const x = GAP + i * (BW + GAP), isToday = d.ds === todayStr()
        return (
          <g key={i}>
            <rect x={x} y={H - bh} width={BW} height={bh} rx={5} fill={isToday ? 'var(--accent)' : 'var(--accent-muted)'} />
            {d.total > 0 && <text x={x + BW/2} y={H - bh - 4} textAnchor="middle" fontSize={9} fill="var(--text-muted)">{fmtH(d.total)}</text>}
            <text x={x + BW/2} y={H + 16} textAnchor="middle" fontSize={11} fill={isToday ? 'var(--accent)' : 'var(--text-muted)'} fontWeight={isToday ? '700' : '400'}>{d.label}</text>
          </g>
        )
      })}
    </svg>
  )
}

function DonutChart({ data, total }) {
  if (!data.length) return null
  const R = 52, CX = 70, CY = 70, SW = 20, C = 2 * Math.PI * R
  let off = 0
  const segs = data.map(d => { const s = { ...d, off }; off += d.value / total; return s })
  return (
    <svg viewBox="0 0 140 140" style={{ width: 140, height: 140, flexShrink: 0 }}>
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="var(--border)" strokeWidth={SW} />
      {segs.map((s, i) => (
        <circle key={i} cx={CX} cy={CY} r={R} fill="none" stroke={s.color} strokeWidth={SW}
          strokeDasharray={`${(s.value/total)*C} ${C}`} strokeDashoffset={`${-s.off * C}`}
          transform={`rotate(-90 ${CX} ${CY})`} />
      ))}
      <text x={CX} y={CY - 7} textAnchor="middle" fontSize={9} fill="var(--text-muted)">总计</text>
      <text x={CX} y={CY + 10} textAnchor="middle" fontSize={15} fontWeight="700" fill="var(--text)">{fmtH(total)}</text>
    </svg>
  )
}

// ─── Audio ────────────────────────────────────────────────────────────────────
let _audioCtx = null
function getAudioCtx() {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  if (_audioCtx.state === 'suspended') _audioCtx.resume()
  return _audioCtx
}
function unlockAudio() { try { getAudioCtx() } catch (e) {} }
function playBeep(type = 'work') {
  try {
    const ctx = getAudioCtx()
    const freqs = type === 'work'
      ? [{ f: 523, t: 0, d: 0.15 }, { f: 659, t: 0.18, d: 0.15 }, { f: 784, t: 0.36, d: 0.3 }]
      : [{ f: 784, t: 0, d: 0.2 }, { f: 523, t: 0.25, d: 0.4 }]
    freqs.forEach(({ f, t: ft, d }) => {
      const osc = ctx.createOscillator(), gain = ctx.createGain()
      osc.connect(gain); gain.connect(ctx.destination)
      osc.frequency.value = f; osc.type = 'sine'
      gain.gain.setValueAtTime(0.35, ctx.currentTime + ft)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + ft + d)
      osc.start(ctx.currentTime + ft); osc.stop(ctx.currentTime + ft + d + 0.05)
    })
  } catch (e) {}
}

// ─── Task Form (shared Add/Edit modal) ───────────────────────────────────────
function TaskForm({ initial, onSave, onClose, lang, onDelete }) {
  const blank = { title:'', icon:'📋', color:'#3b82f6', category:'work', description:'',
    kind:'task', repeat:'none', weekDays:[], intervalDays:2, deadline:'', subtasks:[], goalMinutes:'' }
  const [form, setForm] = useState(initial ? { ...blank, ...initial, kind: taskKind(initial) } : blank)
  const [newSub, setNewSub] = useState('')

  const set = patch => setForm(f => ({ ...f, ...patch }))

  const addSub = () => {
    if (!newSub.trim()) return
    set({ subtasks: [...(form.subtasks||[]), { id: uid(), title: newSub.trim(), done: false }] })
    setNewSub('')
  }
  const toggleSub = id => set({ subtasks: form.subtasks.map(s => s.id===id ? {...s,done:!s.done} : s) })
  const deleteSub = id => set({ subtasks: form.subtasks.filter(s => s.id!==id) })

  const weekLabels = lang === 'en' ? WEEK_LABELS_EN : WEEK_LABELS_ZH

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal task-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header-row">
          <h3 className="modal-title">{initial && initial.id ? t(lang,'edit') : t(lang,'addTask')}</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Title */}
        <div className="form-group">
          <label>{form.kind==='habit' ? (lang==='zh'?'目标名称':'Target name') : (lang==='zh'?'任务名称':'Task name')} *</label>
          <input className="text-input"
            placeholder={form.kind==='habit' ? (lang==='zh'?'目标名称...':'Target name...') : t(lang,'taskTitlePh')}
            value={form.title} onChange={e => set({ title: e.target.value })} autoFocus />
        </div>

        {/* Repeat / period (habits only) */}
        {form.kind==='habit' && (
        <div className="form-group">
          <label>{lang==='zh'?'周期':'Repeat'}</label>
          <div className="repeat-options">
            {[['daily',lang==='zh'?'每天':'Daily'],['weekly',lang==='zh'?'每周':'Weekly'],['custom',lang==='zh'?'每隔N天':'Every N days']].map(([v,l]) => (
              <button key={v} className={`repeat-btn ${(form.repeat||'daily')===v?'active':''}`}
                onClick={() => set({ repeat: v })}>{l}</button>
            ))}
          </div>
          {form.repeat === 'weekly' && (
            <div className="weekday-picker">
              {[1,2,3,4,5,6,0].map(d => (
                <button key={d} className={`weekday-btn ${(form.weekDays||[]).includes(d)?'active':''}`}
                  onClick={() => { const wd = form.weekDays||[]; set({ weekDays: wd.includes(d) ? wd.filter(x=>x!==d) : [...wd, d] }) }}>
                  {weekLabels[d]}</button>
              ))}
            </div>
          )}
          {form.repeat === 'custom' && (
            <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:8 }}>
              <span style={{ color:'var(--text-muted)', fontSize:'.88rem' }}>{lang==='zh'?'每隔':'Every'}</span>
              <input className="text-input" type="number" min="1" max="90" style={{ width:70 }}
                value={form.intervalDays||2} onChange={e => set({ intervalDays: +e.target.value })} />
              <span style={{ color:'var(--text-muted)', fontSize:'.88rem' }}>{lang==='zh'?'天一次':'days'}</span>
            </div>
          )}
        </div>
        )}

        {/* Description */}
        <div className="form-group">
          <label>{t(lang,'description')}</label>
          <input className="text-input" placeholder={t(lang,'descPh')} value={form.description}
            onChange={e => set({ description: e.target.value })} />
        </div>

        {/* Subtasks / Actions */}
        <div className="form-group">
          <label>{form.kind==='habit' ? (lang==='zh'?'行动':'Action') : t(lang,'subtasks')}</label>
          {form.kind==='habit' && (
            <div style={{fontSize:'.76rem',color:'var(--text-muted)',marginBottom:6}}>
              {lang==='zh'?'为达成目标需要做的行动 / 每日小目标':'Actions or daily steps toward this goal'}
            </div>
          )}
          <div className="add-task-row">
            <input className="text-input"
              placeholder={form.kind==='habit' ? (lang==='zh'?'添加行动...':'Add action...') : t(lang,'addSubtask')}
              value={newSub}
              onChange={e => setNewSub(e.target.value)}
              onKeyDown={e => e.key==='Enter' && addSub()} />
            <button className="btn-primary small" onClick={addSub}>+</button>
          </div>
          {(form.subtasks||[]).map(s => (
            <div key={s.id} className={`task-item ${s.done?'done':''}`} style={{ marginTop: 6 }}>
              <input type="checkbox" checked={s.done} onChange={() => toggleSub(s.id)} />
              <span className="task-title" style={{flex:1}}>{s.title}</span>
              <input className="text-input" type="number" min="1" max="480" style={{width:55,padding:'4px 6px',marginRight:4,fontSize:'.8rem'}}
                placeholder={lang==='zh'?'分钟':'min'} title={lang==='zh'?'每日目标分钟':'Daily goal (min)'}
                value={s.goalMinutes||''}
                onChange={e => set({subtasks: form.subtasks.map(x => x.id===s.id ? {...x, goalMinutes: e.target.value?+e.target.value:undefined} : x)})} />
              <button className="icon-action" onClick={() => deleteSub(s.id)}>✕</button>
            </div>
          ))}
        </div>

        {/* Date — tasks: due date; targets: optional end date */}
        <div className="form-group">
          <label>{form.kind==='habit' ? (lang==='zh'?'期限（可选）':'End date (optional)') : t(lang,'date')}</label>
          <div style={{fontSize:'.78rem',color:'var(--text-muted)',marginBottom:4}}>
            {form.kind==='habit'
              ? (lang==='zh' ? '设为阶段目标；不设则为长期目标' : 'Set for a time-bound goal; leave blank for ongoing')
              : (lang==='zh' ? '不填则默认为今天' : 'Leave blank to default to today')}
          </div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <input className="text-input" type="date" value={form.deadline}
              onChange={e => set({ deadline: e.target.value })} style={{flex:1}} />
            {form.deadline && (
              <button className="btn-secondary small" onClick={() => set({deadline:''})}
                style={{flexShrink:0,whiteSpace:'nowrap'}}>
                {lang==='zh'?'清除':'Clear'}
              </button>
            )}
          </div>
        </div>

        {/* Goal minutes */}
        <div className="form-group">
          <label>{t(lang,'goalMins')}</label>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <input className="text-input" type="number" min="1" max="480" style={{width:90}}
              placeholder="30"
              value={form.goalMinutes||''}
              onChange={e => set({goalMinutes: e.target.value?+e.target.value:undefined})} />
            <span style={{color:'var(--text-muted)',fontSize:'.88rem'}}>{lang==='zh'?'分钟/天（可选）':'min/day (optional)'}</span>
          </div>
        </div>

        {initial && initial.id && onDelete && (
          <button className="task-form-delete" onClick={() => {
            if (confirm(lang==='zh'?'确定删除？此操作不可恢复。':'Delete this? This cannot be undone.')) onDelete()
          }}>🗑 {lang==='zh'?'删除':'Delete'}</button>
        )}

        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>{t(lang,'cancel')}</button>
          <button className="btn-primary" onClick={() => {
            if (!form.title.trim()) return
            const payload = { ...form }
            if (payload.kind === 'task') { payload.repeat = 'none'; payload.weekDays = [] }
            else if (payload.repeat === 'none') payload.repeat = 'daily'
            onSave(payload)
          }}>{t(lang,'save')}</button>
        </div>
      </div>
    </div>
  )
}

// ─── Task Card (extracted to allow useState per card) ────────────────────────
function TaskCard({ tk, today, logs, lang, last7, weekLabels, onToggle, onToggleSub, onEdit, onArchive, onDelete }) {
  const [expanded, setExpanded] = useState(false)
  const subs      = tk.subtasks || []
  // A subtask counts as done if manually checked OR its daily time goal is met.
  const subDoneEff = s => subDoneOn(s, tk, today) || subMetByTime(s, tk, logs, today)
  const subsDone  = subs.filter(subDoneEff).length
  const subsPct   = subs.length > 0 ? subsDone / subs.length : 0
  const logTime   = logs.filter(l => l.taskId === String(tk.id)).reduce((a,b)=>a+b.duration,0)
  const cat           = CATEGORIES.find(c => c.id === tk.category)
  const dl            = tk.deadline ? (() => {
    if (tk.deadline < today) return -1
    if (tk.deadline === today) return 0
    return Math.round((new Date(tk.deadline+'T12:00') - new Date()) / 86400000)
  })() : null
  const isRec         = tk.repeat && tk.repeat !== 'none'
  const todayLogTime  = logs.filter(l => l.taskId === String(tk.id) && dateKey(new Date(l.date)) === today).reduce((a,b)=>a+b.duration,0)
  const goalSec       = (tk.goalMinutes||0) * 60
  const goalPct       = goalSec > 0 ? Math.min(todayLogTime / goalSec, 1) : 0
  const goalMet       = goalSec > 0 && todayLogTime >= goalSec
  // Done = recorded done for today/permanently, OR today's time goal already met.
  const doneToday     = isTaskDone(tk, today) || goalMet
  const createdDays   = tk.createdAt ? Math.max(1, Math.floor((Date.now() - new Date(tk.createdAt)) / 86400000) + 1) : 1
  const completedDays = (tk.history||[]).length

  const repeatLabel = () => {
    if (!isRec) return null
    if (tk.repeat === 'daily')  return lang==='zh' ? '每天' : 'Daily'
    if (tk.repeat === 'weekly') return lang==='zh'
      ? `每周${(tk.weekDays||[]).map(d=>WEEK_LABELS_ZH[d]).join('')}`
      : `Weekly ${(tk.weekDays||[]).map(d=>WEEK_LABELS_EN[d]).join(' ')}`
    if (tk.repeat === 'custom') return lang==='zh' ? `每${tk.intervalDays}天` : `Every ${tk.intervalDays}d`
    return null
  }
  const repLabel = repeatLabel()

  return (
    <div className={`task-card ${doneToday?'done-card':''} ${tk.archived?'archived-card':''}`}
      style={{ borderLeft: `4px solid ${tk.color || cat?.color || '#6b7280'}` }}>
      <div className="task-card-main">
        {!tk.archived && (
          <button className={`habit-check ${doneToday?'checked':''}`} onClick={() => onToggle(tk.id)}>
            {doneToday && '✓'}
          </button>
        )}
        <div className="task-card-info" onClick={() => setExpanded(e=>!e)} style={{cursor:'pointer',flex:1,minWidth:0}}>
          <div className="task-card-title">
            <span className={doneToday ? 'task-done-text' : ''}>{tk.title}</span>
          </div>
          <div className="task-card-badges">
            {repLabel && <span className="badge badge-repeat">{repLabel}</span>}
            {dl !== null && (
              <span className={`badge ${dl<0?'badge-urgent':dl<=7?'badge-warn':'badge-ok'}`}>
                {dl > 0 ? (lang==='zh'?`截止${dl}天`:`${dl}d left`) : dl===0?(lang==='zh'?'截止今天':'Due today'):(lang==='zh'?'已逾期':'Overdue')}
              </span>
            )}
            {isRec && completedDays > 0 && (
              <span className={`badge ${goalMet?'badge-streak':'badge-time'}`}>
                {goalMet ? '✓ ' : ''}{completedDays}/{createdDays}{lang==='zh'?'天':'d'}
              </span>
            )}
            {logTime > 0 && <span className="badge badge-time">{fmtH(logTime)}</span>}
          </div>
        </div>
        <div className="task-card-actions">
          <button className="icon-action" onClick={() => onEdit(tk)} title={t(lang,'edit')}>✏️</button>
          <button className="icon-action" onClick={() => onArchive(tk.id)} title={t(lang,'archive')}>{tk.archived?'↩':'📦'}</button>
          <button className="icon-action" onClick={() => onDelete(tk.id)} title={t(lang,'delete')}>🗑</button>
        </div>
      </div>

      {subs.length > 0 && (
        <div className="task-sub-progress">
          <div className="progress-bar"><div className="progress-fill" style={{width:`${subsPct*100}%`,background:tk.color||'var(--accent)'}}/></div>
          <span className="progress-text">{subsDone}/{subs.length}</span>
        </div>
      )}

      {goalSec > 0 && (
        <div className="task-time-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{width:`${goalPct*100}%`,background:goalMet?'#22c55e':(tk.color||'var(--accent)')}}/>
          </div>
          <span className="progress-text" style={{color:goalMet?'#22c55e':'var(--text-muted)'}}>
            {goalMet ? '✓ ' : ''}{Math.floor(todayLogTime/60)}/{tk.goalMinutes}{lang==='zh'?'分':'min'}
          </span>
        </div>
      )}

      {expanded && (
        <div className="task-card-expand">
          {subs.length > 0 && (
            <div className="subtask-list">
              {subs.map(s => {
                const sd = subDoneEff(s)
                return (
                  <label key={s.id} className={`subtask-item ${sd?'done':''}`}>
                    <input type="checkbox" checked={sd} onChange={() => onToggleSub(tk.id, s.id)} />
                    <span>{s.title}</span>
                    {s.goalMinutes>0 && <span className="subtask-goal-tag">{Math.floor(logs.filter(l=>l.taskId===String(tk.id)&&l.subTaskId===String(s.id)&&dateKey(new Date(l.date))===today).reduce((a,b)=>a+b.duration,0)/60)}/{s.goalMinutes}{lang==='zh'?'分':'m'}</span>}
                  </label>
                )
              })}
            </div>
          )}
          {isRec && (
            <div className="task-dot-row">
              {last7.map(d => (
                <div key={d} className="task-dot-cell">
                  <div className={`h-dot ${(tk.history||[]).includes(d)?'done':''}`}/>
                  <div className="task-dot-label">{weekLabels[new Date(d+'T12:00').getDay()]}</div>
                </div>
              ))}
            </div>
          )}
          {tk.description && <div className="task-desc-text">{tk.description}</div>}
        </div>
      )}
    </div>
  )
}

// ─── Todo Row (compact list item for one-off tasks) ──────────────────────────
function TodoRow({ tk, today, lang, onComplete, onEdit, onDelete }) {
  const subs = tk.subtasks || []
  const subsDone = subs.filter(s => s.done).length
  let dlLabel = null, dlCls = 'ok'
  if (tk.deadline) {
    if (tk.deadline < today) { dlLabel = lang==='zh'?'逾期':'Overdue'; dlCls = 'urgent' }
    else if (tk.deadline === today) { dlLabel = lang==='zh'?'今天':'Today'; dlCls = 'today' }
    else {
      const diff = Math.round((new Date(tk.deadline+'T12:00') - new Date(today+'T12:00')) / 86400000)
      dlLabel = diff===1 ? (lang==='zh'?'明天':'Tomorrow') : (lang==='zh'?`${diff}天后`:`${diff}d`)
      dlCls = diff<=3 ? 'warn' : 'ok'
    }
  }
  return (
    <div className="todo-row" style={{ borderLeft:`3px solid ${tk.color||'var(--accent)'}` }}>
      <button className="todo-check" onClick={() => onComplete(tk.id)} title={lang==='zh'?'完成':'Complete'} />
      <div className="todo-main" onClick={() => onEdit(tk)}>
        <span className="todo-title">{tk.title}</span>
        <div className="todo-meta">
          {dlLabel && <span className={`badge badge-${dlCls==='urgent'?'urgent':dlCls==='ok'?'ok':'warn'}`}>{dlLabel}</span>}
          {subs.length > 0 && <span className="todo-sub-count">☑ {subsDone}/{subs.length}</span>}
          {tk.goalMinutes>0 && <span className="todo-goal">{tk.goalMinutes}{lang==='zh'?'分':'m'}</span>}
        </div>
      </div>
      <span className="todo-chevron" onClick={() => onEdit(tk)}>›</span>
    </div>
  )
}

// ─── Tasks View ───────────────────────────────────────────────────────────────
function TasksView({ tasks, setTasks, logs, lang, notify }) {
  const [filter, setFilter]   = useState('task')
  const [showForm, setShowForm] = useState(false)
  const [newKind, setNewKind]   = useState('task')
  const [editTask, setEditTask] = useState(null)
  const today = todayStr()

  const toggleDone = id => {
    setTasks(ts => ts.map(tk => {
      if (tk.id !== id) return tk
      const hist = tk.history || []
      const done = hist.includes(today)
      const newHist = done ? hist.filter(d => d !== today) : [...hist, today]
      return { ...tk, history: newHist, streak: calcStreak(newHist) }
    }))
  }
  const toggleSubtask = (taskId, subId) => {
    setTasks(ts => ts.map(tk => tk.id !== taskId ? tk : {
      ...tk, subtasks: tk.subtasks.map(s => s.id===subId ? toggleSubDone(s, tk, today) : s)
    }))
  }
  const archiveTask = id => setTasks(ts => ts.map(tk => tk.id===id ? {...tk,archived:!tk.archived} : tk))
  const completeTodo = id => {
    setTasks(ts => ts.map(tk => tk.id!==id ? tk : {
      ...tk, history: [...(tk.history||[]), today], streak: calcStreak([...(tk.history||[]), today])
    }))
    notify(lang==='zh'?'已完成 ✓':'Completed ✓', () => setTasks(ts => ts.map(tk => tk.id!==id ? tk : {
      ...tk, archived: false, history: (tk.history||[]).filter(d => d !== today)
    })))
  }
  const deleteTask  = id => {
    const snapshot = tasks
    setTasks(ts => ts.filter(tk => tk.id!==id))
    notify(lang==='zh'?'任务已删除':'Task deleted', () => setTasks(snapshot))
  }

  const saveTask = form => {
    if (editTask) {
      setTasks(ts => ts.map(tk => tk.id===editTask.id ? { ...tk, ...form } : tk))
      setEditTask(null)
    } else {
      setTasks(ts => [...ts, { ...form, id: uid(), history: [], streak: 0, archived: false, createdAt: new Date().toISOString() }])
      setShowForm(false)
    }
  }

  const active   = tasks.filter(tk => !tk.archived)
  const archived = tasks.filter(tk =>  tk.archived)

  // Tasks page shows one-off to-dos only. Targets (habits) live on the Timer page.
  const todos = active.filter(tk => taskKind(tk)==='task' && !isTaskDone(tk) && !(tk.deadline && tk.deadline < today))
    .sort((a,b) => (a.deadline||'9999').localeCompare(b.deadline||'9999'))

  // Auto-archive one-off tasks that are completed OR overdue.
  useEffect(() => {
    const stale = active.filter(tk => taskKind(tk)==='task' && (isTaskDone(tk) || (tk.deadline && tk.deadline < today)))
    if (stale.length) {
      const ids = new Set(stale.map(tk => tk.id))
      setTasks(ts => ts.map(tk => ids.has(tk.id) ? { ...tk, archived: true } : tk))
    }
  }, [tasks, today])

  const displayList = filter === 'task' ? todos : archived

  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i))
    return dateKey(d)
  })
  const weekLabels = lang === 'en' ? WEEK_LABELS_EN : WEEK_LABELS_ZH

  const subtitle = filter==='task'
    ? (lang==='zh'?'待办的一次性行动':'One-off to-dos')
    : (lang==='zh'?'已完成与逾期的任务':'Completed & overdue')

  const openNew = () => { setNewKind('task'); setShowForm(true) }

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>{t(lang,'tasks')}</h2>
          <div className="page-subtitle">{subtitle}</div>
        </div>
        <button className="btn-primary" onClick={openNew}>{t(lang,'addTask')}</button>
      </div>

      <div className="mode-toggle">
        <button className={filter==='task'?'active':''} onClick={()=>setFilter('task')}>{lang==='zh'?'📋 待办':'📋 To do'}</button>
        <button className={filter==='arch'?'active':''} onClick={()=>setFilter('arch')}>{t(lang,'archTab')}</button>
      </div>

      {displayList.length === 0 ? (
        <div className="empty-state">
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>{filter==='arch'?'📦':'📋'}</div>
          <p>{filter==='task' ? (lang==='zh'?'没有待办，享受当下 😊':'Nothing to do — enjoy! 😊')
             : t(lang,'noTasks')}</p>
        </div>
      ) : filter === 'task' ? (
        <div className="todo-list">
          {displayList.map(tk => (
            <TodoRow key={tk.id} tk={tk} today={today} lang={lang}
              onComplete={completeTodo} onEdit={setEditTask} onDelete={deleteTask} />
          ))}
        </div>
      ) : (
        <div className="task-cards">
          {displayList.map(tk => (
            <TaskCard key={tk.id} tk={tk} today={today} logs={logs} lang={lang}
              last7={last7} weekLabels={weekLabels}
              onToggle={toggleDone} onToggleSub={toggleSubtask}
              onEdit={setEditTask} onArchive={archiveTask} onDelete={deleteTask} />
          ))}
        </div>
      )}

      {(showForm) && (
        <TaskForm lang={lang} initial={{ kind: newKind }} onClose={() => setShowForm(false)} onSave={form => { saveTask(form); setShowForm(false) }} />
      )}
      {editTask && (
        <TaskForm lang={lang} initial={editTask} onClose={() => setEditTask(null)} onSave={form => { saveTask(form); setEditTask(null) }} onDelete={() => { deleteTask(editTask.id); setEditTask(null) }} />
      )}
    </div>
  )
}

// ─── Task Picker (collapsible subtasks) ──────────────────────────────────────
function TaskPicker({ tasks, value, onChange, lang, disabled }) {
  const [open, setOpen]         = useState(false)
  const [expanded, setExpanded] = useState(new Set())
  const activeTasks = tasks.filter(tk => !tk.archived)

  const placeholder = lang==='zh' ? '— 关联任务 —' : '— Link a task —'
  const getLabel = () => {
    if (!value) return placeholder
    if (value.includes('__')) {
      const [tid, sid] = value.split('__')
      const task = activeTasks.find(t => String(t.id) === tid)
      const sub  = (task?.subtasks||[]).find(s => String(s.id) === sid)
      return sub ? `${task?.icon} ${task?.title} › ${sub.title}` : placeholder
    }
    const task = activeTasks.find(t => String(t.id) === value)
    return task ? `${task.icon} ${task.title}` : placeholder
  }

  const toggleExpand = (id, e) => {
    e.stopPropagation()
    setExpanded(s => { const ns = new Set(s); ns.has(id) ? ns.delete(id) : ns.add(id); return ns })
  }
  const select = v => { onChange(v); setOpen(false) }

  return (
    <div className="task-picker" style={{ position: 'relative' }}>
      <button className={`task-picker-btn ${disabled?'disabled':''}`}
        onClick={() => !disabled && setOpen(o => !o)} disabled={disabled}>
        <span className="task-picker-label">{getLabel()}</span>
        <span className={`task-picker-arrow ${open?'open':''}`}>▾</span>
      </button>
      {open && (
        <>
          <div className="task-picker-backdrop" onClick={() => setOpen(false)} />
          <div className="task-picker-dropdown">
            <div className="task-picker-item none-item" onClick={() => select('')}>
              <span style={{color:'var(--text-muted)',fontSize:'.88rem'}}>{lang==='zh'?'— 不关联 —':'— None —'}</span>
            </div>
            {activeTasks.map(tk => (
              <div key={tk.id}>
                <div className={`task-picker-item ${value===String(tk.id)?'active':''}`}>
                  <span className="task-picker-name" onClick={() => select(String(tk.id))}>
                    {tk.icon} {tk.title}
                  </span>
                  {(tk.subtasks||[]).length > 0 && (
                    <button className="task-picker-expand" onClick={e => toggleExpand(tk.id, e)}>
                      {expanded.has(tk.id) ? '▾' : '▸'}
                    </button>
                  )}
                </div>
                {expanded.has(tk.id) && (tk.subtasks||[]).map(s => (
                  <div key={s.id}
                    className={`task-picker-item task-picker-sub ${value===`${tk.id}__${s.id}`?'active':''}`}
                    onClick={() => select(`${tk.id}__${s.id}`)}>
                    └ {s.title}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Timer View ───────────────────────────────────────────────────────────────
const TIMER_KEY = '_timerSession'
function saveTimerSession(startTs, mode, category, desc, linkedTask) {
  try { localStorage.setItem(TIMER_KEY, JSON.stringify({ startTs, mode, category, desc, linkedTask })) } catch {}
}
function clearTimerSession() { try { localStorage.removeItem(TIMER_KEY) } catch {} }
function loadTimerSession() { try { return JSON.parse(localStorage.getItem(TIMER_KEY)) } catch { return null } }

function TimerView({ logs, onSave, tasks, setTasks, templates, setTemplates, lang }) {
  const [targetForm, setTargetForm] = useState(null) // null | 'new' | task object (edit)
  const [running, setRunning]     = useState(false)
  const [elapsed, setElapsed]     = useState(0)
  const [category, setCategory]   = useState('work')
  const [desc, setDesc]           = useState('')
  const [linkedTask, setLinkedTask] = useState('')
  const [toast, setToast]         = useState(null)
  const [focusMode, setFocusMode] = useState(false)
  const [recovered, setRecovered] = useState(null) // {elapsed, desc} when timer is restored
  const [breakCfg, setBreakCfg]   = useLS('breakCfg', { micro:{on:true,mins:20}, rest:{on:true,mins:50}, daily:{on:true,mins:360} })
  const [breakAlert, setBreakAlert] = useState(null) // {type:'micro'|'rest'|'daily'} when due
  const [showBreakCfg, setShowBreakCfg] = useState(false)

  const startTsRef   = useRef(null)
  const ivRef        = useRef(null)
  const runningRef   = useRef(false)
  const categoryRef  = useRef('work')
  const descRef      = useRef('')
  const linkedTaskRef = useRef('')
  const tasksRef      = useRef(tasks)
  const logsRef       = useRef(logs)
  const breakCfgRef   = useRef(breakCfg)
  const breakAlertRef = useRef(null)
  const microBaseRef  = useRef(0)
  const restBaseRef   = useRef(0)
  const dailyFiredRef = useRef(false)

  useEffect(() => { tasksRef.current = tasks }, [tasks])
  useEffect(() => { logsRef.current = logs }, [logs])
  useEffect(() => { breakCfgRef.current = breakCfg }, [breakCfg])
  useEffect(() => { runningRef.current  = running },    [running])
  useEffect(() => { categoryRef.current = category },   [category])
  useEffect(() => { descRef.current     = desc },       [desc])
  useEffect(() => { linkedTaskRef.current = linkedTask }, [linkedTask])

  // ── Restore timer on mount (handles page killed while running) ──
  useEffect(() => {
    const s = loadTimerSession()
    if (!s || s.mode !== 'stopwatch' || !s.startTs) return
    const sec = Math.floor((Date.now() - s.startTs) / 1000)
    if (sec < 5 || sec > 86400) { clearTimerSession(); return }
    // Restore paused state — user can save or reset
    startTsRef.current = s.startTs
    setElapsed(sec)
    if (s.category) { setCategory(s.category); categoryRef.current = s.category }
    if (s.desc)     { setDesc(s.desc);         descRef.current     = s.desc     }
    if (s.linkedTask !== undefined) { setLinkedTask(s.linkedTask); linkedTaskRef.current = s.linkedTask }
    setRecovered({ elapsed: sec, desc: s.desc })
    clearTimerSession()
  }, [])

  // ── Persist timer state when page goes background / is killed ──
  useEffect(() => {
    const persist = () => {
      if (!startTsRef.current) return
      saveTimerSession(startTsRef.current, 'stopwatch', categoryRef.current, descRef.current, linkedTaskRef.current)
    }
    const onVisChange = () => { if (document.hidden) persist() }
    document.addEventListener('visibilitychange', onVisChange)
    window.addEventListener('pagehide', persist)
    return () => {
      document.removeEventListener('visibilitychange', onVisChange)
      window.removeEventListener('pagehide', persist)
    }
  }, [])

  function doSave(dur, label) {
    const lt = linkedTaskRef.current || ''
    const [taskId, subTaskId] = lt.includes('__') ? lt.split('__') : [lt, '']
    const linkedTk = taskId ? (tasksRef.current||[]).find(t => String(t.id) === taskId) : null
    const chosen = CATEGORIES.find(c => c.id === categoryRef.current)
    let category, categoryName, categoryColor, categoryIcon
    if (chosen) {
      // User picked a category → associate under that big category.
      category = chosen.id; categoryName = chosen.name; categoryColor = chosen.color; categoryIcon = chosen.icon
    } else if (linkedTk && taskKind(linkedTk) === 'habit') {
      // No category chosen but a target is linked → the target is its own category.
      category = `t_${taskId}`
      categoryName = linkedTk.title
      categoryColor = linkedTk.color || '#6366f1'
      categoryIcon = linkedTk.icon || '🎯'
    } else {
      const o = CATEGORIES[CATEGORIES.length-1]  // fallback: "other"
      category = o.id; categoryName = o.name; categoryColor = o.color; categoryIcon = o.icon
    }
    onSave({
      id: uid(), category, categoryName, categoryColor, categoryIcon,
      description: descRef.current || label,
      duration: dur, date: new Date().toISOString(),
      taskId: taskId || '', subTaskId: subTaskId || '',
      source: 'timer',
    })
  }

  // Manual daily check-in for a target (toggles today in its history).
  const toggleTargetCheck = id => {
    const today = todayStr()
    setTasks(ts => ts.map(tk => {
      if (String(tk.id) !== id) return tk
      const hist = tk.history || []
      const nh = hist.includes(today) ? hist.filter(d => d !== today) : [...hist, today]
      return { ...tk, history: nh, streak: calcStreak(nh) }
    }))
  }

  const tick = () => {
    if (!startTsRef.current) return
    const sec = Math.floor((Date.now() - startTsRef.current) / 1000)
    setElapsed(sec)
    checkBreaks(sec)
  }

  function showToast(msg, icon, color) {
    setToast({ msg, icon, color })
    setTimeout(() => setToast(null), 4000)
  }

  // ── Break reminders (foreground) ──
  function fireBreak(type) {
    setBreakAlert({ type }); breakAlertRef.current = type
    try { playBeep('break') } catch {}
    const m = BREAK_MSG(lang)[type]
    if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
      try { new Notification('TimeFlow', { body: m.body }) } catch {}
    }
  }
  function checkBreaks(sec) {
    if (breakAlertRef.current) return  // one at a time
    const cfg = breakCfgRef.current
    if (cfg.micro?.on && sec - microBaseRef.current >= cfg.micro.mins*60) { microBaseRef.current = sec; fireBreak('micro'); return }
    if (cfg.rest?.on  && sec - restBaseRef.current  >= cfg.rest.mins*60)  { restBaseRef.current  = sec; fireBreak('rest');  return }
    if (cfg.daily?.on && !dailyFiredRef.current) {
      const todayTotal = (logsRef.current||[]).filter(l => dateKey(new Date(l.date))===todayStr()).reduce((a,b)=>a+b.duration,0)
      if (todayTotal + sec >= cfg.daily.mins*60) { dailyFiredRef.current = true; fireBreak('daily') }
    }
  }
  const dismissBreak = () => { setBreakAlert(null); breakAlertRef.current = null }
  const snoozeBreak = () => {
    const type = breakAlertRef.current
    const cfg = breakCfgRef.current
    if (type==='micro') microBaseRef.current = elapsed - cfg.micro.mins*60 + 300
    else if (type==='rest') restBaseRef.current = elapsed - cfg.rest.mins*60 + 300
    dismissBreak()
  }

  useEffect(() => {
    if (running) ivRef.current = setInterval(tick, 500); else clearInterval(ivRef.current)
    return () => clearInterval(ivRef.current)
  }, [running])

  useEffect(() => {
    const onVisible = () => { if (runningRef.current) tick() }
    document.addEventListener('visibilitychange', onVisible)
    return () => document.removeEventListener('visibilitychange', onVisible)
  }, [])

  const start = () => {
    unlockAudio()
    // Request notification permission when reminders are on
    if (typeof Notification !== 'undefined' && Notification.permission === 'default' &&
        (breakCfg.micro?.on || breakCfg.rest?.on || breakCfg.daily?.on)) {
      try { Notification.requestPermission() } catch {}
    }
    // If elapsed > 0 (resumed after recovery), adjust startTs so tick() continues from where it left off
    const ts = elapsed > 0 ? Date.now() - elapsed * 1000 : Date.now()
    startTsRef.current = ts
    microBaseRef.current = elapsed; restBaseRef.current = elapsed
    saveTimerSession(ts, 'stopwatch', category, desc, linkedTask)
    setRunning(true); setRecovered(null)
  }
  const stop  = () => {
    // Use the freshest possible duration: while running, the interval may not have
    // ticked since the last second boundary. When paused/recovered, startTsRef still
    // points at the original start, so `elapsed` is the only trustworthy value.
    const dur = running && startTsRef.current
      ? Math.max(elapsed, Math.floor((Date.now() - startTsRef.current) / 1000))
      : elapsed
    clearTimerSession()
    setRunning(false); setFocusMode(false); setRecovered(null)
    // The save is wrapped so that a failing cloud write can never abort the reset
    // below and leave the stopwatch stuck showing the old time.
    if (dur > 0) { try { doSave(dur, category) } catch (err) { console.error('save failed', err) } }
    setElapsed(0); setDesc(''); startTsRef.current = null
    microBaseRef.current = 0; restBaseRef.current = 0
  }
  const reset = () => {
    clearTimerSession()
    setRunning(false); setElapsed(0); setFocusMode(false); startTsRef.current = null; setRecovered(null)
    microBaseRef.current = 0; restBaseRef.current = 0
  }
  const saveTemplate = () => {
    if (!desc.trim()) return
    if (!templates.some(tp => tp.desc===desc && tp.category===category))
      setTemplates(ts => [{ id: uid(), desc, category }, ...ts.slice(0, 11)])
  }

  const catName  = id => lang==='en' ? (CATEGORIES.find(c=>c.id===id)?.nameEn||id) : (CATEGORIES.find(c=>c.id===id)?.name||id)

  // Countdown to next break (live via elapsed re-renders)
  const microLeft = breakCfg.micro?.on ? breakCfg.micro.mins*60 - (elapsed - microBaseRef.current) : null
  const restLeft  = breakCfg.rest?.on  ? breakCfg.rest.mins*60  - (elapsed - restBaseRef.current)  : null
  const todayTotalSec = (logs||[]).filter(l => dateKey(new Date(l.date))===todayStr()).reduce((a,b)=>a+b.duration,0) + (running?elapsed:0)
  const dailyLeft = breakCfg.daily?.on ? breakCfg.daily.mins*60 - todayTotalSec : null

  return (
    <div className="page-container">
      {toast && (
        <div className="toast" style={{ background: toast.color }}>
          <span className="toast-icon">{toast.icon}</span><span>{toast.msg}</span>
        </div>
      )}

      {recovered && (
        <div className="recovery-banner">
          <span>⚠️ {lang==='zh'
            ? `检测到未保存的计时记录（${fmt(recovered.elapsed)}）${recovered.desc?' — '+recovered.desc:''}，已暂停恢复，请继续或保存`
            : `Recovered unsaved timer (${fmt(recovered.elapsed)})${recovered.desc?' — '+recovered.desc:''} — continue or save`}
          </span>
          <button className="recovery-dismiss" onClick={() => { clearTimerSession(); setElapsed(0); startTsRef.current=null; setRecovered(null) }}>
            {lang==='zh'?'放弃':'Discard'}
          </button>
        </div>
      )}

      {/* Focus Mode Overlay */}
      {focusMode && (
        <div className="focus-overlay">
          <div className="focus-content">
            <div className="focus-phase-label">{t(lang,'focusTitle')}</div>
            {desc && <div className="focus-task-name">{desc}</div>}
            <div className="focus-big-time">{fmt(elapsed)}</div>
            <div className="focus-btns">
              <button className="btn btn-stop" onClick={stop}>{t(lang,'stopSave')}</button>
              <button className="btn focus-exit-btn" onClick={() => setFocusMode(false)}>{t(lang,'exitFocus')}</button>
            </div>
          </div>
        </div>
      )}

      {/* Break reminder alert */}
      {breakAlert && (
        <div className="break-overlay" onClick={dismissBreak}>
          <div className="break-card" onClick={e=>e.stopPropagation()}>
            <div className="break-emoji">{breakAlert.type==='daily'?'🌙':breakAlert.type==='rest'?'🚶':'👀'}</div>
            <div className="break-title">{BREAK_MSG(lang)[breakAlert.type].title}</div>
            <div className="break-body">{BREAK_MSG(lang)[breakAlert.type].body}</div>
            <div className="break-btns">
              {breakAlert.type!=='daily' && <button className="btn-secondary" onClick={snoozeBreak}>{lang==='zh'?'贪睡 5 分钟':'Snooze 5 min'}</button>}
              <button className="btn-primary" onClick={dismissBreak}>{lang==='zh'?'知道了':'Got it'}</button>
            </div>
          </div>
        </div>
      )}

      <div className={`timer-display ${running?'running':''}`}>
        <div className="sw-time">{fmt(elapsed)}</div>
        <div className="timer-btns">
          {!running
            ? <>
                <button className="btn btn-start" onClick={start}>{t(lang,'start')}</button>
                {elapsed > 0 && <>
                  <button className="btn btn-stop" onClick={stop}>{t(lang,'stopSave')}</button>
                  <button className="btn btn-reset" onClick={reset}>{t(lang,'reset')}</button>
                </>}
              </>
            : <>
                <button className="btn btn-stop" onClick={stop}>{t(lang,'stopSave')}</button>
                <button className="btn btn-reset" onClick={reset}>{t(lang,'reset')}</button>
              </>
          }
          {running && <button className="btn focus-mode-btn" onClick={()=>setFocusMode(true)} title={t(lang,'focusMode')}>🎯</button>}
        </div>
      </div>

      {/* Break reminder status + settings */}
      <div className="break-bar">
        <div className="break-countdowns">
          {microLeft!=null && <span className="break-cd"><b>{lang==='zh'?'微休息':'Micro'}</b> {fmt(Math.max(microLeft,0))}</span>}
          {restLeft!=null  && <span className="break-cd"><b>{lang==='zh'?'大休息':'Rest'}</b> {fmt(Math.max(restLeft,0))}</span>}
          {dailyLeft!=null && <span className="break-cd"><b>{lang==='zh'?'今日剩余':'Daily left'}</b> {fmt(Math.max(dailyLeft,0))}</span>}
          {microLeft==null && restLeft==null && dailyLeft==null && <span className="break-cd muted">{lang==='zh'?'休息提醒已关闭':'Reminders off'}</span>}
        </div>
        <button className="break-gear" onClick={()=>setShowBreakCfg(s=>!s)} title={lang==='zh'?'休息提醒设置':'Reminder settings'}>⚙</button>
      </div>

      {showBreakCfg && (
        <div className="break-settings">
          {[['micro', lang==='zh'?'微休息':'Micro-break'], ['rest', lang==='zh'?'大休息':'Rest break'], ['daily', lang==='zh'?'每日上限':'Daily limit']].map(([k,label]) => (
            <div key={k} className="break-set-row">
              <label className="break-set-toggle">
                <input type="checkbox" checked={!!breakCfg[k]?.on}
                  onChange={e=>setBreakCfg(c=>({ ...c, [k]:{ ...c[k], on:e.target.checked } }))} />
                <span>{label}</span>
              </label>
              <div className="break-set-mins">
                {lang==='zh'?'每':''}<input type="number" min="1" max="1440" value={breakCfg[k]?.mins||''}
                  onChange={e=>setBreakCfg(c=>({ ...c, [k]:{ ...c[k], mins:+e.target.value||1 } }))} />
                {lang==='zh'?'分钟':'min'}
              </div>
            </div>
          ))}
          <div className="break-set-note">{lang==='zh'?'提醒在计时进行、App 打开时触发（前台）':'Reminders fire while timing with the app open'}</div>
        </div>
      )}

      {/* Target — the user's goals, acting as the primary "category" for timing */}
      <div className="section">
        <div className="section-title">{lang==='zh'?'目标':'Target'}</div>
        <div className="target-chips">
          {(() => {
            const targets = tasks.filter(tk => !tk.archived && taskKind(tk)==='habit')
            const today = todayStr()
            return targets.map(tk => {
              const id = String(tk.id)
              const active = linkedTask === id || linkedTask.startsWith(id+'__')
              const doneSec = logs.filter(l => l.taskId===id && dateKey(new Date(l.date))===today).reduce((a,b)=>a+b.duration,0)
              const cur = doneSec + (active ? elapsed : 0)
              const goal = tk.goalMinutes || 0
              const goalSec = goal*60, pct = goal>0 ? Math.min(cur/goalSec,1) : 0, met = goal>0 && cur>=goalSec
              const checkedIn = (tk.history||[]).includes(today) || met
              return (
                <button key={id} className={`target-chip ${active?'active':''}`}
                  onClick={() => { if (running) return; const willLink = !active; setLinkedTask(active?'':id); if (willLink) setCategory('') }}
                  style={active?{borderColor:tk.color||'var(--accent)'}:undefined}>
                  <div className="target-chip-top">
                    <span className={`target-check ${checkedIn?'checked':''}`}
                      onClick={e=>{ e.stopPropagation(); toggleTargetCheck(id) }}
                      title={lang==='zh'?'打卡':'Check in'} />
                    <span className="target-chip-name">{tk.title}</span>
                  </div>
                  {(goal>0 || cur>0) && (
                    <div className={`target-chip-val ${met?'met':''}`}>
                      {goal>0 ? `${met?'✓ ':''}${Math.floor(cur/60)}/${goal}${lang==='zh'?'分':'m'}` : fmtH(cur)}
                    </div>
                  )}
                  <span className="target-chip-edit" onClick={e=>{ e.stopPropagation(); if(!running) setTargetForm(tk) }} title={t(lang,'edit')}>✏️</span>
                </button>
              )
            })
          })()}
          <button className="target-chip target-chip-add" onClick={()=>{ if(!running) setTargetForm('new') }}>
            + {lang==='zh'?'新目标':'New target'}
          </button>
        </div>

        {/* Actions of the selected target */}
        {(() => {
          const selId = linkedTask.includes('__') ? linkedTask.split('__')[0] : linkedTask
          const selTk = tasks.find(t => String(t.id)===selId && taskKind(t)==='habit')
          const acts = selTk?.subtasks || []
          if (!selTk || !acts.length) return null
          return (
            <div className="target-actions">
              <button className={`action-pill ${linkedTask===selId?'active':''}`}
                onClick={()=>{ if(!running) setLinkedTask(selId) }}>{lang==='zh'?'整个目标':'Whole target'}</button>
              {acts.map(a => {
                const v = `${selId}__${a.id}`
                return (
                  <button key={a.id} className={`action-pill ${linkedTask===v?'active':''}`}
                    onClick={()=>{ if(!running) setLinkedTask(v) }}>{a.title}</button>
                )
              })}
            </div>
          )
        })()}
      </div>

      <div className="section">
        <div className="section-title">{t(lang,'category')}{lang==='zh'?'（可选）':' (optional)'}</div>
        <div className="categories-grid">
          {CATEGORIES.map(cat => (
            <button key={cat.id} className={`category-card cat-${cat.id} ${category===cat.id?'active':''}`}
              onClick={() => !running && setCategory(category===cat.id?'':cat.id)}>
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-name">{catName(cat.id)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title">{t(lang,'taskDesc')}</div>
        {templates.length > 0 && (
          <div className="templates-row">
            {templates.map(tp => (
              <div key={tp.id} className="template-chip-wrap">
                <button className="template-chip" onClick={() => { if (!running) { setDesc(tp.desc); setCategory(tp.category) } }}>
                  {CATEGORIES.find(c=>c.id===tp.category)?.icon} {tp.desc}
                </button>
                <button className="template-del" onClick={() => setTemplates(ts=>ts.filter(t=>t.id!==tp.id))}>✕</button>
              </div>
            ))}
          </div>
        )}
        <div className="desc-row">
          <input className="text-input" type="text"
            placeholder={lang==='zh'?'正在做什么？':'What are you working on?'}
            value={desc} onChange={e=>setDesc(e.target.value)} disabled={running} />
          {desc.trim() && !running && (
            <button className="btn-secondary save-tpl-btn" onClick={saveTemplate} title={t(lang,'saveAsTemplate')}>⭐</button>
          )}
        </div>
      </div>

      <div className="section">
        <div className="section-title">{lang==='zh'?'关联待办（可选）':'Link to-do (optional)'}</div>
        <TaskPicker tasks={tasks.filter(tk => taskKind(tk)==='task')} value={linkedTask} onChange={setLinkedTask} lang={lang} disabled={running} />
      </div>

      {targetForm && (
        <TaskForm lang={lang}
          initial={targetForm==='new' ? { kind:'habit' } : targetForm}
          onClose={() => setTargetForm(null)}
          onSave={form => {
            if (targetForm==='new') {
              setTasks(ts => [...ts, { ...form, id: uid(), history: [], streak: 0, archived: false, createdAt: new Date().toISOString() }])
            } else {
              setTasks(ts => ts.map(tk => tk.id===targetForm.id ? { ...tk, ...form } : tk))
            }
            setTargetForm(null)
          }} />
      )}
    </div>
  )
}

// ─── Stats helpers ────────────────────────────────────────────────────────────
function periodRange(period, refDate) {
  const d = new Date(refDate)
  if (period === 'day') { const k = dateKey(d); return { start:k, end:k, days:1 } }
  if (period === 'week') {
    const dow = d.getDay(); const mon = new Date(d); mon.setDate(d.getDate()-(dow===0?6:dow-1))
    const sun = new Date(mon); sun.setDate(mon.getDate()+6)
    return { start:dateKey(mon), end:dateKey(sun), days:7 }
  }
  const first = new Date(d.getFullYear(), d.getMonth(), 1)
  const last  = new Date(d.getFullYear(), d.getMonth()+1, 0)
  return { start:dateKey(first), end:dateKey(last), days:last.getDate() }
}
function eachDay(start, end) {
  const out=[]; const d=new Date(start+'T12:00'); const e=new Date(end+'T12:00')
  while (d<=e) { out.push(dateKey(d)); d.setDate(d.getDate()+1) }
  return out
}
function periodCheckins(tasks, start, end) {
  let scheduled=0, done=0
  const days = eachDay(start,end)
  ;(tasks||[]).forEach(tk => days.forEach(ds => {
    if (isDueOnDate(tk, ds)) { scheduled++; if ((tk.history||[]).includes(ds)) done++ }
  }))
  return { scheduled, done }
}
function logLabelFor(l, tasks) {
  if (l.taskId) {
    const tk = (tasks||[]).find(t => String(t.id) === l.taskId)
    if (tk) {
      const sub = l.subTaskId ? (tk.subtasks||[]).find(s => String(s.id) === l.subTaskId) : null
      return sub ? `${tk.title} › ${sub.title}` : tk.title
    }
  }
  return l.description || l.categoryName || ''
}
const clk = m => `${String(Math.floor(m/60)).padStart(2,'0')}:${String(Math.round(m%60)).padStart(2,'0')}`

// ─── 24h vertical timeline (day view) ─────────────────────────────────────────
function DayTimeline({ logs, tasks, lang }) {
  if (!logs.length) return <div className="cal-empty-day">{lang==='zh'?'这天还没有记录':'No records for this day'}</div>
  const recs = logs.map(l => {
    const d = new Date(l.date)
    const startMin = d.getHours()*60 + d.getMinutes()
    return { ...l, startMin, endMin: Math.min(startMin + l.duration/60, 1440) }
  }).sort((a,b)=>a.startMin-b.startMin)

  const earliest = Math.min(...recs.map(r=>r.startMin))
  const latest   = Math.max(...recs.map(r=>r.endMin))
  let rangeStart = Math.min(6*60, Math.floor(earliest/60)*60)
  let rangeEnd   = Math.max(24*60, Math.ceil(latest/60)*60)
  rangeEnd = Math.min(rangeEnd, 24*60); if (rangeStart < 0) rangeStart = 0

  const PX = 0.75 // px per minute → 45px/hour
  const totalPx = (rangeEnd-rangeStart)*PX
  const hours = []
  for (let h=Math.ceil(rangeStart/60); h*60<=rangeEnd; h++) hours.push(h)

  return (
    <div className="day-timeline" style={{height: totalPx}}>
      {hours.map(h => (
        <div key={h} className="dt-hour-line" style={{top:(h*60-rangeStart)*PX}}>
          <span className="dt-hour-lbl">{String(h).padStart(2,'0')}:00</span>
        </div>
      ))}
      {recs.map(r => {
        const top = (r.startMin-rangeStart)*PX
        const hgt = Math.max((r.endMin-r.startMin)*PX, 20)
        return (
          <div key={r.id} className="dt-block" style={{top, height:hgt, background:(r.categoryColor||'#888')+'22', borderLeftColor:r.categoryColor||'#888'}}>
            <div className="dt-block-title">{r.categoryIcon} {logLabelFor(r, tasks)}</div>
            <div className="dt-block-time">{clk(r.startMin)}–{clk(r.endMin)} · {fmt(r.duration)}</div>
          </div>
        )
      })}
    </div>
  )
}

// ─── Simple vertical bar chart ────────────────────────────────────────────────
function SimpleBars({ bars }) {
  const max = Math.max(...bars.map(b=>b.value), 1)
  return (
    <div className="sbars">
      {bars.map((b,i)=>(
        <div key={i} className="sbar-col">
          <div className="sbar-val">{b.value>0?fmtH(b.value):''}</div>
          <div className="sbar-track">
            <div className="sbar-fill" style={{height:`${Math.max(b.value/max*100, b.value>0?4:0)}%`, background:b.highlight?'var(--accent)':'#c7d2fe'}} />
          </div>
          <div className={`sbar-lbl ${b.highlight?'today':''}`}>{b.label}</div>
        </div>
      ))}
    </div>
  )
}

// ─── Stats View ───────────────────────────────────────────────────────────────
// ─── Manual Time-Record Form (add / edit a log by hand) ───────────────────────
// Used both to enter a session the stopwatch never captured and to correct the
// duration or time of an existing record.
function LogForm({ initial, onSubmit, onClose, lang, tasks }) {
  const pad = n => String(n).padStart(2, '0')
  const init = initial || {}
  const d0 = init.date ? new Date(init.date) : new Date()
  const [date, setDate]   = useState(dateKey(d0))
  const [time, setTime]   = useState(`${pad(d0.getHours())}:${pad(d0.getMinutes())}`)
  const [hrs, setHrs]     = useState(init.duration ? String(Math.floor(init.duration / 3600)) : '0')
  const [mins, setMins]   = useState(init.duration ? String(Math.round((init.duration % 3600) / 60)) : '30')
  const [category, setCategory] = useState(init.category && CATEGORIES.some(c=>c.id===init.category) ? init.category : 'work')
  const [desc, setDesc]   = useState(init.description || '')
  const [linkedTask, setLinkedTask] = useState(init.taskId || '')
  const [err, setErr]     = useState('')

  const totalSec = (parseInt(hrs, 10) || 0) * 3600 + (parseInt(mins, 10) || 0) * 60

  const submit = () => {
    if (totalSec <= 0) { setErr(t(lang, 'durationRequired')); return }
    const [hh, mm] = (time || '00:00').split(':')
    const when = new Date(`${date}T${pad(parseInt(hh,10)||0)}:${pad(parseInt(mm,10)||0)}:00`)
    if (isNaN(when.getTime())) { setErr(t(lang, 'durationRequired')); return }
    const cat = CATEGORIES.find(c => c.id === category) || CATEGORIES[CATEGORIES.length-1]
    const linkedTk = linkedTask ? (tasks||[]).find(tk => String(tk.id) === linkedTask) : null
    onSubmit({
      id: init.id || uid(),
      category: cat.id, categoryName: cat.name, categoryColor: cat.color, categoryIcon: cat.icon,
      description: desc.trim() || (linkedTk ? linkedTk.title : cat.name),
      duration: totalSec,
      date: when.toISOString(),
      taskId: linkedTask || '', subTaskId: '',
      source: 'manual',
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header-row">
          <h3 className="modal-title">{init.id ? t(lang,'editLogTitle') : t(lang,'addLogTitle')}</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="form-group">
          <label>{t(lang,'durationLabel')} *</label>
          <div className="dur-row">
            <input className="text-input" type="number" min="0" max="23" value={hrs}
              onChange={e => { setHrs(e.target.value); setErr('') }} />
            <span className="dur-unit">{t(lang,'hoursUnit')}</span>
            <input className="text-input" type="number" min="0" max="59" value={mins}
              onChange={e => { setMins(e.target.value); setErr('') }} />
            <span className="dur-unit">{t(lang,'minsUnit')}</span>
          </div>
          {err && <div className="form-err">{err}</div>}
        </div>

        <div className="form-group">
          <label>{t(lang,'date')} / {t(lang,'startAt')}</label>
          <div className="dur-row">
            <input className="text-input" type="date" value={date} onChange={e => setDate(e.target.value)} style={{flex:2}} />
            <input className="text-input" type="time" value={time} onChange={e => setTime(e.target.value)} style={{flex:1}} />
          </div>
        </div>

        <div className="form-group">
          <label>{t(lang,'category')}</label>
          <div className="categories-grid">
            {CATEGORIES.map(c => (
              <button key={c.id} type="button"
                className={`category-card cat-${c.id} ${category===c.id?'active':''}`}
                onClick={() => setCategory(c.id)}>
                <span className="cat-icon">{c.icon}</span>
                <span className="cat-name">{lang==='en' ? (c.nameEn||c.name) : c.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>{t(lang,'taskDesc')}</label>
          <input className="text-input" value={desc} placeholder={t(lang,'descPh')}
            onChange={e => setDesc(e.target.value)} />
        </div>

        <div className="form-group">
          <label>{t(lang,'linkTask')}</label>
          <TaskPicker tasks={(tasks||[]).filter(tk => taskKind(tk)==='task')}
            value={linkedTask} onChange={setLinkedTask} lang={lang} />
        </div>

        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>{t(lang,'cancel')}</button>
          <button className="btn-primary" onClick={submit}>{t(lang,'save')}</button>
        </div>
      </div>
    </div>
  )
}

function StatsView({ logs, onDeleteLog, onUpsertLog, tasks, lang }) {
  const [logForm, setLogForm] = useState(null)  // null | 'new' | log object (edit)
  const [period, setPeriod]   = useState('day')
  const [refDate, setRefDate] = useState(new Date())
  const weekLbls = lang==='en' ? ['Su','Mo','Tu','We','Th','Fr','Sa'] : ['日','一','二','三','四','五','六']
  const today = todayStr()

  const cur = periodRange(period, refDate)
  const filtered = logs.filter(l => { const k=dateKey(new Date(l.date)); return k>=cur.start && k<=cur.end })
    .sort((a,b)=>new Date(a.date)-new Date(b.date))
  const total = filtered.reduce((a,b)=>a+b.duration,0)
  const sessions = filtered.length
  const daily = Math.round(total / cur.days)

  // Previous period (环比)
  const prevD = new Date(refDate)
  if (period==='day') prevD.setDate(prevD.getDate()-1)
  else if (period==='week') prevD.setDate(prevD.getDate()-7)
  else prevD.setMonth(prevD.getMonth()-1)
  const prev = periodRange(period, prevD)
  const prevTotal = logs.filter(l => { const k=dateKey(new Date(l.date)); return k>=prev.start && k<=prev.end }).reduce((a,b)=>a+b.duration,0)
  const diff = total - prevTotal
  const pct  = prevTotal>0 ? Math.round(Math.abs(diff)/prevTotal*100) : 0

  const checkin = periodCheckins(tasks, cur.start, cur.end)
  const includesToday = today>=cur.start && today<=cur.end

  const setP  = p => { setPeriod(p); setRefDate(new Date()) }
  const shift = dir => setRefDate(prevDate => {
    const d = new Date(prevDate)
    if (period==='day') d.setDate(d.getDate()+dir)
    else if (period==='week') d.setDate(d.getDate()+dir*7)
    else d.setMonth(d.getMonth()+dir)
    return d
  })

  const rangeLabel = () => {
    if (period==='day') {
      if (cur.start===today) return lang==='zh'?'今天':'Today'
      const d=new Date(cur.start+'T12:00')
      return lang==='zh'?`${d.getMonth()+1}月${d.getDate()}日 周${weekLbls[d.getDay()]}`:d.toLocaleDateString('en-US',{month:'short',day:'numeric',weekday:'short'})
    }
    if (period==='week') {
      if (includesToday) return lang==='zh'?'本周':'This week'
      const s=new Date(cur.start+'T12:00'), e=new Date(cur.end+'T12:00')
      return `${s.getMonth()+1}/${s.getDate()} – ${e.getMonth()+1}/${e.getDate()}`
    }
    const d=new Date(refDate), c=new Date()
    if (d.getFullYear()===c.getFullYear() && d.getMonth()===c.getMonth()) return lang==='zh'?'本月':'This month'
    return lang==='zh'?`${d.getFullYear()}年${d.getMonth()+1}月`:d.toLocaleDateString('en-US',{month:'long',year:'numeric'})
  }

  const byCategory = {}
  filtered.forEach(l => {
    const key = l.category
    if (!byCategory[key]) {
      const cat = CATEGORIES.find(c => c.id === key)
      byCategory[key] = cat
        ? { ...cat, value: 0 }
        : { id: key, name: l.categoryName, nameEn: l.categoryName, color: l.categoryColor||'#6b7280', icon: l.categoryIcon||'🎯', value: 0 }
    }
    byCategory[key].value += l.duration
  })
  const catData = Object.values(byCategory).sort((a,b)=>b.value-a.value)

  const byTask = {}
  filtered.forEach(l => {
    if(!l.taskId) return
    if(!byTask[l.taskId]){ const tk=(tasks||[]).find(t=>String(t.id)===l.taskId); byTask[l.taskId]={title:tk?.title||l.taskId,color:tk?.color||'var(--accent)',time:0,subs:{},tk} }
    byTask[l.taskId].time+=l.duration
    if(l.subTaskId){ const tk=byTask[l.taskId].tk; const sub=tk?.subtasks?.find(s=>String(s.id)===l.subTaskId); if(!byTask[l.taskId].subs[l.subTaskId]) byTask[l.taskId].subs[l.subTaskId]={title:sub?.title||l.subTaskId,time:0}; byTask[l.taskId].subs[l.subTaskId].time+=l.duration }
  })
  const taskItems = Object.values(byTask).sort((a,b)=>b.time-a.time)

  const weekBars = period==='week' ? eachDay(cur.start,cur.end).map(ds => {
    const v = logs.filter(l=>dateKey(new Date(l.date))===ds).reduce((a,b)=>a+b.duration,0)
    const d = new Date(ds+'T12:00')
    return { label:weekLbls[d.getDay()], value:v, highlight:ds===today }
  }) : []

  const insight = () => {
    if (!filtered.length) return lang==='zh'?'这个时段还没有记录，去专注一会儿吧 😊':'No records in this period yet.'
    const unit = period==='day'?(lang==='zh'?'昨天':'yesterday'):period==='week'?(lang==='zh'?'上周':'last week'):(lang==='zh'?'上月':'last month')
    if (prevTotal===0) return lang==='zh'?`共记录 ${fmtH(total)}，很棒的开始！`:`${fmtH(total)} logged — great start!`
    if (diff>0) return lang==='zh'?`🚀 比${unit}多记录 ${fmtH(diff)}（↑${pct}%），势头不错！`:`🚀 ${fmtH(diff)} more than ${unit} (↑${pct}%)`
    if (diff<0) return lang==='zh'?`比${unit}少了 ${fmtH(-diff)}（↓${pct}%），加把劲 💪`:`${fmtH(-diff)} less than ${unit} (↓${pct}%)`
    return lang==='zh'?`与${unit}持平，稳住节奏`:`Same as ${unit}`
  }

  return (
    <div className="page-container">
      <div className="mode-toggle">
        {[['day',lang==='zh'?'日':'Day'],['week',lang==='zh'?'周':'Week'],['month',lang==='zh'?'月':'Month']].map(([k,l])=>(
          <button key={k} className={period===k?'active':''} onClick={()=>setP(k)}>{l}</button>
        ))}
      </div>

      {/* Period navigator */}
      <div className="stats-nav">
        <button className="cal-nav-btn" onClick={()=>shift(-1)}>‹</button>
        <span className="stats-nav-label">{rangeLabel()}</span>
        <button className="cal-nav-btn" onClick={()=>shift(1)} disabled={includesToday}>›</button>
      </div>

      {/* Summary + comparison */}
      <div className="cmp-grid">
        <div className="cmp-card primary">
          <div className="cmp-val">{fmtH(total)}</div>
          <div className="cmp-lbl">{t(lang,'totalTime')}</div>
          {prevTotal>0 && <div className={`cmp-delta ${diff>=0?'up':'down'}`}>{diff>=0?'↑':'↓'} {pct}%</div>}
        </div>
        <div className="cmp-card"><div className="cmp-val">{sessions}</div><div className="cmp-lbl">{t(lang,'sessions')}</div></div>
        {period!=='day' && <div className="cmp-card"><div className="cmp-val">{fmtH(daily)}</div><div className="cmp-lbl">{t(lang,'daily')}</div></div>}
        {checkin.scheduled>0 && <div className="cmp-card"><div className="cmp-val">{checkin.done}/{checkin.scheduled}</div><div className="cmp-lbl">{lang==='zh'?'打卡':'Check-in'}</div></div>}
      </div>

      <div className="stats-insight">{insight()}</div>

      {/* DAY: 24h timeline */}
      {period==='day' && (
        <div className="chart-section">
          <div className="section-title">{lang==='zh'?'🕒 当天时间安排':'🕒 Daily Timeline'}</div>
          <DayTimeline logs={filtered} tasks={tasks} lang={lang} />
        </div>
      )}

      {/* WEEK: daily bars */}
      {period==='week' && (
        <div className="chart-section">
          <div className="section-title">{lang==='zh'?'📊 每日时长':'📊 Daily Totals'}</div>
          <SimpleBars bars={weekBars} />
        </div>
      )}

      {/* Category donut */}
      {catData.length > 0 && (
        <div className="chart-section">
          <div className="section-title">{t(lang,'byCategory')}</div>
          <div className="donut-row">
            <DonutChart data={catData} total={total} />
            <div className="cat-legend">
              {catData.map((d,i) => (
                <div key={d.id||i} className="legend-item">
                  <span className="legend-dot" style={{background:d.color}}/>
                  <span>{d.icon} {lang==='en'?d.nameEn:d.name}</span>
                  <span className="legend-pct">{fmtH(d.value)}</span>
                  <span className="legend-pct muted">{Math.round(d.value/total*100)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* By task (week / month) */}
      {period!=='day' && taskItems.length > 0 && (
        <div className="chart-section">
          <div className="section-title">{lang==='zh'?'⏱ 各任务用时':'⏱ Time by Task'}</div>
          <div className="stats-goal-list">
            {taskItems.map((item,i) => {
              const subList = Object.values(item.subs).sort((a,b)=>b.time-a.time)
              const ci = item.tk && isRecurring(item.tk) ? periodCheckins([item.tk], cur.start, cur.end) : null
              return (
                <div key={i} className="stats-goal-item">
                  <div className="stats-goal-header">
                    <span style={{borderLeft:`3px solid ${item.color}`,paddingLeft:8}}>{item.title}</span>
                    <span className="stats-goal-time">{fmtH(item.time)}{ci&&ci.scheduled>0?` · ${lang==='zh'?'打卡 ':''}${ci.done}/${ci.scheduled}`:''}</span>
                  </div>
                  {subList.map((s,j) => (
                    <div key={j} className="stats-subtask-row">
                      <span className="stats-subtask-name">└ {s.title}</span>
                      <span className="stats-subtask-time">{fmtH(s.time)}</span>
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Check-in: week table / month calendar */}
      {period!=='day' && (
        <div className="chart-section">
          <div className="section-title">{period==='month'?(lang==='zh'?'📅 打卡日历':'📅 Calendar'):(lang==='zh'?'📅 打卡表':'📅 Check-in')}</div>
          {period==='month'
            ? <MonthCalendar tasks={tasks||[]} lang={lang} refDate={refDate} />
            : <CheckinTable tasks={tasks||[]} period="week" lang={lang} refDate={refDate} />}
        </div>
      )}

      {/* Time records */}
      <div className="chart-section">
        <div className="section-title-row">
          <div className="section-title" style={{marginBottom:0}}>{lang==='zh'?'🗒 时间记录':'🗒 Time Records'}</div>
          <button className="btn-secondary small" onClick={()=>setLogForm('new')}>{t(lang,'manualAdd')}</button>
        </div>
        {filtered.length === 0 ? (
          <div className="empty-state" style={{padding:'18px 0'}}><p>{t(lang,'noLogs')}</p></div>
        ) : (
          <div className="logs-list">
            {[...filtered].reverse().slice(0,80).map(l => (
              <div key={l.id} className="log-item" style={{borderLeftColor:l.categoryColor}}>
                <span className="log-icon">{l.categoryIcon}</span>
                <div className="log-details log-details-tap" onClick={()=>setLogForm(l)} title={t(lang,'editLogTitle')}>
                  <div className="log-desc">{logLabelFor(l, tasks)}</div>
                  <div className="log-time-str">
                    {new Date(l.date).toLocaleString(lang==='zh'?'zh-CN':'en-US',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})}
                    {/* Records with no `source` predate this field and all came from the stopwatch. */}
                    <span className={`log-tag ${l.source==='manual'?'manual':'auto'}`}>
                      {l.source==='manual' ? '✍️ '+t(lang,'tagManual') : '⏱ '+t(lang,'tagAuto')}
                    </span>
                  </div>
                </div>
                <span className="log-dur">{fmt(l.duration)}</span>
                <button className="icon-action" onClick={()=>onDeleteLog(l.id)}>✕</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {logForm && (
        <LogForm lang={lang} tasks={tasks}
          initial={logForm === 'new' ? null : logForm}
          onClose={() => setLogForm(null)}
          onSubmit={log => { onUpsertLog(log); setLogForm(null) }} />
      )}
    </div>
  )
}

// ─── Month Calendar (read-only, used in Stats; driven by refDate) ─────────────
function MonthCalendar({ tasks, lang, refDate }) {
  const todaySt = todayStr()
  const base = refDate ? new Date(refDate) : new Date()
  const weekLbls = lang==='en' ? ['Su','Mo','Tu','We','Th','Fr','Sa'] : ['日','一','二','三','四','五','六']

  const year = base.getFullYear(); const month = base.getMonth()
  const firstDow = new Date(year,month,1).getDay()
  const daysInMonth = new Date(year,month+1,0).getDate()
  const recurring = tasks.filter(tk => !tk.archived && isRecurring(tk))

  const getDayStatus = dateStr => {
    const scheduled = recurring.filter(tk => isDueOnDate(tk, dateStr))
    const done = scheduled.filter(tk => (tk.history||[]).includes(dateStr))
    return { scheduled: scheduled.length, done: done.length }
  }

  return (
    <div>
      <div className="cal-month-grid">
        {weekLbls.map(l=><div key={l} className="cal-week-lbl">{l}</div>)}
        {Array(firstDow).fill(null).map((_,i)=><div key={`e${i}`}/>)}
        {Array(daysInMonth).fill(null).map((_,i)=>{
          const day=i+1
          const dateStr=`${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
          const isToday=dateStr===todaySt
          const {scheduled,done}=getDayStatus(dateStr)
          const pct=scheduled>0?done/scheduled:0
          return (
            <div key={day} className={`cal-day-cell${isToday?' cal-today':''}`}>
              <span className="cal-day-num">{day}</span>
              {done>0 && <div className={`cal-day-dot ${pct>=1?'all':'some'}`}/>}
            </div>
          )
        })}
      </div>
      <div className="cal-legend">
        <span className="cal-legend-item"><span className="cal-day-dot all"/>{lang==='zh'?'全部完成':'All done'}</span>
        <span className="cal-legend-item"><span className="cal-day-dot some"/>{lang==='zh'?'部分完成':'Partial'}</span>
      </div>
    </div>
  )
}

// ─── Check-in Table (Stats) ───────────────────────────────────────────────────
function CheckinTable({ tasks, period, lang, refDate }) {
  const todaySt = todayStr()
  const base = refDate ? new Date(refDate) : new Date()
  const weekLbls = lang==='en' ? ['Su','Mo','Tu','We','Th','Fr','Sa'] : ['日','一','二','三','四','五','六']
  const recurringTasks = tasks.filter(tk => !tk.archived && tk.repeat && tk.repeat !== 'none')

  // Build the list of day columns for the period
  let days
  if (period === 'month') {
    const y = base.getFullYear(), m = base.getMonth()
    const dim = new Date(y,m+1,0).getDate()
    days = Array.from({length:dim},(_,i)=>{ const d=new Date(y,m,i+1); return { date:d, str:`${y}-${String(m+1).padStart(2,'0')}-${String(i+1).padStart(2,'0')}`, dow:d.getDay() } })
  } else {
    // week: Mon→Sun of the week containing base
    const dow = base.getDay()
    const monday = new Date(base); monday.setDate(base.getDate() - (dow===0?6:dow-1))
    days = Array.from({length:7},(_,i)=>{ const d=new Date(monday); d.setDate(monday.getDate()+i); return { date:d, str:dateKey(d), dow:d.getDay() } })
  }

  if (recurringTasks.length === 0) {
    return <div className="empty-state" style={{padding:'20px 0'}}><p>{lang==='zh'?'还没有重复任务':'No recurring tasks yet'}</p></div>
  }

  return (
    <div className={`week-timetable${period==='month'?' month-mode':''}`}>
      <div className="wt-row wt-header">
        <div className="wt-task-col"/>
        {days.map(d=>(
          <div key={d.str} className={`wt-day-col${d.str===todaySt?' wt-today':''}`}>
            {period==='week' && <div className="wt-day-name">{weekLbls[d.dow]}</div>}
            <div className="wt-day-num">{d.date.getDate()}</div>
          </div>
        ))}
      </div>
      {recurringTasks.map(tk=>(
        <div key={tk.id} className="wt-row">
          <div className="wt-task-col">
            <span className="wt-task-name" style={{borderLeft:`3px solid ${tk.color||'var(--accent)'}`}}>{tk.title}</span>
          </div>
          {days.map(d=>{
            const scheduled=isDueOnDate(tk,d.str)
            const done=(tk.history||[]).includes(d.str)
            const isFuture=d.str>todaySt; const isToday=d.str===todaySt
            let cls='wt-empty'; let icon=null
            if(scheduled){ if(done){cls='wt-done';icon='✓'} else if(isFuture){cls='wt-future';icon='·'} else if(isToday){cls='wt-today-cell';icon='●'} else{cls='wt-missed';icon='○'} }
            return <div key={d.str} className={`wt-day-cell ${cls}${d.str===todaySt?' wt-col-today':''}`}>{icon&&<span>{icon}</span>}</div>
          })}
        </div>
      ))}
      <div className="wt-legend">
        <span className="wt-done">✓ {lang==='zh'?'已完成':'Done'}</span>
        <span className="wt-today-cell">● {lang==='zh'?'今天':'Today'}</span>
        <span className="wt-missed">○ {lang==='zh'?'未打卡':'Missed'}</span>
        <span className="wt-future">· {lang==='zh'?'未到':'Upcoming'}</span>
      </div>
    </div>
  )
}

// ─── Notes View ──────────────────────────────────────────────────────────────
const NOTE_COLORS = ['#ffffff','#fef9c3','#dcfce7','#dbeafe','#fce7f3','#ede9fe','#ffedd5','#f1f5f9']
const NOTE_COLORS_DARK = ['#1e293b','#3b3200','#052e16','#0c1a2e','#3b0a1f','#1a0f3b','#3b1500','#1e293b']

function NotesView({ notes, setNotes, lang, dark, notify }) {
  const [search, setSearch]   = useState('')
  const [editId, setEditId]   = useState(null)
  const blankForm = { title:'', content:'', color: NOTE_COLORS[0], pinned:false, checklist:[], images:[] }
  const [form, setForm]       = useState(blankForm)
  const [newItem, setNewItem] = useState('')
  const [addType, setAddType] = useState('check') // 'check' | 'numbered'
  const [preview, setPreview] = useState(false)
  const [colorOpen, setColorOpen] = useState(false)
  const fileRef = useRef(null)

  const openNew  = () => { setForm(blankForm); setPreview(false); setEditId('new') }
  const openEdit = n  => {
    // Fold any legacy separate checklist items into the content text (lists live inline now)
    let content = n.content || ''
    const list = n.checklist || []
    if (list.length) {
      let num = 0
      const lines = list.map(it => it.type==='numbered' ? `${++num}. ${it.text}` : `- ${it.text}`)
      content = (content ? content + '\n' : '') + lines.join('\n')
    }
    setForm({ title:n.title, content, color:n.color, pinned:n.pinned, checklist:[], images:n.images||[] })
    setPreview(false); setEditId(n.id)
  }
  const insertTable = () => {
    const tpl = `\n| ${lang==='zh'?'列1':'Col 1'} | ${lang==='zh'?'列2':'Col 2'} | ${lang==='zh'?'列3':'Col 3'} |\n|---|---|---|\n|  |  |  |\n|  |  |  |\n`
    setForm(f => ({ ...f, content: (f.content||'') + tpl }))
    setPreview(false)
  }

  const addImages = async (fileList) => {
    const files = [...(fileList||[])].filter(f => f.type.startsWith('image/'))
    for (const file of files) {
      try {
        const data = await compressImage(file)
        setForm(f => ({ ...f, images: [...(f.images||[]), { id: uid(), data }] }))
      } catch {}
    }
  }
  const removeImage = id => setForm(f => ({ ...f, images: (f.images||[]).filter(im => im.id !== id) }))

  const saveNote = () => {
    const hasContent = form.content.trim() || form.title.trim() || (form.checklist||[]).length > 0
    if (!hasContent) { setEditId(null); return }
    if (editId === 'new') {
      setNotes(ns => [{ ...form, id: uid(), checked: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, ...ns])
    } else {
      setNotes(ns => ns.map(n => n.id === editId ? { ...n, ...form, updatedAt: new Date().toISOString() } : n))
    }
    setEditId(null)
  }

  const addItem = () => {
    if (!newItem.trim()) return
    setForm(f => {
      const body = f.content || ''
      let prefix = '- '
      if (addType === 'numbered') {
        const nums = (body.match(/^\s*\d+\.\s/gm) || []).length
        prefix = `${nums + 1}. `
      }
      const sep = body && !body.endsWith('\n') ? '\n' : ''
      return { ...f, content: body + sep + prefix + newItem.trim() + '\n' }
    })
    setNewItem('')
  }
  const toggleItemDone = id => setForm(f => ({
    ...f, checklist: f.checklist.map(it => it.id===id ? {...it,done:!it.done} : it)
  }))
  const deleteItem = id => setForm(f => ({ ...f, checklist: f.checklist.filter(it => it.id!==id) }))
  const updateItemText = (id, text) => setForm(f => ({ ...f, checklist: f.checklist.map(it => it.id===id ? {...it, text} : it) }))

  const deleteNote  = id => {
    const snapshot = notes
    setNotes(ns => ns.filter(n => n.id !== id))
    notify(lang==='zh'?'备忘录已删除':'Note deleted', () => setNotes(snapshot))
  }
  const togglePin   = id => setNotes(ns => ns.map(n => n.id===id ? {...n, pinned:!n.pinned} : n))
  const toggleCheck = id => setNotes(ns => ns.map(n => n.id===id ? {...n, checked:!n.checked} : n))
  const toggleNoteItemDone = (noteId, itemId) => setNotes(ns => ns.map(n => n.id!==noteId ? n : {
    ...n, checklist: (n.checklist||[]).map(it => it.id===itemId ? {...it,done:!it.done} : it),
    updatedAt: new Date().toISOString()
  }))

  // compute display number for a numbered item (its position among numbered items)
  const getNum = (items, id) => items.filter((x,i) => x.type==='numbered' && i <= items.findIndex(x=>x.id===id)).length

  const q = search.trim().toLowerCase()
  const filtered = notes.filter(n => !q
    || (n.title||'').toLowerCase().includes(q)
    || (n.content||'').toLowerCase().includes(q)
    || (n.checklist||[]).some(it => (it.text||'').toLowerCase().includes(q))
  )
  const pinned    = filtered.filter(n => n.pinned && !n.checked)
  const unchecked = filtered.filter(n => !n.pinned && !n.checked)
  const checked   = filtered.filter(n => n.checked)
  const display   = [...pinned, ...unchecked, ...checked]

  const fmtDate = iso => {
    const d = new Date(iso)
    const now = new Date()
    const diff = Math.floor((now - d) / 60000)
    if (diff < 1)  return lang==='zh' ? '刚刚' : 'just now'
    if (diff < 60) return lang==='zh' ? `${diff}分钟前` : `${diff}m ago`
    if (diff < 1440) return lang==='zh' ? `${Math.floor(diff/60)}小时前` : `${Math.floor(diff/60)}h ago`
    return d.toLocaleDateString(lang==='zh'?'zh-CN':'en-US', { month:'short', day:'numeric' })
  }

  // ── Edit / New screen ──
  if (editId !== null) {
    const noteColor = dark
      ? (NOTE_COLORS_DARK[NOTE_COLORS.indexOf(form.color)] ?? '#1e293b')
      : form.color
    const items = form.checklist || []
    return (
      <div className="page-container note-editor" style={{ background: noteColor, minHeight: '100%' }}>
        <div className="note-editor-toolbar">
          <button className="note-back-btn" onClick={saveNote}>← {lang==='zh'?'完成':'Done'}</button>
          {/* single color swatch → click expands palette */}
          <div className="note-color-picker">
            <button className="note-color-swatch" style={{ background: dark ? (NOTE_COLORS_DARK[NOTE_COLORS.indexOf(form.color)]??'#fff') : form.color }}
              onClick={() => setColorOpen(o=>!o)} title={lang==='zh'?'颜色':'Color'} />
            {colorOpen && (
              <>
                <div className="note-color-backdrop" onClick={()=>setColorOpen(false)} />
                <div className="note-color-pop">
                  {NOTE_COLORS.map((c,i) => (
                    <button key={c} className={`note-color-dot ${form.color===c?'active':''}`}
                      style={{ background: dark ? NOTE_COLORS_DARK[i] : c }}
                      onClick={() => { setForm(f => ({...f, color:c})); setColorOpen(false) }} />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="note-toolbar-spacer" />
          <button className="note-img-btn" onClick={insertTable} title={lang==='zh'?'插入表格':'Insert table'}>⊞</button>
          <button className="note-img-btn" onClick={() => fileRef.current?.click()} title={lang==='zh'?'插入图片':'Insert image'}>🖼️</button>
          <button className={`note-pin-btn ${form.pinned?'active':''}`}
            onClick={() => setForm(f => ({...f, pinned:!f.pinned}))} title={form.pinned?t(lang,'unpin'):t(lang,'pin')}>
            📌
          </button>
          {editId!=='new' && <button className="note-del-btn" onClick={() => {
            if (confirm(lang==='zh'?'确定删除这条备忘？此操作不可恢复。':'Delete this note? This cannot be undone.')) { deleteNote(editId); setEditId(null) }
          }} title={lang==='zh'?'删除':'Delete'}>🗑</button>}
          <input ref={fileRef} type="file" accept="image/*" multiple style={{display:'none'}}
            onChange={e => { addImages(e.target.files); e.target.value='' }} />
        </div>

        <input className="note-title-input" placeholder={t(lang,'noteTitlePh')}
          value={form.title} onChange={e => setForm(f => ({...f, title:e.target.value}))} />

        {/* Content — editable textarea, or live rendered preview */}
        {preview ? (
          form.content.trim()
            ? <div className="note-content-input md md-preview"
                onClick={e => { if (e.target.tagName!=='A') setPreview(false) }}
                dangerouslySetInnerHTML={{ __html: mdToHtml(form.content) }} />
            : <div className="note-content-input md-preview md-empty" onClick={()=>setPreview(false)}>{lang==='zh'?'（暂无内容，点此编辑）':'(empty — tap to edit)'}</div>
        ) : (
          <AutoTextarea className="note-content-input" placeholder={t(lang,'noteContentPh')}
            value={form.content} onChange={e => setForm(f => ({...f, content:e.target.value}))} />
        )}

        {/* Images */}
        {(form.images||[]).length > 0 && (
          <div className="note-img-grid">
            {form.images.map(im => (
              <div key={im.id} className="note-img-wrap">
                <img src={im.data} alt="" />
                <button className="note-img-del" onClick={() => removeImage(im.id)}>✕</button>
              </div>
            ))}
          </div>
        )}

        {/* Quick add list item — appends inline into the content above */}
        <div className="note-item-add-row">
          <button className={`note-addtype-btn ${addType==='check'?'active':''}`}
            onClick={() => setAddType('check')} title={lang==='zh'?'列点':'Bullet'}>
            <span className="note-addtype-circle" />
          </button>
          <button className={`note-addtype-btn ${addType==='numbered'?'active':''}`}
            onClick={() => setAddType('numbered')} title={lang==='zh'?'编号':'Numbered'}>
            <span className="note-addtype-num">1.</span>
          </button>
          <input className="note-item-input" placeholder={lang==='zh'?'添加一项（回车加入正文）...':'Add an item (Enter)...'}
            value={newItem} onChange={e => setNewItem(e.target.value)}
            onKeyDown={e => e.key==='Enter' && addItem()} />
          {newItem && <button className="note-item-add-btn" onClick={addItem}>+</button>}
        </div>
      </div>
    )
  }

  // ── List screen ──
  return (
    <div className="page-container">
      <div className="page-header">
        <div><h2>{t(lang,'notes')}</h2><div className="page-subtitle">{lang==='zh'?'思路、点子、灵感随手记':'Capture thoughts, ideas and inspiration'}</div></div>
        <button className="btn-primary" onClick={openNew}>{t(lang,'newNote')}</button>
      </div>

      <div className="note-search-wrap">
        <span className="note-search-icon">🔍</span>
        <input className="note-search-input" placeholder={t(lang,'searchNotes')}
          value={search} onChange={e => setSearch(e.target.value)} />
        {search && <button className="note-search-clear" onClick={() => setSearch('')}>✕</button>}
      </div>

      {display.length === 0 ? (
        <div className="empty-state">
          <div style={{fontSize:'3rem',marginBottom:12}}>💡</div>
          <p>{search ? (lang==='zh'?'没有匹配的备忘录':'No matching notes') : t(lang,'noNotes')}</p>
        </div>
      ) : (
        [
          { key:'pinned',  label: pinned.length ? '📌 '+(lang==='zh'?'置顶':'Pinned') : null, items: pinned },
          { key:'others',  label: (pinned.length && unchecked.length) ? (lang==='zh'?'其他':'Others') : null, items: unchecked },
          { key:'checked', label: checked.length ? '✓ '+(lang==='zh'?'已完成':'Done') : null, items: checked },
        ].filter(g => g.items.length).map(g => (
          <div key={g.key} className="note-group">
            {g.label && <div className="note-group-label">{g.label}</div>}
            <div className="notes-grid">
              {g.items.map(renderNote)}
            </div>
          </div>
        ))
      )}
    </div>
  )

  function renderNote(n) {
    const ci = NOTE_COLORS.indexOf(n.color)
    const bg = dark ? (NOTE_COLORS_DARK[ci] ?? '#1e293b') : n.color
    return (
      <div key={n.id} className={`note-card ${n.checked?'note-checked':''}`} style={{background: bg}} onClick={() => !n.checked && openEdit(n)}>
        {n.pinned && !n.checked && <div className="note-pin-badge">📌</div>}
        <div className="note-card-header" onClick={e => e.stopPropagation()}>
          <button className={`note-card-check-sm ${n.checked?'checked':''}`}
            onClick={() => toggleCheck(n.id)}
            title={n.checked?(lang==='zh'?'取消完成':'Uncheck'):(lang==='zh'?'标记完成':'Mark done')} />
          {n.title
            ? <div className={`note-card-title ${n.checked?'note-done-text':''}`} onClick={() => !n.checked && openEdit(n)} style={{cursor:'pointer'}}>{n.title}</div>
            : <div className="note-card-title-empty" onClick={() => !n.checked && openEdit(n)} style={{cursor:'pointer'}}>{lang==='zh'?'备忘录':'Note'}</div>
          }
        </div>
        {(() => {
          const snippet = mdToPlain(n.content)
          return snippet ? <div className={`note-card-snippet ${n.checked?'note-done-text':''}`}>{snippet}</div> : null
        })()}

        {(() => {
          const imgN = (n.images||[]).length
          const list = n.checklist||[]
          const doneN = list.filter(i=>i.done).length
          if (!imgN && !list.length) return null
          return (
            <div className="note-card-meta">
              {imgN > 0 && <span className="note-meta-chip">🖼️ {imgN}</span>}
              {list.length > 0 && <span className="note-meta-chip">☑ {doneN}/{list.length}</span>}
            </div>
          )
        })()}

        <div className="note-card-footer">
          <span className="note-card-date">{fmtDate(n.updatedAt || n.createdAt)}</span>
        </div>
      </div>
    )
  }
}

// ─── Home / Today's Workstation ───────────────────────────────────────────────
function HomeView({ tasks, setTasks, logs, lang, user, setTab, displayName, setDisplayName }) {
  const today = todayStr()
  const now = new Date()
  const hr = now.getHours()
  const greet = lang==='zh'
    ? (hr<5?'凌晨好':hr<11?'早上好':hr<13?'中午好':hr<18?'下午好':'晚上好')
    : (hr<12?'Good morning':hr<18?'Good afternoon':'Good evening')
  const name = displayName || (user?.email ? user.email.split('@')[0] : (lang==='zh'?'朋友':'friend'))
  const editName = () => {
    const v = prompt(lang==='zh'?'输入你的名字':'Enter your name', displayName || name)
    if (v !== null) setDisplayName(v.trim())
  }

  const todayLogs = logs.filter(l => dateKey(new Date(l.date))===today)
  const todaySec = todayLogs.reduce((a,b)=>a+b.duration,0)
  const active = tasks.filter(t=>!t.archived)
  const habits = active.filter(t=>taskKind(t)==='habit')
  const habitsDue = habits.filter(isDueToday)
  const habitDone = habitsDue.filter(tk => (tk.history||[]).includes(today) ||
    (tk.goalMinutes>0 && logs.filter(l=>l.taskId===String(tk.id)&&dateKey(new Date(l.date))===today).reduce((a,b)=>a+b.duration,0)>=tk.goalMinutes*60)).length
  const todos = active.filter(t=>taskKind(t)==='task' && !isTaskDone(t) && !(t.deadline && t.deadline<today))
    .sort((a,b)=>(a.deadline||'9999').localeCompare(b.deadline||'9999'))
  const maxStreak = tasks.reduce((m,tk)=>Math.max(m,tk.streak||0),0)
  const totalDays = new Set(logs.map(l=>dateKey(new Date(l.date)))).size

  const toggleCheck = id => setTasks(ts => ts.map(tk => {
    if (String(tk.id)!==id) return tk
    const h=tk.history||[]; const nh=h.includes(today)?h.filter(d=>d!==today):[...h,today]
    return {...tk, history:nh, streak:calcStreak(nh)}
  }))
  const completeTodo = id => setTasks(ts => ts.map(tk => tk.id===id
    ? {...tk, history:[...(tk.history||[]), today], streak:calcStreak([...(tk.history||[]),today])} : tk))

  const dstr = now.toLocaleDateString(lang==='zh'?'zh-CN':'en-US',{month:'long',day:'numeric',weekday:'long'})

  return (
    <div className="page-container home">
      <div className="home-hero">
        <div className="home-hero-date">{dstr}</div>
        <h1 className="home-hero-title">{greet}，<span className="lime editable" onClick={editName} title={lang==='zh'?'点击修改名字':'Tap to edit name'}>{name}</span></h1>
        <div className="home-hero-sub">{lang==='zh'?'这是你今天的工作台':'Here is your workspace for today'}</div>
      </div>

      {/* Today overview */}
      <div className="home-stats">
        <div className="home-stat big">
          <div className="home-stat-val">{fmtH(todaySec)}</div>
          <div className="home-stat-lbl">{lang==='zh'?'今日专注':'Focused today'}</div>
        </div>
        <div className="home-stat">
          <div className="home-stat-val">{todayLogs.length}</div>
          <div className="home-stat-lbl">{lang==='zh'?'专注次数':'Sessions'}</div>
        </div>
        <div className="home-stat">
          <div className="home-stat-val">{habitDone}<span className="slash">/{habitsDue.length||0}</span></div>
          <div className="home-stat-lbl">{lang==='zh'?'目标打卡':'Check-ins'}</div>
        </div>
        <div className="home-stat">
          <div className="home-stat-val">🔥{maxStreak}</div>
          <div className="home-stat-lbl">{lang==='zh'?'连续天数':'Streak'}</div>
        </div>
      </div>

      {/* Quick start */}
      <button className="home-start" onClick={()=>setTab('timer')}>
        <span className="home-start-ic">▶</span>
        <div>
          <div className="home-start-t">{lang==='zh'?'开始专注':'Start focusing'}</div>
          <div className="home-start-s">{lang==='zh'?'为你的目标计时':'Time your goals'}</div>
        </div>
        <span className="home-start-arrow">→</span>
      </button>

      {/* Today's targets */}
      {habitsDue.length > 0 && (
        <div className="home-block">
          <div className="home-block-head">
            <span className="section-title">{lang==='zh'?'今日目标':'Today’s targets'}</span>
            <button className="home-link" onClick={()=>setTab('timer')}>{lang==='zh'?'去计时 →':'Timer →'}</button>
          </div>
          <div className="home-list">
            {habitsDue.map(tk => {
              const done = (tk.history||[]).includes(today)
              const sec = logs.filter(l=>l.taskId===String(tk.id)&&dateKey(new Date(l.date))===today).reduce((a,b)=>a+b.duration,0)
              const met = tk.goalMinutes>0 && sec>=tk.goalMinutes*60
              return (
                <div key={tk.id} className="home-row">
                  <button className={`home-check ${done||met?'on':''}`} onClick={()=>toggleCheck(String(tk.id))} />
                  <span className="home-row-t">{tk.title}</span>
                  {tk.goalMinutes>0 && <span className="home-row-meta">{Math.floor(sec/60)}/{tk.goalMinutes}′</span>}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Today's todos */}
      {todos.length > 0 && (
        <div className="home-block">
          <div className="home-block-head">
            <span className="section-title">{lang==='zh'?'待办':'To-do'}</span>
            <button className="home-link" onClick={()=>setTab('tasks')}>{lang==='zh'?'全部 →':'All →'}</button>
          </div>
          <div className="home-list">
            {todos.slice(0,5).map(tk => (
              <div key={tk.id} className="home-row">
                <button className="home-check" onClick={()=>completeTodo(tk.id)} />
                <span className="home-row-t">{tk.title}</span>
                {tk.deadline && <span className="home-row-meta">{tk.deadline===today?(lang==='zh'?'今天':'today'):tk.deadline.slice(5)}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Today timeline mini */}
      <div className="home-block">
        <div className="home-block-head">
          <span className="section-title">{lang==='zh'?'今日足迹':'Today’s trail'}</span>
          <button className="home-link" onClick={()=>setTab('stats')}>{lang==='zh'?'统计 →':'Stats →'}</button>
        </div>
        {todayLogs.length===0 ? (
          <div className="home-empty">{lang==='zh'?'今天还没有记录，开始你的第一段专注吧':'No records yet — start your first session'}</div>
        ) : (
          <div className="home-trail">
            {[...todayLogs].sort((a,b)=>new Date(a.date)-new Date(b.date)).slice(-6).map(l => (
              <div key={l.id} className="home-trail-item" style={{borderLeftColor:l.categoryColor||'var(--accent)'}}>
                <span className="home-trail-time">{new Date(l.date).toLocaleTimeString(lang==='zh'?'zh-CN':'en-US',{hour:'2-digit',minute:'2-digit'})}</span>
                <span className="home-trail-name">{l.categoryIcon} {l.description || l.categoryName}</span>
                <span className="home-trail-dur">{fmt(l.duration)}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="home-footer-note">{lang==='zh'?`已累计记录 ${totalDays} 天 · 继续加油`:`${totalDays} days tracked · keep going`}</div>
    </div>
  )
}

// ─── Login Screen ─────────────────────────────────────────────────────────────
function LoginScreen({ onAuth }) {
  const [mode, setMode]   = useState('login')
  const [email, setEmail] = useState('')
  const [pw, setPw]       = useState('')
  const [loading, setL]   = useState(false)
  const [error, setError] = useState('')

  const submit = async e => {
    e.preventDefault(); if (!email||!pw) return
    setL(true); setError('')
    try { await onAuth(mode, email, pw) }
    catch (err) {
      setError({
        'auth/invalid-email':'邮箱格式不正确','auth/user-not-found':'账号不存在',
        'auth/wrong-password':'密码错误','auth/invalid-credential':'邮箱或密码错误',
        'auth/email-already-in-use':'该邮箱已注册','auth/weak-password':'密码至少6位',
        'auth/too-many-requests':'尝试次数过多，请稍后再试',
      }[err.code] || '操作失败，请重试')
    }
    setL(false)
  }

  return (
    <div className="login-tabs-wrap">
      <div className="login-tabs">
        <button className={mode==='login'?'active':''} onClick={()=>{setMode('login');setError('')}}>登录</button>
        <button className={mode==='register'?'active':''} onClick={()=>{setMode('register');setError('')}}>注册</button>
      </div>
      <form onSubmit={submit}>
        <div className="login-field"><input className="login-input" type="email" placeholder="邮箱地址" value={email} onChange={e=>setEmail(e.target.value)} required /></div>
        <div className="login-field"><input className="login-input" type="password" placeholder="密码（至少6位）" value={pw} onChange={e=>setPw(e.target.value)} required /></div>
        {error && <div className="login-error">{error}</div>}
        <button className="login-btn" type="submit" disabled={loading}>{loading?'请稍候...':mode==='login'?'登录并同步':'注册账号'}</button>
      </form>
    </div>
  )
}

// ─── App Shell ────────────────────────────────────────────────────────────────
function useLS(key, def) {
  const [v, setV] = useState(() => { try { return JSON.parse(localStorage.getItem(key)) ?? def } catch { return def } })
  useEffect(() => { localStorage.setItem(key, JSON.stringify(v)) }, [key, v])
  return [v, setV]
}

export default function App() {
  const [tab, setTab]   = useState('home')
  const [user, setUser] = useState(FIREBASE_CONFIGURED ? undefined : null)

  const [cloudDark,      setCloudDark]      = useState(false)
  const [cloudLogs,      setCloudLogs]      = useState([])
  const [cloudTasks,     setCloudTasks]     = useState([])
  const [cloudTemplates, setCloudTemplates] = useState([])
  const [cloudNotes,     setCloudNotes]     = useState([])
  const [cloudLang,      setCloudLang]      = useState('zh')
  const [cloudDeleted,   setCloudDeleted]   = useState([])

  const [localDark,      setLocalDark]      = useLS('darkMode',  false)
  const [localLogs,      setLocalLogs]      = useLS('timeLogs',  [])
  const [localTasks,     setLocalTasks]     = useLS('tasks2',    [])
  const [localTemplates, setLocalTemplates] = useLS('templates', [])
  const [localNotes,     setLocalNotes]     = useLS('notes',     [])
  const [localLang,      setLocalLang]      = useLS('lang',      'zh')
  const [localDeleted,   setLocalDeleted]   = useLS('deletedLogs', [])

  const isCloud    = FIREBASE_CONFIGURED && !!user
  const dark       = isCloud ? cloudDark      : localDark
  const logs       = isCloud ? cloudLogs      : localLogs
  const tasks      = isCloud ? cloudTasks     : localTasks
  const templates  = isCloud ? cloudTemplates : localTemplates
  const notes      = isCloud ? cloudNotes     : localNotes
  const lang       = isCloud ? cloudLang      : localLang
  const setDark      = isCloud ? setCloudDark      : setLocalDark
  const setLogs      = isCloud ? setCloudLogs      : setLocalLogs
  const setTasks     = isCloud ? setCloudTasks     : setLocalTasks
  const setTemplates = isCloud ? setCloudTemplates : setLocalTemplates
  const setNotes     = isCloud ? setCloudNotes     : setLocalNotes
  const setLang      = isCloud ? setCloudLang      : setLocalLang
  const deleted      = isCloud ? cloudDeleted      : localDeleted
  const setDeleted   = isCloud ? setCloudDeleted   : setLocalDeleted

  const [pwaPrompt,  setPwaPrompt]  = useState(null)
  const [pwaDismiss, setPwaDismiss] = useLS('pwaDismissed', false)
  const [logoImg, setLogoImg] = useLS('logoImg', '')
  const [displayName, setDisplayName] = useLS('displayName', '')
  const [logoMenu, setLogoMenu] = useState(false)
  const logoRef = useRef(null)
  const touchRef = useRef(null)
  const brand = lang==='zh' ? '时间沙漏' : 'Hourglass'
  const uploadLogo = async e => {
    const f = e.target.files?.[0]; e.target.value = ''
    if (!f || !f.type.startsWith('image/')) return
    try { setLogoImg(await compressImage(f, 200, 0.85)) } catch {}
  }
  const Logo = ({ cls }) => (
    <span className={`brand-logo ${cls||''}`}
      onClick={() => logoImg ? setLogoMenu(m=>!m) : logoRef.current?.click()}
      title={lang==='zh'?'点击更换图标':'Tap to change icon'}>
      {logoImg ? <img src={logoImg} alt="" /> : <span className="brand-logo-emoji">⏳</span>}
      {logoMenu && logoImg && (
        <>
          <div className="logo-menu-backdrop" onClick={e=>{ e.stopPropagation(); setLogoMenu(false) }} />
          <div className="logo-menu" onClick={e=>e.stopPropagation()}>
            <button onClick={()=>{ setLogoMenu(false); logoRef.current?.click() }}>{lang==='zh'?'更换图片':'Change image'}</button>
            <button onClick={()=>{ setLogoMenu(false); setLogoImg('') }}>{lang==='zh'?'恢复默认':'Reset to default'}</button>
          </div>
        </>
      )}
    </span>
  )

  useEffect(() => {
    const h = e => { e.preventDefault(); setPwaPrompt(e) }
    window.addEventListener('beforeinstallprompt', h)
    return () => window.removeEventListener('beforeinstallprompt', h)
  }, [])

  useEffect(() => {
    if (!FIREBASE_CONFIGURED) return
    return onAuthStateChanged(auth, u => setUser(u ?? null))
  }, [])

  // cloudDataReady: true once Firebase has sent at least one snapshot.
  const cloudDataReady = useRef(false)
  const migratedRef    = useRef(false)
  const [syncError, setSyncError] = useState(false)

  // Main user doc holds tasks / notes / settings. LOGS live in their own subcollection
  // (users/{uid}/logs) so image-heavy notes can never push the doc past the 1MB limit
  // and cause records to silently fail to save.
  useEffect(() => {
    if (!user) { cloudDataReady.current = false; migratedRef.current = false; return }
    return subscribeUserData(user.uid, data => {
      cloudDataReady.current = true
      if (data.deletedLogs !== undefined) setCloudDeleted(data.deletedLogs)
      if (data.tasks2      !== undefined) setCloudTasks(data.tasks2)
      if (data.templates   !== undefined) setCloudTemplates(data.templates)
      if (data.notes       !== undefined) setCloudNotes(data.notes)
      if (data.darkMode    !== undefined) setCloudDark(data.darkMode)
      if (data.lang        !== undefined) setCloudLang(data.lang)
      // Migrate legacy logs (stored on the main doc) into the subcollection — show them
      // immediately and only clear the field after the subcollection write succeeds.
      if (!migratedRef.current && Array.isArray(data.timeLogs) && data.timeLogs.length) {
        migratedRef.current = true
        const legacy = data.timeLogs
        setCloudLogs(prev => mergeLogs(prev, legacy, data.deletedLogs))
        migrateLogsToSubcollection(user.uid, legacy).catch(() => {})
      }
    })
  }, [user])

  // Live logs from the subcollection (source of truth), merged with local + tombstones.
  // Tombstones go through a ref: the subscription is created once per user, so a
  // captured `cloudDeleted` would freeze at its initial value.
  const cloudDeletedRef = useRef(cloudDeleted)
  useEffect(() => { cloudDeletedRef.current = cloudDeleted }, [cloudDeleted])
  useEffect(() => {
    if (!user) return
    return subscribeLogs(user.uid, arr => {
      setCloudLogs(prev => mergeLogs(prev, arr, cloudDeletedRef.current))
    })
  }, [user])

  const initialized = useRef(false)
  useEffect(() => {
    if (!user) return
    if (!initialized.current) { initialized.current = true; return }
    if (isCloud && !cloudDataReady.current) return
    // Build a merge payload that NEVER overwrites a populated field with an empty array.
    // (Prevents load-races / partial docs from wiping tasks or notes across devices.)
    const payload = { darkMode: dark, lang }
    if (tasks.length)     payload.tasks2 = tasks
    if (notes.length)     payload.notes = notes
    if (templates.length) payload.templates = templates
    if (deleted.length)   payload.deletedLogs = deleted
    // NOTE: timeLogs intentionally NOT written here — logs sync via the subcollection.
    saveUserData(user.uid, payload, () => setSyncError(true))
  }, [tasks, templates, notes, dark, lang, deleted])

  // ── Local daily backup (last 7 days) for recovery ──
  useEffect(() => {
    const key = `_bak_${todayStr()}`
    try {
      localStorage.setItem(key, JSON.stringify({ ts: Date.now(), logs, tasks, notes }))
      const baks = Object.keys(localStorage).filter(k => k.startsWith('_bak_')).sort()
      while (baks.length > 7) { localStorage.removeItem(baks.shift()) }
    } catch {}
  }, [logs, tasks, notes])

  const handleAuth  = async (mode, email, pw) => { if (mode==='login') await login(email,pw); else await register(email,pw) }

  // ── Undo toast ──
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(null)
  const notify = (msg, onUndo) => {
    clearTimeout(toastTimer.current)
    setToast({ msg, onUndo })
    toastTimer.current = setTimeout(() => setToast(null), 5000)
  }
  const runUndo = () => { clearTimeout(toastTimer.current); toast?.onUndo?.(); setToast(null) }

  const onSave = log => {
    setLogs(p => [log, ...p])
    if (isCloud) addLog(user.uid, log).catch(() => setSyncError(true))  // log → subcollection
    // Auto check-in: count ALL time on the task today (including subtask sessions).
    if (log.taskId) {
      const today = todayStr()
      const taskSec = logs.filter(l => l.taskId === log.taskId && dateKey(new Date(l.date)) === today)
        .reduce((a,b)=>a+b.duration,0) + log.duration
      setTasks(ts => ts.map(tk => {
        if (String(tk.id) !== log.taskId) return tk
        if (tk.goalMinutes > 0 && taskSec >= tk.goalMinutes * 60 && !(tk.history||[]).includes(today)) {
          const hist = [...(tk.history||[]), today]
          return { ...tk, history: hist, streak: calcStreak(hist) }
        }
        return tk
      }))
    }
  }
  // Add or edit a hand-entered record. Same id → overwrite (both locally and in
  // the subcollection, where setDoc replaces the doc).
  const onUpsertLog = log => {
    setLogs(p => {
      const without = p.filter(l => String(l.id) !== String(log.id))
      return [log, ...without].sort((a,b) => new Date(b.date) - new Date(a.date))
    })
    // If this id was previously deleted, adding it back must clear the tombstone.
    setDeleted(d => d.filter(x => x !== String(log.id)))
    if (isCloud) addLog(user.uid, log).catch(() => setSyncError(true))
  }

  const onDeleteLog = id  => {
    const removed = logs.find(l => String(l.id) === String(id))
    setLogs(p => p.filter(l => String(l.id) !== String(id)))
    setDeleted(d => [...new Set([...d, String(id)])].slice(-300))  // tombstone so delete syncs
    if (isCloud) deleteLogDoc(user.uid, id)   // remove from subcollection
    if (removed) notify(lang==='zh'?'记录已删除':'Record deleted', () => {
      setDeleted(d => d.filter(x => x !== String(id)))
      setLogs(p => [removed, ...p].sort((a,b)=>new Date(b.date)-new Date(a.date)))
      if (isCloud) addLog(user.uid, removed).catch(() => setSyncError(true))
    })
  }
  const todayTotal  = logs.filter(l => new Date(l.date).toDateString()===new Date().toDateString()).reduce((a,b)=>a+b.duration,0)

  const [showLogin, setShowLogin] = useState(false)

  if (user === undefined) return (
    <div className="app"><div className="splash"><div className="splash-logo">⏳</div><div className="splash-name">时间沙漏</div></div></div>
  )

  const navItems = [['home','🏠',lang==='zh'?'首页':'Home'],['timer','⏱',t(lang,'timer')],['tasks','📋',t(lang,'tasks')],['notes','💡',t(lang,'notes')],['stats','📊',t(lang,'stats')]]
  const tabOrder = navItems.map(n => n[0])

  // Swipe between tabs (mobile): left → next, right → prev
  const onTouchStart = e => {
    if (e.touches.length !== 1) { touchRef.current = null; return }
    touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  const onTouchEnd = e => {
    const s = touchRef.current; touchRef.current = null
    if (!s) return
    const t = e.changedTouches[0]
    const dx = t.clientX - s.x, dy = t.clientY - s.y
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.6) return  // must be a clear horizontal swipe
    const i = tabOrder.indexOf(tab)
    const ni = dx < 0 ? Math.min(i + 1, tabOrder.length - 1) : Math.max(i - 1, 0)
    if (ni !== i) setTab(tabOrder[ni])
  }

  return (
    <div className={`app ${dark?'dark':''}`}>

      <input ref={logoRef} type="file" accept="image/*" style={{display:'none'}} onChange={uploadLogo} />

      {/* ── Desktop sidebar (hidden on mobile) ── */}
      <aside className="desktop-sidebar">
        <div className="sidebar-brand">
          <Logo cls="sidebar-logo-icon" />
          <div>
            <div className="sidebar-logo-name">{brand}</div>
            <div className="sidebar-today-row">{t(lang,'todayTotal')} <strong>{fmtH(todayTotal)}</strong></div>
          </div>
        </div>
        <nav className="sidebar-nav">
          {navItems.map(([k,ic,lb]) => (
            <button key={k} className={`sidebar-nav-btn ${tab===k?'active':''}`} onClick={()=>setTab(k)}>
              <span className="sidebar-nav-ic">{ic}</span>
              <span className="sidebar-nav-lb">{lb}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-spacer" />
        <div className="sidebar-footer">
          <button className="lang-btn" onClick={()=>setLang(l=>l==='zh'?'en':'zh')}>{lang==='zh'?'EN':'中'}</button>
          <button className="dark-btn" onClick={()=>setDark(d=>!d)}>{dark?'☀️':'🌙'}</button>
          {user
            ? <button className="avatar-btn synced" onClick={()=>{if(confirm(`退出登录？\n(${user.email})`))logout()}} title={`已同步：${user.email}`}>{(user.email?.[0]??'?').toUpperCase()}</button>
            : <button className="sync-btn" onClick={()=>setShowLogin(true)} title="登录以同步数据">☁️</button>
          }
        </div>
      </aside>

      {/* ── Mobile header (hidden on desktop) ── */}
      <header className="app-header">
        <div className="header-inner">
          <div className="app-title-wrap">
            <h1 className="app-title"><Logo cls="app-title-logo" /> {brand}</h1>
            <p className="app-sub">{t(lang,'todayTotal')} <strong>{fmtH(todayTotal)}</strong></p>
          </div>
          <div className="header-actions">
            <button className="lang-btn" onClick={() => setLang(l => l==='zh'?'en':'zh')}>{lang==='zh'?'EN':'中'}</button>
            <button className="dark-btn" onClick={()=>setDark(d=>!d)}>{dark?'☀️':'🌙'}</button>
            {user
              ? <button className="avatar-btn synced" onClick={()=>{if(confirm(`退出登录？\n(${user.email})`))logout()}} title={`已同步：${user.email}`}>{(user.email?.[0]??'?').toUpperCase()}</button>
              : <button className="sync-btn" onClick={()=>setShowLogin(true)} title="登录以同步数据">☁️</button>
            }
          </div>
        </div>
      </header>

      {pwaPrompt && !pwaDismiss && (
        <div className="pwa-banner">
          <span>{t(lang,'installApp')}</span>
          <div style={{display:'flex',gap:6,flexShrink:0}}>
            <button className="pwa-install-btn" onClick={async()=>{pwaPrompt.prompt();await pwaPrompt.userChoice;setPwaPrompt(null)}}>{t(lang,'install')}</button>
            <button className="pwa-dismiss-btn" onClick={()=>setPwaDismiss(true)}>✕</button>
          </div>
        </div>
      )}

      {syncError && (
        <div className="sync-error-banner">
          <span>⚠️ {lang==='zh'?'云端保存失败（数据可能过大），本地已保留。请减少备忘录里的大图片。':'Cloud save failed (data too large). Saved locally — try removing large note images.'}</span>
          <button onClick={()=>setSyncError(false)}>✕</button>
        </div>
      )}

      <main className="main-content" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {tab==='home'     && <HomeView tasks={tasks} setTasks={setTasks} logs={logs} lang={lang} user={user} setTab={setTab} displayName={displayName} setDisplayName={setDisplayName} />}
        {tab==='timer'    && <TimerView logs={logs} onSave={onSave} tasks={tasks} setTasks={setTasks} templates={templates} setTemplates={setTemplates} lang={lang} />}
        {tab==='tasks'    && <TasksView tasks={tasks} setTasks={setTasks} logs={logs} lang={lang} notify={notify} />}
        {tab==='notes'    && <NotesView notes={notes} setNotes={setNotes} lang={lang} dark={dark} notify={notify} />}
        {tab==='stats'    && <StatsView logs={logs} onDeleteLog={onDeleteLog} onUpsertLog={onUpsertLog} tasks={tasks} lang={lang} />}
      </main>

      {/* ── Mobile bottom nav (hidden on desktop) ── */}
      <nav className="bottom-nav">
        {navItems.map(([k,ic,lb])=>(
          <button key={k} className={`nav-btn ${tab===k?'active':''}`} onClick={()=>setTab(k)}>
            <span className="nav-ic">{ic}</span><span className="nav-lb">{lb}</span>
          </button>
        ))}
      </nav>

      {showLogin && (
        <div className="modal-overlay" onClick={()=>setShowLogin(false)}>
          <div className="modal login-modal" onClick={e=>e.stopPropagation()}>
            <div className="login-modal-header">
              <div><div className="login-modal-title">☁️ 云端同步</div><div className="login-modal-sub">登录后数据自动同步到所有设备</div></div>
              <button className="modal-close" onClick={()=>setShowLogin(false)}>✕</button>
            </div>
            <LoginScreen onAuth={async(m,e,p)=>{await handleAuth(m,e,p);setShowLogin(false)}} />
          </div>
        </div>
      )}

      {toast && (
        <div className="undo-toast">
          <span>{toast.msg}</span>
          {toast.onUndo && <button onClick={runUndo}>{lang==='zh'?'撤销':'Undo'}</button>}
        </div>
      )}
    </div>
  )
}
