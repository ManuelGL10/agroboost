import React from 'react';
import Navbar from '../components/Navbar';
import plantio from '../img/plantio.jpeg';
import monitorear from '../img/monitorear.jpeg';
import Button from '../components/Button';
import Footer from '../components/Footer';
import nosotros from '../img/invernadero.jpeg'
import servicio from '../img/dron.png'


const Inicio = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img className='filter brightness-50' src={plantio} alt="invernadero"/>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-white text-6xl font-bold">
            "Cultiva el Futuro: Invernadero Inteligente, Cosecha Eficiente"
          </span>
        </div>
      </div>
      <div className='flex justify-center items-center m-10'>
        <div className='m-10 text-center'>
          <span className='block font-medium text-3xl text-custom-204E51 mb-4 text-justify'>
            AgroBoost, donde la tecnología se encuentra con la tierra para transformar la agricultura.
          </span>
          <span className='block text-black text-xl text-justify'>
            Descubre las últimas innovaciones tecnológicas diseñadas para potenciar tus cultivos y optimizar tu producción. Obtén pronósticos climáticos precisos, análisis de suelos detallados y herramientas avanzadas para una gestión agrícola eficiente.
          </span>
        </div>
        <div className='m-10 relative shadow-2xl rounded-2xl'>
          <img src={monitorear} className='rounded-2xl max-w-md max-h-md' alt="imagen de monitoreo"/>
          <div className='bg-white rounded-xl p-3 absolute -bottom-4 left-1/2 transform -translate-x-1/2'>
            <span className="text-black text-lg font-semibold m-4">Desde 2020</span>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center m-10'>
        <div className='m-10 relative shadow-2xl rounded-2xl'>
          <img src={nosotros} className='rounded-2xl max-w-md max-h-md' alt="imagen de monitoreo"/>
        </div>
        <div className='m-10'>
          <span className='block font-medium text-3xl text-custom-204E51 mb-4 text-right'>
            Sobre Nosotros
          </span>
          <span className='block text-black text-xl text-justify'>
            En AgroBoost, nos apasiona impulsar el futuro de la agricultura mediante soluciones tecnológicas de vanguardia. Fundada por un equipo de expertos en agronomía y desarrollo de software, nuestra misión es proporcionar a los agricultores las herramientas necesarias para superar los desafíos modernos y cosechar los frutos del éxito sostenible.
          </span>
          <div className='flex justify-center'>
            <Button text="Conoce Más"/>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center m-10'>
        <div className='m-10'>
          <span className='block font-medium text-3xl text-custom-204E51 mb-4 text-left'>
            Nuestro Servicio
          </span>
          <span className='block text-black text-xl text-justify'>
            AgroBoost va más allá de ser una aplicación; es tu socio en el campo. Desde el monitoreo del clima hasta el análisis detallado del suelo, ofrecemos un conjunto integral de servicios para mejorar la eficiencia, aumentar la productividad y promover prácticas agrícolas sostenibles. Descubre cómo AgroBoost está transformando la manera en que cultivas.
          </span>
          <div className='flex justify-center'>
            <Button text='Descubre Más'/>
          </div>
        </div>
        <div className='m-10 relative shadow-2xl rounded-2xl'>
          <img src={servicio} className='rounded-2xl max-w-md max-h-md' alt="imagen de monitoreo"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Inicio;
