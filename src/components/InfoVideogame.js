import React from 'react'
import Button from './Button'
import { IconDeviceGamepad2, IconDownload } from '@tabler/icons-react'
import servicio from "../img/ImgVideogame.png"

const InfoVideogame = () => {
  return (
    <div className='flex justify-center items-center py-12 max-w-[1545px] mx-auto md:px-12 px-4 p-2'>
        <div className='max-w-[1545px] mx-auto grid md:grid-cols-2'>
            <div className='m-6 text-center flex flex-col justify-center'>
                <div className='flex'>
                    <IconDeviceGamepad2 className='size-10 mr-4 text-custom-264948'/>
                    <span className='block font-medium lg:text-4xl md:text-3xl text-2xl text-custom-204E51 mb-4 md:text-left text-center'>
                        AgroBoost Videojuego
                    </span>
                </div>
                <span className='block text-black lg:text-xl md:text-lg text-base text-justify'>
                    AgroBoost, un innovador videojuego que fusiona estrategia y gestión en un entorno dinámico, diseñado para ofrecer una experiencia inmersiva y cautivadora. Los jugadores disfrutarán de controles intuitivos que les permitirán desplazarse con facilidad, interactuar con personajes no jugables (NPCs) y gestionar actividades esenciales como la preparación del terreno, la siembra de semillas y la cosecha.                
                </span>
                <div className='flex justify-center'>
                    <div className='bg-custom-204E51 p-4 max-w-max max-h-max rounded-lg m-6 hover:scale-110 transition flex justify-center items-center'>
                        <IconDownload className='mr-4 text-white'/>
                        <span className='font-bold text-white text-center'>Descárgalo Ahora</span>
                    </div>
                </div>
                <div className='text-left text-gray-500'>
                    <span>Versión 1.0 | 80MB | Windows, Mac, Linux</span>
                </div>
            </div>
            <div className='flex lg:justify-end md:justify-center sm:justify-center'>
                <img src={servicio} className='rounded-2xl w-[600px] my-4' alt="imagen de servicio"/>
            </div>
        </div>
    </div>
  )
}

export default InfoVideogame