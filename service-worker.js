const CACHE_NAME = 'memory-palace-v11';
const URLS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS)));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
