import React, { useState } from 'react';
import Logo from '../img/LogoAgroBoostPNG.svg';
import ImgFacebook from '../img/facebook_logo.svg';
import ImgGoogle from '../img/Google_logo.png';
import ModalBienvenida from './ModalBienvenida';
import ModalError from './ModalError';
import { IconEyeOff, IconEye } from '@tabler/icons-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email:', email);
    console.log('Contraseña:', password);
    
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="block font-medium md:text-3xl sm:text-2xl text-xl text-custom-204E51 text-center">Inicio de Sesión</h2>
      <div className="flex items-center my-4">
        <img src={Logo} alt="Logo AgroBoost" className="w-32 h-auto mx-auto"/>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
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
        <div className="mb-3">
          <label htmlFor="password" className="block font-medium text-base text-custom-00000 mb-2 text-left">Contraseña</label>
          <div className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 flex">
            <input
              type={showPassword ? "text" : "password"} 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full focus:outline-none focus:border-blue-500"
              placeholder="Ingresa su contraseña"
              required
            />
            <button
              type="button"
              onClick={handleTogglePasswordVisibility}
            >
              {showPassword ? <IconEye size={24} /> : <IconEyeOff size={24}/>}
            </button>
          </div>
        </div>
        <div className="text-right my-4">
          <a href="/password" className="text-[#4D7A7D]">¿Olvidaste tu contraseña?</a>
        </div>
        <button type="submit" className="w-full bg-custom-204E51 text-white font-semibold px-6 py-3 rounded-lg hover:bg-custom-306C73 focus:outline-none focus:bg-custom-306C73 focus:ring-2 focus:ring-custom-204E51">
          Iniciar Sesión
        </button>
        <div className="flex items-center my-4">
          <hr className="border-black flex-grow" />
          <span className="text-black px-4">o iniciar sesión con</span>
          <hr className="border-black flex-grow" />
        </div>
        <div className="flex justify-evenly">
          <button type="button" className="flex items-center bg-white text-black border border-171717 font-medium px-6 py-3 rounded-lg hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
          <img src={ImgGoogle} alt="ImgGoogle" className="w-6 h-6 mr-2" />
            Google
          </button>
          <button type="button" className="flex items-center bg-white text-black border border-171717 font-medium px-6 py-3 rounded-lg hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
          <img src={ImgFacebook} alt="ImgFacebook" className="w-6 h-6 mr-2" />
            Facebook
          </button>
        </div>
        <div className="text-center mt-4">
         <p>¿No tienes una cuenta? <a href="/registro" className="text-[#4D7A7D] font-bold">Regístrate</a></p>
        </div>
      </form>
      {/*<ModalBienvenida isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      <ModalError isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />*/}
    </div>
  );
};

export default LoginForm;
