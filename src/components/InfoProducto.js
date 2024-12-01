import React from 'react'
import servicio from '../img/dron.png'
import Button from './Button'

const InfoProducto = () => {
  return (
    <div className='flex justify-center items-center py-12 max-w-[1545px] mx-auto md:px-12 px-4 p-2'>
        <div className='max-w-[1545px] mx-auto grid md:grid-cols-2'>
            <div className='m-6 text-center flex flex-col justify-center'>
                <span className='block font-medium lg:text-4xl md:text-3xl text-2xl text-custom-204E51 mb-4 md:text-left text-center'>
                    Nuestro Servicio
                </span>
                <span className='block text-black lg:text-xl md:text-lg text-base text-justify'>
                    AgroBoost va más allá de ser una aplicación; es tu socio en el campo. Desde el monitoreo del clima hasta el análisis detallado del suelo, ofrecemos un conjunto integral de servicios para mejorar la eficiencia, aumentar la productividad y promover prácticas agrícolas sostenibles. Descubre cómo AgroBoost está transformando la manera en que cultivas.
                </span>
                <div className='flex justify-center'>
                    <Button text="Descubre Más" to="/producto"/>
                </div>
            </div>
            <div className='flex lg:justify-end md:justify-center sm:justify-center'>
                <img src={servicio} className='rounded-2xl w-[500px] my-4 shadow-2xl' alt="imagen de servicio"/>
            </div>
        </div>
    </div>
  )
}

export default InfoProducto