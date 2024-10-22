import React, { useState, useEffect, useContext } from 'react';
import { IconChevronDown, IconChevronUp, IconSun, IconMoon, IconLogout, IconUserCog, IconKey, IconMenu2, IconX, IconDashboard, IconUser, IconPlant, IconShoppingCart, IconPackage, IconSettings,  } from '@tabler/icons-react'; // Usamos IconMenu2 para el menú
import { Link } from 'react-router-dom';
import { useAuth } from './request/AuthContext';
import GetUser from './request/GetUser';
import PasswordModal from './Modals/PasswordModal';
import { DarkModeContext } from '../context/DarkModeContext';
import SuccessModal from './Modals/SuccessModal';
import QuestionModal from './Modals/QuestionModal';
import Logo from '../img/LogoAgroBoostPNG.svg'

const Navbar_Top = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarModalOpen, setIsSidebarModalOpen] = useState(false); // Estado para manejar el modal lateral
  const [userData, setUserData] = useState(null);
  const { userId } = useAuth();
  const [isModalPassOpen, setIsModalPassOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [questionModal, setQuestionModal] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [ openModal, setOpenModal ] = useState(false)

  const handdleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModal1 = () => {
    setOpenModal(!openModal)
  }

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
    setQuestionModal(!questionModal);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      {/* Barra de navegación superior */}
      <div className="flex items-center bg-white lg:w-[80%] w-[100%] py-1 px-4 fixed">
        <div className="flex justify-start items-center lg:hidden">
          {/* Icono de menú que abre el modal lateral */}
          <IconMenu2 className="cursor-pointer" size={30} onClick={toggleSidebarModal} />
        </div>

        <div className="flex ml-auto items-center">
          <div className='items-center flex'>
            <div className='flex items-center dark:text-white'>
              <div>
                <span className='text-lg font-semibold'>
                  {userData && userData.nombre ? userData.nombre : 'Cargando...'}
                </span>
                <span className='text-base font-light'>
                  {userData && <p>{userData.rol === 1 ? 'Admin' : 'Usuario'}</p>}
                </span>
              </div>
              <div className='rounded-full border-2 border-gray-300 size-6 ml-4 items-end justify-center flex' onClick={handdleModal}>
                {!isModalOpen ? <IconChevronDown size={18} stroke={1.5}/> : <IconChevronUp size={18} stroke={1.5}/>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de opciones de usuario */}
      {isModalOpen && (
        <div className='fixed top-14 right-0 p-4'>
          <div className='bg-white dark:bg-[#273142] dark:text-white p-4 rounded-xl shadow-lg grid text-lg gap-2'>
            <Link to={`/profile/${userData._id}`} className='flex w-full items-center'>
              <IconUserCog className='mr-2' stroke={1.5}/>
              <span>Administrar Cuenta</span>
            </Link>
            <div className='flex items-center cursor-pointer'>
              <button onClick={() => handleEditClick(userData)} className='flex'>
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

      {/* Modal lateral */}
      {isSidebarModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed left-0 top-0 bottom-0 bg-white dark:bg-[#273142] w-[240px] p-4 z-50 transition-transform transform">
            {/* Cerrar el modal lateral */}
            <div className='w-width-full flex justify-end'>
              <button onClick={toggleSidebarModal} className="mb-4">
                <IconX size={30} />
              </button>
            </div>
            
            <div className='mb-8'>
              <img className='size-14' src={Logo} alt="Logo AgroBoost" />
              <h1 className='font-semibold text-xl dark:text-white'>AgroBoost</h1>
            </div>
            {/* Contenido del menú lateral */}
            <nav>
              <ul className='text-xl dark:text-white'>
                  <li className='flex p-2 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                      <Link to={`/dashboardhome/${userId}`} className='flex w-full'>
                          <IconDashboard size={30} stroke={1.5}/>
                          <span className='ml-4'>Panel</span>
                      </Link>
                  </li>
                  <li className='flex p-2 my-4 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                      <Link to='/dashboardusers' className='flex w-full'>
                          <IconUser size={30} stroke={1.5}/>
                          <span className='ml-4'>Usuarios</span>
                      </Link>
                      
                  </li>
                  <li className='flex p-2 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                      <Link to='/dasboardcultivo' className='flex w-full'>
                          <IconPlant size={30} stroke={1.5}/>
                          <span className='ml-4'>Cultivos</span>
                      </Link>
                      
                  </li>
                  <li className='flex p-2 my-4 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                      <Link to='/dashboardventa' className='flex w-full'>
                          <IconShoppingCart size={30} stroke={1.5}/>
                          <span className='ml-4'>Ventas</span>
                      </Link>
                  </li>
                  <li className='flex p-2 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                      <Link to='/dashboardproduct' className='flex w-full'>
                          <IconPackage size={30} stroke={1.5}/>
                          <span className='ml-4'>Productos</span>
                      </Link>
                      
                  </li>
              </ul>
              <ul className='p-6 text-xl absolute bottom-0 left-0 right-0 dark:text-white'>
                <li className='flex p-2 mb-4 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                    <Link to='/dashboardconfig' className='flex w-full'>
                        <IconSettings size={30} stroke={1.5}/>
                        <span className='ml-4'>Ajustes</span>
                    </Link>
                </li>
                <li className='flex p-2 cursor-pointer hover:text-[#D33363] hover:rounded-md hover:font-semibold'>
                  <button
                    onClick={() => {
                      setIsSidebarModalOpen(false); // Cerrar el modal lateral
                      setQuestionModal(true); // Mostrar el modal de confirmación de cierre de sesión
                    }}
                    className='flex w-full'
                  >
                    <IconLogout size={30} stroke={1.5} />
                    <span className='ml-4'>Cerrar Sesión</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Modales adicionales */}
      {isModalPassOpen && (
        <PasswordModal userData={userData} isOpen={isModalPassOpen} onClose={handleCloseModal} onSuccessModalOpen={handleSuccessModal} />
      )}
      {successModalOpen && (
        <SuccessModal 
          isOpen={successModalOpen} 
          onClose={handleSuccessModal}
          title={"Operación Exitosa"}
          mensaje={"Su contraseña ha sido actualizada."} />
      )}
      <QuestionModal
        isOpen={questionModal}
        onClose={handleQuestionModal}
        title={"¿Estás seguro que deseas cerrar sesión?"}
        mensaje={"Si cierras sesión, se te desconectará de tu cuenta. ¿Estás seguro de que deseas continuar?"} />
        <QuestionModal
            isOpen={openModal}
            onClose={handleModal1}
            title={"¿Estás seguro que deseas cerrar sesión?"}
            mensaje={"Si cierras sesión, se te desconectará de tu cuenta. ¿Estás seguro de que deseas continuar?"}
        />
    </div>
  );
};

export default Navbar_Top;
