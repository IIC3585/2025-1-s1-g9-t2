self.addEventListener('install', (event) => {
    event.waitUntil(
      (async () => {
        try {
          const cache = await caches.open('static-v1');
          console.log('Service Worker: Caching Files');
  
          const base = '/2025-1-s1-g9-t2/';
  
          await cache.addAll([
            `${base}`,
            `${base}index.html`,
            `${base}app.js`,
            `${base}style.css`,
            `${base}camIcon192.png`,
            `${base}camIcon512.png`,
            `${base}camIcon512sinfondo2.png`,
            `${base}manifest.json`,
            `${base}iconLogo.png`
          ]);
        } catch (error) {
          console.error('Error caching files:', error);
        }
      })()
    );
  });
  
  
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
  
    // Ignora rutas especiales de Vite en modo dev
    if (
      url.pathname.startsWith('/@vite') ||
      url.pathname.startsWith('/@fs') ||
      url.protocol === 'chrome-extension:' ||
      url.hostname === 'localhost' // opcional si quieres ignorar todo en dev
    ) {
      return;
    }
  
    console.log('Service Worker: Fetching', event.request.url);
    event.respondWith(cacheSearch(event));
  });
  

async function cacheSearch(event) {
    const cache = await caches.open('static-v1');
    const cacheResponse = await cache.match(event.request)
    if (cacheResponse) {
        console.log('Service Worker: Found in Cache', event.request.url);
        return cacheResponse;
    }

    try {
        const networkResponse = await fetch(event.request);
        console.log('Service Worker: Fetching from Network', event.request.url);
        if (event.request.url.startsWith(self.location.origin)) {
            console.log('Service Worker: Caching New Data');
            cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        console.error('Service Worker: Fetch failed', event.request.url, error);
        throw error;
    }
}

// Firebase Cloud Messaging (FCM)
// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAGHLS1hwXIu7v8EYGHqc320wdwmfZpkj0",
  authDomain: "pwa-g9-2025.firebaseapp.com",
  projectId: "pwa-g9-2025",
  storageBucket: "pwa-g9-2025.firebasestorage.app",
  messagingSenderId: "619074453275",
  appId: "1:619074453275:web:853ca8640be57379015dbe",
  measurementId: "G-ED9XNMQSBZ"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensaje en background:', payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/2025-1-s1-g9-t2/iconLogo.png', // o cualquier ícono que tengas
  });
});

self.addEventListener('message', (event) => {
    console.log('Service Worker: Received message');
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
      self.registration.showNotification(event.data.title, {
        body: event.data.body,
        icon: event.data.icon,
      });
    }
});
  
