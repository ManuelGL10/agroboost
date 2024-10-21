import React, { useState, useEffect, useContext } from 'react';
import { IconSearch, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import GetCultivos from '../request/GetCultivos';
import { DarkModeContext } from '../../context/DarkModeContext';

const MainCultivo = () => {
  const [cultivos, setCultivos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cultivosPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

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
    <div className={`${darkMode && "dark"}`}>
      <div className='bg-background dark:bg-[#1B2431] p-4 h-screen'>
        <div className='flex mt-20'>
          <h1 className='lg:text-3xl text-2xl font-semibold dark:text-white'>Cultivos</h1>
          <div className='flex items-center bg-white dark:bg-[#323D4E] border-2 border-gray-200 dark:border-gray-600 p-2 rounded-full lg:w-[30%] md:w-[40%] w-[50%] ml-auto'>
            <IconSearch size={18} className='text-[#9ca3af] ml-2' />
            <input 
              placeholder='Buscar' 
              className='bg-white dark:bg-[#323D4E] dark:text-slate-100 ml-2 w-[80%] focus:outline-none' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className='py-6'>
          <div className='w-full bg-white dark:bg-[#273142] rounded-2xl overflow-hidden'>
            <table className='w-[100%]'>
              <thead className='bg-slate-200 dark:bg-[#313D4F] dark:text-white text-medium text-sm lg:text-base'>
                <tr>
                  <th className='px-2 py-4 text-left'>ID</th>
                  <th className='px-2 py-4 text-left'>Nombre del Agricultor</th>
                  <th className='px-2 py-4 text-left'>Dirección</th>
                  <th className='px-2 py-4 text-left'>Tipo de Cultivo</th>
                  <th className='px-2 py-4 text-left lg:table-cell hidden'>Superficie</th>
                  <th className='px-2 py-4 text-left'>Días para Cosechar</th>
                </tr>
              </thead>
              <tbody className='dark:text-gray-300'>
              {currentCultivos.length === 0 ? (
                  <tr className='border-gray-200 dark:border-gray-600 border-y'>
                    <td colSpan="6" className="text-center py-4">No se encontraron resultados</td>
                  </tr>
                ) : (
                  currentCultivos.map((cultivo, index) => {
                  const diasRestantes = calcularDiasRestantes(cultivo.fecha_prevista);
                  const cultivoIndex = indexOfFirstCultivo + index + 1;

                  return (
                    <tr key={cultivo._id} className='border-gray-200 border-y text-sm lg:text-base'>
                      <td className='px-2 py-4 font-semibold'>{cultivoIndex}</td>
                      <td className='px-2 py-4'>{cultivo.usuario.nombre}</td>
                      <td className='px-2 py-4 max-w-[120px] lg:max-w-none md:max-w-none truncate'>
                        {cultivo.usuario.direccion.colonia}, {cultivo.usuario.direccion.ciudad},{' '}
                        {cultivo.usuario.direccion.estado}, {cultivo.usuario.direccion.codigo_postal}
                      </td>
                      <td className='px-2 py-4'>{cultivo.tipo_cultivo}</td>
                      <td className='px-2 py-4 lg:table-cell hidden'>{cultivo.medidas_siembra} m²</td>
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
          <div className='flex justify-around py-2 px-4 rounded-lg bg-gray-50 dark:bg-[#323D4E] border border-gray-300 ml-auto'>
            <IconChevronLeft
              className='text-gray-500 dark:text-gray-300'
              onClick={() => paginate(currentPage === 1 ? 1 : currentPage - 1)}
            />
            <span className='mx-4 text-gray-300 font-semibold'>|</span>
            <IconChevronRight
              className='text-gray-500 dark:text-gray-300'
              onClick={() => paginate(currentPage === Math.ceil(cultivos.length / cultivosPerPage) ? currentPage : currentPage + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCultivo;
