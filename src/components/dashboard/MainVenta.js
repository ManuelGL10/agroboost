import React, { useState, useEffect, useContext } from 'react';
import { IconRestore, IconChevronRight, IconChevronLeft, IconCheck, IconClock, IconX } from '@tabler/icons-react';
import GetVentas from '../request/GetVentas';
import { DarkModeContext } from '../../context/DarkModeContext';

const MainVenta = () => {
  const [ventas, setVentas] = useState([]);
  const [filtroProducto, setFiltroProducto] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [ventasPerPage] = useState(6);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ventasData = await GetVentas();
        setVentas(ventasData);
      } catch (error) {
        console.error('Error al obtener los datos de las ventas:', error);
      }
    };

    fetchData();
  }, []);

  const filtrarVentas = () => {
    return ventas.filter((venta) => {
      if (filtroProducto && venta.producto.nombre_producto !== filtroProducto) return false;
      if (filtroEstado && venta.estado_venta !== filtroEstado) return false;
      return true;
    });
  };

  const handleLimpiarFiltros = () => {
    setFiltroProducto('');
    setFiltroEstado('');
  };

  const indexOfLastVenta = currentPage * ventasPerPage;
  const indexOfFirstVenta = indexOfLastVenta - ventasPerPage;
  const currentVentas = filtrarVentas().slice(indexOfFirstVenta, indexOfLastVenta);
  const firstElementIndex = indexOfFirstVenta + 1;
  const lastElementIndex = Math.min(indexOfLastVenta, filtrarVentas().length);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className='bg-background dark:bg-[#1B2431] p-4 lg:h-[100%] h-screen'>
        <div className='flex mt-20'>
          <h1 className='text-3xl font-semibold dark:text-white'>Ventas</h1>
        </div> 
        <div className='py-4'>
          <div className='bg-white dark:bg-[#313D4F] lg:w-[60%] w-[100%] text-sm lg:text-base dark:text-white grid grid-cols-7 rounded-md'>
            <div className='border border-gray-200 p-1 flex items-center rounded-s-md'>
              <p className='w-[100%]'>Filtrar por:</p>
            </div>
            <div className='border border-gray-200 p-1 flex items-center col-span-2'>
              <select value={filtroProducto} onChange={(e) => setFiltroProducto(e.target.value)} className='w-[100%] dark:bg-[#313D4F]'>
                <option value=''>Producto</option>
                <option>Sensor de Humedad</option>
                <option>Sensor de Temperatura</option>
                <option>Sensor de Nutrientes</option>
              </select>
            </div>
            <div className='border border-gray-200 p-1 flex items-center col-span-2'>
              <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)} className='w-[100%] dark:bg-[#313D4F]'>
                <option value=''>Estado</option>
                <option>Completado</option>
                <option>Rechazado</option>
                <option>Pendiente</option>
              </select>
            </div>
            <div className='border border-gray-200 p-1 flex items-center rounded-e-md col-span-2'>
              <button onClick={handleLimpiarFiltros} className='flex items-center w-[100%] justify-start text-[#D33363] dark:text-red-500'>
                <IconRestore/>
                <span className='text-left'>Limpiar filtros</span>
              </button>
            </div>
          </div>
        </div>    
        <div className='pb-6'>
          <div className='w-full bg-white dark:bg-[#273142] rounded-2xl overflow-hidden'>
            <table className='w-[100%]'>
              <thead className='bg-slate-200 dark:bg-[#313D4F] dark:text-white text-medium text-sm lg:text-base'>
                <tr>
                    <th className='px-2 py-4 text-left'></th>
                    <th className='px-2 py-4 text-left'>Nombre</th>
                    <th className='px-2 py-4 text-left'>Dirección</th>
                    <th className='px-2 py-4 text-left lg:table-cell hidden'>Fecha</th>
                    <th className='px-2 py-4 text-left'>Producto</th>
                    <th className='px-2 py-4 text-left'>Estado</th>
                  </tr>
              </thead>
              <tbody className='dark:text-gray-300'>
                {currentVentas.map((venta, index) => {
                    let estadoClass = '';
                    switch (venta.estado_venta) {
                      case 'Completado':
                        estadoClass = 'px-3 py-1 bg-green-300 bg-opacity-35 text-[#2F9B5D] font-bold dark:text-white dark:bg-[#4AD991]';
                        break;
                      case 'Rechazado':
                        estadoClass = 'px-4 py-1 bg-red-300 bg-opacity-35 text-[#D33363] font-bold dark:text-white dark:bg-red-500';
                        break;
                      case 'Pendiente':
                        estadoClass = 'px-5 py-1 bg-yellow-200 bg-opacity-35 text-[#ffc131] font-bold dark:text-white dark:bg-yellow-500';
                        break;
                      default:
                        estadoClass = '';
                    }

                    return(
                      <tr className='border-gray-200 border-y text-sm lg:text-base'>
                        <td className='px-2 py-4 text-center font-semibold'>{index + 1}</td>
                        <td className='px-2 py-4'>{venta.usuario.nombre}</td>
                        <td className='px-2 py-4 max-w-[120px] lg:max-w-none md:max-w-none truncate'>{venta.usuario.direccion.colonia}, {venta.usuario.direccion.ciudad}, {venta.usuario.direccion.estado}, {venta.usuario.direccion.codigo_postal}</td>
                        <td className='px-2 py-4 lg:table-cell hidden'>{formatDate(venta.fecha_venta)}</td>
                        <td className='px-2 py-4'>{venta.producto.nombre_producto}</td>
                        <td className='px-2 py-4'>
                          {/* Mostrar el estado completo en pantallas grandes */}
                          <span className={`hidden sm:inline-block rounded-md px-3 py-1 ${estadoClass}`}>
                            {venta.estado_venta}
                          </span>
                          
                          {/* Mostrar íconos en pantallas pequeñas */}
                          <span className='sm:hidden'>
                            {venta.estado_venta === 'Completado' && <div className='rounded-full size-8 p-1 bg-green-500'><IconCheck className="text-white" /></div>}
                            {venta.estado_venta === 'Rechazado' && <div className='rounded-full size-8 p-1 bg-red-500'><IconX className="text-white" /></div>}
                            {venta.estado_venta === 'Pendiente' && <div className='rounded-full size-8 p-1 bg-yellow-500'><IconClock className="text-white" /></div>}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>
        {filtrarVentas().length > ventasPerPage && (
          <div className='flex justify-end'>
            <div className='flex justify-around py-2 px-4 rounded-lg bg-gray-50 dark:bg-[#323D4E] border border-gray-300'>
              <IconChevronLeft 
                className={`text-gray-500 dark:text-gray-300 cursor-pointer ${currentPage === 1 ? 'pointer-events-none opacity-50' : ''}`}
                onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
              />
              <span className='mx-4 text-gray-300 font-semibold'>|</span>
              <IconChevronRight 
                className={`cursor-pointer text-gray-500 dark:text-gray-300 ${indexOfLastVenta >= filtrarVentas().length ? 'pointer-events-none opacity-50' : ''}`}
                onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(filtrarVentas().length / ventasPerPage)))}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainVenta;
