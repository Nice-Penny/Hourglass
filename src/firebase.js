import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  initializeFirestore, doc, onSnapshot, setDoc, deleteDoc,
  collection, query, orderBy, limit, writeBatch, deleteField,
  getDocs, persistentLocalCache, persistentMultipleTabManager,
} from 'firebase/firestore'

const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET,
  VITE_FIREBASE_MESSAGING_SENDER_ID,
  VITE_FIREBASE_APP_ID,
} = import.meta.env

export const FIREBASE_CONFIGURED = !!(VITE_FIREBASE_API_KEY && VITE_FIREBASE_PROJECT_ID)

let auth, db

if (FIREBASE_CONFIGURED) {
  const app = initializeApp({
    apiKey:            VITE_FIREBASE_API_KEY,
    authDomain:        VITE_FIREBASE_AUTH_DOMAIN,
    projectId:         VITE_FIREBASE_PROJECT_ID,
    storageBucket:     VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId:             VITE_FIREBASE_APP_ID,
  })
  auth = getAuth(app)
  // ignoreUndefinedProperties: without it, ANY object containing an `undefined`
  // field makes setDoc() throw *synchronously* — which skips the caller's
  // .catch(), aborts the calling function mid-way, and silently kills sync.
  //
  // persistentLocalCache: writes made while offline (or on a phone with a flaky
  // connection, or one the OS kills mid-request) are journalled to IndexedDB and
  // replayed automatically once connectivity returns. Without it a failed write
  // was simply lost, which is how records ended up on one device only.
  const settings = { ignoreUndefinedProperties: true }
  try {
    db = initializeFirestore(app, {
      ...settings,
      localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
    })
  } catch (err) {
    // Private browsing / storage disabled / unsupported browser — still usable,
    // just without the offline queue.
    console.warn('Offline persistence unavailable, falling back to memory cache', err)
    db = initializeFirestore(app, settings)
  }
}

export { auth, db, onAuthStateChanged }

export const login    = (email, pw) => signInWithEmailAndPassword(auth, email, pw)
export const register = (email, pw) => createUserWithEmailAndPassword(auth, email, pw)
export const logout   = ()          => signOut(auth)

export function subscribeUserData(uid, callback, onError) {
  if (!FIREBASE_CONFIGURED) return () => {}
  return onSnapshot(doc(db, 'users', uid),
    // `exists: false` still counts as loaded — a new account has no doc yet, and
    // gating readiness on existence meant its data was never saved at all.
    snap => callback(snap.exists() ? snap.data() : null, snap.exists()),
    err => { try { onError && onError(err) } catch {} })
}

let writeTimer = null
let pendingWrite = null   // { uid, data, onError } queued behind the debounce

function commitUserData({ uid, data, onError }) {
  try {
    return setDoc(doc(db, 'users', uid), data, { merge: true })
      .catch(err => { try { onError && onError(err) } catch {} })
  } catch (err) { try { onError && onError(err) } catch {} }
}

export function saveUserData(uid, data, onError) {
  if (!FIREBASE_CONFIGURED) return
  clearTimeout(writeTimer)
  pendingWrite = { uid, data, onError }
  writeTimer = setTimeout(() => {
    const w = pendingWrite; pendingWrite = null
    if (w) commitUserData(w)
  }, 600)
}

// Force out a debounced write immediately. Mobile browsers freeze or kill a
// backgrounded page well inside the 600ms debounce window, so without this the
// most recent edit before switching apps was routinely dropped.
export function flushUserData() {
  if (!FIREBASE_CONFIGURED || !pendingWrite) return
  clearTimeout(writeTimer)
  const w = pendingWrite; pendingWrite = null
  commitUserData(w)
}

// ─── Time logs stored as a subcollection (avoids the 1MB single-doc limit) ──────
// Each log lives at users/{uid}/logs/{logId}. Newest first, capped read window.
export function subscribeLogs(uid, callback) {
  if (!FIREBASE_CONFIGURED) return () => {}
  const q = query(collection(db, 'users', uid, 'logs'), orderBy('date', 'desc'), limit(2000))
  return onSnapshot(q, snap => {
    callback(snap.docs.map(d => d.data()))
  })
}

export function addLog(uid, log) {
  if (!FIREBASE_CONFIGURED) return Promise.resolve()
  // Always return a promise — a synchronous throw here would unwind into the
  // timer's stop() handler and leave the stopwatch frozen mid-save.
  try { return setDoc(doc(db, 'users', uid, 'logs', String(log.id)), log) }
  catch (err) { return Promise.reject(err) }
}

export function deleteLogDoc(uid, logId) {
  if (!FIREBASE_CONFIGURED) return Promise.resolve()
  try { return deleteDoc(doc(db, 'users', uid, 'logs', String(logId))) }
  catch (err) { return Promise.reject(err) }
}

// One-time migration: move legacy logs from the main user doc into the subcollection,
// then clear the `timeLogs` field. Chunked to respect the 500-op batch limit.
export async function migrateLogsToSubcollection(uid, timeLogs) {
  if (!FIREBASE_CONFIGURED || !Array.isArray(timeLogs) || timeLogs.length === 0) return
  for (let i = 0; i < timeLogs.length; i += 400) {
    const batch = writeBatch(db)
    timeLogs.slice(i, i + 400).forEach(log => {
      if (log && log.id != null) batch.set(doc(db, 'users', uid, 'logs', String(log.id)), log)
    })
    await batch.commit()
  }
  await setDoc(doc(db, 'users', uid), { timeLogs: deleteField() }, { merge: true })
}

// Read every log id already in the cloud, so a reconcile can tell which local
// records never made it there.
export async function fetchAllLogs(uid) {
  if (!FIREBASE_CONFIGURED) return []
  const snap = await getDocs(collection(db, 'users', uid, 'logs'))
  return snap.docs.map(d => d.data())
}

// Upload many logs at once, chunked to respect the 500-op batch limit.
export async function addLogsBatch(uid, logs) {
  if (!FIREBASE_CONFIGURED || !Array.isArray(logs) || logs.length === 0) return 0
  let written = 0
  for (let i = 0; i < logs.length; i += 400) {
    const batch = writeBatch(db)
    logs.slice(i, i + 400).forEach(log => {
      if (log && log.id != null) batch.set(doc(db, 'users', uid, 'logs', String(log.id)), log)
    })
    await batch.commit()
    written += Math.min(400, logs.length - i)
  }
  return written
}
