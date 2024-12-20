import React from 'react';
import monitorear from '../img/monitorear.jpeg';


const Agroboost = () => {

  return (
    <section className="flex justify-center items-center py-12 max-w-[1545px] mx-auto md:px-12 px-4 p-2">
      <div className="max-w-[1545px] mx-auto grid md:grid-cols-2">
        <div className="m-6 text-center flex flex-col justify-center">
          <span
            className="block font-medium lg:text-4xl md:text-3xl text-2xl text-custom-204E51 mb-4 text-justify"
          >
            AgroBoost, donde la tecnología se encuentra con la tierra.
          </span>
          <span className="block text-black lg:text-xl md:text-lg text-base text-justify">
            Descubre las últimas innovaciones tecnológicas diseñadas para potenciar tus cultivos y optimizar tu producción. Obtén pronósticos climáticos precisos, análisis de suelos detallados y herramientas avanzadas para una gestión agrícola eficiente.
          </span>
        </div>
        <div className="flex lg:justify-end md:justify-center sm:justify-center">
          <img
            src={monitorear}
            className="rounded-2xl w-[500px] my-4 shadow-2xl"
            alt="imagen de monitoreo"
          />
        </div>
      </div>
    </section>
  );
};

export default Agroboost;
