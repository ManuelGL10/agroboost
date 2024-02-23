import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import invernadero from '../img/invernaderos.jpeg'
import regar from '../img/pexels-fox-750836.jpg'
import sensor from '../img/sensor.jpeg'
import nutriente from '../img/nutriente.jpeg'
import monitoreo from '../img/monitoreo.jpeg'
import CardsProduct from '../components/CardsProduct'

const Producto = () => {
  return (
    <div>
        <Navbar/>
            <div className='flex flex-col text-center mx-10 mt-10'>
                <span className='block font-semibold md:text-6xl sm:text-5xl text-4xl text-custom-204E51'>
                    Nuestro Producto Destacado
                </span>
                <span className='block md:text-2xl sm:text-xl text-lg mt-10 text-justify'>Estos dispositivos inteligentes están diseñados para proporcionar datos precisos y en tiempo real, llevando la gestión de tu invernadero a un nivel superior.</span>
            </div>
            <CardsProduct/>
        <Footer/>
    </div>
  )
}

export default Producto