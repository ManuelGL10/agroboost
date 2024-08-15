import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/LogoAgroBoostPNG.svg';
import { IconListDetails, IconPlant, IconDevices, IconSettings, IconLogout, IconHome, IconUser, IconGraph } from '@tabler/icons-react';
import { useAuth } from '../request/AuthContext';
import GetUser from '../request/GetUser';

const NavbarLat = () => {
  const [userData, setUserData] = useState(null);
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

  return (
    <div className='bg-white w-[20%] h-full fixed left-0 top-0 justify-center'>
      <div className='mt-4'>
        <div className='flex items-center justify-center'>
          <img className='h-14' src={Logo} alt="Logo AgroBoost" />
          <h1 className='font-semibold text-xl'>AgroBoost</h1>
        </div>
      </div>
      <ul className='py-8 px-6 text-xl'>
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
      <ul className='p-6 text-xl absolute bottom-0 left-0 right-0'>
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
    </div>
  );
};

export default NavbarLat;
