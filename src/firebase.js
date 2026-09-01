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
  db   = initializeFirestore(app, { ignoreUndefinedProperties: true })
}

export { auth, db, onAuthStateChanged }

export const login    = (email, pw) => signInWithEmailAndPassword(auth, email, pw)
export const register = (email, pw) => createUserWithEmailAndPassword(auth, email, pw)
export const logout   = ()          => signOut(auth)

export function subscribeUserData(uid, callback) {
  if (!FIREBASE_CONFIGURED) return () => {}
  return onSnapshot(doc(db, 'users', uid), snap => {
    if (snap.exists()) callback(snap.data())
  })
}

let writeTimer = null
export function saveUserData(uid, data, onError) {
  if (!FIREBASE_CONFIGURED) return
  clearTimeout(writeTimer)
  writeTimer = setTimeout(() => {
    try {
      setDoc(doc(db, 'users', uid), data, { merge: true })
        .catch(err => { try { onError && onError(err) } catch {} })
    } catch (err) { try { onError && onError(err) } catch {} }
  }, 600)
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
