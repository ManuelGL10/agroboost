import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Logo from '../img/LogoAgroBoostPNG.svg';
import ModalBienvenida from './ModalBienvenida';
import ModalError from './ModalError';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import RegistroRequest from './request/RegistroRequest';
import { useNavigate } from 'react-router-dom';

const RegistroForm = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    apellidopaterno: '',
    apellidomaterno: '',
    email: '',
    password: '',
    termsAccepted: false
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo requerido'),
    apellidopaterno: Yup.string().required('Campo requerido'),
    apellidomaterno: Yup.string().required('Campo requerido'),
    email: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
    password: Yup.string().required('Campo requerido').min(8, "La contraseña debe tener al menos 8 caracteres"),
    termsAccepted: Yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const { name, apellidopaterno, apellidomaterno, email, password } = values;

    const { success, error } = await RegistroRequest({ 
      name, 
      apellidopaterno, 
      apellidomaterno,
      email,
      password 
    });

    if (success) {
      console.log('Registro exitoso:');
      navigate('/login')
    } else {
      console.error('Error registro:', error);
      // Puedes mostrar un mensaje de error al usuario, por ejemplo, en un modal
    }

    setSubmitting(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="block font-medium md:text-3xl sm:text-2xl text-xl text-custom-204E51 text-center">Regístrate</h2>
      <div className="flex items-center my-4">
        <img src={Logo} alt="Logo AgroBoost" className="w-32 h-auto mx-auto"/>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="block font-medium text-base text-custom-00000 mb-2 text-left">Nombre(s)</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#204E51]"
                placeholder="Ingrese su Nombre"
              />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>
            <div className="mb-3">
              <label htmlFor="apellidopaterno" className="block font-medium text-base text-custom-00000 mb-2 text-left">Apellido Paterno</label>
              <Field
                type="text"
                id="apellidopaterno"
                name="apellidopaterno"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#204E51]"
                placeholder="Ingrese su Apellido Paterno"
              />
              <ErrorMessage name="apellidopaterno" component="div" className="text-red-500" />
            </div>
            <div className="mb-3">
              <label htmlFor="apellidomaterno" className="block font-medium text-base text-custom-00000 mb-2 text-left">Apellido Materno</label>
              <Field
                type="text"
                id="apellidomaterno"
                name="apellidomaterno"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#204E51]"
                placeholder="Ingrese su Apellido Materno"
              />
              <ErrorMessage name="apellidomaterno" component="div" className="text-red-500" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block font-medium text-base text-custom-00000 mb-2 text-left">Correo Electrónico</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#204E51]"
                placeholder="Ingrese su nombre"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block font-medium text-base text-custom-00000 mb-2 text-left">Contraseña</label>
              <div className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 flex">
                <Field
                  type={showPassword ? "text" : "password"} 
                  id="password"
                  name="password"
                  className="w-full focus:outline-none focus:border-[#204E51]"
                  placeholder="Ingresa su contraseña"
                />
                <button
                  type="button"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? <IconEye size={24} /> : <IconEyeOff size={24}/>}
                </button>
              </div>
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <button type="submit" className="w-full my-4 bg-custom-204E51 text-white font-semibold px-6 py-3 rounded-lg hover:bg-custom-306C73 focus:outline-none focus:bg-custom-306C73 focus:ring-2 focus:ring-custom-204E51" disabled={isSubmitting}>
              Registrarse
            </button>
            <div className="text-center">
              <p>¿Ya tienes cuenta? <a href="/login" className="text-[#4D7A7D] font-bold">Inicia sesión</a></p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistroForm;
