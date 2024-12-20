import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/DarkModeContext';
import { IconTrash } from '@tabler/icons-react';
import { DeleteProduct } from '../request/DeleteProduct';

function ProductDModal({product, isOpen, onClose}) {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    
    const handleSubmit = async () => {
        try {
            const data = await DeleteProduct({id: users._id})
            onClose()
        } catch (error) {
            console.error('Error al eliminar el producto:', error.message);
        }
    }

  return (
    <div className={`${darkMode && "dark"}`}>
        <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white dark:bg-[#273142] px-4 py-6 rounded-xl z-10 lg:max-w-md md:max-w-md w-width-full m-4">
                <div className='flex flex-col w-full justify-end p-2'>
                    <div className='justify-center items-center flex flex-col'>
                        <div className='h-10 w-10 rounded-full bg-red-200 flex items-center justify-center'>
                            <IconTrash color='red'/>
                        </div>
                        <h1 className='text-xl font-semibold mt-2 dark:text-white'>Eliminar Usuario</h1>
                    </div>
                    <div className='py-6 text-lg text-gray-600 dark:text-gray-400 text-center'>
                        <span>¿Estás seguro de que deseas eliminar al usuario? Esta acción no puede deshacerse.</span>
                    </div>
                    <div className='w-full grid grid-cols-2 gap-x-4'>
                        <button onClick={onClose} className='border-2 border-gray-500 py-2 font-bold text-gray-500 dark:border-gray-300 dark:text-gray-300 rounded-md'>Cancelar</button>
                        <button onClick={handleSubmit} className='bg-red-500 py-2 font-bold text-white rounded-md'>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDModal