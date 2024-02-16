import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import invernadero from '../img/invernaderos.jpeg'
import regar from '../img/pexels-fox-750836.jpg'
import sensor from '../img/sensor.jpeg'
import nutriente from '../img/nutriente.jpeg'
import monitoreo from '../img/monitoreo.jpeg'

const Producto = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <div className='flex flex-col text-center m-10'>
                <span className='text-custom-264948 font-semibold text-6xl mb-12'>Nuestro Producto Destacado</span>
                <span className='text-2xl m-10'>Estos dispositivos inteligentes están diseñados para proporcionar datos precisos y en tiempo real, llevando la gestión de tu invernadero a un nivel superior.</span>
            </div>
            <div className='flex justify-between m-20 text-lg'>
                <div className='bg-custom-F0F0F0 p-8 rounded-lg text-center' style={{ width: '230px', height: '300px' }}>
                    <div className="h-full flex flex-col justify-center items-center"> 
                        <img src={regar} alt='regar' className='h-full rounded-lg mb-4' /> 
                        <span>Sensor de Humedad del Suelo</span>
                    </div>
                </div>
                <div className='bg-custom-F0F0F0 p-8 rounded-lg text-center' style={{ width: '230px', height: '300px' }}>
                    <div className="h-full flex flex-col justify-center items-center"> 
                        <img src={sensor} alt='sensor'  className='h-full rounded-lg mb-4'/>
                        <span>Sensor de Temperatura</span>
                    </div>
                </div>
                <div className='bg-custom-F0F0F0 p-8 rounded-lg text-center' style={{ width: '230px', height: '300px' }}>
                    <div className="h-full flex flex-col justify-center items-center"> 
                        <img src={nutriente} alt='nutriente' className='h-full rounded-lg mb-4'/>
                        <span>Sensor de Nutrientes</span>
                    </div>
                </div>
                <div className='bg-custom-F0F0F0 p-8 rounded-lg text-center' style={{ width: '230px', height: '300px' }}>
                    <div className="h-full flex flex-col justify-center items-center"> 
                        <img src={monitoreo} alt='monitoreo' className='h-full rounded-lg mb-4'/>
                        <span>Conectividad Inalámbrica</span>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Producto