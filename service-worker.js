// Ocsus Limiares — Service Worker
// Cache-first para funcionamento 100% offline após primeira carga

const CACHE_NAME = 'Ocsus-limiares-v2';
const CORE_ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './css/style.css',
    './js/app.js',
    './js/data.js',
    './js/sigil.js',
    './js/narrative.js',
    './js/storage.js',
    './js/views.js',
    './icons/icon.svg',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/icon-maskable.png'
];

// INSTALL — pré-cache dos assets essenciais
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            // Cache core assets locais obrigatórios; externos tentam mas não falham
            return Promise.all(
                CORE_ASSETS.map(url =>
                    cache.add(url).catch(err => {
                        console.warn('[SW] Falha ao cachear:', url, err);
                    })
                )
            );
        }).then(() => self.skipWaiting())
    );
});

// ACTIVATE — limpa caches antigos
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((names) => {
            return Promise.all(
                names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
            );
        }).then(() => self.clients.claim())
    );
});

// FETCH — cache-first; se falhar, tenta rede; se ambos falharem, fallback
self.addEventListener('fetch', (event) => {
    const req = event.request;
    
    // Ignora requisições não-GET e tables API (é dinâmica)
    if (req.method !== 'GET') return;
    if (req.url.includes('/tables/')) return;
    
    event.respondWith(
        caches.match(req).then((cached) => {
            if (cached) {
                // Revalida em background
                fetch(req).then(fresh => {
                    if (fresh && fresh.status === 200) {
                        caches.open(CACHE_NAME).then(c => c.put(req, fresh));
                    }
                }).catch(() => {});
                return cached;
            }
            
            return fetch(req).then((response) => {
                if (!response || response.status !== 200) return response;
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
                return response;
            }).catch(() => {
                // Fallback se offline e sem cache
                if (req.destination === 'document') {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
