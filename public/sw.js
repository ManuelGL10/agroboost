
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
    let data = { title: 'Agroboost', body: 'Nuevo mensaje' };

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

// Sincronización en segundo plano
self.addEventListener('sync', (event) => {
    console.log('Evento de sincronización detectado:', event);

    if (event.tag === 'sync-users') {
        event.waitUntil(syncUsers());
    }
});

// Función para sincronizar usuarios desde IndexedDB
function syncUsers() {
    return new Promise((resolve, reject) => {
        const dbRequest = indexedDB.open('agroboostDB'); // Nombre de la base de datos

        dbRequest.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction('users', 'readonly');
            const objectStore = transaction.objectStore('users');
            const getAllRequest = objectStore.getAll();

            getAllRequest.onsuccess = () => {
                const users = getAllRequest.result;

                if (users.length === 0) {
                    console.log('No hay usuarios para sincronizar.');
                    return resolve();
                }

                // Enviar cada usuario al backend
                const promises = users.map((user) => {
                    return fetch(`https://agroboost-server.onrender.com/register`, { 
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(user),
                    })
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error('Error en la API');
                            }
                            return response.json();
                        })
                        .then((data) => {
                            console.log('Usuario sincronizado con éxito:', data);
                            eliminarUsuario(user.id); // Elimina el usuario sincronizado
                        })
                        .catch((error) => {
                            console.error('Error al sincronizar usuario:', error);
                        });
                });

                Promise.all(promises)
                    .then(() => {
                        console.log('Sincronización completa.');
                        resolve();
                    })
                    .catch((error) => {
                        console.error('Error en la sincronización:', error);
                        reject();
                    });
            };

            getAllRequest.onerror = (event) => {
                console.error('Error al obtener usuarios de IndexedDB:', event);
                reject();
            };
        };

        dbRequest.onerror = (event) => {
            console.error('Error al abrir la base de datos:', event);
            reject();
        };
    });
}

// Función para eliminar usuarios sincronizados de IndexedDB
function eliminarUsuario(id) {
    const request = indexedDB.open('agroboostDB'); // Nombre de la base de datos

    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction('users', 'readwrite');
        const objectStore = transaction.objectStore('users');
        const deleteRequest = objectStore.delete(id);

        deleteRequest.onsuccess = () => {
            console.log(`Registro de usuario con ID ${id} eliminado de IndexedDB.`);
        };

        deleteRequest.onerror = (event) => {
            console.error(`Error al eliminar el registro con ID ${id}:`, event);
        };
    };

    request.onerror = (event) => {
        console.error('Error al abrir la base de datos para eliminar un usuario:', event);
    };
}
