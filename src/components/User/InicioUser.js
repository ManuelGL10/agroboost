import React from "react";
import Clima from "../../img/dom.png";
import DatosUser from './DatosUser'
import GraficaCircular from "./GraficaHumedad";
import {IconCloud} from '@tabler/icons-react';

const InicioUser = () => {
  return (
    <div className='bg-background ml-[20%] p-4 h-screen'>
      <div className='flex flex-col mt-20'>
        <h1 className='text-3xl font-semibold'>Bienvenido</h1>
      </div>
      <div className='mt-5 flex flex-row items-center'>
        <div className='bg-white shadow-md rounded-md mr-4 flex items-center w-full'>
          <img src={Clima} alt='Clima' className='w-40 h-40 rounded-md mr-4 ml-4'  />
          <div className='flex flex-col'>
            <div className="mr-10 ml-10">
                <div className='flex items-center justify-center'> 
                    <p className='text-custom-204E51 text-5xl font-boad'>26°C</p>
                </div>
            </div>
          </div>
          <div className='flex flex-col' >
            <div className="mr-10">
              <h2 className='flex items-center text-lg font-semibold'>26°/12°</h2>
              <div className='flex items-center justify-center'> 
                <p className='text-custom-204E51 text-3xl font-boad'>Nublado</p>
              </div>
            </div>
          </div>
          <div className="bg-custom-F0F0F0 rounded-xl p-2 mr-4 mt-2 mb-2 w-20 ">
            <div className='flex flex-col'>
                <div>
                <h2 className='flex items-center justify-center font-semibold'>10:00</h2>
                <div className='flex items-center justify-center'> 
                <IconCloud size={34}/>
                </div>
                <div className='flex items-center justify-center '> 
                    <p className='text-gray-600'>26°</p>
                </div>
                </div>
            </div>
          </div>
          <div className="bg-custom-F0F0F0 rounded-xl p-2 mr-4 mt-2 mb-2 w-20 ">
            <div className='flex flex-col'>
                <div>
                <h2 className='flex items-center justify-center font-semibold'>10:00</h2>
                <div className='flex items-center justify-center'> 
                <IconCloud size={34}/>
                </div>
                <div className='flex items-center justify-center '> 
                    <p className='text-gray-600'>26°</p>
                </div>
                </div>
            </div>
          </div>
          <div className="bg-custom-F0F0F0 rounded-xl p-2 mr-4 mt-2 mb-2 w-20">
            <div className='flex flex-col'>
                <div>
                <h2 className='flex items-center justify-center font-semibold'>11:00</h2>
                <div className='flex items-center justify-center'> 
                <IconCloud size={34}/>
                </div>
                <div className='flex items-center justify-center '> 
                    <p className='text-gray-600'>26°</p>
                </div>
                </div>
            </div>
          </div>
          <div className="bg-custom-F0F0F0 rounded-xl p-2 mr-4 mt-2 mb-2 w-20">
            <div className='flex flex-col'>
                <div>
                <h2 className='flex items-center justify-center font-semibold'>12:00</h2>
                <div className='flex items-center justify-center'> 
                <IconCloud size={34}/>
                </div>
                <div className='flex items-center justify-center '> 
                    <p className='text-gray-600'>26°</p>
                </div>
                </div>
            </div>
          </div>
          <div className="bg-custom-F0F0F0 rounded-xl p-2 mr-4 mt-2 mb-2 w-20">
            <div className='flex flex-col'>
                <div>
                <h2 className='flex items-center justify-center font-semibold'>13:00</h2>
                <div className='flex items-center justify-center'> 
                <IconCloud size={34}/>
                </div>
                <div className='flex items-center justify-center '> 
                    <p className='text-gray-600'>26°</p>
                </div>
                </div>
            </div>
          </div>
          <div className="bg-custom-F0F0F0 rounded-xl p-2 mr-4 mt-2 mb-2 w-20">
            <div className='flex flex-col'>
                <div>
                <h2 className='flex items-center justify-center font-semibold'>14:00</h2>
                <div className='flex items-center justify-center'> 
                <IconCloud size={34}/>
                </div>
                <div className='flex items-center justify-center '> 
                    <p className='text-gray-600'>26°</p>
                </div>
                </div>
            </div>
          </div>
          <div className="bg-custom-F0F0F0 rounded-xl p-2 mr-4 mt-2 mb-2 w-20">
            <div className='flex flex-col'>
                <div>
                <h2 className='flex items-center justify-center font-semibold'>15:00</h2>
                <div className='flex items-center justify-center'> 
                <IconCloud size={34}/>
                </div>
                <div className='flex items-center justify-center '> 
                    <p className='text-gray-600'>26°</p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <DatosUser/>
    </div>
  );
};

export default InicioUser;
