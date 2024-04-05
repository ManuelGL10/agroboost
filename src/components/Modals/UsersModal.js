import React, { useState, useEffect } from 'react';
import { IconX } from '@tabler/icons-react';
import { UpdateUser } from '../request/UpdateUser'
import { IconEye, IconEyeOff } from '@tabler/icons-react';

const ProductModal = ({ users, isOpen, onClose }) => {
    const [ nombre, setNombre ] = useState('')
    const [ apellidoPaterno, setApellidoPaterno ] = useState('')
    const [ apellidoMaterno, setApellidoMaterno ] = useState('')
    const [ correo, setCorreo ] = useState('')
    const [ contrasena, setContrasena ] = useState('')
    const [ eyeOpen, setEyeOpen ] = useState(false)

    useEffect(() => {
        setNombre( users.nombre || '' );
        setApellidoPaterno( users.apellido_paterno || '' );
        setApellidoMaterno( users.apellido_materno || '' );
        setCorreo( users.correo_electronico || '' );
        setContrasena( users.contrasena || '' )
    }, [users]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await UpdateUser({
              id: users._id,
              nombre: nombre,
              apellido_paterno: apellidoPaterno,
              apellido_materno: apellidoMaterno,
              correo_electronico: correo,
              contrasena: contrasena
            });
            console.log("Datos actualizados")
            onClose()
            window.location.reload();
        } catch (error) {
            console.error('Error al actualizar los datos:', error.message);
        }
    };

    const handleOpen = () => {
        setEyeOpen(!eyeOpen);
    };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white px-4 py-6 rounded-xl z-10 w-[55%]">
        <div className='flex w-full justify-end'>
          <button onClick={onClose}>
            <IconX size={28}/>
          </button>
        </div>
        <h2 className="text-2xl font-semibold w-full">Editar Usuario</h2>
        <form className='py-2 w-full' onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-x-4'>
                <div className='text-lg py-2 flex flex-col'>
                    <p>Nombre:</p>
                    <input 
                        className='mt-2 border border-gray-100 rounded-lg py-1 px-1'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}/>
                </div>
                <div className='text-lg py-2 flex flex-col'>
                    <p>Apellido Paterno:</p>
                    <input 
                    className='mt-2 border border-gray-100 rounded-lg py-1 px-1'
                    value={apellidoPaterno}
                    onChange={e => setApellidoPaterno(e.target.value)}/>
                </div>
                <div className='text-lg py-2 flex flex-col'>
                    <p>Apellido Materno:</p>
                    <input 
                    className='mt-2 border border-gray-100 rounded-lg py-1 px-1'
                    value={apellidoMaterno}
                    onChange={e => setApellidoMaterno(e.target.value)}/>
                </div>
                <div className='text-lg py-2 flex flex-col'>
                    <p>Correo:</p>
                    <input 
                        className='mt-2 border border-gray-100 rounded-lg py-1 px-1'
                        value={correo}
                        onChange={e => setCorreo(e.target.value)}/>
                </div>
                <div className='text-lg py-2 flex flex-col'>
                    <p>Contraseña:</p>
                    <div className='mt-2 border border-gray-100 rounded-lg py-1 px-1 flex'>
                        <input type={eyeOpen ? 'text' : 'password'} className='w-full focus:outline-none' value={contrasena} onChange={e => setContrasena(e.target.value)} />
                        <button type='button' onClick={handleOpen}>
                            {eyeOpen ? <IconEye size={28} stroke={1.8} color='#4b5563' /> : <IconEyeOff size={28} stroke={1.8} color='#4b5563' />}
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <button type='submit' className="px-4 py-2 bg-custom-color_logo text-white rounded-md font-semibold">Actualizar</button>
            </div>
        </form>
        
      </div>
    </div>
  );
};

export default ProductModal;
