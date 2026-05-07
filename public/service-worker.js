const CACHE_NAME = 'pivo-v1';
const VIDEO_CACHE = 'pivo-videos-v1';
const ASSETS_TO_CACHE = [
  '/'
];

// Установка Service Worker и кэширование базовых ассетов
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {
        // Игнорируем ошибки при добавлении в кэш
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

// Активация Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== VIDEO_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Перехват запросов и кэширование
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Кэширование видео файлов
  if (request.url.includes('.mp4')) {
    event.respondWith(
      caches.open(VIDEO_CACHE).then(cache => {
        return cache.match(request).then(response => {
          if (response) {
            return response;
          }
          return fetch(request).then(response => {
            // Кэшируем только успешные ответы
            if (response.status === 200) {
              cache.put(request, response.clone());
            }
            return response;
          }).catch(() => {
            // Если нет сети и нет в кэше, возвращаем ошибку
            return new Response('Video not available', { status: 503 });
          });
        });
      })
    );
    return;
  }

  // Для остальных ассетов - сначала из кэша, потом из сети
  event.respondWith(
    caches.match(request).then(response => {
      if (response) {
        return response;
      }
      return fetch(request).then(response => {
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(request, responseToCache);
        });
        return response;
      });
    })
  );
});
