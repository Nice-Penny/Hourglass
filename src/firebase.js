import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { getFirestore, doc, onSnapshot, setDoc } from 'firebase/firestore'

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
  db   = getFirestore(app)
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
export function saveUserData(uid, data) {
  if (!FIREBASE_CONFIGURED) return
  clearTimeout(writeTimer)
  writeTimer = setTimeout(() => setDoc(doc(db, 'users', uid), data, { merge: true }), 500)
}
