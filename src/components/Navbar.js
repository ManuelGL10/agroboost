import React, {useState} from 'react'
import Logo from '../img/LogoAgroBoostPNG.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center m-6'>
          <img className='h-20' src={Logo} alt="Logo AgroBoost" />
          <h1 className='font-semibold text-2xl'>AgroBoost</h1>
        </div>
      <div className='flex items-center'>
          <Link to="/" className='mr-5 text-2xl cursor-pointer hover:underline hover:text-custom-264948 hover:font-medium'>Inicio</Link>
          <Link to="/nosotros" className='mr-5 text-2xl cursor-pointer hover:underline hover:text-custom-264948 hover:font-medium'>Sobre Nosotros</Link>
          <Link to="/servicio" className='mr-5 text-2xl cursor-pointer hover:underline hover:text-custom-264948 hover:font-medium'>Nuestro Servicios</Link>
          <Link to="/producto" className='mr-5 text-2xl cursor-pointer hover:underline hover:text-custom-264948 hover:font-medium'>Productos</Link>
      </div>
    </div>
  )
}

export default Navbar
