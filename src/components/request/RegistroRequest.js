const RegistroRequest = async ({name, apellidopaterno, apellidomaterno, email, password, rol }) => {
    try {
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        const response = await fetch(`${backendUrl}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: name,
            apellido_paterno: apellidopaterno,
            apellido_materno: apellidomaterno,
            correo_electronico: email,
            contrasena: password,
            rol: rol
          }),
        });
    
        const data = await response.json();
    
        if (response.ok) {
          return { success: true, data };
        } else {
          return { success: false, error: data.mensaje };
        }
      } catch (error) {
        return { success: false, error: error.message };
      }
}

export default RegistroRequest