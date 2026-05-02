const CACHE_NAME = 'dragonbane-v1';
const ASSETS = [
  './',
  './index.html',
  './assets-list.js',
  './icon.png',
  './parchment.png',
  './stone.png',
  './wood_dark.png',
  './grass.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
