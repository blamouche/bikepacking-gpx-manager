// Service Worker pour Cycling Companion
// Version 1.0.0

const CACHE_NAME = 'cycling-companion-v1.0.0';
const BASE_PATH = '/bikepacking-gpx-manager';

// Ressources essentielles à mettre en cache
const CRITICAL_ASSETS = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/img/logo.png`,
  `${BASE_PATH}/img/icon-192x192.png`,
  `${BASE_PATH}/img/icon-512x512.png`,
  `${BASE_PATH}/img/favicon-32x32.png`,
  `${BASE_PATH}/site.webmanifest`
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installation...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Mise en cache des ressources critiques');
        return cache.addAll(CRITICAL_ASSETS);
      })
      .then(() => {
        console.log('[SW] Installation terminée');
        return self.skipWaiting(); // Active immédiatement
      })
      .catch((error) => {
        console.error("[SW] Erreur d'installation:", error);
      })
  );
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activation...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // Supprimer les anciens caches
              return cacheName.startsWith('cycling-companion-') && 
                     cacheName !== CACHE_NAME;
            })
            .map((cacheName) => {
              console.log('[SW] Suppression ancien cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('[SW] Activation terminée');
        return self.clients.claim(); // Prend le contrôle immédiatement
      })
  );
});

// Stratégie de cache : Network First avec fallback sur cache
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Ne pas intercepter les requêtes externes (cartes, API)
  if (!url.pathname.startsWith(BASE_PATH)) {
    return;
  }
  
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Si la réponse est valide, la mettre en cache
        if (response && response.status === 200) {
          const responseClone = response.clone();
          
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(request, responseClone);
            })
            .catch((error) => {
              console.warn('[SW] Erreur de mise en cache:', error);
            });
        }
        
        return response;
      })
      .catch(() => {
        // En cas d'échec réseau, utiliser le cache
        return caches.match(request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              console.log('[SW] Ressource servie depuis le cache:', request.url);
              return cachedResponse;
            }
            
            // Si la ressource n'est pas en cache et c'est une page HTML
            if (request.headers.get('accept')?.includes('text/html')) {
              return caches.match(`${BASE_PATH}/index.html`);
            }
            
            // Sinon, retourner une erreur
            return new Response('Ressource non disponible hors ligne', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: { 'Content-Type': 'text/plain' }
            });
          });
      })
  );
});

// Gestion des messages (pour les mises à jour)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('[SW] Service Worker chargé');
