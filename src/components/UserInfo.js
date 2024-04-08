import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

const UserInfo = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [apellidoMaterno, setApellidoMaterno] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Nombre:', nombre);
        console.log('Correo', correo);
        console.log('Apellido Paterno', apellidoPaterno);
        console.log('Contraseña:', password);
        console.log('Apellido Materno', apellidoMaterno);
    };

    const handleTogglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        }
    };

    return (
        <div>
            <h1 className="block font-medium md:text-3xl sm:text-2xl text-xl text-gray-100 mb-10 text-left ml-72">.</h1>
            <h1 className="block font-medium md:text-3xl sm:text-2xl text-xl text-black mb-6 text-left ml-72">Información del usuario</h1>
            <div className="relative max-w-5xl mx-auto mt-5 p-3 bg-white rounded-lg shadow-lg ml-auto mr-auto" style={{ marginLeft: '270px', borderRadius: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="nombre" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                                style={{ backgroundColor: '#E3EBEE', borderColor: '#AFC1C4' }}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="correo" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Correo</label>
                            <input
                                type="text"
                                id="correo"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                                style={{ backgroundColor: '#E3EBEE', borderColor: '#AFC1C4' }}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="apellidoPaterno" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Apellido paterno</label>
                            <input
                                type="text"
                                id="apellidoPaterno"
                                value={apellidoPaterno}
                                onChange={(e) => setApellidoPaterno(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                                style={{ backgroundColor: '#E3EBEE', borderColor: '#AFC1C4' }}
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label htmlFor="password" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Contraseña</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 pr-12"
                                placeholder=""
                                required
                                style={{ backgroundColor: '#E3EBEE', borderColor: '#AFC1C4' }}
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
                        <div className="mb-4 col-span-2">
                            <label htmlFor="apellidoMaterno" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Apellido materno</label>
                            <input
                                type="text"
                                id="apellidoMaterno"
                                value={apellidoMaterno}
                                onChange={(e) => setApellidoMaterno(e.target.value)}
                                className="w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                                style={{ backgroundColor: '#E3EBEE', borderColor: '#AFC1C4' }}
                            />
                        </div>
                    </div>
                    <div className="mb-8 flex justify-center" style={{ marginTop: '5px' }}>
                        <button type="submit" className="bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring-2 focus:ring-green-300" style={{ fontSize: '1.1rem' }}>
                            Actualizar datos
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserInfo;
