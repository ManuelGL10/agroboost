import React, { useState, useEffect} from 'react'
import { IconEdit, IconTrash, IconSearch, IconChevronRight, IconChevronLeft } from '@tabler/icons-react'
import GetUsers from '../request/GetUsers';
import UsersModal from '../../components/Modals/UsersModal'

const MainUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

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

  useEffect(() => {
    const filtered = users.filter(user => {
      const fullName = `${user.nombre} ${user.apellido_paterno} ${user.apellido_materno}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const handleEditClick = (user) => {
    setSelectedUsers(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUsers(null);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className='bg-background ml-[20%] p-4 h-screen'>
      <div className='flex mt-20'>
        <h1 className='text-3xl font-semibold'>Usuarios</h1>
        <div className='flex items-center bg-white border-2 border-gray-200 p-2 rounded-full w-[30%] ml-auto'>
          <IconSearch size={18} className='text-[#9ca3af] ml-2' />
          <input 
            placeholder='Buscar' 
            className='bg-white ml-2 w-[80%] focus:outline-none' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className='py-6'>
        <div className='w-full bg-white rounded-2xl overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-white text-medium'>
              <tr>
                <th className='px-2 py-4 text-left'>ID</th>
                <th className='px-2 py-4 text-left'>Nombre</th>
                <th className='px-2 py-4 text-left'>Dirección</th>
                <th className='px-2 py-4 text-left'>Correo Electrónico</th>
                <th className='px-2 py-4 text-left'>Acción</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length === 0 ? (
                <tr className='border-gray-200 border-y'>
                  <td colSpan="5" className="text-center py-4">No se encontraron resultados</td>
                </tr>
              ) : (
                currentUsers.map((user, index) => (
                  <tr key={user._id} className='border-gray-200 border-y'>
                    <td className='text-center font-medium py-4 px-2'>{indexOfFirstUser + index + 1}</td>
                    <td className='py-4 px-2'>{user.nombre} {user.apellido_paterno} {user.apellido_materno}</td>
                    <td className='py-4 px-2'>{user.direccion && user.direccion.codigo_postal}, {user.direccion && user.direccion.calle}, {user.direccion && user.direccion.cuidad}, {user.direccion && user.direccion.estado}</td>
                    <td className='py-4 px-2'>{user.correo_electronico}</td>
                    <td className='py-4 px-2'>
                      <div className='flex justify-around p-2 rounded-lg bg-gray-50 border border-gray-300'>
                        <button type='button' onClick={() => handleEditClick(user)}>
                          <IconEdit  className='text-gray-500'/>
                        </button>
                        <span className='mx-2 text-gray-300 font-semibold'>|</span>
                        <IconTrash className='text-[#D33363]'/>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex justify-end'>
        <div className='flex justify-around py-2 px-4 rounded-lg bg-gray-50 border border-gray-300'>
          <IconChevronLeft 
            className='text-gray-500 cursor-pointer'
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          />
          <span className='mx-4 text-gray-300 font-semibold'>|</span>
          <IconChevronRight 
            className='cursor-pointer text-gray-500'
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastUser >= filteredUsers.length}
          />
        </div>
      </div>
      {isModalOpen && selectedUsers && (
        <UsersModal users={selectedUsers} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default MainUsers
