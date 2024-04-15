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
            <ul className='mr-4 text-right'>
              <li>
                <span className='text-lg font-semibold'>{userData && userData.nombre ? userData.nombre : 'Cargando...'}</span>
              </li>
              <li>
                <span className='text-base font-light'>{userData && <p>{userData.rol === 1 ? 'Admin' : 'Usuario'}</p>}</span>
              </li>
            </ul>
            <div className='rounded-full bg-custom-color_logo h-10 w-10' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
