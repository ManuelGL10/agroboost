import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import mision from '../img/mision.jpeg'
import innovacion from '../img/innovacion.jpeg'
import brote from '../img/brote.jpeg'

const Nosotros = () => {
  return (
    <div>
        <Navbar/>
        <div className='text-center m-10'>
          <span className='block font-semibold text-6xl text-custom-204E51'>
            Sobre Nosotros
          </span>
          <span className='block text-2xl m-10 text-justify'>
            Nuestro equipo está compuesto por profesionales apasionados por la agricultura sostenible y el desarrollo tecnológico. Nos enorgullece ofrecer soluciones inteligentes que aprovechan la potencia de la recopilación y análisis de datos para mejorar la productividad, la eficiencia y la sostenibilidad en el sector agrícola.
          </span>
        </div>
        <div className='flex justify-between m-20'>
          <div className='flex-col text-justify' style={{ width: '300px', height: 'auto'}}>
            <img src={mision} alt='mision' className='rounded-2xl'/>
            <span className='block text-center text-custom-264948 font-semibold text-xl mt-2 mb-2'>Misión Transformadora</span>
            <span>Nuestra misión es empoderar a los agricultores, mejorar la eficiencia de las operaciones agrícolas y contribuir a un sector más sostenible.</span>
          </div>
          <div className='flex-col text-justify' style={{ width: '300px', height: 'auto'}}>
            <img src={innovacion} alt='innovacion' className='rounded-2xl'/>
            <span className='block text-center text-custom-264948 font-semibold text-xl  mt-2 mb-2'>Compromiso con la Innovación</span>
            <span>Nuestro equipo de profesionales está comprometido con la investigación y desarrollo continuo, asegurando que nuestras soluciones reflejen las últimas tendencias y avances tecnológicos.</span>
          </div>
          <div className='flex-col text-justify' style={{ width: '300px', height: 'auto'}}>
            <img src={brote} alt='brote' className='rounded-2xl'/>
            <span className='block text-center text-custom-264948 font-semibold text-xl  mt-2 mb-2'>Sostenibilidad Agrícola</span>
            <span>Buscamos equilibrar el aumento de la productividad con prácticas respetuosas con el medio ambiente, promoviendo un futuro agrícola que sea rentable y sostenible a largo plazo.</span>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Nosotros
