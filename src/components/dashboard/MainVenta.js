import React, { useState, useEffect, useContext } from 'react';
import { IconRestore, IconChevronRight, IconChevronLeft } from '@tabler/icons-react';
import GetVentas from '../request/GetVentas';
import { DarkModeContext } from '../../context/DarkModeContext';

const MainVenta = () => {
  const [ventas, setVentas] = useState([]);
  const [filtroFecha, setFiltroFecha] = useState('');
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
      // Filtrar por fecha
      if (filtroFecha) {
        const fechaVenta = new Date(venta.fecha_venta);
        const fechaFiltro = new Date(filtroFecha);
        // Establecer las horas, minutos y segundos de ambas fechas a 0
        fechaVenta.setHours(0, 0, 0, 0);
        fechaFiltro.setHours(0, 0, 0, 0);
        // Comparar las fechas
        if (fechaVenta.getTime() !== fechaFiltro.getTime()) {
          return false;
        }
      }
      // Filtrar por producto
      if (filtroProducto && venta.producto.nombre_producto !== filtroProducto) return false;
      // Filtrar por estado
      if (filtroEstado && venta.estado_venta !== filtroEstado) return false;
      return true;
    });
  };

  const handleLimpiarFiltros = () => {
    setFiltroFecha('');
    setFiltroProducto('');
    setFiltroEstado('');
  };

  const indexOfLastVenta = currentPage * ventasPerPage;
  const indexOfFirstVenta = indexOfLastVenta - ventasPerPage;
  const currentVentas = filtrarVentas().slice(indexOfFirstVenta, indexOfLastVenta);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className='bg-background dark:bg-[#1B2431] ml-[20%] p-4 h-screen'>
        <div className='flex mt-20'>
          <h1 className='text-3xl font-semibold dark:text-white'>Ventas</h1>
        </div> 
        <div className='py-4'>
          <table className='bg-white dark:bg-[#313D4F] w-full text-sm dark:text-white'>
            <thead>
              <tr>
                <th className='border border-gray-200 py-2'>Filtrar por:</th>
                <th className='border border-gray-200 py-2 px-1'>
                  <div className='flex'>
                    <span>Fecha:</span>
                    <input type='date' value={filtroFecha || ''} onChange={(e) => setFiltroFecha(e.target.value)} className='w-full ml-2 dark:bg-[#313D4F]'/>
                  </div>
                </th>
                <th className='border border-gray-200 py-2'>
                  <select value={filtroProducto} onChange={(e) => setFiltroProducto(e.target.value)} className='w-full dark:bg-[#313D4F]'>
                    <option value=''>Producto</option>
                    <option>Sensor de Humedad</option>
                    <option>Sensor de Temperatura</option>
                    <option>Sensor de Nutrientes</option>
                  </select>
                </th>
                <th className='border border-gray-200 py-2'>
                  <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)} className='w-full dark:bg-[#313D4F]'>
                    <option value=''>Estado</option>
                    <option>Completado</option>
                    <option>Rechazado</option>
                    <option>Pendiente</option>
                  </select>
                </th>
                <th className='border border-gray-200 py-2'>
                  <button onClick={handleLimpiarFiltros} className='flex items-center w-full justify-center text-[#D33363] dark:text-red-500'>
                    <IconRestore/>
                    <span className='ml-2'>Limpiar filtros</span>
                  </button>
                </th>
              </tr>
            </thead>
          </table>
        </div>    
        <div className='py-2'>
          <div className='w-full bg-white dark:bg-[#273142] rounded-2xl overflow-hidden'>
            <table className='w-full'>
              <thead className='bg-slate-200 dark:bg-[#313D4F] dark:text-white text-medium'>
                <tr>
                    <th className='px-2 py-4 text-left'>ID</th>
                    <th className='px-2 py-4 text-left'>Nombre</th>
                    <th className='px-2 py-4 text-left'>Dirección</th>
                    <th className='px-2 py-4 text-left'>Fecha</th>
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

                    const fechaVenta = new Date(venta.fecha_venta).toLocaleDateString();

                    return(
                      <tr className='border-gray-200 border-y'>
                        <td className='px-2 py-4 text-center font-semibold'>{index + 1}</td>
                        <td className='px-2 py-4'>{venta.usuario.nombre}</td>
                        <td className='px-2 py-4'>{venta.usuario.direccion.colonia}, {venta.usuario.direccion.ciudad}, {venta.usuario.direccion.estado}, {venta.usuario.direccion.codigo_postal}</td>
                        <td className='px-2 py-4'>{fechaVenta}</td>
                        <td className='px-2 py-4'>{venta.producto.nombre_producto}</td>
                        <td className='px-2 py-4'><span className={`rounded-md ${estadoClass}`}>{venta.estado_venta}</span></td>
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
