import React from 'react';

const MainVenta = () => {
  return (
    <div className='bg-custom-F0F0F0 ml-[20%] p-4 h-screen'>
      <h1 className='text-3xl font-semibold mt-16'>Orden de Venta</h1>
      <div className='py-6'>
        <div className='w-full bg-white rounded-2xl overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-gray-50 text-medium'>
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
