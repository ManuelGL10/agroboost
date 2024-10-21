import React, { useState } from 'react';
import sensor from '../img/sensor.jpeg';

const InfoVenta = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({});
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
    setPaymentDetails({});
    setScrollEnabled(e.target.value !== '');
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los detalles de la compra y del método de pago
    console.log('Detalles de compra:', paymentDetails);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-5xl mx-auto flex flex-row space-x-6">
        <div className="flex-1 bg-white shadow-md rounded-md overflow-hidden">
          <div className="bg-custom-color_logo px-4 py-3 border-b border-gray-300">
            <h2 className="text-lg font-semibold text-00000">Detalles del Producto</h2>
          </div>
          <div className="px-4 py-3 flex items-center mr-28 ">
            <img className="w-28 mx-auto rounded-lg" src={sensor} alt={sensor} />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Nombre: Product Name</p>
              <p className="text-sm text-gray-600">Descripción: Product Description</p>
              <p className="text-sm text-gray-600">Precio: $99.99</p>
            </div>
          </div>
          <div className="px-4 py-3 flex items-center mr-28 ">
            <img className="w-28 mx-auto rounded-lg" src={sensor} alt={sensor} />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Nombre: Product Name</p>
              <p className="text-sm text-gray-600">Descripción: Product Description</p>
              <p className="text-sm text-gray-600">Precio: $99.99</p>
            </div>
          </div>
          <div className="px-4 py-3 flex items-center mr-28 ">
            <img className="w-28 mx-auto rounded-lg" src={sensor} alt={sensor} />
            <div className="ml-4">
              <p className="text-sm text-gray-600">Nombre: Product Name</p>
              <p className="text-sm text-gray-600">Descripción: Product Description</p>
              <p className="text-sm text-gray-600">Precio: $99.99</p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white shadow-md rounded-md">
          <div className="bg-custom-color_logo px-4 py-3 border-b border-gray-300">
            <h2 className="text-lg font-semibold text-00000">Información de Entrega</h2>
          </div>
          <div className={`px-4 py-3 ${scrollEnabled ? 'max-h-96 overflow-y-auto' : ''}`}>
            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-2">
                <span className="block font-medium text-base text-custom-00000 mb-2">Nombre Completo</span>
                <input type="text" name="nombrecompleto" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
              </div>
              <div className="mb-2">
                <span className="block font-medium text-base text-custom-00000 mb-2">Calle y Numero</span>
                <input type="text" name="numeroycalle" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
              </div>
              <div className="mb-2">
                <span className="block font-medium text-base text-custom-00000 mb-2">Código Postal</span>
                <input type="text" name="codigopostal" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
              </div>
              <div className="mb-2">
                <span className="block font-medium text-base text-custom-00000 mb-2">Estado/Provincia/Región</span>
                <input type="text" name="estado" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
              </div>
              <div className="mb-2">
                <span className="block font-medium text-base text-custom-00000 mb-2">Ciudad</span>
                <input type="text" name="ciudad" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
              </div>
              <div className="mb-2">
                <span className="block font-medium text-base text-custom-00000 mb-2">Colonia</span>
                <input type="text" name="colonia" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
              </div>
              <div className="mb-2">
                <span className="block font-medium text-base text-custom-00000 mb-2">Numero de teléfono</span>
                <input type="text" name="numerotelefono" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
              </div>
              </div>
              <div className="bg-custom-color_logo px-4 py-3 border-b border-gray-300">
                <h2 className="text-lg font-semibold text-00000">Método de Pago</h2>
              </div>
              <div className="mb-2">
                <span className="block font-medium text-base text-custom-00000 mt-3 mb-2">Seleccionar Método de Pago:</span>
                <select value={selectedPaymentMethod} onChange={handlePaymentMethodChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]">
                  <option value="">Seleccionar...</option>
                  <option value="Card">Tarjeta de Crédito o Débito</option>
                  <option value="cash">Efectivo</option>
                </select>
              </div>
              {selectedPaymentMethod && (
                <div>
                  <div className="mb-2">
                    <span className="block font-medium text-base text-custom-00000 mb-2">Número de Tarjeta:</span>
                    <input type="text" name="cardNumber" onChange={handlePaymentDetailsChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                  </div>
                  <div className="mb-2">
                    <span className="block font-medium text-base text-custom-00000 mb-2">Fecha de Vencimiento:</span>
                    <input type="text" name="expirationDate" onChange={handlePaymentDetailsChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                  </div>
                  {selectedPaymentMethod === 'Card' && (
                    <div className="mb-2">
                      <span className="block font-medium text-base text-custom-00000 mb-2">CVV:</span>
                      <input type="text" name="cvv" onChange={handlePaymentDetailsChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                    </div>
                  )}
                </div>
              )}
              <button type="submit" className="block w-full px-4 py-2 bg-custom-color_logo hover:bg-[#2F9B5D] text-white font-semibold rounded-lg">Confirmar Compra</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoVenta;
