console.log('Service Worker: Registered');

self.addEventListener('install', function(e) {
    console.log(e);
});

self.addEventListener('fetch', function(e) {
    console.log(e.request);
});