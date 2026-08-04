// Varuta Pharma Service Worker for PWA offline caching & instant launch performance

const CACHE_NAME = 'varuta-pharma-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo-emblem.png',
  '/logo.png',
  '/favicon.svg',
  '/products/guanolact.jpg',
  '/products/estroclen.jpg',
  '/products/quicknap.jpg',
  '/products/fatease-5.jpg',
  '/products/telage.jpg',
  '/products/erecter.jpg',
  '/products/cystorin.jpg',
  '/swapna-raichur.jpg',
  '/venkatesh-raichur.jpg',
  '/ashutosh-sharma.jpg',
  '/naval-kishore.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  // Skip chrome-extension or external analytics
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached asset, fetch update in background (Stale-While-Revalidate)
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
          }
        }).catch(() => {/* ignore fetch errors while offline */});
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // Fallback for document navigation if offline
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
