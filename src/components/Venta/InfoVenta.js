import React, { useState } from 'react';
import sensor from '../../img/sensor.jpeg';
import * as Yup from 'yup';
import ProductDetails from './ProductDetails';
import ModalVentaEx from './ModalVentaEx'

const InfoVenta = () => {
  const [paymentDetails, setPaymentDetails] = useState({});
  const [errors, setErrors] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  

  const validationSchema = Yup.object().shape({
    nombrecompleto: Yup.string().required('Campo requerido'),
    numeroycalle: Yup.string().required('Campo requerido'),
    codigopostal: Yup.string().required('Campo requerido'),
    estado: Yup.string().required('Campo requerido'),
    ciudad: Yup.string().required('Campo requerido'),
    colonia: Yup.string().required('Campo requerido'),
    numerotelefono: Yup.string()
       .length(10, 'Debe tener 10 díjitos')
       .required('Campo requerido'),
    numerotarjeta: Yup.string()
      .length(16, 'Debe tener 16 díjitos')
      .required('Campo requerido'),
    fechavencimiento: Yup.string().required('Campo requerido'),
    CVV: Yup.string()
    .length(3, 'Debe tener 3 díjitos')
    .required('Campo requerido'),
  });  

  const handleChangeInput = (e, fieldName) => {
    const value = e.target.value.replace(/\D/g, ''); 
    setPaymentDetails((prevState) => ({ ...prevState, [fieldName]: value }));
  };
  

  const handleSubmit = async (e, values) => {
    e.preventDefault();
    try {
      await validationSchema.validate(values, { abortEarly: false });
      console.log('Detalles de compra:', values);
      // Limpiar los errores en caso de éxito
      setErrors({});
      // Implementa la lógica de envío del formulario aquí
      setModalIsOpen(true);
    } catch (error) {
      const newErrors = {};
      error.inner.forEach(err => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    } finally {
      // setSubmitting(false); // No es necesario ya que no estamos usando un objeto de Formik
    }
  };
  
  return (
    <div className="container mx-auto p-6">
      <form onSubmit={(e) => handleSubmit(e, paymentDetails)}>
      <div className="max-w-7xl mx-auto flex flex-row space-x-6 h-[610px]">
        <div className="flex-1 flex-col-reverse bg-white shadow-md rounded-md overflow-hidden">
          <div className="bg-custom-color_logo px-4 py-3 border-b border-gray-300">
            <h2 className="text-lg font-semibold text-00000">Detalles del Producto</h2>
          </div>
          <ProductDetails 
              productName="Product Name"
              productDescription="Product Description"
              productPrice="99.99"
              productImage={sensor}
            />
        </div>
        <div className="flex-1 bg-white shadow-md rounded-md overflow-hidden">
          <div className="bg-custom-color_logo px-4 py-3 border-b border-gray-300">
            <h2 className="text-lg font-semibold text-00000">Información de Entrega</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mt-4">
            <div className="mb-2">
              <span className="block font-medium text-base text-custom-00000 mb-2">Nombre Completo</span>
                  <input 
                    type="text" 
                    name="nombrecompleto" 
                    value={paymentDetails.nombrecompleto || ''}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, nombrecompleto: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                  {errors.nombrecompleto && <p className="text-red-500">{errors.nombrecompleto}</p>}
            </div>
            <div className="mb-2">
              <span className="block font-medium text-base text-custom-00000 mb-2">Calle y Numero</span>
                <input 
                  type="text" 
                  name="numeroycalle"
                  value={paymentDetails.numeroycalle || ''}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, numeroycalle: e.target.value })} 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                {errors.numeroycalle && <p className="text-red-500">{errors.numeroycalle}</p>}
            </div>
            <div className="mb-2">
              <span className="block font-medium text-base text-custom-00000 mb-2">Código Postal</span>
                <input 
                  type="text" 
                  name="codigopostal" 
                  value={paymentDetails.codigopostal || ''}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, codigopostal: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                {errors.codigopostal && <p className="text-red-500">{errors.codigopostal}</p>}
            </div>
            <div className="mb-2">
              <span className="block font-medium text-base text-custom-00000 mb-2">Estado/Provincia/Región</span>
                <input 
                  type="text" 
                  name="estado" 
                  value={paymentDetails.estado || ''}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, estado: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                {errors.estado && <p className="text-red-500">{errors.estado}</p>}
            </div>
            <div className="mb-2">
              <span className="block font-medium text-base text-custom-00000 mb-2">Ciudad</span>
                <input 
                  type="text" 
                  name="ciudad" 
                  value={paymentDetails.ciudad || ''}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, ciudad: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                {errors.ciudad && <p className="text-red-500">{errors.ciudad}</p>}
            </div>
            <div className="mb-2">
              <span className="block font-medium text-base text-custom-00000 mb-2">Colonia</span>
                <input 
                  type="text" 
                  name="colonia" 
                  value={paymentDetails.colonia || ''}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, colonia: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                {errors.colonia && <p className="text-red-500">{errors.colonia}</p>}
            </div>
            <div className="mb-2">
              <span className="block font-medium text-base text-custom-00000 mb-2">Numero de teléfono</span>
                <input 
                  type="text" 
                  name="numerotelefono" 
                  value={paymentDetails.numerotelefono || ''}
                  onChange={(e) => handleChangeInput(e, 'numerotelefono')}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                {errors.numerotelefono && <p className="text-red-500">{errors.numerotelefono}</p>}
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white shadow-md rounded-md overflow-hidden">
          <div className="bg-custom-color_logo px-4 py-3 border-b border-gray-300">
            <h2 className="text-lg font-semibold text-00000">Método de Pago</h2>
          </div>
          <div className="px-4 py-3">
            <span className="block font-medium text-base text-custom-00000 mt-3 mb-2">Tarjeta de Crédito o Débito</span>
              <div className="grid grid-cols-1  gap-4 px-4 mt-4">
                <div className="mb-2">
                  <span className="block font-medium text-base text-custom-00000 mb-2">Número de tarjeta</span>
                    <input 
                      type="text" 
                      name="numerotarjeta" 
                      value={paymentDetails.numerotarjeta || ''}
                      onChange={(e) => handleChangeInput(e, 'numerotarjeta')}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                    {errors.numerotarjeta && <p className="text-red-500">{errors.numerotarjeta}</p>}
                </div>
              <div className="mb-2">
                <span className="block font-medium text-base text-custom-00000 mb-2">Fecha de Vencimiento</span>
                  <input 
                    type="text" 
                    name="fechavencimiento" 
                    value={paymentDetails.fechavencimiento || ''}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, fechavencimiento: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                  {errors.fechavencimiento && <p className="text-red-500">{errors.fechavencimiento}</p>}
              </div>
              <div className="mb-2">
                <span className="block font-medium text-base text-custom-00000 mb-2">CVV</span>
                  <input 
                    type="text" 
                    name="ccv"
                    value={paymentDetails.CVV || ''}
                    onChange={(e) => handleChangeInput(e, 'CVV')}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                  {errors.CVV && <p className="text-red-500">{errors.CVV}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center flex flex-row text-center mt-6">
        <div className="flex flex-row bg-custom-color_logo px-4 py-2 border-b border-gray-300 rounded-lg w-60 mr-5 ">
          <h2 className="text-lg font-semibold text-00000">Total:</h2>
          <h2 className="text-lg font-semibold text-white ml-auto">$99.99</h2>
        </div>
        <button type="submit" onClick={() => setModalIsOpen(true)} className="px-4 py-2 bg-custom-color_logo hover:bg-[#2F9B5D] text-white font-semibold rounded-lg">Confirmar Compra</button>
      </div>
    </form>
    <ModalVentaEx isOpen={modalIsOpen && !Object.values(errors).some(error => !!error)} onClose={() => setModalIsOpen(false)}/>
  </div>
  );

};

export default InfoVenta;