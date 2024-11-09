import React, { useState, useEffect } from 'react';
import { IconArrowLeft } from '@tabler/icons-react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ErrorModal from './Modals/ErrorModal';

const Verificacion = () => {
  const navigate = useNavigate();
  const [erroModal, setErrorModal] = useState(false)
  const [codigo, setCodigo] = useState({
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: ''
  });
  const [timeLeft, setTimeLeft] = useState(60);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          setIsResendEnabled(true)
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCodigo({ ...codigo, [name]: value });
  };

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get('email');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const codigoVerificacion = Object.values(codigo).join('');
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${backendUrl}/verifyCode`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo_electronico: email,
          code: codigoVerificacion
        }),
      });

      if (response.ok) {
        navigate(`/newpass?email=${encodeURIComponent(email)}`);
      } else {
        setErrorModal(!erroModal)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleError = () => {
    setErrorModal(!erroModal)
  }

  const handleResendCode = async () => {
    try {
      const response = await fetch('http://localhost:4000/resend-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo_electronico: email,
        }),
      });
  
      if (response.ok) {
        alert('Código de verificación reenviado');
        setIsResendEnabled(false);
        setTimeLeft(60);
      } else {
        alert('Error al reenviar el código de verificación');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al reenviar el código de verificación');
    }
  };  

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="lg:w-[460px] w-[100%] lg:size-auto h-height-screen p-6 bg-white rounded-lg shadow-lg relative mb-8">
      <button onClick={handleGoBack}>
        <IconArrowLeft size={32}/>
      </button>
      <div>
        <div className="text-center mt-6">
          <h2 className="block font-medium md:text-4xl text-3xl text-custom-204E51">Verificación de cuenta</h2>
        </div>
        <div className="my-14 text-center">
          <h1 className="md:text-xl text-lg text-gray-500">Se ha enviado un código de verificación al correo proporcionado.</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 gap-x-6">
            <input type="text" id="digit1" name="digit1" maxLength="1" value={codigo.digit1} onChange={handleChange} required className="h-[80px] text-center rounded-lg border border-gray-400" />
            <input type="text" id="digit2" name="digit2" maxLength="1" value={codigo.digit2} onChange={handleChange} required className="h-[80px] text-center rounded-lg border border-gray-400" />
            <input type="text" id="digit3" name="digit3" maxLength="1" value={codigo.digit3} onChange={handleChange} required className="h-[80px] text-center rounded-lg border border-gray-400" />
            <input type="text" id="digit4" name="digit4" maxLength="1" value={codigo.digit4} onChange={handleChange} required className="h-[80px] text-center rounded-lg border border-gray-400" />
          </div>
          <div className='w-width-full flex justify-end mt-4'>
            <button type='button' className="text-[#4D7A7D]" onClick={handleResendCode} disabled={!isResendEnabled}>
              Reenviar código en {timeLeft} segundos
            </button>
          </div>
          <button type="submit" className="w-width-full mt-12 bg-custom-204E51 text-white font-semibold py-3 rounded-lg">
            Continuar
          </button>
        </form>
      </div>
      <ErrorModal
       isOpen={erroModal}
       onClose={handleError}
       title={"Algo salió mal"}
       mensaje={"Código de verificación inválido"}
      />
    </div>
  );
}

export default Verificacion;
