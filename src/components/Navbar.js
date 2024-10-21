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
    <div className='flex justify-between items-center max-w-[1240px] mx-auto md:px-12 px-4 p-2'>
      <Link className='flex items-center p-2' to="/">
        <img className='h-16' src={Logo} alt="Logo AgroBoost" />
        <h1 className='font-semibold text-xl'>AgroBoost</h1>
      </Link>
      <ul className='hidden lg:flex items-center'>
        <li className='p-2'><Link to="/nosotros" className='lg:text-lg md:text-base sm:text-sm cursor-pointer hover:underline hover:text-custom-264948 hover:font-medium'>Sobre Nosotros</Link></li>
        <li className='p-2'><Link to="/servicio" className='lg:text-lg md:text-base sm:text-sm cursor-pointer hover:underline hover:text-custom-264948 hover:font-medium'>Nuestro Servicios</Link></li>
        <li className='p-2'><Link to="/producto" className='lg:text-lg md:text-base sm:text-sm cursor-pointer hover:underline hover:text-custom-264948 hover:font-medium'>Productos</Link></li>
        <li className='p-2'>
          <Link to="/login" className='bg-custom-204E51 p-3 max-w-max max-h-max rounded-lg hover:scale-110 transition inline-block text-center'>
            <span className='text-white lg:text-lg md:text-base sm:text-sm font-semibold'>Iniciar Sesión</span>
          </Link>
        </li>
        <li className='p-2'>
          <Link to="/registro" className='bg-white p-3 max-w-max max-h-max rounded-lg border-2 border-custom-264948 hover:scale-110 transition inline-block text-center'>
            <span className='text-custom-264948 lg:text-lg md:text-base sm:text-sm font-semibold'>Registrarse</span>
          </Link>
        </li>
      </ul>
      <div className='block lg:hidden' onClick={handleNav}>
          {!nav ? <IconX size={32}/> : <IconMenu2 size={32}/>}
      </div>
      
      <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full bg-[#F8F8FF] ease-in-out duration-500 md:hidden z-10' : 'fixed left-[-100%] z-0'}>
        <Link className='flex items-center m-6'>
          <img className='h-16' src={Logo} alt="Logo AgroBoost" />
        </Link>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b-2 border-[#d0d0d7]'><Link to="/nosotros" className='text-xl'>Sobre Nosotros</Link></li>
          <li className='p-4 border-b-2 border-[#d0d0d7]'><Link to="/servicio" className='text-xl'>Nuestro Servicios</Link></li>
          <li className='p-4'><Link to="/producto" className='text-xl'>Productos</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
