import React from 'react';
import Sensor from '../../img/sensor.jpeg'

const ShoppingCart = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full  md:w-1/2 lg:w-1/3 xl:w-1/4 3xl:w-1/3 p-4 mx-auto " style={{ width: '80%', maxWidth: '1200px'}}>
      {/* Cabecera del Carrito */}
      <div className="bg-custom-color_logo p-4 flex justify-between items-center rounded-lg">
        <h1 className="text-lg font-semibold">Tu Carrito de Compras</h1>
        <button className=" font-semibold text-gray-600 hover:text-black">Cerrar</button>
      </div>

      {/* Lista de Productos */}
      <div className="p-4">
        <div className="border-b border-gray-300 mb-4">
          <div className="flex items-center justify-between mb-3 mt-4">
            <img className="w-28 h-28 object-cover rounded-lg" src={Sensor} alt="sensor" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Nombre del Producto</h2>
              <p className="text-gray-600">Descripción del Producto</p>
              <p className="text-gray-600">Precio: $99.99</p>
            </div>
            <div>
                <button className="text-red-600 hover:text-red-800">Eliminar</button>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300 mb-4">
          <div className="flex items-center justify-between mb-3 mt-4">
            <img className="w-28 h-28 object-cover rounded-lg" src={Sensor} alt="sensor" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Nombre del Producto</h2>
              <p className="text-gray-600">Descripción del Producto</p>
              <p className="text-gray-600">Precio: $99.99</p>
            </div>
            <div>
                <button className="text-red-600 hover:text-red-800">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
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
        </div>
        {/* Otros productos */}
      </div>

      {/* Resumen del Pedido */}
      <div className="bg-gray-200 p-4 rounded-tl-lg rounded-tr-lg">
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

      {/* Botones de Acción */}
      <div className="bg-gray-200 p-4 flex justify-between items-center rounded-bl-lg rounded-br-lg">
        <button className="bg-custom-204E51 text-white px-4 py-2 rounded-lg">Pagar</button>
        <button className="text-red-600 hover:text-red-800">Vaciar Carrito</button>
      </div>
    </div>
    </div>
  );
};

export default ShoppingCart;
