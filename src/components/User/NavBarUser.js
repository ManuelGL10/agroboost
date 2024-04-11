import React, { useState, useEffect, useContext } from 'react';
import { IconChevronDown, IconChevronUp, IconSearch, IconSun, IconMoon, IconLogout, IconUserCog, IconKey } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../request/AuthContext';
import GetUser from '../request/GetUser'
import PasswordModal from '../Modals/PasswordModal'
import SuccessModal from '../Modals/SuccessModal';


const NavbarUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isModalPassOpen, setIsModalPassOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const { userId } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
          const userData = await GetUser(storedUserId);
          setUserData(userData);
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (userId) {
      localStorage.setItem('userId', userId);
    }
  }, [userId]);

  const handdleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleEditClick = (userData) => {
    setIsModalPassOpen(!isModalPassOpen);
  };

  const handleSuccessModal = () => {
    setSuccessModalOpen(!successModalOpen);
  };

  return (
    <div className='w-[80%] ml-[20%] items-center px-6 py-2 bg-white fixed'>
      <div className='flex'>
        <div className='items-center flex ml-auto'>
          <div className='flex items-center'>
            <div className='rounded-full bg-custom-color_logo h-10 w-10' />
            <ul className='ml-4'>
              <li>
                <span className='text-lg font-semibold'>{userData && userData.nombre ? userData.nombre : 'Cargando...'}</span>
              </li>
              <li>
                <span className='text-base font-light'>{userData && <p>{userData.rol === 1 ? 'Admin' : 'Usuario'}</p>}</span>
              </li>
            </ul>
            <div className='rounded-full border-2 border-gray-300 ml-4' onClick={handdleModal}>
              {!isModalOpen ? <IconChevronDown size={18} stroke={1.5}/> : <IconChevronUp size={18} stroke={1.5}/>}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className='fixed top-14 right-0 p-4'>
          <div className='bg-white p-4 rounded-xl shadow-lg grid text-lg gap-2'>
            <Link to={`/profile/${userData._id}`} className='flex w-full items-center'>
              <IconUserCog className='mr-2' stroke={1.5}/>
              <span>Administrar Cuenta</span>
            </Link>
            <div className='flex items-center'>
              <button onClick={()=>handleEditClick(userData)} className='flex'>
                <IconKey className='mr-2' stroke={1.5}/>
                <span>Cambiar Contraseña</span>
              </button>
            </div>
            <Link to='/login' className='flex w-full items-center'>
              <IconLogout className='mr-2' stroke={1.5}/>
              <span>Cerrar Sesión</span>
            </Link>
          </div>
        </div>
      )}
      {isModalPassOpen && (
          <PasswordModal userData={userData} isOpen={isModalPassOpen} onClose={handleEditClick} onSuccessModalOpen={handleSuccessModal}/>
      )}
      {successModalOpen && (
          <SuccessModal 
            isOpen={successModalOpen} 
            onClose={handleSuccessModal}
            title={"Operación Exitosa"}
            mensaje={"Su contraseña ha sido actualizada."}/>
        )}
    </div>
  );
};

export default NavbarUser;
