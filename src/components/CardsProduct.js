import React from 'react';
import regar from '../img/pexels-fox-750836.jpg';
import sensor from '../img/sensor.jpeg';
import nutriente from '../img/nutriente.jpeg';
import monitoreo from '../img/monitoreo.jpeg';

const CardsProduct = () => {
  return (
    <div className='w-full py-[2rem] px-8 bg-white'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
        <div className='w-44 mx-auto flex flex-col p-4 my-4 bg-custom-F0F0F0 rounded-xl'>
          <img className='w-40 mx-auto rounded-xl' src={regar} alt='regar' />
          <span className='md:text-xl sm:text-lg mt-2 text-base text-center font-medium'>Sensor de Humedad</span>
        </div>
        <div className='w-44 mx-auto flex flex-col p-4 my-4 bg-custom-F0F0F0 rounded-xl'>
          <img className='w-40 mx-auto rounded-xl' src={sensor} alt='sensor' />
          <span className='md:text-xl sm:text-lg mt-2 text-center font-medium'>Sensor de Temperatura</span>
        </div>
        <div className='w-44 mx-auto flex flex-col p-4 my-4 bg-custom-F0F0F0 rounded-xl'>
          <img className='w-40 mx-auto rounded-xl' src={nutriente} alt='nutriente' />
          <span className='md:text-xl sm:text-lg mt-2 text-center font-medium'>Sensor de Nutrientes</span>
        </div>
        <div className='w-44 mx-auto flex flex-col p-4 my-4 bg-custom-F0F0F0 rounded-xl'>
          <img className='w-40 mx-auto rounded-xl' src={monitoreo} alt='monitoreo' />
          <span className='md:text-xl sm:text-lg mt-2 text-center font-medium'>Conectividad Inalámbrica</span>
        </div>
      </div>
    </div>
  );
};

export default CardsProduct;
