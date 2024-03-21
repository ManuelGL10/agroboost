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
    <div className="max-w-md p-6 bg-white rounded-lg shadow-lg h-[85%]">
      <Link to="/Login">
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </Link>
      <div className='flex flex-col h-full justify-between py-6'>
        <h2 className="font-medium md:text-3xl sm:text-2xl text-xl text-custom-204E51 text-center">¿Olvidaste tu contraseña?</h2>
        <h1 className="md:text-xl sm:text-lg text-base text-gray-500 text-center">Te enviaremos un código de verificación para restablecerla</h1>
        <form onSubmit={handleSubmit} className='my-4'>
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
        </form>
      </div>
    </div>
  );
};

export default ForgottenPassword;
