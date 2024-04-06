import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

const MainConfig = () => {
  const [frecuenciaRespaldo, setFrecuenciaRespaldo] = useState('');
  const [frecuenciaRestauracion, setFrecuenciaRestauracion] = useState('');
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className='bg-background dark:bg-[#1B2431] ml-[20%] p-4 h-screen'>
        <h1 className='text-3xl font-semibold mt-20 dark:text-white'>Ajustes</h1>
        <div className='py-4 px-6 grid grid-cols-2 gap-x-6 bg-white dark:bg-[#273142] dark:text-white mt-6 rounded-2xl'>
          <div>
            <span className='text-xl font-semibold'>Respaldo</span>
            <div className='px-4 py-2'>
              <span className='text-lg font-medium'>Selecciona las Colecciones</span>
              <div className='grid gap-2 grid-cols-2 mt-2'>
                  <div className='flex text-lg'>
                      <input type='checkbox' className='mr-2'/>
                      <span>Usuarios</span>
                  </div>
                  <div className='flex text-lg'>
                      <input type='checkbox' className='mr-2'/>
                      <span>Cultivo</span>
                  </div>
                  <div className='flex text-lg'>
                      <input type='checkbox' className='mr-2'/>
                      <span>Dispositivo</span>
                  </div>
                  <div className='flex text-lg'>
                      <input type='checkbox' className='mr-2'/>
                      <span>Agroquimico</span>
                  </div>
                  <div className='flex text-lg'>
                      <input type='checkbox' className='mr-2'/>
                      <span>Todas</span>
                  </div>
              </div>
            </div>
            <div className='px-4 py-2 grid'>
              <span className='text-lg font-medium mb-2'>Frecuencia de Respaldo</span>
              <select
                className='border-2 border-gray-300 dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100  rounded-lg p-2'
                value={frecuenciaRespaldo}
                onChange={(e) => setFrecuenciaRespaldo(e.target.value)}
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value="Diario">Diario</option>
                <option value="Semanal">Semanal</option>
                <option value="Mensual">Mensual</option>
              </select>
            </div>
            {frecuenciaRespaldo === 'Semanal' && (
              <div className='px-4 py-2 grid'>
                  <span className='text-lg font-medium mb-2'>Día de Respaldo</span>
                  <select className='border-2 border-gray-300 dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100  rounded-lg p-2'>
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="Diario">Lunes</option>
                      <option value="Semanal">Martes</option>
                      <option value="Mensual">Miércoles</option>
                      <option value="Mensual">Jueves</option>
                      <option value="Mensual">Viernes</option>
                      <option value="Mensual">Sábado</option>
                      <option value="Mensual">Domingo</option>
                  </select>
              </div>
              )}
              {(frecuenciaRespaldo === 'Mensual') && (
                <div className='px-4 py-2 grid'>
                  <span className='text-lg font-medium mb-2'>Fecha de Respaldo</span>
                  <input type='date' className='border-2 border-gray-300 rounded-lg p-2'/>
                </div>
              )}
              {(frecuenciaRespaldo === 'Mensual' || frecuenciaRespaldo === 'Diario' || frecuenciaRespaldo === 'Semanal') && (
                  <div className='px-4 py-2 grid'>
                      <span className='text-lg font-medium mb-2'>Hora de Respaldo</span>
                      <input type='time' className='border-2 border-gray-300 dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100  rounded-lg p-2'/>
                  </div>
              )}
              <div className='py-2 flex justify-center'>
                  <button className='flex py-2 px-6 rounded-lg bg-custom-color_logo right-0 text-white font-medium hover:bg-[#2F9B5D]'>
                      Respaldar
                  </button>
              </div>
          </div>
          <div>
            <span className='text-xl font-semibold'>Restauración</span>
            <div className='px-4 py-2'>
              <span className='text-lg font-medium'>Selecciona las Colecciones</span>
              <div className='grid gap-2 grid-cols-2 mt-2'>
                  <div className='flex text-lg'>
                      <input type='checkbox' className='mr-2'/>
                      <span>Usuarios</span>
                  </div>
                  <div className='flex text-lg'>
                      <input type='checkbox' className='mr-2'/>
                      <span>Cultivo</span>
                  </div>
                  <div className='flex text-lg'>
                      <input type='checkbox' className='mr-2'/>
                      <span>Dispositivo</span>
                  </div>
                  <div className='flex text-lg'>
                      <input type='checkbox' className='mr-2'/>
                      <span>Agroquimico</span>
                  </div>
                  <div className='flex text-lg'>
                      <input type='checkbox' className='mr-2'/>
                      <span>Todas</span>
                  </div>
              </div>
            </div>
            <div className='px-4 py-2 grid'>
              <span className='text-lg font-medium mb-2'>Frecuencia de Restauración</span>
              <select
                className='border-2 border-gray-300 dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100  rounded-lg p-2'
                value={frecuenciaRestauracion}
                onChange={(e) => setFrecuenciaRestauracion(e.target.value)}
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value="Diario">Diario</option>
                <option value="Semanal">Semanal</option>
                <option value="Mensual">Mensual</option>
              </select>
            </div>
            {frecuenciaRestauracion === 'Semanal' && (
              <div className='px-4 py-2 grid'>
                  <span className='text-lg font-medium mb-2'>Día de Restauración</span>
                  <select className='border-2 border-gray-300 dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100  rounded-lg p-2'>
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="Diario">Lunes</option>
                      <option value="Semanal">Martes</option>
                      <option value="Mensual">Miércoles</option>
                      <option value="Mensual">Jueves</option>
                      <option value="Mensual">Viernes</option>
                      <option value="Mensual">Sábado</option>
                      <option value="Mensual">Domingo</option>
                  </select>
              </div>
              )}
              {(frecuenciaRestauracion === 'Mensual') && (
                <div className='px-4 py-2 grid'>
                  <span className='text-lg font-medium mb-2'>Fecha de Restauración</span>
                  <input type='date' className='border-2 border-gray-300 dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100  rounded-lg p-2'/>
                </div>
              )}
              {(frecuenciaRestauracion === 'Mensual' || frecuenciaRestauracion === 'Diario' || frecuenciaRestauracion === 'Semanal') && (
                  <div className='px-4 py-2 grid'>
                      <span className='text-lg font-medium mb-2'>Hora de Restauración</span>
                      <input type='time' className='border-2 border-gray-300 dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100  rounded-lg p-2'/>
                  </div>
              )}
              <div className='py-2 flex justify-center'>
                  <button className='flex py-2 px-6 rounded-lg bg-custom-color_logo right-0 text-white font-medium hover:bg-[#2F9B5D]'>
                      Restaurar
                  </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainConfig;
