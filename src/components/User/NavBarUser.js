import React, { useState, useEffect, useContext } from 'react';
import { IconChevronDown, IconChevronUp, IconSearch, IconSun, IconMoon, IconLogout, IconUserCog, IconKey } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const NavbarUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handdleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='w-full items-center px-6 py-2 bg-white fixed'>
      <div className='flex ml-[20%]'>

        <div className='items-center flex ml-auto'>
          <div className='flex items-center'>
            <div className='rounded-full bg-custom-color_logo h-10 w-10' />
            <ul className='ml-4'>
              <li>
                <span className='text-lg font-semibold'>Manuel</span>
              </li>
              <li>
                <span className='text-base font-light'>User</span>
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
            <Link to='/profile' className='flex w-full items-center'>
              <IconUserCog className='mr-2' stroke={1.5}/>
              <span>Administrar Cuenta</span>
            </Link>
            <div className='flex items-center'>
                <IconKey className='mr-2' stroke={1.5}/>
                <span>Cambiar Contraseña</span>
            </div>
            <Link to='/login' className='flex w-full items-center'>
              <IconLogout className='mr-2' stroke={1.5}/>
              <span>Cerrar Sesión</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarUser;