import React from 'react'
import monitorear from '../img/monitorear.jpeg';


const Agroboost = () => {
  return (
    <div className='w-full flex justify-center items-center py-6 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='m-10 text-center flex flex-col justify-center'>
                <span className='block font-medium md:text-3xl sm:text-2xl text-2xl text-custom-204E51 mb-4 text-justify'>
                    AgroBoost, donde la tecnología se encuentra con la tierra.
                </span>
                <span className='block text-black md:text-lg sm:text-base text-base text-justify'>
                    Descubre las últimas innovaciones tecnológicas diseñadas para potenciar tus cultivos y optimizar tu producción. Obtén pronósticos climáticos precisos, análisis de suelos detallados y herramientas avanzadas para una gestión agrícola eficiente.
                </span>
            </div>
            <img src={monitorear} className='rounded-2xl w-[450px] mx-auto my-4 shadow-2xl' alt="imagen de monitoreo"/>
        </div>
    </div>
  )
}

export default Agroboost