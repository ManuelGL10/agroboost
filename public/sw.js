
const APP_SHELL_CACHE = 'appShell'; //Nombre de la caché principal
const DYNAMIC_CACHE = 'dynamic'; // Nombre de la caché dinamica
// Array de las rutas de los archivos esenciales
const APP_SHELL = [
    '/index.html',
    '/manifest.json',   
    '/error.jpg',
    '/static/media/password.e18325d8dd09e30f4009.jpg',
    '/icon/Logo_Agroboost32.png',
    '/icon/Logo_Agroboost64.png',
    '/icon/Logo_Agroboost128.png',
    '/icon/Logo_Agroboost256.png',
    '/icon/Logo_Agroboost512.png',
    '/icon/Logo_Agroboost1024.png',
];

// Instalación del Service Worker y cacheo de archivos principales (app shell)
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(APP_SHELL_CACHE).then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(APP_SHELL);
      })
    );
});

// Activación del SW y limpieza de cachés
self.addEventListener('activate', (event) => {
    //Obtiene los nombres de las caches almacenadas 
    caches.keys().then((keys) => 
        keys
            .filter((keys) => key !== APP_SHELL_CACHE && key !== DYNAMIC_CACHE)
            .map((key) => caches.delete(key)) // Borra los caches que no sean actuales 
    )
}); 


self.addEventListener('fetch', event => {
    const resp = fetch(event.request).then(respuesta => {
        if (!respuesta) {
            // Si la respuesta no existe, buscamos en el cache
            return caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                } else {
                    // Si no está en el cache, retornamos una imagen de error desde el cache
                    return caches.match('/public/error.jpg');
                }
            });
        } else {
            // Si la respuesta existe, la almacenamos en el cache dinámico
            return caches.open(DYNAMIC_CACHE).then(cache => {
                cache.put(event.request.url, respuesta.clone());
                return respuesta;
            });
        }
    }).catch(err => {
        // Si ocurre un error (por ejemplo, si no hay conexión), buscamos en el cache
        return caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            } else {
                // Si no está en el cache, retornamos la imagen de error
                return caches.match('/public/error.jpg');
            }
        });
    });

    event.respondWith(resp);
});


// Listener para push
self.addEventListener('push', event => {
    let data = { title: 'PassGuard', body: 'Nuevo mensaje' };

    if (event.data) {
        console.log("Contenido del evento push:", event.data.text()); // Verifica qué se recibe
        try {
            data = event.data.json();
        } catch (error) {
            console.error("Error al parsear el JSON:", error);
            data.body = event.data.text();
            console.log(data.body)
        }
    }

    const opciones = {
        body: data.body,
        icon: '/icon/icon1024.png',
        silent: null
    };

    self.registration.showNotification(data.title, opciones);
});