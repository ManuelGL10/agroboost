import React from 'react'
import mision from '../img/mision.jpeg'
import innovacion from '../img/innovacion.jpeg'
import brote from '../img/brote.jpeg'

const Cards = () => {
  return (
    <div className='w-full py-[2rem] px-12 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full flex flex-col p-4 my-4 rounded-lg'>
                <img className='w-80 mx-auto bg-white rounded-xl' src={mision} alt='mision' />
                <span className='block text-center text-custom-264948 font-semibold text-2xl mt-2 mb-2'>Misión Transformadora</span>
                <span className='md:text-xl sm:text-lg text-base text-justify'>Nuestra misión es empoderar a los agricultores, mejorar la eficiencia de las operaciones agrícolas y contribuir a un sector más sostenible.</span>
            </div>
            <div className='w-full flex flex-col p-4 my-4 rounded-lg'>
                <img className='w-80 mx-auto bg-white rounded-xl' src={innovacion} alt='innovacion' />
                <span className='block text-center text-custom-264948 font-semibold text-2xl mt-2 mb-2'>Compromiso con la Innovación</span>
                <span className='md:text-xl sm:text-lg text-base text-justify'>Nuestro equipo de profesionales está comprometido con la investigación y desarrollo continuo, asegurando que nuestras soluciones reflejen las últimas tendencias y avances tecnológicos.</span>
            </div>
            <div className='w-full flex flex-col p-4 my-4 rounded-lg'>
                <img className='w-80 mx-auto bg-white rounded-xl' src={brote} alt='brote' />
                <span className='block text-center text-custom-264948 font-semibold text-2xl mt-2 mb-2'>Sostenibilidad Agrícola</span>
                <span className='md:text-xl sm:text-lg text-base text-justify'>Buscamos equilibrar el aumento de la productividad con prácticas respetuosas con el medio ambiente, promoviendo un futuro agrícola que sea rentable y sostenible a largo plazo.</span>
            </div>
        </div>
    </div>
  )
}

export default Cards