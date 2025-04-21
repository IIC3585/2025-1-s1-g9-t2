self.addEventListener('install', (event) => {
    event.waitUntil(
        (async () => {
            try {
                const cache = await caches.open('static-v1');
                console.log('Service Worker: Caching Files');
                await cache.addAll([
                    '/2025-1-s1-g9-t2/',
                    '/2025-1-s1-g9-t2/app.js',
                    '/2025-1-s1-g9-t2/style.css',
                    '/2025-1-s1-g9-t2/index.html',
                    '/2025-1-s1-g9-t2/camIcon192.png',
                    '/2025-1-s1-g9-t2/camIcon512.png',
                    '/2025-1-s1-g9-t2/camIcon512sinfondo2.png',
                    '/2025-1-s1-g9-t2/manifest.json',
                    '/2025-1-s1-g9-t2/iconLogo.png'
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
