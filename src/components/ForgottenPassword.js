import React, { useState } from 'react';
import { IconArrowLeft } from '@tabler/icons-react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import SendEmail from './request/SendEmail';
import ErrorModal from './Modals/ErrorModal'
import { useNavigate } from 'react-router-dom';

const ForgottenPassword = () => {
  const [erroModal, setErrorModal] = useState(false)
  const navigate = useNavigate()

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Correo electrónico inválido').required('Campo requerido')
  })

  const handleSubmit = async (values) => {
    const { email } = values
    try {
      await SendEmail({ email })
      navigate(`/verificationpage?email=${encodeURIComponent(email)}`);
    } catch (error) {
      setErrorModal(!erroModal)
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const handleError = () => {
    setErrorModal(!erroModal)
  }

  return (
    <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
      <button onClick={handleGoBack}>
        <IconArrowLeft size={32}/>
      </button>
      <div className='flex flex-col py-6'>
        <h2 className="font-medium md:text-3xl sm:text-2xl text-xl text-custom-204E51 text-center">¿Olvidaste tu contraseña?</h2>
        <h1 className="md:text-xl my-16 sm:text-lg text-base text-gray-500 text-center">Te enviaremos un código de verificación para restablecerla</h1>
        <Formik
          initialValues={{email: ''}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <label htmlFor='email' className='font-medium'>Correo Electrónico</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese su correo electrónico"
              className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <ErrorMessage name='email' component="div" className="text-red-500" />
            <button type="submit" className="w-full bg-custom-204E51 text-white font-semibold py-3 rounded-lg mt-8">
              Enviar código
            </button>
          </Form>
        </Formik>
      </div>
      <ErrorModal
       isOpen={erroModal}
       onClose={handleError}
       title={"Algo salió mal"}
       mensaje={"No se ha podido enviar el correo electrónico"}
      />
    </div>
  );
};

export default ForgottenPassword;
