import React from "react";
import Clima from "../../img/dom.png";
import DatosUser from './DatosUser'
import ClimateDay from "./ClimateDay";
import {IconCloud} from '@tabler/icons-react';

const InicioUser = () => {
  return (
    <div className='bg-background ml-[20%] p-4 h-screen h-full'>
      <div className='mt-16 mb-6 flex flex-row items-center'>
        <div className='bg-white rounded-lg border border-custom-D9D9D9 border-2 flex items-center w-full'>
          <div className='flex flex-col'>
            <div className="mr-5 ml-72">
                <div className='flex items-center justify-center'> 
                    <p className='text-custom-204E51 text-7xl font-boad'>26°C</p>
                </div>
            </div>
          </div>
          <div className='flex flex-col' >
            <div className="mr-10 ml-10">
              <h2 className='flex items-center text-lg font-semibold'>26°/12°</h2>
              <div className='flex items-center justify-center'> 
                <p className='text-custom-204E51 text-5xl font-boad'>Nublado</p>
              </div>
            </div>
          </div>
          <img src={Clima} alt='Clima' className='w-40 h-40 rounded-md mr-5'  />
        </div>
      </div>
      <ClimateDay/>
      <DatosUser/>
    </div>
  );
};

export default InicioUser;
