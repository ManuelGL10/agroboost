import React from 'react';
import {IconShoppingCart} from '@tabler/icons-react'

const Producto = ({ nombre, precio, imagen, onCompra }) => {
  return (
    <div className="w-70 mx-20 flex flex-col p-7 my-4 bg-custom-F0F0F0 rounded-xl">
      <img className="w-40 mx-auto rounded-xl" src={imagen} alt={nombre} />
      <div className="mt-2 flex flex-col justify-center items-center">
        <h2 className="text-gray-800 font-semibold text-xl mb-1">{nombre}</h2>
        <p className="text-gray-700 text-base mb-1">${precio} MX</p>
        <div className='flex flex-row mt-2'>
            <button onClick={onCompra} className="w-16 h-12 bg-custom-color_logo text-white font-bold py-2 px-4 rounded-lg mr-2">
            <IconShoppingCart className='' size={30} stroke={2}/>
            </button>
            <button onClick={onCompra} className="w-26 h-12  bg-custom-204E51 text-white font-bold py-2 px-4 rounded-lg">
              Comprar ahora
            </button>
        </div>

      </div>
    </div>
  );
};

export default Producto;
