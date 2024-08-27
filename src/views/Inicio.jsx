import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Agroboost from '../components/Agroboost';
import InfoNosotros from '../components/InfoNosotros';
import InfoProducto from '../components/InfoProducto';
import Questions from '../components/Questions';
import Download from '../components/Download';

const Inicio = () => {
  return (
    <div>
      <Navbar />
      <Hero />
        <Agroboost/>
        <InfoNosotros/>
        <InfoProducto/>
        <Download/>
        <Questions/>
      <Footer/>
    </div>
  );
};

export default Inicio;
