import React from 'react'
import { IconTrash, IconEdit, IconSearch } from '@tabler/icons-react'
import regar from '../../img/pexels-fox-750836.jpg';
import sensor from '../../img/sensor.jpeg';
import nutriente from '../../img/nutriente.jpeg';

const MainProduct = () => {
  return (
    <div className='bg-background ml-[20%] p-4'>
      <div className='flex mt-20'>
        <h1 className='text-3xl font-semibold'>Productos</h1>
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
                <th className='px-4 py-4 text-left'>Imagen</th>
                <th className='px-4 py-4 text-left'>Nombre</th>
                <th className='px-4 py-4 text-left'>Precio</th>
                <th className='px-4 py-4 text-left'>Disponible</th>
                <th className='px-4 py-4 text-left'>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-gray-200 border-y'>
                <td className='px-4 py-4'>001</td>
                <td className='py-4'><img className='w-24 mx-auto rounded-xl' src={nutriente} alt='nutriente' /></td>
                <td className='px-4 py-4'>Sensor de Nutrientes</td>
                <td className='px-4 py-4'>$199</td>
                <td className='px-4 py-4'>126</td>
                <td className='px-4 py-4'>
                    <div className='flex justify-around p-2 rounded-lg bg-gray-50 border border-gray-300'>
                        <IconEdit className='text-gray-500'/>
                        <span className='mx-2 text-gray-300 font-semibold'>|</span>
                        <IconTrash className='text-[#D33363]'/>
                    </div>
                </td>
              </tr>
              <tr className='border-gray-200 border-y'>
                <td className='px-4 py-4'>002</td>
                <td className='py-4'><img className='w-24 mx-auto rounded-xl' src={regar} alt='regar' /></td>
                <td className='px-4 py-4'>Sensor de Humedad</td>
                <td className='px-4 py-4'>$199</td>
                <td className='px-4 py-4'>78</td>
                <td className='px-4 py-4'>
                    <div className='flex justify-around p-2 rounded-lg bg-gray-50 border border-gray-300'>
                        <IconEdit className='text-gray-500'/>
                        <span className='mx-2 text-gray-300 font-semibold'>|</span>
                        <IconTrash className='text-[#D33363]'/>
                    </div>
                </td>
              </tr>
              <tr className='border-gray-200 border-y'>
                <td className='px-4 py-4'>003</td>
                <td className='py-4'><img className='w-24 mx-auto rounded-xl' src={sensor} alt='sensor' /></td>
                <td className='px-4 py-4'>Sensor de Temperatura</td>
                <td className='px-4 py-4'>$199</td>
                <td className='px-4 py-4'>43</td>
                <td className='px-4 py-4'>
                    <div className='flex justify-around p-2 rounded-lg bg-gray-50 border border-gray-300'>
                        <IconEdit className='text-gray-500'/>
                        <span className='mx-2 text-gray-300 font-semibold'>|</span>
                        <IconTrash className='text-[#D33363]'/>
                    </div>
                </td>
              </tr>
              <tr className='border-gray-200 border-y'>
                <td className='px-4 py-4'>003</td>
                <td className='py-4'><img className='w-24 mx-auto rounded-xl' src={sensor} alt='sensor' /></td>
                <td className='px-4 py-4'>Smartthings Hub</td>
                <td className='px-4 py-4'>$1289</td>
                <td className='px-4 py-4'>91</td>
                <td className='px-4 py-4'>
                    <div className='flex justify-around p-2 rounded-lg bg-gray-50 border border-gray-300'>
                        <IconEdit className='text-gray-500'/>
                        <span className='mx-2 text-gray-300 font-semibold'>|</span>
                        <IconTrash className='text-[#D33363]'/>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div> 
      </div>
    </div>
  )
}

export default MainProduct