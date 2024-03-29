import React, { useState, useEffect } from 'react';
import { IconCameraUp, IconEye, IconEyeOff } from '@tabler/icons-react';
import { UpdateUser } from '../request/UpdateUser';

const MainProfile = ({ userData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [motherLastName, setMotherLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (userData) {
            setName(userData.nombre || '');
            setLastName(userData.apellido_paterno || '');
            setMotherLastName(userData.apellido_materno || '');
            setEmail(userData.correo_electronico || '');
            setPassword(userData.contrasena || '');
        }
    }, [userData]);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await UpdateUser({
                id: userData._id,
                nombre: name,
                apellido_paterno: lastName,
                apellido_materno: motherLastName,
                correo_electronico: email,
                contrasena: password
            });

            console.log('Datos actualizados:', data.mensaje);
        } catch (error) {
            console.error('Error al actualizar los datos:', error.message);
        }
    };

    return (
        <div className='bg-background ml-[20%] p-4'>
            <h1 className='text-3xl font-semibold mt-20'>Perfil de Administrador</h1>
            <div className='py-6'>
                <div className='w-full bg-white rounded-2xl py-4 px-8'>
                    <div className='w-full flex flex-col items-center justify-center py-2'>
                        <div className='bg-gray-300 rounded-full p-10'>
                            <IconCameraUp size={32} />
                        </div>
                        <button className='mt-4 text-lg font-medium py-1 px-3 rounded-lg bg-custom-color_logo text-white hover:bg-[#2F9B5D]'>
                            Cambiar foto
                        </button>
                    </div>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-x-8 gap-y-4 my-6 text-lg font-medium text-gray-600'>
                            <div className='flex flex-col order-1'>
                                <span>Nombre</span>
                                <input type='text' className='border border-gray-300 bg-background p-2 rounded-md text-black mt-2' value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className='flex flex-col order-3'>
                                <span>Apellido Paterno</span>
                                <input type='text' className='border border-gray-300 bg-background p-2 rounded-md text-black mt-2' value={lastName} onChange={e => setLastName(e.target.value)} />
                            </div>
                            <div className='flex flex-col order-5'>
                                <span>Apellido Materno</span>
                                <input type='text' className='border border-gray-300 bg-background p-2 rounded-md text-black mt-2' value={motherLastName} onChange={e => setMotherLastName(e.target.value)} />
                            </div>
                            <div className='flex flex-col order-2'>
                                <span>Correo</span>
                                <input type='email' className='border border-gray-300 bg-background p-2 rounded-md text-black mt-2' value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className='flex flex-col order-4'>
                                <span>Contraseña</span>
                                <div className='border border-gray-300 bg-background p-2 rounded-md text-black mt-2 flex items-center'>
                                    <input type={isOpen ? 'text' : 'password'} className='bg-background w-full focus:outline-none' value={password} onChange={e => setPassword(e.target.value)} />
                                    <button type='button' onClick={handleOpen}>
                                        {isOpen ? <IconEye size={28} stroke={1.8} color='#4b5563' /> : <IconEyeOff size={28} stroke={1.8} color='#4b5563' />}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='justify-evenly flex py-2'>
                            <button type='button' className='text-xl font-semibold py-2 px-6 rounded-lg bg-red-500 text-white hover:bg-red-600'>
                                Eliminar Cuenta
                            </button>
                            <button type='submit' className='text-xl font-semibold py-2 px-6 rounded-lg bg-custom-color_logo text-white hover:bg-[#2F9B5D]'>
                                Actualizar Datos
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MainProfile;
