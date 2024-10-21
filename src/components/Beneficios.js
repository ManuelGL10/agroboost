import React from 'react'
import { IconStarFilled, IconBox, IconCheck, IconUsersGroup } from '@tabler/icons-react'

const Beneficios = () => {
  return (
    <div className='flex justify-center items-center py-6 max-w-[1240px] mx-auto md:px-12 px-4 p-2'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='m-10 text-center flex flex-col justify-center'>
                <span className='block font-medium md:text-4xl sm:text-3xl text-2xl text-custom-204E51 mb-4 text-center'>
                    Los beneficios de elegir nuestra experiencia
                </span>
                <span className='block text-black md:text-2xl sm:text-xl text-lg text-justify'>
                    Descubre cómo AgroBoost revoluciona tu experiencia agrícola con una gama de beneficios diseñados para optimizar y potenciar tus cosechas.
                </span>
            </div>
            <div className='rounded-2xl w-auto mx-auto my-4 shadow-2xl bg-[#204E51] text-white'>
                <div className='flex mx-12 my-12 items-center'>
                    <IconStarFilled size={40} className='mr-6'/>
                    <span className='block text-left font-semibold md:text-3xl sm:text-2xl text-xl mt-2 mb-2'>
                        Crecimiento Eficiente
                    </span>
                </div>
                <div className='flex mx-12 my-12 items-center'>
                    <IconBox size={40} className='mr-6'/>
                    <span className='block text-left font-semibold md:text-3xl sm:text-2xl text-xl mt-2 mb-2'>
                        Ahorro de Tiempo
                    </span>
                </div>
                <div className='flex mx-12 my-12 items-center'>
                    <IconCheck size={40} className='mr-6'/>
                    <span className='block text-left font-semibold md:text-3xl sm:text-2xl text-xl mt-2 mb-2'>
                        Sostenibilidad Agrícola
                    </span>
                </div>
                <div className='flex mx-12 my-12 items-center'>
                    <IconUsersGroup size={40} className='mr-6'/>
                    <span className='block text-left font-semibold md:text-3xl sm:text-2xl text-xl mt-2 mb-2'>
                        Innovación Continua
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Beneficios