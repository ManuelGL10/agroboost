const saveUserToIndexedDB = (user) => {
  return new Promise((resolve, reject) => {
    const dbRequest = indexedDB.open('agroboostDB'); // Nombre de la base de datos

    dbRequest.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { keyPath: 'id', autoIncrement: true }); // ObjectStore para usuarios
      }
    };

    dbRequest.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction('users', 'readwrite');
      const objectStore = transaction.objectStore('users');
      const addRequest = objectStore.add(user);

      addRequest.onsuccess = () => {
        resolve();
      };

      addRequest.onerror = () => {
        reject('Error al guardar el usuario en IndexedDB');
      };
    };

    dbRequest.onerror = () => {
      reject('Error al abrir IndexedDB');
    };
  });
};

const RegistroRequest = async ({ name, apellidopaterno, apellidomaterno, email, password, rol }) => {
  const userToRegister = {
    nombre: name,
    apellido_paterno: apellidopaterno,
    apellido_materno: apellidomaterno,
    correo_electronico: email,
    contrasena: password,
    rol: rol,
  };

  try {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${backendUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userToRegister),
    });
 
    const data = await response.json();

    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, error: data.mensaje };
    }
  } catch (error) {
    console.error('Error en la petición, guardando localmente:', error);

    // Si hay error de red, guardar en IndexedDB
    try {
      await saveUserToIndexedDB(userToRegister);
      console.log('Usuario guardado en IndexedDB debido a la falla en la red');
    } catch (err) {
      console.error('Error al guardar en IndexedDB:', err);
    }

    // Registrar tarea de sincronización
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      try {
        const sw = await navigator.serviceWorker.ready;
        await sw.sync.register('sync-users'); // Registrar sincronización
        console.log('Sincronización registrada');
      } catch (err) {
        console.error('Error al registrar la sincronización:', err);
      }
    }

    return { success: false, error: 'Usuario guardado localmente. Sincronización pendiente.' };
  }
};

export default RegistroRequest;
