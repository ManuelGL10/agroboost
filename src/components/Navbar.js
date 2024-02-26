import React, { useState} from 'react';
import Logo from '../img/LogoAgroBoostPNG.svg';
import { Link } from 'react-router-dom';
import { IconMenu2, IconX } from '@tabler/icons-react';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    if (window.innerWidth <= 768) { // Cambia el 768 según sea necesario para el tamaño de pantalla móvil
      setNav(!nav);
    }
  }

  return (
    <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4'>
      <div className='flex items-center p-4'>
        <img className='h-16' src={Logo} alt="Logo AgroBoost" />
        <h1 className='font-semibold text-2xl'>AgroBoost</h1>
      </div>
      <ul className='hidden md:flex'>
        <li className='p-3'><Link to="/" className='lg:text-2xl md:text-lg sm:text-base cursor-pointer hover:underline hover:text-custom-264948 hover:font-medium'>Inicio</Link></li>
        <li className='p-3'><Link to="/nosotros" className='lg:text-2xl md:text-lg sm:text-base cursor-pointer hover:underline hover:text-custom-264948 hover:font-medium'>Sobre Nosotros</Link></li>
        <li className='p-3'><Link to="/servicio" className='lg:text-2xl md:text-lg sm:text-base cursor-pointer hover:underline hover:text-custom-264948 hover:font-medium'>Nuestro Servicios</Link></li>
        <li className='p-3'><Link to="/producto" className='lg:text-2xl md:text-lg sm:text-base cursor-pointer hover:underline hover:text-custom-264948 hover:font-medium'>Productos</Link></li>
      </ul>
      <div className='block md:hidden' onClick={handleNav}>
          {!nav ? <IconX size={32}/> : <IconMenu2 size={32}/>}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full bg-[#F8F8FF] ease-in-out duration-500 md:hidden z-10' : 'fixed left-[-100%] z-0'}>
        <div className='flex items-center m-6'>
          <img className='h-16' src={Logo} alt="Logo AgroBoost" />
        </div>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b-2 border-[#d0d0d7]'><Link to="/" className='text-xl'>Inicio</Link></li>
          <li className='p-4 border-b-2 border-[#d0d0d7]'><Link to="/nosotros" className='text-xl'>Sobre Nosotros</Link></li>
          <li className='p-4 border-b-2 border-[#d0d0d7]'><Link to="/servicio" className='text-xl'>Nuestro Servicios</Link></li>
          <li className='p-4'><Link to="/producto" className='text-xl'>Productos</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
