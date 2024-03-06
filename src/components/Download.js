import React from 'react'
import appstore from '../img/App Store.svg'
import playstore from '../img/Google Play.svg'
import appmovil from '../img/App-removebg-preview.png'

const Download = () => {
  return (
    <div className='w-full flex justify-center items-center py-6 px-12'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={appmovil} className='order-2 md:order-none rounded-2xl w-[250px] mx-auto my-4 bg-transparent' alt="appmovil"/>
        <div className='order-1 md:order-none m-6 flex flex-col justify-center'>
            <span className='block font-medium lg:text-4xl md:text-3xl text-2xl text-custom-204E51 mb-4 md:text-left text-center'>
                Descarga la aplicación en tu disposivo móvil.
            </span>
            <span className='block text-black lg:text-xl md:text-lg text-base text-justify'>
                Disfruta al máximo todas las funcionalidades que AgroBoost tiene para ti
            </span>
            <div className='flex justify-evenly mt-6'>
                <img src={appstore} alt='appstore' className='hover:scale-110 transition inline-block'/>
                <img src={playstore} alt='playstore' className='hover:scale-110 transition inline-block'/>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Download