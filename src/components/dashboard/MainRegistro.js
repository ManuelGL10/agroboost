import React, { useState } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

const MainRegistro = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', name);
    console.log('Apellidos:', lastName);
    console.log('Correo:', email);
    console.log('Contraseña:', password);
    // Lógica para registrar al administrador
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div className="bg-background min-h-screen flex justify-center items-center">
      <div className="w-[60%] p-8 bg-white rounded-lg auto ml-[20%]">
        <h2 className="block font-medium md:text-4xl sm:text-3xl text-2xl text-custom-204E51 mb-4 mt-50 text-center">Registro de Usuarios</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="col-span-1 mb-4">
            <label htmlFor="name" className="block font-medium text-base text-custom-00000 mb-2 mt-7 text-left">Nombre(s)</label>
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
          <div className="col-span-1 mb-4">
            <label htmlFor="lastName" className="block font-medium text-base text-custom-00000 mb-2 mt-7 text-left">Apellidos</label>
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
          <div className="col-span-1 mb-4">
            <label htmlFor="email" className="block font-medium text-base text-custom-00000 mb-2 mt-7 text-left">Correo Electrónico</label>
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
          <div className="col-span-1 mb-4 mt-7 relative">
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
          <div className="col-span-2 mb-4 mt-7 flex justify-center"> 
              <button type="submit" className="w-40 bg-custom-204E51 text-white font-semibold px-4 py-3 rounded-lg hover:bg-custom-306C73 focus:outline-none focus:bg-custom-306C73 focus:ring-2 focus:ring-custom-204E51">
              Registrar
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainRegistro;
