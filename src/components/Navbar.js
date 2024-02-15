import React from 'react'
import Logo from '../img/LogoAgroBoostPNG.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center m-6'>
          <img className='h-20' src={Logo} alt="Logo AgroBoost" />
          <h1 className='font-semibold text-2xl'>AgroBoost</h1>
        </div>
      <div className='flex items-center'>
          <span className='mr-5 text-xl'>Inicio</span>
          <span className='mr-5 text-xl'>Sobre Nosotros</span>
          <span className='mr-5 text-xl'>Nuestro Servicios</span>
          <span className='mr-5 text-xl'>Productos</span>
      </div>
    </div>
  )
}

export default Navbar