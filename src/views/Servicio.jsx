import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardsService from '../components/CardsService'
import Beneficios from '../components/Beneficios'

const Servicio = () => {
  return (
    <div>
      <Navbar/>
      <div className='text-center py-6 max-w-[1240px] mx-auto md:px-12 px-4 p-2'>
        <span className='block font-semibold md:text-6xl sm:text-5xl text-4xl text-custom-204E51'>
          Nuestro Servicios
        </span>
        <span className='block md:text-2xl sm:text-xl text-lg mt-10 text-justify'>
          Desde el corazón de la tecnología agrícola, te brindamos una solución completa para optimizar cosechas, respetar recursos y cultivar un futuro sostenible. Descubre nuestros servicios y sé parte de la evolución agrícola con AgroBoost.
        </span>
      </div>
      <CardsService/>
      <Beneficios/>
      <Footer/>
    </div>
  )
}

export default Servicio
