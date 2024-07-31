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
    nombretarjeta: Yup.string().required('Campo requerido'),
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
    <div className="w-screen h-screen items-center justify-center flex p-6">
      <form onSubmit={(e) => handleSubmit(e, paymentDetails)} className='w-full h-full'>
        <div className="grid grid-cols-3 space-x-4 h-full">
          <div className="flex-1 flex-col bg-white shadow-md rounded-md overflow-hidden">
            <div className="bg-custom-color_logo px-4 py-3 border-b border-gray-300">
              <h2 className="text-lg font-semibold">Detalles del Producto</h2>
            </div>
            <ProductDetails 
                productName="Product Name"
                productDescription="Product Description"
                productPrice="99.99"
                productImage={sensor}
              />
          </div>
          <div className="flex flex-col justify-between col-span-2 bg-white shadow-md rounded-md overflow-hidden">
            <div className="bg-custom-color_logo px-4 py-3 border-b border-gray-300">
              <h2 className="text-lg font-semibold">Información de Entrega</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 px-4 my-4">
              <div>
                <span className="block font-medium text-base text-custom-00000 mb-2">Nombre Completo</span>
                    <input 
                      type="text" 
                      name="nombrecompleto" 
                      value={paymentDetails.nombrecompleto || ''}
                      onChange={(e) => setPaymentDetails({ ...paymentDetails, nombrecompleto: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                    {errors.nombrecompleto && <p className="text-red-500">{errors.nombrecompleto}</p>}
              </div>
              <div>
                <span className="block font-medium text-base text-custom-00000 mb-2">Calle y Numero</span>
                  <input 
                    type="text" 
                    name="numeroycalle"
                    value={paymentDetails.numeroycalle || ''}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, numeroycalle: e.target.value })} 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                  {errors.numeroycalle && <p className="text-red-500">{errors.numeroycalle}</p>}
              </div>
              <div>
                <span className="block font-medium text-base text-custom-00000 mb-2">Código Postal</span>
                  <input 
                    type="text" 
                    name="codigopostal" 
                    value={paymentDetails.codigopostal || ''}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, codigopostal: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                  {errors.codigopostal && <p className="text-red-500">{errors.codigopostal}</p>}
              </div>
              <div>
                <span className="block font-medium text-base text-custom-00000 mb-2">Estado/Provincia/Región</span>
                  <input 
                    type="text" 
                    name="estado" 
                    value={paymentDetails.estado || ''}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, estado: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                  {errors.estado && <p className="text-red-500">{errors.estado}</p>}
              </div>
              <div>
                <span className="block font-medium text-base text-custom-00000 mb-2">Ciudad</span>
                  <input 
                    type="text" 
                    name="ciudad" 
                    value={paymentDetails.ciudad || ''}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, ciudad: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                  {errors.ciudad && <p className="text-red-500">{errors.ciudad}</p>}
              </div>
              <div>
                <span className="block font-medium text-base text-custom-00000 mb-2">Colonia</span>
                  <input 
                    type="text" 
                    name="colonia" 
                    value={paymentDetails.colonia || ''}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, colonia: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#204E51]" />
                  {errors.colonia && <p className="text-red-500">{errors.colonia}</p>}
              </div>
              <div>
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
            <div className='px-4 py-4'>
              <button 
                type="submit" 
                className="w-full py-2 bg-custom-color_logo hover:bg-[#2F9B5D] text-white font-semibold rounded-lg">
                  Confirmar Compra
              </button>
            </div>
          </div>
        </div>
      </form>
      <ModalVentaEx isOpen={modalIsOpen && !Object.values(errors).some(error => !!error)} onClose={() => setModalIsOpen(false)}/>
    </div>
  );

};

export default InfoVenta;