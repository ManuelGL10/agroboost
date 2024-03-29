import React, { useState, useEffect } from 'react'
import { IconSearch, IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import GetCultivos from '../request/GetCultivos'

const MainCultivo = () => {
  const [ cultivos, setCultivos ] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cultivoData = await GetCultivos();
        setCultivos(cultivoData);
      } catch (error) {
        console.error('Error al obtener los datos de los usuarios:', error);
      }
    };

    fetchData();
  }, []);

  const calcularDiasRestantes = (fechaPrevista) => {
    const hoy = new Date();
    const fechaPrevistaDate = new Date(fechaPrevista);
    const unDia = 24 * 60 * 60 * 1000; // milisegundos en un día

    const diffTiempo = fechaPrevistaDate.getTime() - hoy.getTime();
    const diffDias = Math.ceil(diffTiempo / unDia);

    return diffDias;
  };

  return (
    <div className='bg-background ml-[20%] p-4 h-screen'>
      <div className='flex mt-20'>
        <h1 className='text-3xl font-semibold'>Cultivos</h1>
        <div className='flex items-center bg-white border-2 border-gray-200 p-2 rounded-full w-[30%] ml-auto'>
          <IconSearch size={18} className='text-[#9ca3af] ml-2' />
          <input placeholder='Buscar' className='bg-white ml-2 w-[80%] focus:outline-none' />
        </div>
      </div>
      <div className='py-6'>
        <div className='w-full bg-white rounded-2xl overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-white text-medium'>
              <tr>
                <th className='px-4 py-4 text-left'>ID</th>
                <th className='px-4 py-4 text-left'>Nombre del Agricultor</th>
                <th className='px-4 py-4 text-left'>Dirección</th>
                <th className='px-4 py-4 text-left'>Tipo de Cultivo</th>
                <th className='px-4 py-4 text-left'>Superficie</th>
                <th className='px-4 py-4 text-left'>Días para Cosechar</th>
              </tr>
            </thead>
            <tbody>
              {cultivos.map((cultivo, index) => {
                const diasRestantes = calcularDiasRestantes(cultivo.fecha_pervista);
                console.log(cultivo.fecha_pervista)

                return(
                <tr key={cultivo._id} className='border-gray-200 border-y'>
                  <td className='px-4 py-4'>{index + 1}</td>
                  <td className='px-4 py-4'>{cultivo.usuario.nombre}</td>
                  <td className='px-4 py-4'>{cultivo.usuario.direccion.colonia}, {cultivo.usuario.direccion.ciudad}, {cultivo.usuario.direccion.estado}, {cultivo.usuario.direccion.codigo_postal}</td>
                  <td className='px-4 py-4'>{cultivo.tipo_cultivo}</td>
                  <td className='px-4 py-4'>{cultivo.medidas_siembra} m²</td>
                  <td className='px-4 py-4'>{diasRestantes > 0 ? `${diasRestantes} días` : 'Hoy'}</td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex'>
        <div className='flex justify-around py-2 px-4 rounded-lg bg-gray-50 border border-gray-300 ml-auto'>
            <IconChevronLeft className='text-gray-500'/>
            <span className='mx-4 text-gray-300 font-semibold'>|</span>
            <IconChevronRight/>
        </div>
      </div>
    </div>
  )
}

export default MainCultivo