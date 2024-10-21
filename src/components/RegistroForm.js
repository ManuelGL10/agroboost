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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenE, setModalIsOpenE] = useState(false);

  const initialValues = {
    name: '',
    apellidopaterno: '',
    apellidomaterno: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo requerido'),
    apellidopaterno: Yup.string().required('Campo requerido'),
    apellidomaterno: Yup.string().required('Campo requerido'),
    email: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
    password: Yup.string().required('Campo requerido').min(8, "La contraseña debe tener al menos 8 caracteres"),
  });

  const handleSubmit = async (values) => {
    const { name, apellidopaterno, apellidomaterno, email, password } = values;

    const { success, error, response } = await RegistroRequest({ 
      name, 
      apellidopaterno, 
      apellidomaterno,
      email,
      password,
      rol: 0
    });

    if (success) {
      setModalIsOpen(true)
        setTimeout(() => {
          navigate('/login');
        }, 2000);
    } else {
      setModalIsOpenE(true)
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  const handleSuccessModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleErrorModal = () => {
    setModalIsOpenE(!modalIsOpenE)
  }

  return (
    <div className="lg:w-[460px] w-[100%] lg:h-[100%] h-screen p-6 bg-white lg:rounded-lg lg:shadow-lg lg:m-8 grid grid-rows-4">
      <div className='row-span-1 grid grid-rows-4'>
        <div className='flex justify-center items-center'>
          <h2 className="font-medium lg:text-3xl text-2xl text-custom-204E51 text-center">Regístrate</h2>
        </div>      
        <div className="flex items-center my-4 row-span-3">
          <img src={Logo} alt="Logo AgroBoost" className="size-32 mx-auto"/>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='row-span-3 grid'>
            <div>
              <label htmlFor="name" className="block font-medium text-base text-custom-00000 mb-2 text-left">Nombre(s)</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-[100%] px-4 py-3 border rounded-lg focus:outline-none focus:border-[#204E51]"
                placeholder="Ingrese su Nombre"
              />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>
            <div>
              <label htmlFor="apellidopaterno" className="block font-medium text-base text-custom-00000 mb-2 text-left">Apellido Paterno</label>
              <Field
                type="text"
                id="apellidopaterno"
                name="apellidopaterno"
                className="w-[100%] px-4 py-3 border rounded-lg focus:outline-none focus:border-[#204E51]"
                placeholder="Ingrese su Apellido Paterno"
              />
              <ErrorMessage name="apellidopaterno" component="div" className="text-red-500" />
            </div>
            <div>
              <label htmlFor="apellidomaterno" className="block font-medium text-base text-custom-00000 mb-2 text-left">Apellido Materno</label>
              <Field
                type="text"
                id="apellidomaterno"
                name="apellidomaterno"
                className="w-[100%] px-4 py-3 border rounded-lg focus:outline-none focus:border-[#204E51]"
                placeholder="Ingrese su Apellido Materno"
              />
              <ErrorMessage name="apellidomaterno" component="div" className="text-red-500" />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-base text-custom-00000 mb-2 text-left">Correo Electrónico</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-[100%] px-4 py-3 border rounded-lg focus:outline-none focus:border-[#204E51]"
                placeholder="Ingrese su nombre"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium text-base text-custom-00000 mb-2 text-left">Contraseña</label>
              <div className="w-[100%] px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500 flex">
                <Field
                  type={showPassword ? "text" : "password"} 
                  id="password"
                  name="password"
                  className="w-[100%] focus:outline-none focus:border-[#204E51]"
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
            <div className='flex items-center'>
              <button type="submit" className="w-[100%] bg-custom-204E51 text-white font-semibold px-6 py-3 rounded-lg hover:bg-custom-306C73 focus:outline-none focus:bg-custom-306C73 focus:ring-2 focus:ring-custom-204E51">
                Registrarse
              </button>
            </div>
            <div className="flex items-center justify-center">
              <p>¿Ya tienes cuenta? <a href="/login" className="text-[#4D7A7D] font-bold">Inicia sesión</a></p>
            </div>
          </Form>
        )}
      </Formik>
      <ModalBienvenida 
        isOpen={modalIsOpen} 
        onClose={handleSuccessModal}
        title='¡Registro Exitoso!'
        mensaje='Felicidades, has completado el registro exitosamente.' 
      />
      <ModalError 
        isOpen={modalIsOpenE} 
        onClose={handleErrorModal} 
        errorMessage={"El correo electrónico que has proporcionado ya está en uso. Por favor, intenta con otro correo electrónico"} 
      />
    </div>
  );
};

export default RegistroForm;
