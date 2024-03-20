import React from 'react';
import { IconSearch } from '@tabler/icons-react';

const MainVenta = () => {
  return (
    <div className='bg-background ml-[20%] p-4 h-screen'>
      <div className='flex mt-20'>
        <h1 className='text-3xl font-semibold'>Ventas</h1>
        <div className='flex items-center bg-white border-2 border-gray-200 p-2 rounded-full w-[30%] ml-auto'>
          <IconSearch size={18} className='text-[#9ca3af] ml-2' />
          <input placeholder='Buscar' className='bg-white ml-2 w-[80%] focus:outline-none' />
        </div>
      </div>      
      <div className='py-6'>
        <div className='w-full bg-white rounded-2xl overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-white text-medium'>
              <tr>
                <th className='px-4 py-4 text-left'>ID</th>
                <th className='px-4 py-4 text-left'>Nombre</th>
                <th className='px-4 py-4 text-left'>Dirección</th>
                <th className='px-4 py-4 text-left'>Fecha</th>
                <th className='px-4 py-4 text-left'>Producto</th>
                <th className='px-4 py-4 text-left'>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-gray-200 border-y'>
                <td className='px-4 py-4'>001</td>
                <td className='px-4 py-4'>Luis</td>
                <td className='px-4 py-4'>Industria, 342</td>
                <td className='px-4 py-4'>2024-02-02</td>
                <td className='px-4 py-4'>Sensor Humedad</td>
                <td className='px-4 py-4 text-[#4AD991] font-bold'>Completado</td>
              </tr>
              <tr className='border-gray-200 border-y'>
                <td className='px-4 py-4'>002</td>
                <td className='px-4 py-4'>María</td>
                <td className='px-4 py-4'>Vicente Guerrero, 26</td>
                <td className='px-4 py-4'>2024-02-07</td>
                <td className='px-4 py-4'>Sensor Temperatura</td>
                <td className='px-4 py-4 text-orange-600 font-bold'>Rechazado</td>
              </tr>
              <tr className='border-gray-200 border-y'>
                <td className='px-4 py-4'>003</td>
                <td className='px-4 py-4'>Juan</td>
                <td className='px-4 py-4'>Juárez, 190</td>
                <td className='px-4 py-4'>2024-02-09</td>
                <td className='px-4 py-4'>Sensor Humedad</td>
                <td className='px-4 py-4 text-[#FEC53D] font-bold'>Pendiente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainVenta;
