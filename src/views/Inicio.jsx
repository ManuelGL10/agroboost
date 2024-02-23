import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Agroboost from '../components/Agroboost';
import InfoNosotros from '../components/InfoNosotros';
import InfoProducto from '../components/InfoProducto';

const Inicio = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Agroboost/>
      <InfoNosotros/>
      <InfoProducto/>
      <Footer/>
    </div>
  );
};

export default Inicio;
