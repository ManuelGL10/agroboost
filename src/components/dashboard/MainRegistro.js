import React, { useState } from 'react'
import { IconCameraUp, IconEye, IconEyeOff } from '@tabler/icons-react'

const MainProfile = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className='bg-background ml-[20%] p-4'>
        <h1 className='text-3xl font-semibold mt-20'>Registro de Usuario</h1>
        <div className='py-6'>
            <div className='w-full bg-white rounded-2xl py-4 px-8'>
                <div className='w-full flex flex-col items-center justify-center py-2'>
                    <div className='bg-gray-300 rounded-full p-10'>
                        <IconCameraUp size={32}/>
                    </div>
                    <button className='mt-4 text-lg font-medium py-1 px-3 rounded-lg bg-custom-color_logo text-white hover:bg-[#2F9B5D]'>
                        Cambiar foto
                    </button>
                </div>
                <form className='flex flex-col'>
                    <div className='grid grid-cols-2 gap-x-8 gap-y-4 my-6 text-lg font-medium text-gray-600'>
                        <div className='flex flex-col order-1'>
                            <span>Nombre</span>
                            <input type='text' className='border border-gray-300 bg-background p-2 rounded-md text-black mt-2'/>
                        </div>
                        <div className='flex flex-col order-3'>
                            <span>Apellido Paterno</span>
                            <input type='text' className='border border-gray-300 bg-background p-2 rounded-md text-black mt-2'/>
                        </div>
                        <div className='flex flex-col order-5'>
                            <span>Apellido Materno</span>
                            <input type='text' className='border border-gray-300 bg-background p-2 rounded-md text-black mt-2'/>
                        </div>
                        <div className='flex flex-col order-2'>
                            <span>Correo</span>
                            <input type='email' className='border border-gray-300 bg-background p-2 rounded-md text-black mt-2'/>
                        </div>
                        <div className='flex flex-col order-4'>
                            <span>Contraseña</span>
                            <div className='border border-gray-300 bg-background p-2 rounded-md text-black mt-2 flex items-center'>
                                <input type='password' className='bg-background w-full focus:outline-none'/>
                                <button type='button' onClick={handleOpen}>
                                    {isOpen ? <IconEye size={28} stroke={1.8} color='#4b5563'/> : <IconEyeOff size={28} stroke={1.8} color='#4b5563'/>}
                                </button>  
                            </div>
                        </div>
                    </div>
                    <div className='justify-center flex py-2'>
                        <button className='text-xl font-semibold py-2 px-6 rounded-lg bg-custom-color_logo text-white hover:bg-[#2F9B5D]'>
                            Guardar Datos
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default MainProfile