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
                <td className='px-4 py-4 font-bold'>
                  <span className='px-3 py-1 bg-green-300 bg-opacity-35 text-[#2F9B5D] rounded-md'>Completado</span>
                </td>
              </tr>
              <tr className='border-gray-200 border-y'>
                <td className='px-4 py-4'>002</td>
                <td className='px-4 py-4'>María</td>
                <td className='px-4 py-4'>Vicente Guerrero, 26</td>
                <td className='px-4 py-4'>2024-02-07</td>
                <td className='px-4 py-4'>Sensor Temperatura</td>
                <td className='px-4 py-4 font-bold'>
                  <span className='px-4 py-1 bg-red-300 bg-opacity-35 text-[#D33363] rounded-md'>Rechazado</span>
                </td>
              </tr>
              <tr className='border-gray-200 border-y'>
                <td className='px-4 py-4'>003</td>
                <td className='px-4 py-4'>Juan</td>
                <td className='px-4 py-4'>Juárez, 190</td>
                <td className='px-4 py-4'>2024-02-09</td>
                <td className='px-4 py-4'>Sensor Humedad</td>
                <td className='px-4 py-4 font-bold'>
                  <span className='px-5 py-1 bg-yellow-200 bg-opacity-35 text-[#ffc131] rounded-md'>Pendiente</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainVenta;
