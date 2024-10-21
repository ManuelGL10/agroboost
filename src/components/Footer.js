import React from 'react';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-custom-204E51 mx-auto md:px-12 px-4 p-2'>
      <div className='flex my-2 max-w-[1240px] mx-auto md:px-12 px-4 p-2'>
        <div>
          <span className='block font-semibold lg:text-xl md:text-lg text-base text-white mb-2 text-left'>
            Contáctanos:
          </span>
          <span className='block text-white mb-4 text-left lg:text-lg md:text-base text-sm'>
            ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte.
          </span>
          <span className='block text-white lg:text-lg md:text-base text-sm font-semibold mb-4 text-left'>Redes Sociales</span>
          <div className='flex'>
            <img src={facebook} alt='facebook' className='mr-2 hover:scale-125 hover:opacity-70 transition inline-block'/>
            <img src={instagram} alt='instagram' className='hover:scale-125 hover:opacity-70 transition inline-block'/>
          </div>
        </div>
        <div className='text-left text-white md:ml-8 ml-4 lg:text-xl md:text-lg text-base'>
            <span className='block font-semibold mb-2'>Enlaces Rápidos:</span>
            <Link to="/" className='block cursor-pointer hover:underline hover:text-white hover:font-medium'>Inicio</Link>
            <Link to="/nosotros" className='block cursor-pointer hover:underline hover:text-white hover:font-medium'>Sobre Nosotros</Link>
            <Link to="/servicio" className='block cursor-pointer hover:underline hover:text-white hover:font-medium'>Nuestro Servicio</Link>
            <Link to="/producto" className='block cursor-pointer hover:underline hover:text-white hover:font-medium'>Producto</Link>
        </div>
      </div>
      <div className='justify-center text-center text-white border-t-2 mt-10 max-w-[1240px] mx-auto md:px-12 px-4 p-2'>
        <div>
          <span className='block text-white lg:text-lg md:text-base text-sm my-2'>
            Copyright© 2020-2023 AgroBoost. Todos los derechos reservados
          </span> 
        </div>
        <div className='grid md:grid-cols-5 justify-center items-center lg:text-lg md:text-base text-sm'>
          <span>Accesibilidad</span>
          <span className='hidden md:inline'>|</span>
          <span>Política de privacidad</span>
          <span className='hidden md:inline'>|</span>
          <span>Términos de uso</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
