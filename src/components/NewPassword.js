import React, { useState } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { IconArrowLeft } from '@tabler/icons-react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UpdatePass } from './request/UpdatePass';
import { useLocation } from 'react-router-dom'
import ModalBienvenida from './ModalBienvenida';
import ModalError from './ModalError';

const NewPassword = () => {
  const [ eyeOpen, setEyeOpen ] = useState(false)
  const [ newEyeOpen, setNewEyeOpen ] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenE, setModalIsOpenE] = useState(false);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get('email');

  const inictalValues = {
    contrasena: '',
    newContrasena: ''
  }

  const validationSchema = Yup.object().shape({
    contrasena: Yup.string()
        .required('Campo requerido')
        .min(8, "La contraseña debe de tener al menos 8 caracteres"),
    newContrasena: Yup.string()
        .required('Campo requerido')
        .min(8, "La contraseña debe de tener al menos 8 caracteres")
        .oneOf([Yup.ref('contrasena'), null], 'Las contraseñas deben coincidir')
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    const { contrasena } = values
        try {
            await UpdatePass({
              email,
              contrasena,
            });
          } catch (error) {
            console.error('Error al actualizar los datos:', error.message);
        }
        setSubmitting(false);
    };

    const handleOpen = () => {
        setEyeOpen(!eyeOpen);
    };
    const handleOpenNew = () => {
        setNewEyeOpen(!newEyeOpen);
    };

    const handleGoBack = () => {
      window.history.back();
    };

    const handleSuccessModal = () => {
      setModalIsOpen(!modalIsOpen)
    }
  
    const handleErrorModal = () => {
      setModalIsOpenE(!modalIsOpenE)
    }

  return (
    <div className="lg:w-[460px] w-[100%] lg:size-auto h-height-screen p-6 bg-white rounded-lg shadow-lg relative">
      <button onClick={handleGoBack}>
        <IconArrowLeft size={32}/>
      </button>
      <h2 className="block font-medium md:text-4xl text-3xl text-custom-204E51 text-center mt-6">Nueva contraseña</h2>
      <div className="flex items-center my-14">
        <h1 className="block md:text-xl text-lg text-gray-500 text-center">Asegúrese de incluir una contraseña segura con al menos 8 caracteres.</h1>
      </div>
      <Formik
        initialValues={inictalValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
            <Form>
              <div className='text-lg flex flex-col dark:text-gray-300'>
                <label htmlFor="contrasena" className='font-medium'>Nueva Contraseña:</label>
                <div className='mt-2 border border-gray-300 dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100  rounded-lg py-1 px-1 flex'>
                  <Field
                    type={eyeOpen ? "text" : "password"} 
                    id="contrasena"
                    name="contrasena"
                    className="w-width-full focus:outline-none dark:bg-[#323D4E]"
                    placeholder="Ingrese la nueva contraseña"
                  />
                  <button type='button' onClick={handleOpen}>
                    {eyeOpen ? <IconEye size={28} stroke={1.8} color='#4b5563' /> : <IconEyeOff size={28} stroke={1.8} color='#4b5563' />}
                  </button>
                </div>
                <ErrorMessage name="contrasena" component="div" className="text-red-500"/>
              </div>
              <div className='text-lg mt-4 flex flex-col dark:text-gray-300'>
                <label htmlFor="newContrasena" className='font-medium'>Confirmar Contraseña:</label>
                <div className='mt-2 border border-gray-300 dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100 rounded-lg py-1 px-1 flex'>
                  <Field
                    type={newEyeOpen ? "text" : "password"} 
                    id="newContrasena"
                    name="newContrasena"
                    className="w-width-full focus:outline-none dark:bg-[#323D4E]"
                    placeholder="Ingrese de nuevo la contraseña"
                  />
                  <button type='button' onClick={handleOpenNew}>
                      {newEyeOpen ? <IconEye size={28} stroke={1.8} color='#4b5563' /> : <IconEyeOff size={28} stroke={1.8} color='#4b5563' />}
                  </button>
                </div>
                <ErrorMessage name="newContrasena" component="div" className="text-red-500"/>
                <div className='flex justify-center items-center mt-12'>
                  <button type='submit' className="w-width-full bg-custom-204E51 text-white font-semibold py-3 rounded-lg">Actualizar</button>
                </div>
              </div>
            </Form>
          </Formik>
      <ModalBienvenida 
        isOpen={modalIsOpen} 
        onClose={handleSuccessModal}
        title='¡Cambio de Contraseña Exitoso'
        mensaje='Su contraseña se ha actualizado correctamente' 
      />
      <ModalError 
        isOpen={modalIsOpenE} 
        onClose={handleErrorModal} 
        errorMessage={"Ocurrió un error al actualizar la contraseña"} 
      />
    </div>
  );
};

export default NewPassword;
