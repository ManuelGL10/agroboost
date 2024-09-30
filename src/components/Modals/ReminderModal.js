import React, { useState, useContext } from 'react';
import { IconX } from '@tabler/icons-react';

const ReminderModal = ({ isOpen, onClose}) => {

  return (
      <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
        <div className="fixed bg-black inset-0 opacity-50"></div>
        <div className="bg-white px-4 py-4 rounded-xl z-20 lg:max-w-md md:max-w-md w-width-full m-4">
            <div className='flex w-full justify-end'>
                <button onClick={onClose}>
                    <IconX size={28} className='dark:text-white'/>
                </button>
            </div>
            <h2 className="text-2xl font-semibold w-full">Nuevo Recordatorio</h2>
            <form>
                <div className='text-lg py-2 flex flex-col'>
                    <label>Nombre</label>
                    <input 
                        className='mt-2 border border-gray-300 rounded-lg p-1'
                        placeholder='Ingrese el nombre del recordatorio'
                    />
                </div>
                <div className='text-lg py-2 flex flex-col'>
                    <label>Repetir</label>
                    <div className='grid grid-cols-4'>
                        <div className='flex'>
                            <input type='checkbox'/>
                            <span className='ml-2'>Domingo</span>
                        </div>
                        <div className='flex'>
                            <input type='checkbox'/>
                            <span className='ml-2'>Lunes</span>
                        </div>
                        <div className='flex'>
                            <input type='checkbox'/>
                            <span className='ml-2'>Martes</span>
                        </div>
                        <div className='flex'>
                            <input type='checkbox'/>
                            <span className='ml-2'>Miércoles</span>
                        </div>
                        <div className='flex'>
                            <input type='checkbox'/>
                            <span className='ml-2'>Jueves</span>
                        </div>
                        <div className='flex'>
                            <input type='checkbox'/>
                            <span className='ml-2'>Viernes</span>
                        </div>
                        <div className='flex'>
                            <input type='checkbox'/>
                            <span className='ml-2'>Sábado</span>
                        </div>
                    </div>
                    <div className='text-lg py-2 flex flex-col'>
                        <label>Hora</label>
                        <input 
                            type='time'
                            className='mt-2 border border-gray-300 rounded-lg p-1'
                        />
                    </div>
                </div>
                <div className='flex justify-center items-center mt-4'>
                    <button type='submit' className="px-4 py-2 w-width-full bg-custom-color_logo text-white rounded-md font-semibold">Crear</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default ReminderModal;
