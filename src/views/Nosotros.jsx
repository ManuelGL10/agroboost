import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { IconStarFilled, IconBox, IconCheck, IconUsersGroup } from '@tabler/icons-react'
import libro from '../img/libro.png'
import recomendar from '../img/recomendar.png'
import zumbido from '../img/zumbido.png'
import acceso from '../img/acceso.png'

const Nosotros = () => {
  return (
    <div className='bg-white'>
        <Navbar/>
        <div className='text-center m-10'>
          <span className='block font-semibold text-6xl text-custom-204E51'>
            Nuestro Servicios
          </span>
          <span className='block text-lg m-10'>
            Desde el corazón de la tecnología agrícola, te brindamos una solución completa para optimizar cosechas, respetar recursos y cultivar un futuro sostenible. Descubre nuestros servicios y sé parte de la evolución agrícola con AgroBoost.
          </span>
        </div>
        <div className='flex justify-between m-20'>
          <div className='bg-custom-F0F0F0 p-8 rounded-lg text-center' style={{ width: '250px', height: '200px' }}>
            <div className="h-full flex flex-col justify-center items-center"> 
              <img src={libro} alt='libro' className='h-full' /> 
              <span>Recursos Educativos Integrados</span>
            </div>
          </div>
          <div className='bg-custom-F0F0F0 p-8 rounded-lg text-center' style={{ width: '250px', height: '200px' }}>
            <div className="h-full flex flex-col justify-center items-center"> 
              <img src={recomendar} alt='recomendar'  className='h-full'/>
              <span>Recomendaciones Integradas</span>
            </div>
          </div>
          <div className='bg-custom-F0F0F0 p-8 rounded-lg text-center' style={{ width: '250px', height: '200px' }}>
            <div className="h-full flex flex-col justify-center items-center"> 
              <img src={zumbido} alt='zumbido' className='h-full'/>
              <span>Sistemas Automáticos</span>
            </div>
          </div>
          <div className='bg-custom-F0F0F0 p-8 rounded-lg text-center' style={{ width: '250px', height: '200px' }}>
            <div className="h-full flex flex-col justify-center items-center"> 
              <img src={acceso} alt='acceso' className='h-full'/>
              <span>Acceso Remoto y Control</span>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center m-20'>
          <div className='mr-36'>
            <span className='block text-custom-204E51 text-3xl font-medium'>Los beneficios de elegir nuestra experiencia</span>
            <span className='block text-lg mt-6'>Descubre cómo AgroBoost revoluciona tu experiencia agrícola con una gama de beneficios diseñados para optimizar y potenciar tus cosechas:</span>
          </div>
          <div className='bg-custom-204E51 p-20 text-white text-lg font-medium rounded-3xl'>
            <div className='flex justify-between items-center m-4'>
              <div className='bg-custom-264948 p-5 rounded-full'>
                <IconStarFilled size={40}/>
              </div>
              <span className='ml-14'>Crecimiento Eficiente</span>
            </div>
            <div className='flex justify-center items-center m-4'>
              <div className='bg-custom-264948 p-5 rounded-full'>
                <IconBox size={40}/>
              </div>
              <span className='ml-14' style={{ whiteSpace: 'initial' }}>Ahorro de Tiempo <br /> y Recursos</span>
            </div>
            <div className='flex justify-center items-center m-4'>
              <div className='bg-custom-264948 p-5 rounded-full'>
                <IconCheck size={40}/>
              </div>
              <span className='ml-14'>Sostenibilidad Agrícola</span>
            </div>
            <div className='flex justify-center items-center m-4'>
              <div className='bg-custom-264948 p-5 rounded-full'>
                <IconUsersGroup size={40}/>
              </div>
              <span className='ml-14'>Innovación Continua</span>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Nosotros
