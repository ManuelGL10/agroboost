import React from 'react'
import nosotros from '../img/pexels-adrien-olichon-3767172.jpg'
import Button from './Button'

const InfoNosotros = () => {
  return (
    <div className='w-full flex justify-center items-center py-6 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={nosotros} className='rounded-2xl w-[450px] mx-auto my-4 shadow-2xl' alt="imagen de monitoreo"/>
            <div className='m-10 text-center flex flex-col justify-center'>
                <span className='block font-medium md:text-3xl sm:text-2xl text-2xl text-custom-204E51 mb-4 text-justify'>
                    Sobre Nosotros
                </span>
                <span className='block text-black md:text-lg sm:text-base text-base text-justify'>
                    En AgroBoost, nos apasiona impulsar el futuro de la agricultura mediante soluciones tecnológicas de vanguardia. Fundada por un equipo de expertos en agronomía y desarrollo de software, nuestra misión es proporcionar a los agricultores las herramientas necesarias para superar los desafíos modernos y cosechar los frutos del éxito sostenible.
                </span>
                <div className='flex justify-center'>
                    <Button text="Conoce Más" to="/nosotros"/>
                </div>
            </div>
        </div>
      </div>
  )
}

export default InfoNosotros