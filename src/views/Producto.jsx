import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CardsProduct from '../components/CardsProduct'

const Producto = () => {
  return (
    <div >
        <Navbar/>
          <div className='text-center py-6 max-w-[1240px] mx-auto md:px-12 px-4 p-2'>
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