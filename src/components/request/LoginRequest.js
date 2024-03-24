import React from 'react';

const LoginRequest = async ({ email, password }) => {
  try {
    const response = await fetch('http://localhost:4000/login', {
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
