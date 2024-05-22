import React from 'react';
import Sensor from '../../img/sensor.jpeg'
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  return (
    <div className='w-full h-screen items-center justify-center flex p-6'>
    <div className="bg-white overflow-hidden w-full h-full px-4 py-10 mx-auto grid grid-cols-2 gap-x-4">
      <div className='bg-white shadow-md rounded-md overflow-hidden'>
        <div className="bg-custom-color_logo px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Tu Carrito de Compras</h1>
        </div>
        <div className="p-4">
          <div className="border-b border-gray-300 mb-4">
            <div className="flex items-center mb-3 mt-4">
              <img className="w-28 h-28 object-cover rounded-lg" src={Sensor} alt="sensor" />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">Nombre del Producto</h2>
                <p className="text-gray-600">Descripción del Producto</p>
                <p className="text-gray-600">Precio: $99.99</p>
              </div>
              <div className='ml-auto'>
                  <button className="text-red-600 hover:text-red-800">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between bg-white shadow-md rounded-md overflow-hidden">
          <div className="bg-custom-color_logo px-4 py-3 border-b border-gray-300">
            <h2 className="text-lg font-semibold">Método de Pago</h2>
          </div>
            <div className="px-4 py-2">
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                <div>
                  <span className="block font-medium text-base text-custom-00000 mb-2">Nombre de la tarjeta</span>
                    <input 
                      type="text" 
                      name="nombretarjeta" 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" 
                    />
                </div>
                <div>
                  <span className="block font-medium text-base text-custom-00000 mb-2">Número de tarjeta</span>
                    <input 
                      type="text" 
                      name="numerotarjeta" 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" 
                    />
                </div>
                <div>
                  <span className="block font-medium text-base text-custom-00000 mb-2">Fecha de Vencimiento</span>
                    <input 
                      type="text" 
                      name="fechavencimiento" 
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                </div>
                <div>
                  <span className="block font-medium text-base text-custom-00000 mb-2">CVV</span>
                    <input 
                      type="text" 
                      name="ccv"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                </div>
              </div>
            </div>
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold mb-2">Resumen del Pedido</h2>
              <div className="flex justify-between items-center mb-2">
                <span>Subtotal:</span>
                <span className="font-semibold">$99.99</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Envío:</span>
                <span className="font-semibold">$5.00</span>
              </div>
              <div className="border-b border-gray-300 mb-2"></div>
              <div className="flex justify-between items-center">
                <span>Total:</span>
                <span className="font-semibold">$104.99</span>
              </div>
            </div>
            <Link to='/venta' className="w-full py-2 text-center my-4 mx-4 bg-custom-color_logo hover:bg-[#2F9B5D] text-white font-semibold rounded-lg">
                Confirmar Compra
            </Link>
        </div>
    </div>
    </div>
  );
};

export default ShoppingCart;
