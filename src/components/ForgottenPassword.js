import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ForgottenPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email:', email);    
  };

  return (
    <div className="relative max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <Link to="/Login" className="absolute top-0 left-0 p-4">
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </Link>
      <h2 className="block font-medium md:text-4xl sm:text-3xl text-2xl text-custom-204E51 mb-16 text-center">¿Olvidaste tu contraseña?</h2>
      <div className="flex items-center mb-16">
        <h1 className="block font-medium md:text-2xl sm:text-xl text-lg text-black mb-6 text-center">Te enviaremos un código de verificación para restablecerla</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-24">
          <label htmlFor="email" className="block font-medium text-base text-custom-00000 mb-2 text-left">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese su correo"
            required
          />
        </div>
        <button type="submit" className="w-full bg-custom-204E51 text-white font-semibold px-6 py-3 rounded-lg hover:bg-custom-306C73 focus:outline-none focus:bg-custom-306C73 focus:ring-2 focus:ring-custom-204E51">
          Enviar código
        </button>
        <div className="flex items-center mt-6 mb-40">
        </div>
      </form>
    </div>
  );
};

export default ForgottenPassword;
