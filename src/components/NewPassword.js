import React, { useState } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Contraseña:', password);
    console.log('Confirmar contraseña:', confirmPassword);
  };

  const handleTogglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg relative">
      <Link to="/Password" className="absolute top-0 left-0 p-4">
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </Link>
      <h2 className="block font-medium md:text-4xl sm:text-3xl text-2xl text-custom-204E51 mb-16 text-center">Nueva contraseña</h2>
      <div className="flex items-center mb-16">
        <h1 className="block font-medium md:text-2xl sm:text-xl text-lg text-black mb-6 text-center">Asegúrese de incluir una contraseña segura con al menos 8 caracteres.</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-10 relative">
          <label htmlFor="password" className="block font-medium text-base text-custom-00000 mb-2 text-left">Contraseña nueva</label>
          <input
            type={showPassword ? "text" : "password"} 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingresar contraseña"
            required
          />
          <button
            type="button"
            onClick={() => handleTogglePasswordVisibility('password')}
            className="absolute inset-y-0 right-2 flex items-center bg-transparent focus:outline-none"
            style={{ top: 'calc(50% + -5px)' }} 
          >
            {showPassword ? <IconEyeOff size={24} /> : <IconEye size={24} />}
          </button>
        </div>
        
        <div className="mb-3 relative">
          <label htmlFor="confirm-password" className="block font-medium text-base text-custom-00000 mb-2 text-left">Confirmar contraseña</label>
          <input
            type={showConfirmPassword ? "text" : "password"} 
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Confirmar contraseña"
            required
          />
          <button
            type="button"
            onClick={() => handleTogglePasswordVisibility('confirmPassword')}
            className="absolute inset-y-0 right-2 flex items-center bg-transparent focus:outline-none"
            style={{ top: 'calc(50% + -5px)' }} 
          >
            {showConfirmPassword ? <IconEyeOff size={24} /> : <IconEye size={24} />}
          </button>
        </div>
        
        <div className="text-right mb-10">
        </div>
        <button type="submit" className="w-full bg-custom-204E51 text-white font-semibold px-6 py-3 rounded-lg hover:bg-custom-306C73 focus:outline-none focus:bg-custom-306C73 focus:ring-2 focus:ring-custom-204E51">
          Cambiar contraseña
        </button>
        <div className="text-center mt-40">
        </div>
      </form>
    </div>
  );
};

export default NewPassword;
