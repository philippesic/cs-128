const cacheName = 'pwa-cache';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        '/src/index.html',
        '/src/style.css',
        '/src/main.js',
        '/img/lightblue.jpg',
        '/img/lightgold.jpg'
      ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
