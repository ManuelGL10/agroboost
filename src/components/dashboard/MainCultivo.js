import React, { useState, useEffect } from 'react';
import { IconSearch, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import GetCultivos from '../request/GetCultivos';

const MainCultivo = () => {
  const [cultivos, setCultivos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cultivosPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cultivoData = await GetCultivos();
        setCultivos(cultivoData);
      } catch (error) {
        console.error('Error al obtener los datos de los cultivos:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const searchCultivos = async () => {
      try {
        const cultivoData = await GetCultivos();
        const filteredCultivos = cultivoData.filter((cultivo) =>
          cultivo.usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cultivo.tipo_cultivo.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCultivos(filteredCultivos);
        setCurrentPage(1);
      } catch (error) {
        console.error('Error al obtener los datos de los cultivos:', error);
      }
    };

    searchCultivos();
  }, [searchTerm]);

  const calcularDiasRestantes = (fechaPrevista) => {
    const hoy = new Date();
    const fechaPrevistaDate = new Date(fechaPrevista);
    const unDia = 24 * 60 * 60 * 1000; // milisegundos en un día

    const diffTiempo = fechaPrevistaDate.getTime() - hoy.getTime();
    const diffDias = Math.ceil(diffTiempo / unDia);

    return diffDias;
  };

  const indexOfLastCultivo = currentPage * cultivosPerPage;
  const indexOfFirstCultivo = indexOfLastCultivo - cultivosPerPage;
  const currentCultivos = cultivos.slice(indexOfFirstCultivo, indexOfLastCultivo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='bg-background ml-[20%] p-4 h-screen'>
      <div className='flex mt-20'>
        <h1 className='text-3xl font-semibold'>Cultivos</h1>
        <div className='flex items-center bg-white border-2 border-gray-200 p-2 rounded-full w-[30%] ml-auto'>
          <IconSearch size={18} className='text-[#9ca3af] ml-2' />
          <input
            placeholder='Buscar'
            className='bg-white ml-2 w-[80%] focus:outline-none'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className='py-6'>
        <div className='w-full bg-white rounded-2xl overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-white text-medium'>
              <tr>
                <th className='px-2 py-4 text-left'>ID</th>
                <th className='px-2 py-4 text-left'>Nombre del Agricultor</th>
                <th className='px-2 py-4 text-left'>Dirección</th>
                <th className='px-2 py-4 text-left'>Tipo de Cultivo</th>
                <th className='px-2 py-4 text-left'>Superficie</th>
                <th className='px-2 py-4 text-left'>Días para Cosechar</th>
              </tr>
            </thead>
            <tbody>
            {currentCultivos.length === 0 ? (
                <tr className='border-gray-200 border-y'>
                  <td colSpan="6" className="text-center py-4">No se encontraron resultados</td>
                </tr>
              ) : (
                currentCultivos.map((cultivo, index) => {
                const diasRestantes = calcularDiasRestantes(cultivo.fecha_pervista);
                const cultivoIndex = indexOfFirstCultivo + index + 1;

                return (
                  <tr key={cultivo._id} className='border-gray-200 border-y'>
                    <td className='px-2 py-4 font-semibold'>{cultivoIndex}</td>
                    <td className='px-2 py-4'>{cultivo.usuario.nombre}</td>
                    <td className='px-2 py-4'>
                      {cultivo.usuario.direccion.colonia}, {cultivo.usuario.direccion.ciudad},{' '}
                      {cultivo.usuario.direccion.estado}, {cultivo.usuario.direccion.codigo_postal}
                    </td>
                    <td className='px-2 py-4'>{cultivo.tipo_cultivo}</td>
                    <td className='px-2 py-4'>{cultivo.medidas_siembra} m²</td>
                    <td className='px-2 py-4'>
                      {diasRestantes > 0 ? `${diasRestantes} días` : 'Hoy'}
                    </td>
                  </tr>
                );
              }))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex'>
        <div className='flex justify-around py-2 px-4 rounded-lg bg-gray-50 border border-gray-300 ml-auto'>
          <IconChevronLeft
            className='text-gray-500'
            onClick={() => paginate(currentPage === 1 ? 1 : currentPage - 1)}
          />
          <span className='mx-4 text-gray-300 font-semibold'>|</span>
          <IconChevronRight
            onClick={() => paginate(currentPage === Math.ceil(cultivos.length / cultivosPerPage) ? currentPage : currentPage + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default MainCultivo;
