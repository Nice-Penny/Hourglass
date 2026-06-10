const CACHE_NAME = 'hourglass-v4';
const urlsToCache = ['./', './index.html', './manifest.json'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.map(k => k!==CACHE_NAME && caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request).then(r => { if(r&&r.status===200){const c=r.clone();caches.open(CACHE_NAME).then(ca=>ca.put(e.request,c));} return r; }).catch(()=>caches.match(e.request))); });
