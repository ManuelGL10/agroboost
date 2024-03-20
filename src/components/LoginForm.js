import React, { useState } from 'react';
import Logo from '../img/LogoAgroBoostPNG.svg';
import ImgFacebook from '../img/facebook_logo.svg';
import ImgGoogle from '../img/Google_logo.png';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { Link } from 'react-router-dom'; 
import ModalBienvenida from './ModalBienvenida';
import ModalError from './ModalError';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Email:', email);
    console.log('Contraseña:', password);
    setModalIsOpen(true);
    
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="block font-medium md:text-3xl sm:text-2xl text-xl text-custom-204E51 mb-4 text-center">Inicio de Sesión</h2>
      <div className="flex items-center justify-center mb-6">
        <img src={Logo} alt="Logo AgroBoost" className="h-28"/>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
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
        <div className="mb-3 relative">
          <label htmlFor="password" className="block font-medium text-base text-custom-00000 mb-2 text-left">Contraseña</label>
          <input
            type={showPassword ? "text" : "password"} 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingresa su contraseña"
            required
          />
          <button
            type="button"
            onClick={handleTogglePasswordVisibility}
            className="absolute inset-y-0 right-2 flex items-center bg-transparent focus:outline-none"
            style={{ top: 'calc(50% + -5px)' }} 
          >
            {showPassword ? <IconEyeOff size={24} /> : <IconEye size={24} />}
          </button>
        </div>
        
        <div className="text-right mb-6">
          <Link className="text-[#4D7A7D]">¿Olvidaste tu contraseña?</Link>
        </div>
        <button type="submit" className="w-full bg-custom-204E51 text-white font-semibold px-6 py-3 rounded-lg hover:bg-custom-306C73 focus:outline-none focus:bg-custom-306C73 focus:ring-2 focus:ring-custom-204E51">
          <Link to='/dashboardhome'>Iniciar Sesión</Link>
        </button>
        <div className="flex items-center mt-6 mb-4">
          <hr className="border-black flex-grow" />
          <span className="text-black px-4">o iniciar sesión con</span>
          <hr className="border-black flex-grow" />
        </div>
        <div className="flex justify-center space-x-4 mb-2">
          <button type="button" className="flex items-center bg-white text-black border border-171717 font-medium px-6 py-3 rounded-lg hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
          <img src={ImgGoogle} alt="ImgGoogle" className="w-6 h-6 mr-2" />
            Google
          </button>
          <button type="button" className="flex items-center bg-white text-black border border-171717 font-medium px-6 py-3 rounded-lg hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
          <img src={ImgFacebook} alt="ImgFacebook" className="w-6 h-6 mr-2" />
            Facebook
          </button>
        </div>
        <div className="text-center mt-3">
         <p>¿No tienes una cuenta? <Link to='/registro' className="text-[#4D7A7D]">Regístrate</Link></p>
        </div>
      </form>
      {/*<ModalBienvenida isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      <ModalError isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />*/}
    </div>
  );
};

export default LoginForm;
