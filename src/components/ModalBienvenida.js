import React from 'react';
import ImgComprobado from '../img/comprobado.png';


const ModalBienvenida = ({ isOpen, onClose, title, mensaje }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
      )}
      <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ${isOpen ? 'block' : 'hidden'}`}>
        <div className="relative lg:max-w-md md:max-w-md w-width-full m-4 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-lg block font-medium text-custom-204E51 md:text-3xl sm:text-2xl text-1xl mt-5 mb-7 text-center">{title}</h3>
          <div className="mt-2 mb-7 flex justify-center">
            <img src={ImgComprobado} alt="ImgComprobado" className="size-24" />
          </div>
          <div className="text-center text-[#4D7A7D]">{mensaje}</div>
        </div>
      </div>
    </>
  );
};

export default ModalBienvenida;

