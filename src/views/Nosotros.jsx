import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'

const Nosotros = () => {
  return (
    <div>
        <Navbar/>
        <div className='text-center px-12 py-6'>
          <span className='block font-semibold md:text-6xl sm:text-5xl text-4xl text-custom-204E51'>
            Sobre Nosotros
          </span>
          <span className='block md:text-2xl sm:text-xl text-lg mt-10 text-justify'>
            Nuestro equipo está compuesto por profesionales apasionados por la agricultura sostenible y el desarrollo tecnológico. Nos enorgullece ofrecer soluciones inteligentes que aprovechan la potencia de la recopilación y análisis de datos para mejorar la productividad, la eficiencia y la sostenibilidad en el sector agrícola.
          </span>
        </div>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Nosotros
