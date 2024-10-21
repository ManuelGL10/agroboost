import React, { useState, useEffect, useContext } from 'react';
import { IconMenu2, IconListDetails, IconPlant, IconDevices, IconSettings, IconLogout, IconHome, IconUser, IconGraph, IconX } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../request/AuthContext';
import GetUser from '../request/GetUser'
import PasswordModal from '../Modals/PasswordModal'
import SuccessModal from '../Modals/SuccessModal';
import Logo from '../../img/LogoAgroBoostPNG.svg';

const NavbarUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isModalPassOpen, setIsModalPassOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const { userId } = useAuth();
  const [isSidebarModalOpen, setIsSidebarModalOpen] = useState(false);

  const toggleSidebarModal = () => {
    setIsSidebarModalOpen(!isSidebarModalOpen); // Abre o cierra el modal lateral
  };

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
    <div className="flex items-center bg-white lg:w-[80%] w-[100%] py-1 px-4 fixed">
      <div className="flex justify-start items-center lg:hidden">
          {/* Icono de menú que abre el modal lateral */}
          <IconMenu2 className="cursor-pointer" size={30} onClick={toggleSidebarModal} />
      </div>
      <div className='flex items-center ml-auto'>
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

      {/* Modal lateral */}
      {isSidebarModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed left-0 top-0 bottom-0 bg-white dark:bg-[#273142] w-[240px] p-4 z-50">
            {/* Cerrar el modal lateral */}
            <div className='w-width-full flex justify-end'>
              <button onClick={toggleSidebarModal} className="mb-4">
                <IconX size={30} />
              </button>
            </div>
            
            <div className='mb-8'>
              <img className='h-14' src={Logo} alt="Logo AgroBoost" />
              <h1 className='font-semibold text-xl dark:text-white'>AgroBoost</h1>
            </div>
            {/* Contenido del menú lateral */}
            <nav>
              <ul className='text-xl'>
                <li className='flex p-2 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                  <Link to={`/userhome/${userData?._id}`} className='flex w-full'>
                    <IconHome size={30} stroke={1.5}/>
                    <span className='ml-4'>Inicio</span>
                  </Link>
                </li>
                <li className='flex p-2 my-4 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                        <Link to={`/userDevice/${userData?._id}`} className='flex w-full'>
                            <IconDevices size={30} stroke={1.5}/>
                            <span className='ml-4'>Dispositivo</span>
                        </Link>
                    </li>
                    <li className='flex p-2 my-4 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                        <Link to={`/userCrop/${userData?._id}`} className='flex w-full'>
                            <IconPlant size={30} stroke={1.5}/>
                            <span className='ml-4'>Cultivos</span>
                        </Link>
                        
                    </li>
                    <li className='flex p-2 my-4 ursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                        <Link to={`/userReminder/${userData?._id}`} className='flex w-full'>
                            <IconListDetails size={30} stroke={1.5}/>
                            <span className='ml-4'>Recordatorio</span>
                        </Link>
                        
                    </li>
                    <li className='flex p-2 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                        <Link to={`/userstatesman/${userData?._id}`} className='flex w-full'>
                            <IconGraph size={30} stroke={1.5}/>
                            <span className='ml-4'>Reporte</span>
                        </Link>
                        
                    </li>
              </ul>
              <ul className='p-4 text-xl absolute bottom-0 left-0 right-0'>
                    <li className='flex p-2 mb-4 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                        <Link to={`/userinf/${userData?._id}`} className='flex w-full'>
                            <IconUser size={30} stroke={1.5}/>
                            <span className='ml-4'>Cuenta</span>
                        </Link>
                        
                    </li>
                    <li className='flex p-2 cursor-pointer hover:text-[#D33363] hover:rounded-md hover:font-semibold'>
                        <Link to='/login' className='flex w-full'>
                            <IconLogout size={30} stroke={1.5}/>
                            <span className='ml-4'>Cerrar Sesión</span>
                        </Link>
                    </li>
                </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarUser;
