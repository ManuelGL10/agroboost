import React from 'react';
import ImgError from '../img/cancelar.png';

const ModalError = ({ isOpen, onClose, errorMessage }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
      )}
      <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ${isOpen ? 'block' : 'hidden'}`}>
        <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-start justify-between">
            <button onClick={onClose} className="p-1 bg-transparent border-0 text-custom-204E51 text-3xl leading-none font-semibold outline-none focus:outline-none absolute top-0 right-0">
              <span className="text-custom-204E51">×</span>
            </button>
          </div>
          <h3 className="text-lg block font-medium text-red-500 md:text-3xl sm:text-2xl text-1xl mt-5 mb-7 text-center">¡Ups! Ha ocurrido un error</h3>
          <div className="mt-2 mb-7 flex justify-center">
            <img src={ImgError} alt="ImgError" className="w-24 h-24" />
          </div>
          <div className="mt-2 mb-7 text-center text-[#4D7A7D]">{errorMessage}</div>
          <div className="flex justify-center mt-4">
            <button onClick={onClose} style={{ backgroundColor: '#D33363', color: 'white' }} className="font-semibold px-6 py-3 rounded-lg hover:bg-custom-306C73 focus:outline-none focus:bg-custom-306C73 focus:ring-2 focus:ring-custom-204E51">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalError;
