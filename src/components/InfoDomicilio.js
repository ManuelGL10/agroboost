import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const InfoDomicilio = () => {
  const [direccion, setDireccion] = useState('');
  const [numeroInterior, setNumeroInterior] = useState('')
  const [numeroExterior, setNumeroExterior] = useState('')
  const [colonia, setColonia] = useState('')
  const [estado, setEstado] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [codigoPostal, setCodigoPostal] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Dirección:', direccion);
    console.log('Numero Interior', numeroInterior); 
    console.log('Numero Exterior', numeroExterior);
    console.log('Colonia', colonia);
    console.log('Estado', estado);
    console.log('Ciudad', ciudad);
    console.log('CodigoPostal', codigoPostal);       
  };

  return (
    <div className="relative max-w-md mx-auto mt-8 p-3 bg-white rounded-lg shadow-lg">
      <Link to="/Login" className="absolute top-0 left-0 p-4">
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </Link>
      <div className="flex items-center mb-4">
        <h1 className="block font-medium md:text-2xl sm:text-xl text-lg text-black mb-6 text-center ml-8">Domicilio</h1>
      </div>
      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label htmlFor="numero-interior" className="block font-medium text-base text-custom-00000 mb-2 text-left">Dirección</label>
          <input
            type="text" 
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese la calle"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numeroInterior" className="block font-medium text-base text-custom-00000 mb-2 text-left">Número interior</label>
          <input
            type="text" 
            id="numeroInterior"
            value={numeroInterior}
            onChange={(e) => setNumeroInterior(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese el número interior"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numeroExterior" className="block font-medium text-base text-custom-00000 mb-2 text-left">Número exterior</label>
          <input
            type="text" 
            id="numeroExterior"
            value={numeroExterior}
            onChange={(e) => setNumeroExterior(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese el número exterior"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="colonia" className="block font-medium text-base text-custom-00000 mb-2 text-left">Colonia</label>
          <input
            type="text" 
            id="colonia"
            value={colonia}
            onChange={(e) => setColonia(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese su colonia"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="estado" className="block font-medium text-base text-custom-00000 mb-2 text-left">Estado</label>
          <input
            type="text" 
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese su estado"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ciudad" className="block font-medium text-base text-custom-00000 mb-2 text-left">Ciudad</label>
          <input
            type="text" 
            id="ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese su ciudad"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="codigoPostal" className="block font-medium text-base text-custom-00000 mb-2 text-left">Código postal</label>
          <input
            type="text" 
            id="codigoPostal"
            value={codigoPostal}
            onChange={(e) => setCodigoPostal(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese su código postal"
            required
          />
        </div>
        
        <div className="mb-8">
        <button type="submit" className="w-full bg-custom-204E51 text-white font-semibold px-6 py-3 rounded-lg hover:bg-custom-306C73 focus:outline-none focus:bg-custom-306C73 focus:ring-2 focus:ring-custom-204E51 mt-30">
          Registrar domicilio
        </button>
        </div>
        <div className="flex items-center mt-6 mb-30">
        </div>
      </form>
    </div>
  );
};

export default InfoDomicilio;
