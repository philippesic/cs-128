
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  './',
  './img/cordova.png',
  './img/cordova_icon.png',
  './img/flutter.png',
  './img/react.png',
  './img/react_logo.png',
  './style.css',
  './main.js',
  './Flutter.html',
  './Cordova.html',
  './React.html'
];


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});


self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName.startsWith('my-site-cache-') && cacheName !== CACHE_NAME;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    }).then(() => self.clients.claim())
  );
});


self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
