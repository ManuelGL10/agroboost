import React, { useState, useContext } from 'react';
import { IconX } from '@tabler/icons-react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const DeviceModal = ({ isOpen, onClose}) => {

  return (
      <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
        <div className="fixed bg-black inset-0 opacity-50"></div>
        <div className="bg-white px-4 py-4 rounded-xl z-20 w-[35%]">
          <div className='flex w-full justify-end'>
            <button onClick={onClose}>
              <IconX size={28} className='dark:text-white'/>
            </button>
          </div>
          <h2 className="text-2xl font-semibold w-full">Nuevo Dispositivo</h2>
          <form>
                <div className='text-lg py-2 flex flex-col'>
                    <label htmlFor="contrasena">Tipo de sensor:</label>
                    <select className='mt-2 border border-gray-300 rounded-lg p-1'>
                        <option disabled={true}>selecciona una opcion</option>
                        <option>Sensor de Temperatura</option>
                        <option>Sensor de Humedad</option>
                        <option>Sensor de Nutrientes</option>
                    </select>
                </div>
                <div className='text-lg py-2 flex flex-col'>
                    <label htmlFor="contrasena">Cultivo:</label>
                    <select className='mt-2 border border-gray-300 rounded-lg p-1'>
                        <option disabled={true}>selecciona una opcion</option>
                        <option>Sensor de Temperatura</option>
                        <option>Sensor de Humedad</option>
                        <option>Sensor de Nutrientes</option>
                    </select>
                </div>
                <div className='flex justify-center items-center mt-4'>
                    <button type='submit' className="px-4 py-2 bg-custom-color_logo text-white rounded-md font-semibold">Actualizar</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default DeviceModal;
