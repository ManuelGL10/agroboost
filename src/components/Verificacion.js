import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Verificacion = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg relative mb-8">
      <Link to="/Login" className="absolute top-0 left-0 p-4">
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </Link>
      <div className="text-center mb-14">
        <h2 className="block font-medium md:text-4xl sm:text-3xl text-2xl text-custom-204E51">Verificación de cuenta</h2>
      </div>
      <div className="mb-20 text-center">
        <h1 className="md:text-xl sm:text-lg text-base text-gray-500">Se ha enviado un código de verificación al correo proporcionado.</h1>
      </div>
      <form className="text-center">
        <div className="flex justify-center mb-2">
          <div className="w-full flex justify-around">
            <input type="text" id="digit1" name="digit1" maxLength="1" required className="w-16 h-16 p-2 m-2 box-border text-center rounded-lg border border-gray-400" />
            <input type="text" id="digit2" name="digit2" maxLength="1" required className="w-16 h-16 p-2 m-2 box-border text-center rounded-lg border border-gray-400" />
            <input type="text" id="digit3" name="digit3" maxLength="1" required className="w-16 h-16 p-2 m-2 box-border text-center rounded-lg border border-gray-400" />
            <input type="text" id="digit4" name="digit4" maxLength="1" required className="w-16 h-16 p-2 m-2 box-border text-center rounded-lg border border-gray-400" />
          </div>
        </div>

        <div className="text-right mb-40">
          <div className="mr-4">
            <a href="/text" className="text-[#4D7A7D]">Reenviar código en 1:00 min</a>
          </div>
        </div>
       
        <button type="submit" className="w-full bg-custom-204E51 text-white font-semibold px-6 py-3 rounded-lg hover:bg-custom-306C73 focus:outline-none focus:bg-custom-306C73 focus:ring-2 focus:ring-custom-204E51">
          Continuar
        </button>
      </form>
    </div>
  );
}

export default Verificacion;
