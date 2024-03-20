import React, { useState } from 'react';
import Logo from '../img/LogoAgroBoostPNG.svg';
import ModalBienvenida from './ModalBienvenida';
import ModalError from './ModalError';
import { IconEye, IconEyeOff } from '@tabler/icons-react'; 

const RegistroForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', name);
    console.log('Apellidos:', lastName);
    console.log('Correo:', email);
    console.log('Contraseña:', password);
    console.log('¿Términos aceptados?:', termsAccepted);
    setModalIsOpen(true);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="block font-medium md:text-4xl sm:text-3xl text-2xl text-custom-204E51 mb-4 text-center">Regístrate</h2>
      <div className="flex items-center mb-6">
        <img src={Logo} alt="Logo AgroBoost" className="w-40 h-auto mx-auto"/>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-base text-custom-00000 mb-2 text-left">Nombre(s)</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese su nombre"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-medium text-base text-custom-00000 mb-2 text-left">Apellidos</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese sus apellidos"
            required
          />
        </div>
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
            placeholder="Ingrese su contraseña"
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
        <div className="mb-4">
          <label htmlFor="terms" className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mr-2"
              required
            />
            <span className="text-base text-custom-204E51">Acepto los términos y condiciones</span>
          </label>
        </div>
        <button type="submit" className="w-full bg-custom-204E51 text-white font-semibold px-6 py-3 rounded-lg hover:bg-custom-306C73 focus:outline-none focus:bg-custom-306C73 focus:ring-2 focus:ring-custom-204E51">
          Registrarse
        </button>
        <div className="text-center mt-3">
          <p>¿No tienes una cuenta? <a href="#" className="text-[#4D7A7D]">Regístrate</a></p>
          <p>¿Ya tienes cuenta? <a href="#" className="text-[#4D7A7D]">Inicia sesión</a></p>
        </div>
      </form>
      {/*<ModalBienvenida isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      <ModalError isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />*/}
    </div>
    
    
  );
};

export default RegistroForm;