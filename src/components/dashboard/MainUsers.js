import React, { useState, useEffect} from 'react'
import { IconEdit, IconTrash, IconSearch, IconChevronRight, IconChevronLeft, IconPlus } from '@tabler/icons-react'
import GetUsers from '../request/GetUsers';

const MainUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await GetUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Error al obtener los datos de los usuarios:', error);
      }
    };

    fetchData();
  }, []);

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
                <th className='px-4 py-4 text-left'>Acción</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className='border-gray-200 border-y'>
                  <td className='text-center font-medium py-4 px-2'>{index + 1}</td>
                  <td className='py-4 px-2'>{user.nombre} {user.apellido_paterno} {user.apellido_materno}</td>
                  <td className='py-4 px-2'>{user.direccion && user.direccion.codigo_postal}, {user.direccion && user.direccion.calle}, {user.direccion && user.direccion.cuidad}, {user.direccion && user.direccion.estado}</td>
                  <td className='py-4 px-2'>{user.correo_electronico}</td>
                  <td className='py-4 px-2'>
                    <div className='flex justify-around p-2 rounded-lg bg-gray-50 border border-gray-300'>
                      <IconEdit className='text-gray-500'/>
                      <span className='mx-2 text-gray-300 font-semibold'>|</span>
                      <IconTrash className='text-[#D33363]'/>
                    </div>
                  </td>
                </tr>
              ))}
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