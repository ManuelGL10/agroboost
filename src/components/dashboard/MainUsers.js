import React from 'react'
import { IconEdit, IconTrash, IconSearch, IconChevronRight, IconChevronLeft, IconPlus } from '@tabler/icons-react'

const MainUsers = () => {
  return (
    <div className='bg-background ml-[20%] p-4 h-screen'>
      <div className='flex mt-20'>
        <h1 className='text-3xl font-semibold'>Usuarios</h1>
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
                <th className='px-4 py-4 text-left'>Correo Electrónico</th>
                <th className='px-4 py-4 text-left'>Contraseña</th>
                <th className='px-4 py-4 text-left'>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-gray-200 border-y'>
                <td className='px-4 py-4'>001</td>
                <td className='px-4 py-4'>Luis Hernandez Pérez</td>
                <td className='px-4 py-4'>Industria, 342</td>
                <td className='px-4 py-4'>luis@gmail.com</td>
                <td className='px-4 py-4 font-bold text-xl'>··········</td>
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
                <td className='px-4 py-4'>María González Gutierrez</td>
                <td className='px-4 py-4'>Vicente Guerrero, 26</td>
                <td className='px-4 py-4'>maria@gmail.com</td>
                <td className='px-4 py-4 font-bold text-xl'>··········</td>
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
                <td className='px-4 py-4'>Juan Suárez Alvarado</td>
                <td className='px-4 py-4'>Juárez, 190</td>
                <td className='px-4 py-4'>juan@gmail.com</td>
                <td className='px-4 py-4 font-bold text-xl'>··········</td>
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
      <div className='flex'>
        <div className='flex justify-around py-2 px-4 rounded-lg bg-gray-50 border border-gray-300 ml-auto'>
            <IconChevronLeft className='text-gray-500'/>
            <span className='mx-4 text-gray-300 font-semibold'>|</span>
            <IconChevronRight/>
        </div>
      </div>
    </div>
  )
}

export default MainUsers