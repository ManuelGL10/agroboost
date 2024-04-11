import React, { useState, useEffect, useContext } from 'react';
import { IconChevronDown, IconChevronUp, IconSun, IconMoon, IconLogout, IconUserCog, IconKey } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useAuth } from './request/AuthContext';
import GetUser from './request/GetUser';
import PasswordModal from './Modals/PasswordModal';
import { DarkModeContext } from '../context/DarkModeContext';
import SuccessModal from './Modals/SuccessModal';
import QuestionModal from './Modals/QuestionModal';

const Navbar_Top = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const { userId } = useAuth();
  const [isModalPassOpen, setIsModalPassOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [ questionModal, setQuestionModal ] = useState(false)
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handdleModal = () => {
    setIsModalOpen(!isModalOpen);
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

  const handleEditClick = (userData) => {
    setIsModalPassOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalPassOpen(false);
  };

  const handleSuccessModal = () => {
    setSuccessModalOpen(!successModalOpen);
  };

  const handleQuestionModal = () => {
    setQuestionModal(!questionModal)
  }

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className='w-[80%] ml-[20%] items-center px-6 py-2 bg-white fixed dark:bg-[#273142]'>
        <div className='flex'>
          <div className='items-center flex ml-auto'>
            <div className='mr-6'>
              <div className='relative'>
                <input
                  type="checkbox"
                  className="hidden"
                  id="darkModeSwitch"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <label
                  htmlFor="darkModeSwitch"
                  className="block cursor-pointer"
                >
                  <div className="w-14 h-8 bg-gray-300 dark:bg-blue-600 rounded-full p-1 flex items-center">
                    <div className={`absolute inset-y-0 left-0 flex items-center pl-1 transition-transform duration-300 ease-in-out ${darkMode ? 'translate-x-6' : ''}`}>
                      <div className='bg-white rounded-full h-6 w-6 items-center justify-center flex'>
                        {darkMode ? <IconMoon size={20} fill='#9ca3af' color='#9ca3af'/> : <IconSun size={20} fill='#9ca3af' color='#9ca3af' />}
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className='flex items-center dark:text-white'>
              <div>
                <div>
                  <span className='text-lg font-semibold'>
                  {userData && userData.nombre ? userData.nombre : 'Cargando...'}
                  </span>
                </div>
                <div>
                  <span className='text-base font-light'>{userData && <p>{userData.rol === 1 ? 'Admin' : 'Usuario'}</p>}</span>
                </div>
              </div>
              <div className='rounded-full bg-custom-color_logo h-14 w-14 mx-4' />
              <div className='rounded-full border-2 border-gray-300 h-6 w-6 items-end justify-center flex' onClick={handdleModal}>
                {!isModalOpen ? <IconChevronDown size={18} stroke={1.5}/> : <IconChevronUp size={18} stroke={1.5}/>}
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className='fixed top-14 right-0 p-4'>
            <div className='bg-white dark:bg-[#273142] dark:text-white p-4 rounded-xl shadow-lg grid text-lg gap-2'>
              <Link to={`/profile/${userData._id}`} className='flex w-full items-center'>
                <IconUserCog className='mr-2' stroke={1.5}/>
                <span>Administrar Cuenta</span>
              </Link>
              <div className='flex items-center cursor-pointer'>
                <button onClick={()=>handleEditClick(userData)} className='flex'>
                  <IconKey className='mr-2' stroke={1.5}/>
                  <span>Cambiar Contraseña</span>
                </button>
              </div>
              <button onClick={handleQuestionModal} className='flex w-full items-center'>
                <IconLogout className='mr-2' stroke={1.5}/>
                <span>Cerrar Sesión</span>
              </button>
            </div>
          </div>
        )}
        {isModalPassOpen && (
          <PasswordModal userData={userData} isOpen={isModalPassOpen} onClose={handleCloseModal} onSuccessModalOpen={handleSuccessModal}/>
        )}
        {successModalOpen && (
          <SuccessModal 
            isOpen={successModalOpen} 
            onClose={handleSuccessModal}
            title={"Operación Exitosa"}
            mensaje={"Su contraseña ha sido actualizada."}/>
        )}
        <QuestionModal
          isOpen={questionModal}
          onClose={handleQuestionModal}
          title={"¿Estás seguro que deseas cerrar sesión?"}
          mensaje={"Si cierras sesión, se te desconectará de tu cuenta. ¿Estás seguro de que deseas continuar?"}
        />
      </div>
    </div>
    
  );
};

export default Navbar_Top;
