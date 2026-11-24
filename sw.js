// Minimal service worker so Chrome treats the launcher as installable.
// It caches nothing: the launcher only forwards to the Apps Script remote, which must always be live.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
