import React, { useState, useEffect, useContext} from 'react';
import { IconEdit, IconTrash, IconSearch, IconChevronRight, IconChevronLeft } from '@tabler/icons-react';
import GetUsers from '../request/GetUsers';
import UsersModal from '../../components/Modals/UsersModal';
import DeleteModal from '../Modals/DeleteModal';
import { DarkModeContext } from '../../context/DarkModeContext';
import SuccessModal from '../Modals/SuccessModal';

const MainUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenD, setIsModalOpenD] = useState(false);
  const [ onOpen, setOnOpen ] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

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
    setCurrentPage(1); // Reset currentPage when searchTerm changes
  }, [searchTerm, users]);

  const handleEditClick = (user) => {
    setSelectedUsers(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUsers(null);
  };
  
  const handleDeleteClick = (user) => {
    setSelectedUsers(user);
    setIsModalOpenD(true);
  };

  const handleCloseModalD = () => {
    setIsModalOpenD(false);
    setSelectedUsers(null);
  };

  const handleModal = () => {
    setOnOpen(!onOpen)
  }

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className='bg-background dark:bg-[#1B2431] p-4 h-height-screen'>
        <div className='flex mt-20'>
          <h1 className='lg:text-3xl text-2xl font-semibold dark:text-white'>Usuarios</h1>
          <div className='flex items-center bg-white dark:bg-[#323D4E] border-2 border-gray-200 dark:border-gray-600 p-2 rounded-full lg:w-[30%] md:w-[40%] w-[50%] ml-auto'>
            <IconSearch size={18} className='text-[#9ca3af] ml-2' />
            <input 
              placeholder='Buscar' 
              className='bg-white dark:bg-[#323D4E] dark:text-slate-100 ml-2 w-[80%] focus:outline-none' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className='py-6'>
          <div className='w-[100%] bg-white dark:bg-[#273142] rounded-2xl overflow-hidden'>
            <table className='w-[100%]'>
              <thead className='bg-slate-200 dark:bg-[#313D4F] text-medium text-sm lg:text-base dark:text-white'>
                <tr>
                  <th className='px-2 py-4 text-left'>ID</th>
                  <th className='px-2 py-4 text-left'>Nombre</th>
                  <th className='px-2 py-4 text-left'>Correo Electrónico</th>
                  <th className='px-2 py-4 text-left lg:table-cell hidden'>Rol</th>
                  <th className='px-2 py-4 text-left'>Acción</th>
                </tr>
              </thead>
              <tbody className='dark:text-gray-300'>
                {currentUsers.length === 0 ? (
                  <tr className='border-gray-200 dark:border-gray-600 border-y'>
                    <td colSpan="5" className="text-center py-4">No se encontraron resultados</td>
                  </tr>
                ) : (
                  currentUsers.map((user, index) => (
                    <tr key={user._id} className='border-gray-200 dark:border-gray-600 border-y text-sm lg:text-base'>
                      <td className='text-center font-medium py-4 px-2'>{indexOfFirstUser + index + 1}</td>
                      <td className='py-4 px-2 max-w-[120px] lg:max-w-none truncate'>{user.nombre} {user.apellido_paterno} {user.apellido_materno}</td>
                      <td className='py-4 px-2 max-w-[120px] lg:max-w-none truncate'>{user.correo_electronico}</td>
                      <td className='lg:table-cell hidden'>{user && <p>{user.rol === 1 ? 'Admin' : 'Usuario'}</p>}</td>
                      <td className='py-4 px-2'>
                        <div className='flex justify-around p-2 rounded-lg bg-gray-50 dark:bg-[#323D4E] border border-gray-300 dark:border-gray-600'>
                          <button type='button' onClick={() => handleEditClick(user)}>
                            <IconEdit  className='text-gray-500 dark:text-gray-300 lg:size-6 size-4 md:size-6'/>
                          </button>
                          <span className='mx-2 text-gray-300 font-semibold'>|</span>
                          <button type='button' onClick={() => handleDeleteClick(user)}>
                            <IconTrash className='text-[#D33363] lg:size-6 size-4 md:size-6'/>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        {filteredUsers.length > usersPerPage && (
          <div className='flex justify-end'>
            <div className='flex justify-around py-2 px-4 rounded-lg bg-gray-50 dark:bg-[#323D4E] border border-gray-300'>
              <IconChevronLeft 
                className={`text-gray-500 dark:text-gray-300 cursor-pointer ${currentPage === 1 ? 'pointer-events-none opacity-50' : ''}`}
                onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
              />
              <span className='mx-4 text-gray-300 font-semibold'>|</span>
              <IconChevronRight 
                className={`cursor-pointer text-gray-500 dark:text-gray-300 ${indexOfLastUser >= filteredUsers.length ? 'pointer-events-none opacity-50' : ''}`}
                onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(filteredUsers.length / usersPerPage)))}
              />
            </div>
          </div>
        )}
        {isModalOpen && selectedUsers && (
          <UsersModal users={selectedUsers} isOpen={isModalOpen} onClose={handleCloseModal} />
        )}
        {isModalOpenD && selectedUsers && (
          <DeleteModal 
            users={selectedUsers} 
            isOpen={isModalOpenD} 
            onClose={handleCloseModalD} 
            onSuccessModalOpen={handleModal}
            title={"Eliminar Usuario"}
            mensaje={"¿Estás seguro de que deseas eliminar al usuario? Esta acción no puede deshacerse."}/>
        )}
        {onOpen && (
            <SuccessModal
                title={"Usuario Eliminado"}
                mensaje={"El usuario ha sido eliminado de la base de datos"}
                isOpen={onOpen}
                onClose={handleModal}
            />
        )}
      </div>
    </div>
  );
};

export default MainUsers;
