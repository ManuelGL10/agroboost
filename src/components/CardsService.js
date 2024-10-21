import React from 'react'
import libro from '../img/libro.png'
import recomendar from '../img/recomendar.png'
import zumbido from '../img/zumbido.png'
import acceso from '../img/acceso.png'

const CardsService = () => {
  return (
    <div className='py-[2rem] bg-white max-w-[1240px] mx-auto md:px-12 px-4 p-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='w-44 mx-auto flex flex-col p-4 my-4 bg-custom-F0F0F0 rounded-lg'>
                <img className='w-24 mx-auto rounded-xl' src={libro} alt='libro' />
                <span className='md:text-lg sm:text-base text-sm text-center font-medium'>Recursos Educativos Integrados</span>
            </div>
            <div className='w-44 mx-auto flex flex-col p-4 my-4 bg-custom-F0F0F0 rounded-lg'>
                <img className='w-24 mx-auto rounded-xl' src={recomendar} alt='recomendar' />
                <span className='md:text-lg sm:text-base text-sm text-center font-medium'>Recomendaciones integradas</span>
            </div>
            <div className='w-44 mx-auto flex flex-col p-4 my-4 bg-custom-F0F0F0 rounded-lg'>
                <img className='w-24 mx-auto rounded-xl' src={zumbido} alt='zumbido' />
                <span className='md:text-lg sm:text-base text-sm text-center font-medium'>Sistemas Automáticos</span>
            </div>
            <div className='w-44 mx-auto flex flex-col p-4 my-4 bg-custom-F0F0F0 rounded-lg'>
                <img className='w-24 mx-auto rounded-xl' src={acceso} alt='acceso' />
                <span className='md:text-lg sm:text-base text-sm text-center font-medium'>Acceso remoto y control</span>
            </div>
        </div>
    </div>
  )
}

export default CardsService