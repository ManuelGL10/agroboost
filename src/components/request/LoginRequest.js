const LoginRequest = async ({ email, password }) => {
  try {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${backendUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correo_electronico: email,
        contrasena: password,
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
};

export default LoginRequest;
