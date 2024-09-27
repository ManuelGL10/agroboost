import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Logo from '../img/LogoAgroBoostPNG.svg';
import ImgFacebook from '../img/facebook_logo.svg';
import ImgGoogle from '../img/Google_logo.png';
import ModalBienvenida from './ModalBienvenida';
import ModalError from './ModalError';
import LoginRequest from './request/LoginRequest';
import { IconEyeOff, IconEye } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './request/AuthContext';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenE, setModalIsOpenE] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
    password: Yup.string().required('Campo requerido').min(8, "La contraseña debe tener al menos 8 caracteres")
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const { email, password } = values;
    const { success, data, error } = await LoginRequest({ email, password });

    if (success) {
      const userId = data.usuario._id;
      const rol = data.usuario.rol
      login(userId)
      if(rol === 1) {
        localStorage.setItem('userId', userId)
        setModalIsOpen(true)
        setTimeout(() => {
          navigate(`/dashboardhome/${userId}`);
        }, 2000);
      } else {
        localStorage.setItem('userId', userId)
        setModalIsOpen(true)
        setTimeout(() => {
          navigate(`/userhome/${userId}`)
        }, 2000);
      }
    } else {
      setModalIsOpenE(true)
    }
    setSubmitting(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div className="lg:w-[460px] w-[100%] lg:h-[100%] h-screen p-6 bg-white lg:rounded-lg lg:shadow-lg lg:m-8 grid grid-row-3">
      <div className='row-span-1 grid grid-rows-4'>
        <div className='flex justify-center items-center'>
          <h2 className="font-medium text-3xl text-custom-204E51 text-center">Inicio de Sesión</h2>
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
          <Form className="grid grid-rows-6 row-span-1 items-center">
            <div className="w-[100%] row-span-2">
              <label htmlFor="email" className="block font-medium text-custom-00000 mb-2 text-left">Correo Electrónico</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-[100%] px-4 py-3 border rounded-lg focus:outline-none focus:border-[#204E51]"
                placeholder="Ingrese su correo"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div className="w-[100%] row-span-2">
              <label htmlFor="password" className="block font-medium text-custom-00000 mb-2 text-left">Contraseña</label>
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
            <div className="text-right w-[100%]">
              <a href="/password" className="text-[#4D7A7D]">¿Olvidaste tu contraseña?</a>
            </div>
            <button type="submit" className="w-[100%] bg-custom-204E51 text-white font-semibold px-6 py-3 rounded-lg hover:bg-custom-306C73 focus:outline-none focus:bg-custom-306C73 focus:ring-2 focus:ring-custom-204E51" disabled={isSubmitting}>
              Ingresar 
            </button>
          </Form>
        )}
      </Formik>
      <div className='row-span-1 grid grid-rows-4'>
        <div className="flex items-center my-4 row-span-2">
          <hr className="border-black flex-grow" />
          <span className="text-black px-4">o iniciar sesión con</span>
          <hr className="border-black flex-grow" />
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <button type="button" className="flex items-center justify-center bg-white text-black border border-171717 font-medium px-6 py-3 rounded-lg hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
            <img src={ImgGoogle} alt="ImgGoogle" className="w-6 h-6 mr-2" />
            <span>Google</span>
          </button>
          <button type="button" className="flex items-center justify-center bg-white text-black border border-171717 font-medium px-6 py-3 rounded-lg hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
            <img src={ImgFacebook} alt="ImgFacebook" className="w-6 h-6 mr-2" />
            <span>Facebook</span>
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <p>¿No tienes una cuenta? <a href="/registro" className="text-[#4D7A7D] font-bold">Regístrate</a></p>
        </div>
      </div>
      
      <ModalBienvenida 
        isOpen={modalIsOpen} 
        onClose={() => setModalIsOpen(false)}
        title='¡Inicio de Sesión Exitoso!'
        mensaje='¡Bienvenido de vuelta! Tu inicio de sesión ha sido exitoso.' 
      />
      <ModalError 
        isOpen={modalIsOpenE} 
        onClose={() => setModalIsOpenE(false)} 
        errorMessage={"Correo electrínico y/o contraseña incorrectas"} 
      />
    </div>
  );
};

export default LoginForm;