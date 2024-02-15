import React from 'react';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';

const Footer = () => {
  return (
    <div className='bg-custom-204E51'>
      <div className='flex items-center m-4'>
        <div className='m-10'>
          <span className='block font-semibold text-lg text-white mb-2 text-left'>
            Contáctanos:
          </span>
          <span className='block text-white mb-4 text-left text-sm'>
            ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte.
          </span>
          <span className='block text-white text-lg font-semibold mb-4 text-left'>Redes Sociales</span>
          <div className='flex'>
            <img src={facebook} alt='facebook' style={{height: '30px', width: '30px'}}/>
            <img src={instagram} alt='instagram' style={{height: '30px', width: '30px', margin: '0 10px'}}/>
          </div>
        </div>
        <div className='text-left m-10 text-white'>
            <span className='block font-semibold mb-2 text-lg'>Enlaces Rápidos:</span>
            <span className='block'>Inicio</span>
            <span className='block'>Sobre Nosotros</span>
            <span className='block'>Nuestro Servicio</span>
            <span className='block'>Producto</span>
        </div>
      </div>
      <div className='justify-center text-center text-white'>
        <div>
          <span className='block text-white'>
            Copyright© 2020-2023 AgroBoost. Todos los derechos reservados
          </span> 
        </div>
        <div >
          <span className='m-4'>Accesibilidad</span>
          <span>|</span>
          <span className='m-4'>Política de privacidad</span>
          <span>|</span>
          <span className='m-4'>Términos de uso</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
