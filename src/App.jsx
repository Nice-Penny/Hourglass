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
const POMODORO_WORK      = 25 * 60
const POMODORO_BREAK     =  5 * 60
const POMODORO_LONG_BREAK = 15 * 60
const GOAL_ICONS  = ['🎯','🚀','💪','📖','💰','🏆','🌱','❤️','🎨','🏠','🎵','✈️']
const GOAL_COLORS = ['#3b82f6','#10b981','#f59e0b','#ef4444','#8b5cf6','#06b6d4','#f97316','#ec4899']
const PRESET_HABITS = [
  { title: '早起', icon: '🌅' }, { title: '运动', icon: '💪' },
  { title: '阅读', icon: '📖' }, { title: '冥想', icon: '🧘' },
  { title: '喝水', icon: '💧' }, { title: '早睡', icon: '🌙' },
]

// ─── i18n ────────────────────────────────────────────────────────────────────
const T = {
  zh: {
    timer:'计时', goals:'目标', stats:'统计', habits:'习惯', plan:'计划',
    start:'▶ 开始', stopSave:'⏹ 停止保存', pause:'⏸ 暂停', reset:'↻ 重置',
    category:'分类', taskDesc:'任务描述（可选）', linkGoalHabit:'关联目标或习惯（可选）',
    templates:'快捷模板', saveAsTemplate:'保存为模板', focusMode:'🎯 专注模式',
    exitFocus:'退出专注', todayTotal:'今日已记录',
    installApp:'📱 添加到主屏幕，随时快速打开', install:'安装',
    goalLink:'🎯 目标...', habitLink:'✅ 习惯...', taskLink:'— 选择子任务 —',
    dayPlanner:'今日计划', planSubtitle:'规划今天，对比实际完成',
    addPlan:'+ 添加', planned:'计划', actual:'实际', done:'已完成',
    cancel:'取消', save:'保存', add:'添加',
    focusTitle:'专注中', pomWork:'🍅 专注时间', pomBreak:'☕ 休息时间', pomLong:'🌿 长休息',
    noPlans:'还没有计划，规划一下今天吧！', history:'历史记录',
    taskName:'任务名称', taskPlaceholder:'今天要做什么？',
    estimatedMins:'预计时长（分钟）', selectCat:'分类',
    min:'分', est:'预估', act:'实际',
  },
  en: {
    timer:'Timer', goals:'Goals', stats:'Stats', habits:'Habits', plan:'Plan',
    start:'▶ Start', stopSave:'⏹ Stop & Save', pause:'⏸ Pause', reset:'↻ Reset',
    category:'Category', taskDesc:'Task Description (optional)', linkGoalHabit:'Link Goal or Habit (optional)',
    templates:'Quick Templates', saveAsTemplate:'Save as Template', focusMode:'🎯 Focus Mode',
    exitFocus:'Exit Focus', todayTotal:"Today's total",
    installApp:'📱 Add to home screen for quick access', install:'Install',
    goalLink:'🎯 Goal...', habitLink:'✅ Habit...', taskLink:'— Select subtask —',
    dayPlanner:"Today's Plan", planSubtitle:'Plan your day, track completion',
    addPlan:'+ Add', planned:'Planned', actual:'Actual', done:'Done',
    cancel:'Cancel', save:'Save', add:'Add',
    focusTitle:'Focusing', pomWork:'🍅 Focus Time', pomBreak:'☕ Break Time', pomLong:'🌿 Long Break',
    noPlans:"No plans yet, add tasks for today!", history:'History',
    taskName:'Task Name', taskPlaceholder:'What to work on today?',
    estimatedMins:'Estimated (minutes)', selectCat:'Category',
    min:'min', est:'Est.', act:'Actual',
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

// ─── SVG: Weekly Bar Chart ────────────────────────────────────────────────────
function WeeklyBarChart({ logs }) {
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i))
    const ds = d.toISOString().slice(0, 10)
    const total = logs.filter(l => l.date.slice(0,10) === ds).reduce((a, b) => a + b.duration, 0)
    return { label: ['日','一','二','三','四','五','六'][d.getDay()], total, ds }
  })
  const maxV = Math.max(...days.map(d => d.total), 3600)
  const W = 280, H = 100, BW = 28, GAP = (W - 7 * BW) / 8
  return (
    <svg viewBox={`0 0 ${W} ${H + 24}`} style={{ width: '100%', maxWidth: 360 }}>
      {days.map((d, i) => {
        const bh = Math.max((d.total / maxV) * H, d.total > 0 ? 4 : 0)
        const x = GAP + i * (BW + GAP)
        const isToday = d.ds === todayStr()
        return (
          <g key={i}>
            <rect x={x} y={H - bh} width={BW} height={bh} rx={5}
              fill={isToday ? 'var(--accent)' : 'var(--accent-muted)'} />
            {d.total > 0 && (
              <text x={x + BW / 2} y={H - bh - 4} textAnchor="middle" fontSize={9} fill="var(--text-muted)">
                {fmtH(d.total)}
              </text>
            )}
            <text x={x + BW / 2} y={H + 16} textAnchor="middle" fontSize={11}
              fill={isToday ? 'var(--accent)' : 'var(--text-muted)'}
              fontWeight={isToday ? '700' : '400'}>{d.label}</text>
          </g>
        )
      })}
    </svg>
  )
}

// ─── SVG: Donut Chart ─────────────────────────────────────────────────────────
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
          strokeDasharray={`${(s.value/total)*C} ${C}`}
          strokeDashoffset={`${-s.off * C}`}
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
    freqs.forEach(({ f, t, d }) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain); gain.connect(ctx.destination)
      osc.frequency.value = f; osc.type = 'sine'
      gain.gain.setValueAtTime(0.35, ctx.currentTime + t)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + d)
      osc.start(ctx.currentTime + t); osc.stop(ctx.currentTime + t + d + 0.05)
    })
  } catch (e) {}
}

// ─── Timer View ───────────────────────────────────────────────────────────────
function TimerView({ logs, onSave, goals, habits, templates, setTemplates, lang }) {
  const [mode, setMode]             = useState('stopwatch')
  const [running, setRunning]       = useState(false)
  const [elapsed, setElapsed]       = useState(0)
  const [category, setCategory]     = useState('work')
  const [desc, setDesc]             = useState('')
  const [linkedGoal, setLinkedGoal] = useState('')
  const [linkedTask, setLinkedTask] = useState('')
  const [linkedHabit, setLinkedHabit] = useState('')
  const [pomPhase, setPomPhase]     = useState('work')
  const [pomCount, setPomCount]     = useState(0)
  const [pomRemain, setPomRemain]   = useState(POMODORO_WORK)
  const [toast, setToast]           = useState(null)
  const [focusMode, setFocusMode]   = useState(false)

  const startTsRef    = useRef(null)
  const ivRef         = useRef(null)
  const runningRef    = useRef(false)
  const modeRef       = useRef('stopwatch')
  const pomPhaseRef   = useRef('work')
  const pomCountRef   = useRef(0)
  const categoryRef   = useRef('work')
  const descRef       = useRef('')
  const linkedGoalRef = useRef('')
  const linkedTaskRef  = useRef('')
  const linkedHabitRef = useRef('')

  useEffect(() => { runningRef.current = running }, [running])
  useEffect(() => { modeRef.current = mode }, [mode])
  useEffect(() => { pomPhaseRef.current = pomPhase }, [pomPhase])
  useEffect(() => { pomCountRef.current = pomCount }, [pomCount])
  useEffect(() => { categoryRef.current = category }, [category])
  useEffect(() => { descRef.current = desc }, [desc])
  useEffect(() => { linkedGoalRef.current = linkedGoal }, [linkedGoal])
  useEffect(() => { linkedTaskRef.current  = linkedTask  }, [linkedTask])
  useEffect(() => { linkedHabitRef.current = linkedHabit }, [linkedHabit])

  const getPomTarget = phase =>
    phase === 'work' ? POMODORO_WORK : phase === 'longbreak' ? POMODORO_LONG_BREAK : POMODORO_BREAK

  function doSave(dur, label) {
    const cat = CATEGORIES.find(c => c.id === categoryRef.current)
    onSave({
      id: Date.now(), category: categoryRef.current,
      categoryName: cat.name, categoryColor: cat.color, categoryIcon: cat.icon,
      description: descRef.current || label,
      duration: dur, startTime: Date.now() - dur * 1000, endTime: Date.now(),
      date: new Date().toISOString(),
      goalId: linkedGoalRef.current, taskId: linkedTaskRef.current, habitId: linkedHabitRef.current,
    })
  }

  const tick = () => {
    if (!startTsRef.current) return
    const now = Date.now()
    if (modeRef.current === 'stopwatch') {
      setElapsed(Math.floor((now - startTsRef.current) / 1000))
    } else {
      const target = getPomTarget(pomPhaseRef.current)
      const spent  = Math.floor((now - startTsRef.current) / 1000)
      const remain = target - spent
      if (remain <= 0) phaseEnd()
      else setPomRemain(remain)
    }
  }

  function showToast(msg, icon, color) {
    setToast({ msg, icon, color })
    setTimeout(() => setToast(null), 4000)
  }

  function phaseEnd() {
    clearInterval(ivRef.current)
    setRunning(false)
    const phase = pomPhaseRef.current
    const count = pomCountRef.current
    if (phase === 'work') {
      const newCount = count + 1
      doSave(POMODORO_WORK, `🍅 番茄钟 #${newCount}`)
      playBeep('break')
      const nextPhase = newCount % 4 === 0 ? 'longbreak' : 'break'
      const nextMsg   = newCount % 4 === 0
        ? `第 ${newCount} 个完成！🌿 获得15分钟长休息`
        : `第 ${newCount} 个完成！☕ 休息5分钟吧`
      showToast(nextMsg, '🍅', '#10b981')
      setPomCount(newCount); pomCountRef.current = newCount
      setPomPhase(nextPhase); pomPhaseRef.current = nextPhase
      setPomRemain(getPomTarget(nextPhase))
    } else {
      playBeep('work')
      showToast('休息结束，开始新的专注！', '💪', '#6366f1')
      setPomPhase('work'); pomPhaseRef.current = 'work'
      setPomRemain(POMODORO_WORK)
    }
    startTsRef.current = null
  }

  useEffect(() => {
    if (running) ivRef.current = setInterval(tick, 500)
    else clearInterval(ivRef.current)
    return () => clearInterval(ivRef.current)
  }, [running])

  useEffect(() => {
    const onVisible = () => { if (runningRef.current) tick() }
    document.addEventListener('visibilitychange', onVisible)
    return () => document.removeEventListener('visibilitychange', onVisible)
  }, [])

  useEffect(() => {
    if (Notification.permission === 'default') Notification.requestPermission()
  }, [])

  const start = () => {
    unlockAudio()
    startTsRef.current = Date.now()
    setRunning(true)
  }
  const stop = () => {
    setRunning(false); setFocusMode(false)
    if (mode === 'stopwatch' && elapsed > 0) {
      doSave(elapsed, category)
      setElapsed(0); setDesc('')
      startTsRef.current = null
    }
  }
  const reset = () => {
    setRunning(false); setElapsed(0); setFocusMode(false)
    startTsRef.current = null
    if (mode === 'pomodoro') { setPomPhase('work'); pomPhaseRef.current = 'work'; setPomRemain(POMODORO_WORK); setPomCount(0); pomCountRef.current = 0 }
  }
  const switchMode = m => { reset(); setMode(m); modeRef.current = m }

  const saveTemplate = () => {
    if (!desc.trim()) return
    const already = templates.some(tp => tp.desc === desc && tp.category === category)
    if (!already) setTemplates(ts => [{ id: Date.now(), desc, category }, ...ts.slice(0, 11)])
  }
  const deleteTemplate = id => setTemplates(ts => ts.filter(tp => tp.id !== id))

  const goal = goals.find(g => g.id === linkedGoal)
  const pomTarget = getPomTarget(pomPhase)
  const pomPct = 1 - pomRemain / pomTarget
  const C52 = 2 * Math.PI * 52
  const pomPhaseLabel = pomPhase === 'work' ? t(lang,'pomWork') : pomPhase === 'longbreak' ? t(lang,'pomLong') : t(lang,'pomBreak')
  const pomPhaseColor = pomPhase === 'work' ? '' : 'pom-break'
  const todayPom = logs.filter(l =>
    l.description?.includes('🍅') &&
    new Date(l.date).toDateString() === new Date().toDateString()
  ).length

  const catName = c => lang === 'en' ? (CATEGORIES.find(x=>x.id===c)?.nameEn || c) : (CATEGORIES.find(x=>x.id===c)?.name || c)

  return (
    <div className="page-container">
      {toast && (
        <div className="toast" style={{ background: toast.color }}>
          <span className="toast-icon">{toast.icon}</span>
          <span>{toast.msg}</span>
        </div>
      )}

      {/* ── Focus Mode Overlay ── */}
      {focusMode && (
        <div className="focus-overlay">
          <div className="focus-content">
            <div className="focus-phase-label">{mode==='pomodoro' ? pomPhaseLabel : t(lang,'focusTitle')}</div>
            {desc && <div className="focus-task-name">{desc}</div>}
            <div className="focus-big-time">
              {mode==='pomodoro' ? fmt(pomRemain) : fmt(elapsed)}
            </div>
            {mode === 'pomodoro' && (
              <div className="focus-pom-ring">
                <svg viewBox="0 0 160 160" width="160" height="160">
                  <circle cx="80" cy="80" r="68" fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="10"/>
                  <circle cx="80" cy="80" r="68" fill="none" stroke="white" strokeWidth="10"
                    strokeDasharray={2*Math.PI*68} strokeDashoffset={2*Math.PI*68*(1-pomPct)}
                    transform="rotate(-90 80 80)" strokeLinecap="round"/>
                </svg>
              </div>
            )}
            <div className="focus-btns">
              {mode === 'stopwatch'
                ? <button className="btn btn-stop" onClick={stop}>{t(lang,'stopSave')}</button>
                : running
                  ? <button className="btn btn-stop" onClick={() => setRunning(false)}>{t(lang,'pause')}</button>
                  : <button className="btn btn-start" onClick={start}>{t(lang,'start')}</button>
              }
              <button className="btn btn-reset focus-exit-btn" onClick={() => setFocusMode(false)}>{t(lang,'exitFocus')}</button>
            </div>
          </div>
        </div>
      )}

      <div className="mode-toggle">
        <button className={mode==='stopwatch'?'active':''} onClick={()=>switchMode('stopwatch')}>⏱ {t(lang,'timer')}</button>
        <button className={mode==='pomodoro'?'active':''}  onClick={()=>switchMode('pomodoro')}>🍅 番茄钟</button>
      </div>

      <div className={`timer-display ${running?'running':''} ${mode==='pomodoro'?pomPhaseColor:''}`}>
        {mode === 'pomodoro' ? (
          <>
            <div className="pom-label">{pomPhaseLabel}</div>
            <svg viewBox="0 0 140 140" width="180" height="180">
              <circle cx="70" cy="70" r="52" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="10"/>
              <circle cx="70" cy="70" r="52" fill="none" stroke="white" strokeWidth="10"
                strokeDasharray={C52} strokeDashoffset={C52*(1-pomPct)}
                transform="rotate(-90 70 70)" strokeLinecap="round"/>
              <text x="70" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="700" fontFamily="monospace">
                {fmt(pomRemain)}
              </text>
              <text x="70" y="78" textAnchor="middle" fill="rgba(255,255,255,.85)" fontSize="11">
                {'🍅'.repeat(Math.min(pomCount, 8))}{pomCount > 8 ? `+${pomCount-8}` : ''}
              </text>
              {todayPom > 0 && (
                <text x="70" y="95" textAnchor="middle" fill="rgba(255,255,255,.65)" fontSize="10">
                  今日 {todayPom} 个
                </text>
              )}
            </svg>
            {!running && pomPhase === 'work' && pomCount === 0 && (
              <div className="pom-tip">专注25分→休息5分，每4个获得15分长休息<br/>完成后自动记录到统计</div>
            )}
          </>
        ) : (
          <div className="sw-time">{fmt(elapsed)}</div>
        )}
        <div className="timer-btns">
          {!running ? (
            <button className="btn btn-start" onClick={start}>{t(lang,'start')}</button>
          ) : (
            <>
              {mode === 'stopwatch'
                ? <button className="btn btn-stop" onClick={stop}>{t(lang,'stopSave')}</button>
                : <button className="btn btn-stop" onClick={()=>setRunning(false)}>{t(lang,'pause')}</button>
              }
              <button className="btn btn-reset" onClick={reset}>{t(lang,'reset')}</button>
            </>
          )}
          {running && (
            <button className="btn focus-mode-btn" onClick={() => setFocusMode(true)} title={t(lang,'focusMode')}>🎯</button>
          )}
        </div>
      </div>

      <div className="section">
        <div className="section-title">{t(lang,'category')}</div>
        <div className="categories-grid">
          {CATEGORIES.map(cat => (
            <button key={cat.id}
              className={`category-card ${category===cat.id?'active':''}`}
              onClick={() => !running && setCategory(cat.id)}
              style={{ borderColor: category===cat.id ? cat.color : 'transparent', backgroundColor: category===cat.id ? `${cat.color}18` : '' }}>
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
                <button className="template-chip"
                  onClick={() => { if (!running) { setDesc(tp.desc); setCategory(tp.category) } }}>
                  {CATEGORIES.find(c=>c.id===tp.category)?.icon} {tp.desc}
                </button>
                <button className="template-del" onClick={() => deleteTemplate(tp.id)}>✕</button>
              </div>
            ))}
          </div>
        )}
        <div className="desc-row">
          <input className="text-input" type="text" placeholder={lang==='zh'?'正在做什么？':'What are you working on?'}
            value={desc} onChange={e=>setDesc(e.target.value)} disabled={running} />
          {desc.trim() && !running && (
            <button className="btn-secondary save-tpl-btn" onClick={saveTemplate} title={t(lang,'saveAsTemplate')}>⭐</button>
          )}
        </div>
      </div>

      <div className="section">
        <div className="section-title">{t(lang,'linkGoalHabit')}</div>
        <div className="link-row">
          <select className="select-input" value={linkedGoal}
            onChange={e=>{ setLinkedGoal(e.target.value); setLinkedTask(''); setLinkedHabit('') }}
            disabled={running || !!linkedHabit}>
            <option value="">{t(lang,'goalLink')}</option>
            {goals.map(g => <option key={g.id} value={g.id}>{g.icon} {g.title}</option>)}
          </select>
          <select className="select-input" value={linkedHabit}
            onChange={e=>{ setLinkedHabit(e.target.value); setLinkedGoal(''); setLinkedTask('') }}
            disabled={running || !!linkedGoal}>
            <option value="">{t(lang,'habitLink')}</option>
            {habits.map(h => <option key={h.id} value={h.id}>{h.icon} {h.title}</option>)}
          </select>
        </div>
        {goal?.tasks?.filter(tk=>!tk.done).length > 0 && (
          <select className="select-input" style={{marginTop:8}} value={linkedTask}
            onChange={e=>setLinkedTask(e.target.value)} disabled={running}>
            <option value="">{t(lang,'taskLink')}</option>
            {goal.tasks.filter(tk=>!tk.done).map(tk => <option key={tk.id} value={tk.id}>{tk.title}</option>)}
          </select>
        )}
      </div>
    </div>
  )
}

// ─── Plan View ────────────────────────────────────────────────────────────────
function PlanView({ plans, setPlans, logs, lang }) {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm]         = useState({ title: '', estimatedMins: 30, category: 'work' })
  const today = todayStr()
  const todayPlans = plans.filter(p => p.date === today)

  const addPlan = () => {
    if (!form.title.trim()) return
    setPlans(ps => [...ps, { ...form, id: Date.now(), done: false, date: today }])
    setForm({ title: '', estimatedMins: 30, category: 'work' })
    setShowForm(false)
  }
  const togglePlan = id => setPlans(ps => ps.map(p => p.id===id ? {...p, done:!p.done} : p))
  const deletePlan = id => setPlans(ps => ps.filter(p => p.id !== id))

  const actualTime = plan => logs
    .filter(l => l.date.slice(0,10) === today && l.description === plan.title)
    .reduce((a,b) => a+b.duration, 0)

  const doneCnt  = todayPlans.filter(p => p.done).length
  const totalEst = todayPlans.reduce((a,b) => a + b.estimatedMins * 60, 0)
  const totalAct = logs.filter(l => l.date.slice(0,10) === today).reduce((a,b) => a+b.duration, 0)

  const pastPlans = plans.filter(p => p.date !== today)
  const pastByDate = pastPlans.reduce((acc, p) => {
    if (!acc[p.date]) acc[p.date] = []
    acc[p.date].push(p); return acc
  }, {})

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>{t(lang,'dayPlanner')}</h2>
          <div className="page-subtitle">{t(lang,'planSubtitle')}</div>
        </div>
        <button className="btn-primary" onClick={() => setShowForm(true)}>{t(lang,'addPlan')}</button>
      </div>

      {todayPlans.length > 0 && (
        <div className="plan-summary">
          <div className="plan-sum-item">
            <div className="plan-sum-val">{doneCnt}/{todayPlans.length}</div>
            <div className="plan-sum-lbl">{t(lang,'done')}</div>
          </div>
          <div className="plan-sum-item">
            <div className="plan-sum-val">{fmtH(totalEst)}</div>
            <div className="plan-sum-lbl">{t(lang,'planned')}</div>
          </div>
          <div className="plan-sum-item">
            <div className="plan-sum-val">{fmtH(totalAct)}</div>
            <div className="plan-sum-lbl">{t(lang,'actual')}</div>
          </div>
        </div>
      )}

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3 className="modal-title">{lang==='zh'?'添加今日计划':'Add Task'}</h3>
            <div className="form-group">
              <label>{t(lang,'taskName')}</label>
              <input className="text-input" placeholder={t(lang,'taskPlaceholder')}
                value={form.title} onChange={e => setForm(f => ({...f, title: e.target.value}))}
                onKeyDown={e => e.key==='Enter' && addPlan()} autoFocus />
            </div>
            <div className="form-group">
              <label>{t(lang,'estimatedMins')}</label>
              <div className="time-chips">
                {[15,25,30,45,60,90,120].map(m => (
                  <button key={m}
                    className={`time-chip ${form.estimatedMins===m?'active':''}`}
                    onClick={() => setForm(f => ({...f, estimatedMins: m}))}>
                    {m}{lang==='zh'?'分':'m'}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>{t(lang,'selectCat')}</label>
              <div className="categories-grid" style={{marginTop:4}}>
                {CATEGORIES.map(cat => (
                  <button key={cat.id}
                    className={`category-card ${form.category===cat.id?'active':''}`}
                    onClick={() => setForm(f => ({...f, category: cat.id}))}
                    style={{ borderColor: form.category===cat.id ? cat.color : 'transparent', backgroundColor: form.category===cat.id ? `${cat.color}18` : '' }}>
                    <span className="cat-icon">{cat.icon}</span>
                    <span className="cat-name">{lang==='en' ? cat.nameEn : cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setShowForm(false)}>{t(lang,'cancel')}</button>
              <button className="btn-primary" onClick={addPlan}>{t(lang,'add')}</button>
            </div>
          </div>
        </div>
      )}

      {todayPlans.length === 0 ? (
        <div className="empty-state">
          <div style={{fontSize:'3rem',marginBottom:12}}>📋</div>
          <p>{t(lang,'noPlans')}</p>
        </div>
      ) : (
        <div className="plan-list">
          {todayPlans.map(p => {
            const cat = CATEGORIES.find(c => c.id === p.category)
            const act = actualTime(p)
            return (
              <div key={p.id} className={`plan-item ${p.done?'done':''}`}
                style={{borderLeftColor: cat?.color}}>
                <button className={`habit-check ${p.done?'checked':''}`} onClick={() => togglePlan(p.id)}>
                  {p.done && '✓'}
                </button>
                <div className="plan-info">
                  <div className="plan-title">{cat?.icon} {p.title}</div>
                  <div className="plan-meta">
                    <span>{t(lang,'est')} {p.estimatedMins}{lang==='zh'?'分':'min'}</span>
                    {act > 0 && <span className="plan-actual"> · {t(lang,'act')} {fmtH(act)}</span>}
                  </div>
                </div>
                <button className="icon-action" onClick={() => deletePlan(p.id)}>✕</button>
              </div>
            )
          })}
        </div>
      )}

      {Object.keys(pastByDate).length > 0 && (
        <details className="archived-section" style={{marginTop:16}}>
          <summary>{t(lang,'history')} ({pastPlans.length})</summary>
          {Object.entries(pastByDate).sort(([a],[b])=>b.localeCompare(a)).slice(0,7).map(([date, ps]) => (
            <div key={date} style={{marginTop:10}}>
              <div style={{fontSize:'.8rem',color:'var(--text-muted)',fontWeight:700,marginBottom:4}}>{date}</div>
              {ps.map(p => (
                <div key={p.id} style={{fontSize:'.88rem',padding:'3px 0',display:'flex',alignItems:'center',gap:6}}>
                  <span>{p.done ? '✅' : '⬜'}</span>
                  <span style={{color:p.done?'var(--text-muted)':'var(--text)',textDecoration:p.done?'line-through':'none'}}>
                    {CATEGORIES.find(c=>c.id===p.category)?.icon} {p.title}
                  </span>
                  <span style={{marginLeft:'auto',color:'var(--text-muted)',fontSize:'.78rem'}}>{p.estimatedMins}{lang==='zh'?'分':'m'}</span>
                </div>
              ))}
            </div>
          ))}
        </details>
      )}
    </div>
  )
}

// ─── Goals View ───────────────────────────────────────────────────────────────
function GoalsView({ goals, setGoals, logs }) {
  const [showForm, setShowForm] = useState(false)
  const [editId, setEditId]     = useState(null)
  const [form, setForm]         = useState({ title:'', description:'', deadline:'', icon:'🎯', color:'#3b82f6' })
  const [newTask, setNewTask]   = useState({})
  const [expanded, setExpanded] = useState(null)

  const goalTime = id => logs.filter(l=>l.goalId===id).reduce((a,b)=>a+b.duration,0)

  const saveGoal = () => {
    if (!form.title.trim()) return
    if (editId) {
      setGoals(gs => gs.map(g => g.id===editId ? {...g,...form} : g))
      setEditId(null)
    } else {
      setGoals(gs => [...gs, { ...form, id: Date.now(), tasks: [], createdAt: new Date().toISOString() }])
    }
    setForm({ title:'', description:'', deadline:'', icon:'🎯', color:'#3b82f6' })
    setShowForm(false)
  }

  const addTask = gid => {
    const tk = (newTask[gid]||'').trim(); if (!tk) return
    setGoals(gs => gs.map(g => g.id===gid ? {...g, tasks:[...g.tasks,{id:Date.now(),title:tk,done:false}]} : g))
    setNewTask(p => ({...p,[gid]:''}))
  }
  const toggleTask = (gid, tid) =>
    setGoals(gs => gs.map(g => g.id===gid ? {...g, tasks: g.tasks.map(tk=>tk.id===tid?{...tk,done:!tk.done}:tk)} : g))
  const deleteTask = (gid, tid) =>
    setGoals(gs => gs.map(g => g.id===gid ? {...g, tasks: g.tasks.filter(tk=>tk.id!==tid)} : g))
  const startEdit = g => {
    setForm({ title:g.title, description:g.description||'', deadline:g.deadline||'', icon:g.icon, color:g.color })
    setEditId(g.id); setShowForm(true)
  }

  const activeGoals   = goals.filter(g => !g.archived)
  const archivedGoals = goals.filter(g =>  g.archived)

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>我的目标</h2>
          <div className="page-subtitle">设定长期目标，拆解任务，追踪进度</div>
        </div>
        <button className="btn-primary" onClick={() => { setEditId(null); setForm({ title:'', description:'', deadline:'', icon:'🎯', color:'#3b82f6' }); setShowForm(true) }}>+ 新建</button>
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={()=>setShowForm(false)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <h3 className="modal-title">{editId?'编辑目标':'新建目标'}</h3>
            <div className="form-group">
              <label>图标</label>
              <div className="icon-picker">
                {GOAL_ICONS.map(ic => (
                  <button key={ic} className={`icon-btn ${form.icon===ic?'active':''}`}
                    onClick={()=>setForm(f=>({...f,icon:ic}))}>{ic}</button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>颜色</label>
              <div className="color-picker">
                {GOAL_COLORS.map(c => (
                  <button key={c} className={`color-btn ${form.color===c?'active':''}`}
                    style={{background:c}} onClick={()=>setForm(f=>({...f,color:c}))}/>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>目标名称 *</label>
              <input className="text-input" placeholder="例：读完10本书" value={form.title}
                onChange={e=>setForm(f=>({...f,title:e.target.value}))} />
            </div>
            <div className="form-group">
              <label>描述</label>
              <input className="text-input" placeholder="具体描述..." value={form.description}
                onChange={e=>setForm(f=>({...f,description:e.target.value}))} />
            </div>
            <div className="form-group">
              <label>截止日期</label>
              <input className="text-input" type="date" value={form.deadline}
                onChange={e=>setForm(f=>({...f,deadline:e.target.value}))} />
            </div>
            <div className="modal-actions">
              <button className="btn-secondary" onClick={()=>setShowForm(false)}>取消</button>
              <button className="btn-primary" onClick={saveGoal}>保存</button>
            </div>
          </div>
        </div>
      )}

      {activeGoals.length === 0 ? (
        <div className="empty-state">
          <div style={{fontSize:'3rem',marginBottom:12}}>🎯</div>
          <p>还没有目标，点击"新建"开始吧！</p>
        </div>
      ) : (
        <div className="goals-list">
          {activeGoals.map(g => {
            const done    = g.tasks.filter(tk=>tk.done).length
            const pct     = g.tasks.length > 0 ? done / g.tasks.length : 0
            const spent   = goalTime(g.id)
            const isExp   = expanded === g.id
            const today   = new Date(); today.setHours(0,0,0,0)
            const dl      = g.deadline ? Math.ceil((new Date(g.deadline) - today) / 86400000) : null

            return (
              <div key={g.id} className="goal-card" style={{borderLeft:`4px solid ${g.color}`}}>
                <div className="goal-header" onClick={()=>setExpanded(isExp?null:g.id)}>
                  <div className="goal-icon-title">
                    <span className="goal-icon">{g.icon}</span>
                    <div>
                      <div className="goal-title">{g.title}</div>
                      {g.description && <div className="goal-desc">{g.description}</div>}
                    </div>
                  </div>
                  <div className="goal-meta">
                    {dl !== null && (
                      <span className={`badge ${dl<=7?'badge-urgent':dl<=30?'badge-warn':'badge-ok'}`}>
                        {dl > 0 ? `${dl}天` : dl === 0 ? '今天' : '已逾期'}
                      </span>
                    )}
                    {spent > 0 && <span className="badge badge-time">{fmtH(spent)}</span>}
                    <span className="expand-arrow">{isExp?'▲':'▼'}</span>
                  </div>
                </div>

                {g.tasks.length > 0 && (
                  <div className="progress-row">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{width:`${pct*100}%`,background:g.color}}/>
                    </div>
                    <span className="progress-text">{done}/{g.tasks.length}</span>
                  </div>
                )}

                {isExp && (
                  <div className="goal-tasks">
                    {g.tasks.map(tk => (
                      <div key={tk.id} className={`task-item ${tk.done?'done':''}`}>
                        <input type="checkbox" checked={tk.done} onChange={()=>toggleTask(g.id,tk.id)}/>
                        <span className="task-title">{tk.title}</span>
                        <button className="icon-action" onClick={()=>deleteTask(g.id,tk.id)}>✕</button>
                      </div>
                    ))}
                    <div className="add-task-row">
                      <input className="text-input" placeholder="添加子任务..."
                        value={newTask[g.id]||''}
                        onChange={e=>setNewTask(p=>({...p,[g.id]:e.target.value}))}
                        onKeyDown={e=>e.key==='Enter'&&addTask(g.id)}/>
                      <button className="btn-primary small" onClick={()=>addTask(g.id)}>+</button>
                    </div>
                    <div className="goal-actions">
                      <button className="btn-secondary small" onClick={()=>startEdit(g)}>✏️ 编辑</button>
                      <button className="btn-secondary small"
                        onClick={()=>setGoals(gs=>gs.map(gg=>gg.id===g.id?{...gg,archived:true}:gg))}>
                        📦 归档
                      </button>
                      <button className="btn-danger small"
                        onClick={()=>setGoals(gs=>gs.filter(gg=>gg.id!==g.id))}>🗑 删除</button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {archivedGoals.length > 0 && (
        <details className="archived-section">
          <summary>已归档 ({archivedGoals.length})</summary>
          {archivedGoals.map(g => (
            <div key={g.id} className="goal-card archived" style={{borderLeft:`4px solid ${g.color}`}}>
              <div className="goal-icon-title">
                <span className="goal-icon">{g.icon}</span>
                <span className="goal-title">{g.title}</span>
              </div>
              <button className="btn-secondary small"
                onClick={()=>setGoals(gs=>gs.map(gg=>gg.id===g.id?{...gg,archived:false}:gg))}>
                恢复
              </button>
            </div>
          ))}
        </details>
      )}
    </div>
  )
}

// ─── Stats View ───────────────────────────────────────────────────────────────
function StatsView({ logs, onDeleteLog, goals = [], habits = [] }) {
  const [period, setPeriod] = useState('today')

  const now = new Date()
  const filtered = logs.filter(l => {
    const d = new Date(l.date)
    if (period === 'today') return d.toDateString() === now.toDateString()
    if (period === 'week')  { const w = new Date(now); w.setDate(now.getDate()-7); return d >= w }
    if (period === 'month') return d.getMonth()===now.getMonth() && d.getFullYear()===now.getFullYear()
    return true
  })

  const total    = filtered.reduce((a,b)=>a+b.duration,0)
  const sessions = filtered.length

  const byCategory = {}
  filtered.forEach(l => {
    if (!byCategory[l.category])
      byCategory[l.category] = { ...CATEGORIES.find(c=>c.id===l.category), value: 0 }
    byCategory[l.category].value += l.duration
  })
  const catData = Object.values(byCategory).sort((a,b)=>b.value-a.value)

  const daysInPeriod = period==='today' ? 1 : period==='week' ? 7 : 30

  return (
    <div className="page-container">
      <div className="mode-toggle">
        {[['today','今天'],['week','本周'],['month','本月']].map(([k,l])=>(
          <button key={k} className={period===k?'active':''} onClick={()=>setPeriod(k)}>{l}</button>
        ))}
      </div>

      <div className="stats-grid">
        <div className="stat-card primary">
          <div className="stat-val">{fmtH(total)}</div>
          <div className="stat-lbl">总时长</div>
        </div>
        <div className="stat-card secondary">
          <div className="stat-val">{sessions}</div>
          <div className="stat-lbl">记录次数</div>
        </div>
        {period !== 'today' && (
          <div className="stat-card tertiary">
            <div className="stat-val">{fmtH(Math.round(total / daysInPeriod))}</div>
            <div className="stat-lbl">日均</div>
          </div>
        )}
      </div>

      <div className="chart-section">
        <div className="section-title">过去7天趋势</div>
        <WeeklyBarChart logs={logs} />
      </div>

      {catData.length > 0 && (
        <div className="chart-section">
          <div className="section-title">分类占比</div>
          <div className="donut-row">
            <DonutChart data={catData} total={total} />
            <div className="cat-legend">
              {catData.map(d => (
                <div key={d.id} className="legend-item">
                  <span className="legend-dot" style={{background:d.color}}/>
                  <span>{d.icon} {d.name}</span>
                  <span className="legend-pct">{fmtH(d.value)}</span>
                  <span className="legend-pct muted">{Math.round(d.value/total*100)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {goals.length > 0 && (
        <div className="chart-section">
          <div className="section-title">🎯 目标进度</div>
          <div className="stats-goal-list">
            {goals.filter(g=>!g.archived).map(g => {
              const goalTime = filtered.filter(l=>l.goalId===g.id).reduce((a,b)=>a+b.duration,0)
              const tasks = g.tasks || []
              const done = tasks.filter(tk=>tk.done).length
              const pct = tasks.length > 0 ? Math.round(done/tasks.length*100) : 0
              return (
                <div key={g.id} className="stats-goal-item">
                  <div className="stats-goal-header">
                    <span>{g.icon} {g.title}</span>
                    <span className="stats-goal-time">{fmtH(goalTime)}</span>
                  </div>
                  <div className="stats-goal-meta">
                    <span className="muted">{done}/{tasks.length} 任务完成</span>
                    <span className="muted">{pct}%</span>
                  </div>
                  <div className="stats-progress-bar">
                    <div className="stats-progress-fill" style={{width:`${pct}%`, background: g.color || 'var(--accent)'}} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {habits.length > 0 && (
        <div className="chart-section">
          <div className="section-title">✅ 习惯完成情况</div>
          <div className="stats-goal-list">
            {habits.map(h => {
              const checks = h.history || []
              const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - daysInPeriod + 1)
              const periodChecks = checks.filter(d => new Date(d) >= cutoff).length
              const rate = Math.round(periodChecks / daysInPeriod * 100)
              const habitTime = filtered.filter(l=>l.habitId===h.id).reduce((a,b)=>a+b.duration,0)
              return (
                <div key={h.id} className="stats-goal-item">
                  <div className="stats-goal-header">
                    <span>{h.icon} {h.title}</span>
                    <span className="stats-goal-time">{habitTime > 0 ? fmtH(habitTime) : `🔥 ${h.streak||0}天`}</span>
                  </div>
                  <div className="stats-goal-meta">
                    <span className="muted">{periodChecks}/{daysInPeriod} 天完成</span>
                    <span className="muted">{rate}%</span>
                  </div>
                  <div className="stats-progress-bar">
                    <div className="stats-progress-fill" style={{width:`${rate}%`, background: h.color || '#10b981'}} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      <div className="chart-section">
        <div className="section-title">活动记录</div>
        {filtered.length === 0 ? (
          <div className="empty-state"><p>该时间段暂无记录</p></div>
        ) : (
          <div className="logs-list">
            {filtered.slice(0,30).map(l => (
              <div key={l.id} className="log-item" style={{borderLeftColor:l.categoryColor}}>
                <span className="log-icon">{l.categoryIcon}</span>
                <div className="log-details">
                  <div className="log-desc">{l.description}</div>
                  <div className="log-time-str">
                    {new Date(l.date).toLocaleString('zh-CN',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})}
                  </div>
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

// ─── Habits View ──────────────────────────────────────────────────────────────
function HabitsView({ habits, setHabits }) {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm]         = useState({ title:'', icon:'✅' })
  const today = todayStr()

  const toggle = id => {
    setHabits(hs => hs.map(h => {
      if (h.id !== id) return h
      const history     = h.history || []
      const alreadyDone = history.includes(today)
      const newHistory  = alreadyDone ? history.filter(d=>d!==today) : [...history, today]
      let streak = 0
      const d = new Date()
      for (let i = 0; i < 365; i++) {
        const ds = new Date(d); ds.setDate(d.getDate()-i)
        const dstr = ds.toISOString().slice(0,10)
        if (newHistory.includes(dstr)) streak++
        else if (i > 0) break
      }
      return { ...h, history: newHistory, streak }
    }))
  }

  const addHabit = () => {
    if (!form.title.trim()) return
    setHabits(hs => [...hs, { ...form, id:Date.now(), history:[], streak:0 }])
    setForm({ title:'', icon:'✅' }); setShowForm(false)
  }

  const last7 = Array.from({length:7}, (_,i) => {
    const d = new Date(); d.setDate(d.getDate()-(6-i))
    return d.toISOString().slice(0,10)
  })

  const doneCnt = habits.filter(h=>(h.history||[]).includes(today)).length
  const rate    = habits.length > 0 ? doneCnt / habits.length : 0
  const C34     = 2 * Math.PI * 34

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>习惯打卡</h2>
          <div className="page-subtitle">每日重复的行为，靠坚持积累连续天数</div>
        </div>
        <button className="btn-primary" onClick={()=>setShowForm(true)}>+ 添加</button>
      </div>

      {habits.length > 0 && (
        <div className="habit-summary">
          <svg viewBox="0 0 80 80" width="70" height="70">
            <circle cx="40" cy="40" r="34" fill="none" stroke="var(--border)" strokeWidth="8"/>
            <circle cx="40" cy="40" r="34" fill="none" stroke="#10b981" strokeWidth="8"
              strokeDasharray={C34} strokeDashoffset={C34*(1-rate)}
              transform="rotate(-90 40 40)" strokeLinecap="round"/>
            <text x="40" y="45" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--text)">
              {Math.round(rate*100)}%
            </text>
          </svg>
          <div>
            <div className="habit-sum-title">今日完成 {doneCnt}/{habits.length}</div>
            <div className="habit-sum-sub">坚持是最好的习惯</div>
          </div>
        </div>
      )}

      {showForm && (
        <div className="modal-overlay" onClick={()=>setShowForm(false)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <h3 className="modal-title">新建习惯</h3>
            <div className="form-group">
              <label>快速选择</label>
              <div className="preset-habits">
                {PRESET_HABITS.map(p => (
                  <button key={p.title} className="preset-btn"
                    onClick={()=>setForm({title:p.title,icon:p.icon})}>
                    {p.icon} {p.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>图标</label>
              <input className="text-input" style={{width:60}} value={form.icon}
                onChange={e=>setForm(f=>({...f,icon:e.target.value}))} />
            </div>
            <div className="form-group">
              <label>习惯名称</label>
              <input className="text-input" placeholder="例：每天读书30分钟" value={form.title}
                onChange={e=>setForm(f=>({...f,title:e.target.value}))}
                onKeyDown={e=>e.key==='Enter'&&addHabit()} />
            </div>
            <div className="modal-actions">
              <button className="btn-secondary" onClick={()=>setShowForm(false)}>取消</button>
              <button className="btn-primary" onClick={addHabit}>添加</button>
            </div>
          </div>
        </div>
      )}

      {habits.length === 0 ? (
        <div className="empty-state">
          <div style={{fontSize:'3rem',marginBottom:12}}>✅</div>
          <p>还没有习惯，点击"添加"开始坚持吧！</p>
        </div>
      ) : (
        <div className="habits-list">
          {habits.map(h => {
            const done = (h.history||[]).includes(today)
            return (
              <div key={h.id} className={`habit-card ${done?'done':''}`}>
                <button className={`habit-check ${done?'checked':''}`} onClick={()=>toggle(h.id)}>
                  {done && '✓'}
                </button>
                <div className="habit-info">
                  <div className="habit-name">{h.icon} {h.title}</div>
                  <div className="habit-streak">
                    {h.streak > 0 ? `🔥 ${h.streak} 天连续` : '今天开始！'}
                  </div>
                </div>
                <div className="habit-dots">
                  {last7.map(d => (
                    <div key={d} className={`h-dot ${(h.history||[]).includes(d)?'done':''}`} title={d}/>
                  ))}
                </div>
                <button className="icon-action"
                  onClick={()=>setHabits(hs=>hs.filter(hh=>hh.id!==h.id))}>✕</button>
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
  const [mode,    setMode]    = useState('login')
  const [email,   setEmail]   = useState('')
  const [pw,      setPw]      = useState('')
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')

  const submit = async e => {
    e.preventDefault()
    if (!email || !pw) return
    setLoading(true); setError('')
    try {
      await onAuth(mode, email, pw)
    } catch (err) {
      const msg = {
        'auth/invalid-email':        '邮箱格式不正确',
        'auth/user-not-found':       '账号不存在',
        'auth/wrong-password':       '密码错误',
        'auth/invalid-credential':   '邮箱或密码错误',
        'auth/email-already-in-use': '该邮箱已注册，请直接登录',
        'auth/weak-password':        '密码至少6位',
        'auth/too-many-requests':    '尝试次数过多，请稍后再试',
      }[err.code] || '操作失败，请重试'
      setError(msg)
    }
    setLoading(false)
  }

  return (
    <div className="login-tabs-wrap">
      <div className="login-tabs">
        <button className={mode==='login'?'active':''} onClick={()=>{setMode('login');setError('')}}>登录</button>
        <button className={mode==='register'?'active':''} onClick={()=>{setMode('register');setError('')}}>注册</button>
      </div>
      <form onSubmit={submit}>
        <div className="login-field">
          <input className="login-input" type="email" placeholder="邮箱地址"
            value={email} onChange={e=>setEmail(e.target.value)} autoComplete="email" required />
        </div>
        <div className="login-field">
          <input className="login-input" type="password" placeholder="密码（至少6位）"
            value={pw} onChange={e=>setPw(e.target.value)}
            autoComplete={mode==='login'?'current-password':'new-password'} required />
        </div>
        {error && <div className="login-error">{error}</div>}
        <button className="login-btn" type="submit" disabled={loading}>
          {loading ? '请稍候...' : mode==='login' ? '登录并同步' : '注册账号'}
        </button>
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

  // ── Cloud data ──
  const [cloudDark,      setCloudDark]      = useState(false)
  const [cloudLogs,      setCloudLogs]      = useState([])
  const [cloudGoals,     setCloudGoals]     = useState([])
  const [cloudHabits,    setCloudHabits]    = useState([])
  const [cloudTemplates, setCloudTemplates] = useState([])
  const [cloudPlans,     setCloudPlans]     = useState([])
  const [cloudLang,      setCloudLang]      = useState('zh')

  // ── Local data ──
  const [localDark,      setLocalDark]      = useLS('darkMode',   false)
  const [localLogs,      setLocalLogs]      = useLS('timeLogs',   [])
  const [localGoals,     setLocalGoals]     = useLS('goals',      [])
  const [localHabits,    setLocalHabits]    = useLS('habits',     [])
  const [localTemplates, setLocalTemplates] = useLS('templates',  [])
  const [localPlans,     setLocalPlans]     = useLS('plans',      [])
  const [localLang,      setLocalLang]      = useLS('lang',       'zh')

  const isCloud    = FIREBASE_CONFIGURED && !!user
  const dark       = isCloud ? cloudDark      : localDark
  const logs       = isCloud ? cloudLogs      : localLogs
  const goals      = isCloud ? cloudGoals     : localGoals
  const habits     = isCloud ? cloudHabits    : localHabits
  const templates  = isCloud ? cloudTemplates : localTemplates
  const plans      = isCloud ? cloudPlans     : localPlans
  const lang       = isCloud ? cloudLang      : localLang
  const setDark      = isCloud ? setCloudDark      : setLocalDark
  const setLogs      = isCloud ? setCloudLogs      : setLocalLogs
  const setGoals     = isCloud ? setCloudGoals     : setLocalGoals
  const setHabits    = isCloud ? setCloudHabits    : setLocalHabits
  const setTemplates = isCloud ? setCloudTemplates : setLocalTemplates
  const setPlans     = isCloud ? setCloudPlans     : setLocalPlans
  const setLang      = isCloud ? setCloudLang      : setLocalLang

  // ── PWA install prompt ──
  const [pwaPrompt,  setPwaPrompt]  = useState(null)
  const [pwaDismiss, setPwaDismiss] = useLS('pwaDismissed', false)

  useEffect(() => {
    const handler = e => { e.preventDefault(); setPwaPrompt(e) }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  // ── Auth ──
  useEffect(() => {
    if (!FIREBASE_CONFIGURED) return
    return onAuthStateChanged(auth, u => setUser(u ?? null))
  }, [])

  useEffect(() => {
    if (!user) return
    const unsub = subscribeUserData(user.uid, data => {
      if (data.timeLogs   !== undefined) setLogs(data.timeLogs)
      if (data.goals      !== undefined) setGoals(data.goals)
      if (data.habits     !== undefined) setHabits(data.habits)
      if (data.darkMode   !== undefined) setDark(data.darkMode)
      if (data.templates  !== undefined) setCloudTemplates(data.templates)
      if (data.plans      !== undefined) setCloudPlans(data.plans)
      if (data.lang       !== undefined) setCloudLang(data.lang)
    })
    return unsub
  }, [user])

  const initialized = useRef(false)
  useEffect(() => {
    if (!user) return
    if (!initialized.current) { initialized.current = true; return }
    saveUserData(user.uid, { timeLogs: logs, goals, habits, darkMode: dark, templates, plans, lang })
  }, [logs, goals, habits, dark, templates, plans, lang])

  const handleAuth = async (mode, email, pw) => {
    if (mode === 'login') await login(email, pw)
    else await register(email, pw)
  }

  const onSave      = log => setLogs(p => [log, ...p])
  const onDeleteLog = id  => setLogs(p => p.filter(l => l.id !== id))

  const todayTotal = logs
    .filter(l => new Date(l.date).toDateString() === new Date().toDateString())
    .reduce((a,b) => a + b.duration, 0)

  const [showLoginModal, setShowLoginModal] = useState(false)

  if (user === undefined) {
    return (
      <div className="app">
        <div className="splash">
          <div className="splash-logo">⏳</div>
          <div className="splash-name">TimeFlow</div>
        </div>
      </div>
    )
  }

  const NAV_TABS = [
    ['timer', '⏱', t(lang,'timer')],
    ['goals', '🎯', t(lang,'goals')],
    ['plan',  '📋', t(lang,'plan')],
    ['stats', '📊', t(lang,'stats')],
    ['habits','✅', t(lang,'habits')],
  ]

  return (
    <div className={`app ${dark?'dark':''}`}>
      <header className="app-header">
        <div className="header-inner">
          <div>
            <h1 className="app-title">⏳ TimeFlow</h1>
            <p className="app-sub">{t(lang,'todayTotal')} <strong>{fmtH(todayTotal)}</strong></p>
          </div>
          <div className="header-actions">
            <button className="lang-btn" onClick={() => setLang(l => l==='zh'?'en':'zh')}
              title="切换语言 / Switch Language">
              {lang==='zh' ? 'EN' : '中'}
            </button>
            <button className="dark-btn" onClick={()=>setDark(d=>!d)} title="深色模式">
              {dark ? '☀️' : '🌙'}
            </button>
            {user ? (
              <button className="avatar-btn synced"
                onClick={()=>{ if(confirm(`退出登录？\n(${user.email})`)) logout() }}
                title={`已同步：${user.email}`}>
                {(user.email?.[0] ?? '?').toUpperCase()}
              </button>
            ) : (
              <button className="sync-btn" onClick={()=>setShowLoginModal(true)} title="登录以同步数据">
                ☁️
              </button>
            )}
          </div>
        </div>
      </header>

      {/* PWA install banner */}
      {pwaPrompt && !pwaDismiss && (
        <div className="pwa-banner">
          <span>{t(lang,'installApp')}</span>
          <div style={{display:'flex',gap:6,flexShrink:0}}>
            <button className="pwa-install-btn" onClick={async () => {
              pwaPrompt.prompt()
              await pwaPrompt.userChoice
              setPwaPrompt(null)
            }}>{t(lang,'install')}</button>
            <button className="pwa-dismiss-btn" onClick={() => setPwaDismiss(true)}>✕</button>
          </div>
        </div>
      )}

      <main className="main-content">
        {tab==='timer'  && <TimerView  logs={logs} onSave={onSave} goals={goals} habits={habits} templates={templates} setTemplates={setTemplates} lang={lang} />}
        {tab==='goals'  && <GoalsView  goals={goals} setGoals={setGoals} logs={logs} />}
        {tab==='plan'   && <PlanView   plans={plans} setPlans={setPlans} logs={logs} lang={lang} />}
        {tab==='stats'  && <StatsView  logs={logs} onDeleteLog={onDeleteLog} goals={goals} habits={habits} />}
        {tab==='habits' && <HabitsView habits={habits} setHabits={setHabits} />}
      </main>

      <nav className="bottom-nav">
        {NAV_TABS.map(([k,ic,lb]) => (
          <button key={k} className={`nav-btn ${tab===k?'active':''}`} onClick={()=>setTab(k)}>
            <span className="nav-ic">{ic}</span>
            <span className="nav-lb">{lb}</span>
          </button>
        ))}
      </nav>

      {showLoginModal && (
        <div className="modal-overlay" onClick={()=>setShowLoginModal(false)}>
          <div className="modal login-modal" onClick={e=>e.stopPropagation()}>
            <div className="login-modal-header">
              <div>
                <div className="login-modal-title">☁️ 云端同步</div>
                <div className="login-modal-sub">登录后数据自动同步到所有设备</div>
              </div>
              <button className="modal-close" onClick={()=>setShowLoginModal(false)}>✕</button>
            </div>
            <LoginScreen onAuth={async (mode,email,pw)=>{
              await handleAuth(mode,email,pw)
              setShowLoginModal(false)
            }} />
          </div>
        </div>
      )}
    </div>
  )
}
