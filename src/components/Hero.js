import React, { useEffect } from 'react';
import plantio from '../img/plantio.jpeg';
import gsap from 'gsap';

const Hero = () => {
  useEffect(() => {
    gsap.to('#hero', { opacity: 1, delay: 0.5 });
  }, []);

  return (
    <div className="w-full relative -mt-4">
      <img className="filter brightness-50 my-4 z-0" src={plantio} alt="invernadero" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p
          id="hero"
          className="lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold text-white md:py-6 opacity-0"
        >
          "Cultiva el Futuro: Invernadero Inteligente, Cosecha Eficiente"
        </p>
      </div>
    </div>
  );
};

export default Hero;
