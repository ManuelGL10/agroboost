import React from 'react';
import ImgComprobado from '../img/comprobado.png';


const ModalBienvenida = ({ isOpen, onClose }) => {
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
          <h3 className="text-lg block font-medium text-custom-204E51 md:text-3xl sm:text-2xl text-1xl mt-5 mb-7 text-center">¡Bienvenido!</h3>
          <div className="mt-2 mb-7 flex justify-center">
            <img src={ImgComprobado} alt="ImgComprobado" className="w-24 h-24" />
          </div>
          <div className="text-center text-[#4D7A7D]">¡Te has registrado exitosamente!</div>
        </div>
      </div>
    </>
  );
};

export default ModalBienvenida;

