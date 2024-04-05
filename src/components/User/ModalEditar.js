import React from 'react';
import ImgAlerta from '../../img/quejarse.png'


const ModalEditar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
      )}
      <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ${isOpen ? 'block' : 'hidden'}`}>
        <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-start justify-between">
            <button onClick={onClose} className="p-1 bg-transparent border-0 text-custom-204E51 text-3xl leading-none font-semibold outline-none focus:outline-none absolute top-0 right-2">
              <span className="text-custom-204E51">×</span>
            </button>
          </div>
          <h3 className="text-lg block font-medium text-[#DEA92A] md:text-3xl sm:text-2xl text-1xl mt-5 mb-7 text-center">¡ESPERA UN MOMENTO!</h3>
          <div className="mt-2 mb-7 flex justify-center">
            <img src={ImgAlerta} alt="ImgComprobado" className="w-24 h-24" />
          </div>
          <div className="text-center">¿Estás seguro de realizar los cambios?</div>
          <div className="flex justify-center mt-4">
            <button onClick={onClose} className="bg-custom-color_logo text-white hover:bg-[#2F9B5D] text-white font-semibold px-6 py-3 mr-4 rounded-lg">Aceptar</button>
            <button onClick={onClose} className="bg-[#D33363] hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg ">Cancelar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEditar;

