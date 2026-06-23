import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import { auth, login, register, logout, subscribeUserData, saveUserData, onAuthStateChanged, FIREBASE_CONFIGURED } from './firebase.js'

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
    repeat:'重复设置', repeatNone:'不重复（今天）', repeatDaily:'每天', repeatWeekly:'每周', repeatCustom:'每隔N天',
    intervalDays:'间隔天数', deadline:'截止日期',
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
    pin:'置顶', unpin:'取消置顶',
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
    repeat:'Repeat', repeatNone:'No repeat (today)', repeatDaily:'Every day', repeatWeekly:'Weekly', repeatCustom:'Every N days',
    intervalDays:'Interval (days)', deadline:'Deadline',
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
    pin:'Pin', unpin:'Unpin',
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
function todayStr() { return new Date().toISOString().slice(0, 10) }

// Whether a task is due today
function isDueToday(task) {
  const today = todayStr()
  const rep = task.repeat || 'none'
  if (rep === 'none')   return !task.deadline || task.deadline >= today
  if (rep === 'daily')  return true
  if (rep === 'weekly') return (task.weekDays || []).includes(new Date().getDay())
  if (rep === 'custom') {
    if (!task.createdAt) return false
    const diff = Math.floor((Date.now() - new Date(task.createdAt)) / 86400000)
    return diff % Math.max(task.intervalDays || 1, 1) === 0
  }
  return false
}

function calcStreak(history) {
  let streak = 0
  const d = new Date()
  for (let i = 0; i < 365; i++) {
    const ds = new Date(d); ds.setDate(d.getDate() - i)
    if ((history || []).includes(ds.toISOString().slice(0, 10))) streak++
    else if (i > 0) break
  }
  return streak
}

// ─── SVG Charts ──────────────────────────────────────────────────────────────
function WeeklyBarChart({ logs }) {
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i))
    const ds = d.toISOString().slice(0, 10)
    return { label: ['日','一','二','三','四','五','六'][d.getDay()], total: logs.filter(l => l.date.slice(0,10) === ds).reduce((a, b) => a + b.duration, 0), ds }
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
function TaskForm({ initial, onSave, onClose, lang }) {
  const blank = { title:'', icon:'📋', color:'#3b82f6', category:'work', description:'',
    repeat:'none', weekDays:[], intervalDays:2, deadline:'', subtasks:[] }
  const [form, setForm] = useState(initial ? { ...blank, ...initial } : blank)
  const [newSub, setNewSub] = useState('')

  const set = patch => setForm(f => ({ ...f, ...patch }))

  const addSub = () => {
    if (!newSub.trim()) return
    set({ subtasks: [...(form.subtasks||[]), { id: Date.now(), title: newSub.trim(), done: false }] })
    setNewSub('')
  }
  const toggleSub = id => set({ subtasks: form.subtasks.map(s => s.id===id ? {...s,done:!s.done} : s) })
  const deleteSub = id => set({ subtasks: form.subtasks.filter(s => s.id!==id) })

  const weekLabels = lang === 'en' ? WEEK_LABELS_EN : WEEK_LABELS_ZH

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal task-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header-row">
          <h3 className="modal-title">{initial ? t(lang,'edit') : t(lang,'addTask')}</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Icon + Color */}
        <div className="form-group">
          <label>图标</label>
          <div className="icon-picker">
            {TASK_ICONS.map(ic => (
              <button key={ic} className={`icon-btn ${form.icon===ic?'active':''}`}
                onClick={() => set({ icon: ic })}>{ic}</button>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>{lang==='zh'?'颜色':'Color'}</label>
          <div className="color-picker">
            {TASK_COLORS.map(c => (
              <button key={c} className={`color-btn ${form.color===c?'active':''}`}
                style={{ background: c }} onClick={() => set({ color: c })} />
            ))}
          </div>
        </div>

        {/* Title */}
        <div className="form-group">
          <label>{t(lang,'taskTitle')} *</label>
          <input className="text-input" placeholder={t(lang,'taskTitlePh')} value={form.title}
            onChange={e => set({ title: e.target.value })} autoFocus />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>{t(lang,'category')}</label>
          <div className="categories-grid" style={{ marginTop: 4 }}>
            {CATEGORIES.map(cat => (
              <button key={cat.id} className={`category-card ${form.category===cat.id?'active':''}`}
                onClick={() => set({ category: cat.id })}
                style={{ borderColor: form.category===cat.id ? cat.color : 'transparent', backgroundColor: form.category===cat.id ? `${cat.color}18` : '' }}>
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-name">{lang==='en' ? cat.nameEn : cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Repeat */}
        <div className="form-group">
          <label>{t(lang,'repeat')}</label>
          <div className="repeat-options">
            {[['none',t(lang,'repeatNone')],['daily',t(lang,'repeatDaily')],['weekly',t(lang,'repeatWeekly')],['custom',t(lang,'repeatCustom')]].map(([v,l]) => (
              <button key={v} className={`repeat-btn ${form.repeat===v?'active':''}`}
                onClick={() => set({ repeat: v })}>{l}</button>
            ))}
          </div>
          {form.repeat === 'weekly' && (
            <div className="weekday-picker">
              {[0,1,2,3,4,5,6].map(d => (
                <button key={d}
                  className={`weekday-btn ${(form.weekDays||[]).includes(d)?'active':''}`}
                  onClick={() => {
                    const wd = form.weekDays||[]
                    set({ weekDays: wd.includes(d) ? wd.filter(x=>x!==d) : [...wd, d] })
                  }}>{weekLabels[d]}</button>
              ))}
            </div>
          )}
          {form.repeat === 'custom' && (
            <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:8 }}>
              <span style={{ color:'var(--text-muted)', fontSize:'.88rem' }}>{lang==='zh'?'每隔':'Every'}</span>
              <input className="text-input" type="number" min="1" max="90" style={{ width:70 }}
                value={form.intervalDays} onChange={e => set({ intervalDays: +e.target.value })} />
              <span style={{ color:'var(--text-muted)', fontSize:'.88rem' }}>{lang==='zh'?'天重复一次':'days'}</span>
            </div>
          )}
        </div>

        {/* Deadline — only for recurring tasks, not one-time */}
        {form.repeat !== 'none' && form.repeat !== 'daily' && (
          <div className="form-group">
            <label>{t(lang,'deadline')}</label>
            <input className="text-input" type="date" value={form.deadline}
              onChange={e => set({ deadline: e.target.value })} />
          </div>
        )}

        {/* Description */}
        <div className="form-group">
          <label>{t(lang,'description')}</label>
          <input className="text-input" placeholder={t(lang,'descPh')} value={form.description}
            onChange={e => set({ description: e.target.value })} />
        </div>

        {/* Subtasks */}
        <div className="form-group">
          <label>{t(lang,'subtasks')}</label>
          <div className="add-task-row">
            <input className="text-input" placeholder={t(lang,'addSubtask')} value={newSub}
              onChange={e => setNewSub(e.target.value)}
              onKeyDown={e => e.key==='Enter' && addSub()} />
            <button className="btn-primary small" onClick={addSub}>+</button>
          </div>
          {(form.subtasks||[]).map(s => (
            <div key={s.id} className={`task-item ${s.done?'done':''}`} style={{ marginTop: 6 }}>
              <input type="checkbox" checked={s.done} onChange={() => toggleSub(s.id)} />
              <span className="task-title">{s.title}</span>
              <button className="icon-action" onClick={() => deleteSub(s.id)}>✕</button>
            </div>
          ))}
        </div>

        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>{t(lang,'cancel')}</button>
          <button className="btn-primary" onClick={() => {
            if (!form.title.trim()) return
            onSave(form)
          }}>{t(lang,'save')}</button>
        </div>
      </div>
    </div>
  )
}

// ─── Task Card (extracted to allow useState per card) ────────────────────────
function TaskCard({ tk, today, logs, lang, last7, weekLabels, onToggle, onToggleSub, onEdit, onArchive, onDelete }) {
  const [expanded, setExpanded] = useState(false)
  const doneToday = (tk.history||[]).includes(today)
  const subs      = tk.subtasks || []
  const subsDone  = subs.filter(s => s.done).length
  const subsPct   = subs.length > 0 ? subsDone / subs.length : 0
  const logTime   = logs.filter(l => l.taskId === String(tk.id)).reduce((a,b)=>a+b.duration,0)
  const cat       = CATEGORIES.find(c => c.id === tk.category)
  const dl        = tk.deadline ? Math.ceil((new Date(tk.deadline) - new Date()) / 86400000) : null
  const isRec     = tk.repeat && tk.repeat !== 'none'

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
            <span className="task-card-icon">{tk.icon}</span>
            <span className={doneToday ? 'task-done-text' : ''}>{tk.title}</span>
          </div>
          <div className="task-card-badges">
            {repLabel && <span className="badge badge-repeat">{repLabel}</span>}
            {dl !== null && (
              <span className={`badge ${dl<=0?'badge-urgent':dl<=7?'badge-warn':'badge-ok'}`}>
                {dl > 0 ? `${dl}${lang==='zh'?'天':'d'}` : dl===0?(lang==='zh'?'今天':'Today'):(lang==='zh'?'已逾期':'Overdue')}
              </span>
            )}
            {isRec && tk.streak > 0 && <span className="badge badge-streak">🔥 {tk.streak}{lang==='zh'?'天':''}</span>}
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

      {expanded && (
        <div className="task-card-expand">
          {subs.length > 0 && (
            <div className="subtask-list">
              {subs.map(s => (
                <label key={s.id} className={`subtask-item ${s.done?'done':''}`}>
                  <input type="checkbox" checked={s.done} onChange={() => onToggleSub(tk.id, s.id)} />
                  <span>{s.title}</span>
                </label>
              ))}
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

// ─── Tasks View ───────────────────────────────────────────────────────────────
function TasksView({ tasks, setTasks, logs, lang }) {
  const [filter, setFilter]   = useState('today')
  const [showForm, setShowForm] = useState(false)
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
      ...tk, subtasks: tk.subtasks.map(s => s.id===subId ? {...s,done:!s.done} : s)
    }))
  }
  const archiveTask = id => setTasks(ts => ts.map(tk => tk.id===id ? {...tk,archived:!tk.archived} : tk))
  const deleteTask  = id => { if (confirm(lang==='zh'?'确定删除此任务？':'Delete this task?')) setTasks(ts => ts.filter(tk => tk.id!==id)) }

  const saveTask = form => {
    if (editTask) {
      setTasks(ts => ts.map(tk => tk.id===editTask.id ? { ...tk, ...form } : tk))
      setEditTask(null)
    } else {
      setTasks(ts => [...ts, { ...form, id: Date.now(), history: [], streak: 0, archived: false, createdAt: new Date().toISOString() }])
      setShowForm(false)
    }
  }

  const active   = tasks.filter(tk => !tk.archived)
  const archived = tasks.filter(tk =>  tk.archived)
  const todayTasks = active.filter(isDueToday)

  const displayList = filter === 'today'  ? todayTasks
                    : filter === 'all'    ? active
                    : archived

  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i))
    return d.toISOString().slice(0, 10)
  })
  const weekLabels = lang === 'en' ? WEEK_LABELS_EN : WEEK_LABELS_ZH
  const todayDoneCount = todayTasks.filter(tk => (tk.history||[]).includes(today)).length

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>{t(lang,'tasks')}</h2>
          <div className="page-subtitle">
            {filter==='today' && todayTasks.length > 0
              ? `${t(lang,'doneToday')} ${todayDoneCount}/${todayTasks.length}`
              : lang==='zh' ? '所有任务、计划与习惯' : 'All tasks, plans & habits'}
          </div>
        </div>
        <button className="btn-primary" onClick={() => setShowForm(true)}>{t(lang,'addTask')}</button>
      </div>

      <div className="mode-toggle">
        <button className={filter==='today'?'active':''} onClick={()=>setFilter('today')}>{t(lang,'todayTab')}</button>
        <button className={filter==='all'?'active':''}   onClick={()=>setFilter('all')}>{t(lang,'allTab')}</button>
        <button className={filter==='arch'?'active':''}  onClick={()=>setFilter('arch')}>{t(lang,'archTab')}</button>
      </div>

      {displayList.length === 0 ? (
        <div className="empty-state">
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>{filter==='arch'?'📦':'📋'}</div>
          <p>{filter==='today' ? t(lang,'noTodayTasks') : t(lang,'noTasks')}</p>
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
        <TaskForm lang={lang} onClose={() => setShowForm(false)} onSave={form => { saveTask(form); setShowForm(false) }} />
      )}
      {editTask && (
        <TaskForm lang={lang} initial={editTask} onClose={() => setEditTask(null)} onSave={form => { saveTask(form); setEditTask(null) }} />
      )}
    </div>
  )
}

// ─── Timer View ───────────────────────────────────────────────────────────────
function TimerView({ logs, onSave, tasks, templates, setTemplates, lang }) {
  const [mode, setMode]           = useState('stopwatch')
  const [running, setRunning]     = useState(false)
  const [elapsed, setElapsed]     = useState(0)
  const [category, setCategory]   = useState('work')
  const [desc, setDesc]           = useState('')
  const [linkedTask, setLinkedTask] = useState('')
  const [pomPhase, setPomPhase]   = useState('work')
  const [pomCount, setPomCount]   = useState(0)
  const [pomRemain, setPomRemain] = useState(POMODORO_WORK)
  const [toast, setToast]         = useState(null)
  const [focusMode, setFocusMode] = useState(false)

  const startTsRef   = useRef(null)
  const ivRef        = useRef(null)
  const runningRef   = useRef(false)
  const modeRef      = useRef('stopwatch')
  const pomPhaseRef  = useRef('work')
  const pomCountRef  = useRef(0)
  const categoryRef  = useRef('work')
  const descRef      = useRef('')
  const linkedTaskRef = useRef('')

  useEffect(() => { runningRef.current  = running },    [running])
  useEffect(() => { modeRef.current     = mode },       [mode])
  useEffect(() => { pomPhaseRef.current = pomPhase },   [pomPhase])
  useEffect(() => { pomCountRef.current = pomCount },   [pomCount])
  useEffect(() => { categoryRef.current = category },   [category])
  useEffect(() => { descRef.current     = desc },       [desc])
  useEffect(() => { linkedTaskRef.current = linkedTask }, [linkedTask])

  const getPomTarget = phase =>
    phase === 'work' ? POMODORO_WORK : phase === 'longbreak' ? POMODORO_LONG_BREAK : POMODORO_BREAK

  function doSave(dur, label) {
    const cat = CATEGORIES.find(c => c.id === categoryRef.current)
    onSave({
      id: Date.now(), category: categoryRef.current,
      categoryName: cat.name, categoryColor: cat.color, categoryIcon: cat.icon,
      description: descRef.current || label,
      duration: dur, date: new Date().toISOString(),
      taskId: linkedTaskRef.current,
    })
  }

  const tick = () => {
    if (!startTsRef.current) return
    const now = Date.now()
    if (modeRef.current === 'stopwatch') {
      setElapsed(Math.floor((now - startTsRef.current) / 1000))
    } else {
      const target = getPomTarget(pomPhaseRef.current)
      const remain = target - Math.floor((now - startTsRef.current) / 1000)
      if (remain <= 0) phaseEnd(); else setPomRemain(remain)
    }
  }

  function showToast(msg, icon, color) {
    setToast({ msg, icon, color })
    setTimeout(() => setToast(null), 4000)
  }

  function phaseEnd() {
    clearInterval(ivRef.current); setRunning(false)
    const phase = pomPhaseRef.current, count = pomCountRef.current
    if (phase === 'work') {
      const n = count + 1
      doSave(POMODORO_WORK, `🍅 番茄钟 #${n}`)
      playBeep('break')
      const nextPhase = n % 4 === 0 ? 'longbreak' : 'break'
      showToast(n % 4 === 0 ? `第${n}个完成！🌿 长休息15分钟` : `第${n}个完成！☕ 休息5分钟`, '🍅', '#10b981')
      setPomCount(n); pomCountRef.current = n
      setPomPhase(nextPhase); pomPhaseRef.current = nextPhase
      setPomRemain(getPomTarget(nextPhase))
    } else {
      playBeep('work')
      showToast('休息结束，开始新专注！', '💪', '#6366f1')
      setPomPhase('work'); pomPhaseRef.current = 'work'; setPomRemain(POMODORO_WORK)
    }
    startTsRef.current = null
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

  const start = () => { unlockAudio(); startTsRef.current = Date.now(); setRunning(true) }
  const stop  = () => {
    setRunning(false); setFocusMode(false)
    if (mode === 'stopwatch' && elapsed > 0) { doSave(elapsed, category); setElapsed(0); setDesc(''); startTsRef.current = null }
  }
  const reset = () => {
    setRunning(false); setElapsed(0); setFocusMode(false); startTsRef.current = null
    if (mode === 'pomodoro') { setPomPhase('work'); pomPhaseRef.current='work'; setPomRemain(POMODORO_WORK); setPomCount(0); pomCountRef.current=0 }
  }
  const switchMode = m => { reset(); setMode(m); modeRef.current = m }
  const saveTemplate = () => {
    if (!desc.trim()) return
    if (!templates.some(tp => tp.desc===desc && tp.category===category))
      setTemplates(ts => [{ id: Date.now(), desc, category }, ...ts.slice(0, 11)])
  }

  const pomTarget = getPomTarget(pomPhase)
  const pomPct = 1 - pomRemain / pomTarget
  const C52 = 2 * Math.PI * 52
  const pomPhaseLabel = pomPhase==='work' ? t(lang,'pomWork') : pomPhase==='longbreak' ? t(lang,'pomLong') : t(lang,'pomBreak')
  const todayPom = logs.filter(l => l.description?.includes('🍅') && new Date(l.date).toDateString()===new Date().toDateString()).length
  const catName  = id => lang==='en' ? (CATEGORIES.find(c=>c.id===id)?.nameEn||id) : (CATEGORIES.find(c=>c.id===id)?.name||id)

  const activeTasks = tasks.filter(tk => !tk.archived)

  return (
    <div className="page-container">
      {toast && (
        <div className="toast" style={{ background: toast.color }}>
          <span className="toast-icon">{toast.icon}</span><span>{toast.msg}</span>
        </div>
      )}

      {/* Focus Mode Overlay */}
      {focusMode && (
        <div className="focus-overlay">
          <div className="focus-content">
            <div className="focus-phase-label">{mode==='pomodoro' ? pomPhaseLabel : t(lang,'focusTitle')}</div>
            {desc && <div className="focus-task-name">{desc}</div>}
            <div className="focus-big-time">{mode==='pomodoro' ? fmt(pomRemain) : fmt(elapsed)}</div>
            <div className="focus-btns">
              {mode === 'stopwatch'
                ? <button className="btn btn-stop" onClick={stop}>{t(lang,'stopSave')}</button>
                : running
                  ? <button className="btn btn-stop" onClick={() => setRunning(false)}>{t(lang,'pause')}</button>
                  : <button className="btn btn-start" onClick={start}>{t(lang,'start')}</button>
              }
              <button className="btn focus-exit-btn" onClick={() => setFocusMode(false)}>{t(lang,'exitFocus')}</button>
            </div>
          </div>
        </div>
      )}

      <div className="mode-toggle">
        <button className={mode==='stopwatch'?'active':''} onClick={()=>switchMode('stopwatch')}>⏱ {t(lang,'timer')}</button>
        <button className={mode==='pomodoro'?'active':''}  onClick={()=>switchMode('pomodoro')}>🍅 番茄钟</button>
      </div>

      <div className={`timer-display ${running?'running':''} ${mode==='pomodoro'&&pomPhase!=='work'?'pom-break':''}`}>
        {mode === 'pomodoro' ? (
          <>
            <div className="pom-label">{pomPhaseLabel}</div>
            <svg viewBox="0 0 140 140" width="180" height="180">
              <circle cx="70" cy="70" r="52" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="10"/>
              <circle cx="70" cy="70" r="52" fill="none" stroke="white" strokeWidth="10"
                strokeDasharray={C52} strokeDashoffset={C52*(1-pomPct)} transform="rotate(-90 70 70)" strokeLinecap="round"/>
              <text x="70" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="700" fontFamily="monospace">{fmt(pomRemain)}</text>
              <text x="70" y="78" textAnchor="middle" fill="rgba(255,255,255,.85)" fontSize="11">
                {'🍅'.repeat(Math.min(pomCount,8))}{pomCount>8?`+${pomCount-8}`:''}
              </text>
              {todayPom > 0 && <text x="70" y="95" textAnchor="middle" fill="rgba(255,255,255,.65)" fontSize="10">今日 {todayPom} 个</text>}
            </svg>
            {!running && pomPhase==='work' && pomCount===0 && (
              <div className="pom-tip">专注25分→休息5分，每4个获得15分长休息</div>
            )}
          </>
        ) : (
          <div className="sw-time">{fmt(elapsed)}</div>
        )}
        <div className="timer-btns">
          {!running
            ? <button className="btn btn-start" onClick={start}>{t(lang,'start')}</button>
            : <>
                {mode==='stopwatch'
                  ? <button className="btn btn-stop" onClick={stop}>{t(lang,'stopSave')}</button>
                  : <button className="btn btn-stop" onClick={()=>setRunning(false)}>{t(lang,'pause')}</button>
                }
                <button className="btn btn-reset" onClick={reset}>{t(lang,'reset')}</button>
              </>
          }
          {running && <button className="btn focus-mode-btn" onClick={()=>setFocusMode(true)} title={t(lang,'focusMode')}>🎯</button>}
        </div>
      </div>

      <div className="section">
        <div className="section-title">{t(lang,'category')}</div>
        <div className="categories-grid">
          {CATEGORIES.map(cat => (
            <button key={cat.id} className={`category-card ${category===cat.id?'active':''}`}
              onClick={() => !running && setCategory(cat.id)}
              style={{ borderColor:category===cat.id?cat.color:'transparent', backgroundColor:category===cat.id?`${cat.color}18`:'' }}>
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
        <div className="section-title">{t(lang,'linkTask')}</div>
        <select className="select-input" value={linkedTask} onChange={e=>setLinkedTask(e.target.value)} disabled={running}>
          <option value="">— {lang==='zh'?'关联任务':'Link a task'} —</option>
          {activeTasks.map(tk => <option key={tk.id} value={String(tk.id)}>{tk.icon} {tk.title}</option>)}
        </select>
      </div>
    </div>
  )
}

// ─── Stats View ───────────────────────────────────────────────────────────────
function StatsView({ logs, onDeleteLog, tasks, lang }) {
  const [period, setPeriod] = useState('today')
  const now = new Date()
  const filtered = logs.filter(l => {
    const d = new Date(l.date)
    if (period === 'today') return d.toDateString() === now.toDateString()
    if (period === 'week')  { const w = new Date(now); w.setDate(now.getDate()-7); return d >= w }
    return d.getMonth()===now.getMonth() && d.getFullYear()===now.getFullYear()
  })
  const total = filtered.reduce((a,b)=>a+b.duration,0)
  const sessions = filtered.length
  const daysInPeriod = period==='today' ? 1 : period==='week' ? 7 : 30

  const byCategory = {}
  filtered.forEach(l => {
    if (!byCategory[l.category]) byCategory[l.category] = { ...CATEGORIES.find(c=>c.id===l.category), value: 0 }
    byCategory[l.category].value += l.duration
  })
  const catData = Object.values(byCategory).sort((a,b)=>b.value-a.value)

  const activeTasks = (tasks||[]).filter(tk => !tk.archived)
  const recurringTasks = activeTasks.filter(tk => tk.repeat && tk.repeat !== 'none')
  const today = todayStr()

  return (
    <div className="page-container">
      <div className="mode-toggle">
        {[[' today',t(lang,'today')],['week',t(lang,'thisWeekTab')],['month',t(lang,'thisMonth')]].map(([k,l])=>(
          <button key={k} className={period===k.trim()?'active':''} onClick={()=>setPeriod(k.trim())}>{l}</button>
        ))}
      </div>

      <div className="stats-grid">
        <div className="stat-card primary"><div className="stat-val">{fmtH(total)}</div><div className="stat-lbl">{t(lang,'totalTime')}</div></div>
        <div className="stat-card secondary"><div className="stat-val">{sessions}</div><div className="stat-lbl">{t(lang,'sessions')}</div></div>
        {period !== 'today' && <div className="stat-card tertiary"><div className="stat-val">{fmtH(Math.round(total/daysInPeriod))}</div><div className="stat-lbl">{t(lang,'daily')}</div></div>}
      </div>

      <div className="chart-section">
        <div className="section-title">{t(lang,'thisWeek')}</div>
        <WeeklyBarChart logs={logs} />
      </div>

      {catData.length > 0 && (
        <div className="chart-section">
          <div className="section-title">{t(lang,'byCategory')}</div>
          <div className="donut-row">
            <DonutChart data={catData} total={total} />
            <div className="cat-legend">
              {catData.map(d => (
                <div key={d.id} className="legend-item">
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

      {activeTasks.length > 0 && (
        <div className="chart-section">
          <div className="section-title">📋 {t(lang,'taskProgress')}</div>
          <div className="stats-goal-list">
            {activeTasks.map(tk => {
              const tkTime = filtered.filter(l=>l.taskId===String(tk.id)).reduce((a,b)=>a+b.duration,0)
              const subs = tk.subtasks || []
              const done = subs.filter(s=>s.done).length
              const pct  = subs.length > 0 ? Math.round(done/subs.length*100) : null
              const isRec = tk.repeat && tk.repeat !== 'none'
              const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - daysInPeriod + 1)
              const periodChecks = isRec ? (tk.history||[]).filter(d=>new Date(d)>=cutoff).length : null
              const rate = isRec ? Math.round((periodChecks||0)/daysInPeriod*100) : null
              return (
                <div key={tk.id} className="stats-goal-item">
                  <div className="stats-goal-header">
                    <span>{tk.icon} {tk.title}</span>
                    <span className="stats-goal-time">
                      {tkTime > 0 ? fmtH(tkTime) : isRec ? `🔥 ${tk.streak||0}${lang==='zh'?'天':'d'}` : ''}
                    </span>
                  </div>
                  {pct !== null && (
                    <div className="stats-goal-meta">
                      <span style={{color:'var(--text-muted)',fontSize:'.78rem'}}>{done}/{subs.length} {lang==='zh'?'子任务':'subtasks'}</span>
                      <span style={{color:'var(--text-muted)',fontSize:'.78rem'}}>{pct}%</span>
                    </div>
                  )}
                  {rate !== null && (
                    <div className="stats-goal-meta">
                      <span style={{color:'var(--text-muted)',fontSize:'.78rem'}}>{periodChecks}/{daysInPeriod} {lang==='zh'?'天完成':'days'}</span>
                      <span style={{color:'var(--text-muted)',fontSize:'.78rem'}}>{rate}%</span>
                    </div>
                  )}
                  {(pct !== null || rate !== null) && (
                    <div className="stats-progress-bar">
                      <div className="stats-progress-fill" style={{width:`${pct??rate??0}%`, background: tk.color||'var(--accent)'}} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      <div className="chart-section">
        <div className="section-title">{t(lang,'activityLog')}</div>
        {filtered.length === 0 ? (
          <div className="empty-state"><p>{t(lang,'noLogs')}</p></div>
        ) : (
          <div className="logs-list">
            {filtered.slice(0,30).map(l => (
              <div key={l.id} className="log-item" style={{borderLeftColor:l.categoryColor}}>
                <span className="log-icon">{l.categoryIcon}</span>
                <div className="log-details">
                  <div className="log-desc">{l.description}</div>
                  <div className="log-time-str">{new Date(l.date).toLocaleString('zh-CN',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})}</div>
                </div>
                <span className="log-dur">{fmt(l.duration)}</span>
                <button className="icon-action" onClick={()=>onDeleteLog(l.id)}>✕</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Notes View ──────────────────────────────────────────────────────────────
const NOTE_COLORS = ['#ffffff','#fef9c3','#dcfce7','#dbeafe','#fce7f3','#ede9fe','#ffedd5','#f1f5f9']
const NOTE_COLORS_DARK = ['#1e293b','#3b3200','#052e16','#0c1a2e','#3b0a1f','#1a0f3b','#3b1500','#1e293b']

function NotesView({ notes, setNotes, lang, dark }) {
  const [search, setSearch]   = useState('')
  const [editId, setEditId]   = useState(null)   // null = list, 'new' = new, id = editing
  const [form, setForm]       = useState({ title: '', content: '', color: '#ffffff', pinned: false })

  const openNew  = () => { setForm({ title:'', content:'', color: NOTE_COLORS[0], pinned:false }); setEditId('new') }
  const openEdit = n  => { setForm({ title:n.title, content:n.content, color:n.color, pinned:n.pinned }); setEditId(n.id) }

  const saveNote = () => {
    if (!form.content.trim() && !form.title.trim()) { setEditId(null); return }
    if (editId === 'new') {
      setNotes(ns => [{ ...form, id: Date.now(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, ...ns])
    } else {
      setNotes(ns => ns.map(n => n.id === editId ? { ...n, ...form, updatedAt: new Date().toISOString() } : n))
    }
    setEditId(null)
  }

  const deleteNote = id => { if (confirm(lang==='zh'?'确定删除这条备忘？':'Delete this note?')) setNotes(ns => ns.filter(n => n.id !== id)) }
  const togglePin  = id => setNotes(ns => ns.map(n => n.id===id ? {...n, pinned:!n.pinned} : n))

  const filtered = notes.filter(n =>
    !search || n.title.toLowerCase().includes(search.toLowerCase()) || n.content.toLowerCase().includes(search.toLowerCase())
  )
  const pinned   = filtered.filter(n => n.pinned)
  const unpinned = filtered.filter(n => !n.pinned)
  const display  = [...pinned, ...unpinned]

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
    return (
      <div className="page-container note-editor" style={{ background: noteColor, minHeight: '100%' }}>
        <div className="note-editor-toolbar">
          <button className="note-back-btn" onClick={saveNote}>← {lang==='zh'?'完成':'Done'}</button>
          <div className="note-color-row">
            {NOTE_COLORS.map((c,i) => (
              <button key={c} className={`note-color-dot ${form.color===c?'active':''}`}
                style={{ background: dark ? NOTE_COLORS_DARK[i] : c }}
                onClick={() => setForm(f => ({...f, color:c}))} />
            ))}
          </div>
          <button className={`note-pin-btn ${form.pinned?'active':''}`}
            onClick={() => setForm(f => ({...f, pinned:!f.pinned}))} title={form.pinned?t(lang,'unpin'):t(lang,'pin')}>
            📌
          </button>
        </div>
        <input className="note-title-input" placeholder={t(lang,'noteTitlePh')}
          value={form.title} onChange={e => setForm(f => ({...f, title:e.target.value}))} />
        <textarea className="note-content-input" placeholder={t(lang,'noteContentPh')}
          value={form.content} onChange={e => setForm(f => ({...f, content:e.target.value}))}
          autoFocus rows={20} />
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
        <div className="notes-grid">
          {display.map(n => {
            const ci = NOTE_COLORS.indexOf(n.color)
            const bg = dark ? (NOTE_COLORS_DARK[ci] ?? '#1e293b') : n.color
            return (
              <div key={n.id} className="note-card" style={{background: bg}} onClick={() => openEdit(n)}>
                {n.pinned && <div className="note-pin-badge">📌</div>}
                {n.title && <div className="note-card-title">{n.title}</div>}
                <div className="note-card-content">{n.content}</div>
                <div className="note-card-footer">
                  <span className="note-card-date">{fmtDate(n.updatedAt || n.createdAt)}</span>
                  <div className="note-card-actions" onClick={e => e.stopPropagation()}>
                    <button className="icon-action" onClick={() => togglePin(n.id)} title={n.pinned?t(lang,'unpin'):t(lang,'pin')}>📌</button>
                    <button className="icon-action" onClick={() => deleteNote(n.id)}>🗑</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
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
  const [tab, setTab]   = useState('timer')
  const [user, setUser] = useState(FIREBASE_CONFIGURED ? undefined : null)

  const [cloudDark,      setCloudDark]      = useState(false)
  const [cloudLogs,      setCloudLogs]      = useState([])
  const [cloudTasks,     setCloudTasks]     = useState([])
  const [cloudTemplates, setCloudTemplates] = useState([])
  const [cloudNotes,     setCloudNotes]     = useState([])
  const [cloudLang,      setCloudLang]      = useState('zh')

  const [localDark,      setLocalDark]      = useLS('darkMode',  false)
  const [localLogs,      setLocalLogs]      = useLS('timeLogs',  [])
  const [localTasks,     setLocalTasks]     = useLS('tasks2',    [])
  const [localTemplates, setLocalTemplates] = useLS('templates', [])
  const [localNotes,     setLocalNotes]     = useLS('notes',     [])
  const [localLang,      setLocalLang]      = useLS('lang',      'zh')

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

  const [pwaPrompt,  setPwaPrompt]  = useState(null)
  const [pwaDismiss, setPwaDismiss] = useLS('pwaDismissed', false)

  useEffect(() => {
    const h = e => { e.preventDefault(); setPwaPrompt(e) }
    window.addEventListener('beforeinstallprompt', h)
    return () => window.removeEventListener('beforeinstallprompt', h)
  }, [])

  useEffect(() => {
    if (!FIREBASE_CONFIGURED) return
    return onAuthStateChanged(auth, u => setUser(u ?? null))
  }, [])

  useEffect(() => {
    if (!user) return
    return subscribeUserData(user.uid, data => {
      if (data.timeLogs   !== undefined) setLogs(data.timeLogs)
      if (data.tasks2     !== undefined) setCloudTasks(data.tasks2)
      if (data.templates  !== undefined) setCloudTemplates(data.templates)
      if (data.notes      !== undefined) setCloudNotes(data.notes)
      if (data.darkMode   !== undefined) setDark(data.darkMode)
      if (data.lang       !== undefined) setCloudLang(data.lang)
    })
  }, [user])

  const initialized = useRef(false)
  useEffect(() => {
    if (!user) return
    if (!initialized.current) { initialized.current = true; return }
    saveUserData(user.uid, { timeLogs: logs, tasks2: tasks, templates, notes, darkMode: dark, lang })
  }, [logs, tasks, templates, notes, dark, lang])

  const handleAuth  = async (mode, email, pw) => { if (mode==='login') await login(email,pw); else await register(email,pw) }
  const onSave      = log => setLogs(p => [log, ...p])
  const onDeleteLog = id  => setLogs(p => p.filter(l => l.id !== id))
  const todayTotal  = logs.filter(l => new Date(l.date).toDateString()===new Date().toDateString()).reduce((a,b)=>a+b.duration,0)

  const [showLogin, setShowLogin] = useState(false)

  if (user === undefined) return (
    <div className="app"><div className="splash"><div className="splash-logo">⏳</div><div className="splash-name">TimeFlow</div></div></div>
  )

  return (
    <div className={`app ${dark?'dark':''}`}>
      <header className="app-header">
        <div className="header-inner">
          <div>
            <h1 className="app-title">⏳ TimeFlow</h1>
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

      <main className="main-content">
        {tab==='timer' && <TimerView logs={logs} onSave={onSave} tasks={tasks} templates={templates} setTemplates={setTemplates} lang={lang} />}
        {tab==='tasks' && <TasksView tasks={tasks} setTasks={setTasks} logs={logs} lang={lang} />}
        {tab==='notes' && <NotesView notes={notes} setNotes={setNotes} lang={lang} dark={dark} />}
        {tab==='stats' && <StatsView logs={logs} onDeleteLog={onDeleteLog} tasks={tasks} lang={lang} />}
      </main>

      <nav className="bottom-nav">
        {[['timer','⏱',t(lang,'timer')],['tasks','📋',t(lang,'tasks')],['notes','💡',t(lang,'notes')],['stats','📊',t(lang,'stats')]].map(([k,ic,lb])=>(
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
    </div>
  )
}
