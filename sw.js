// Service Worker for Hourglass PWA
// Bump CACHE_NAME whenever the precache list changes.
const CACHE_NAME = 'hourglass-v5';

// Only precache URLs that are guaranteed to exist in the deployed build.
// cache.addAll() rejects atomically if ANY entry 404s, which would abort the
// whole install — the previous list referenced time-tracker.html, which is not
// part of the build output, so the worker never installed at all.
const urlsToCache = ['./', './index.html', './manifest.json'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      // Cache opportunistically: one bad URL must not break installation.
      .then(cache => Promise.allSettled(urlsToCache.map(u => cache.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// NETWORK FIRST — always prefer the freshest build; fall back to cache offline.
self.addEventListener('fetch', event => {
  const req = event.request;
  // Never touch non-GET (Firestore writes) or cross-origin requests.
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(() => {})
        }
        return response
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match('./index.html')))
  );
});
