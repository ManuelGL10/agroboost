import React, { useState, useEffect } from 'react';
import { IconRestore } from '@tabler/icons-react';
import GetVentas from '../request/GetVentas'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MainVenta = () => {
  const [ventas, setVentas] = useState([]);
  const [filtroFecha, setFiltroFecha] = useState('');
  const [filtroProducto, setFiltroProducto] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ventasData = await GetVentas();
        setVentas(ventasData);
      } catch (error) {
        console.error('Error al obtener los datos de los usuarios:', error);
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

  return (
    <div className='bg-background ml-[20%] p-4 h-screen'>
      <div className='flex mt-20'>
        <h1 className='text-3xl font-semibold'>Ventas</h1>
      </div> 
      <div className='py-4'>
        <table className='bg-white w-full text-sm'>
          <thead>
            <tr>
              <th className='border border-gray-200 py-2'>Filtrar por:</th>
              <th className='border border-gray-200 py-2 px-1'>
                <div className='flex'>
                  <span>Fecha:</span>
                  <input type='date' value={filtroFecha || ''} onChange={(e) => setFiltroFecha(e.target.value)} className='w-full ml-2'/>
                </div>
              </th>
              <th className='border border-gray-200 py-2'>
                <select value={filtroProducto} onChange={(e) => setFiltroProducto(e.target.value)} className='w-full'>
                  <option value=''>Producto</option>
                  <option>Sensor de Humedad</option>
                  <option>Sensor de Temperatura</option>
                  <option>Sensor de Nutrientes</option>
                </select>
              </th>
              <th className='border border-gray-200 py-2'>
                <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)} className='w-full'>
                  <option value=''>Estado</option>
                  <option>Completado</option>
                  <option>Rechazado</option>
                  <option>Pendiente</option>
                </select>
              </th>
              <th className='border border-gray-200 py-2'>
                <button onClick={handleLimpiarFiltros} className='flex items-center w-full justify-center text-[#D33363]'>
                  <IconRestore/>
                  <span className='ml-2'>Limpiar filtros</span>
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </div>    
      <div className='py-4'>
        <div className='w-full bg-white rounded-2xl overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-white text-medium'>
              <tr>
                <th className='px-2 py-4 text-left'>ID</th>
                <th className='px-2 py-4 text-left'>Nombre</th>
                <th className='px-2 py-4 text-left'>Dirección</th>
                <th className='px-2 py-4 text-left'>Fecha</th>
                <th className='px-2 py-4 text-left'>Producto</th>
                <th className='px-2 py-4 text-left'>Estado</th>
              </tr>
            </thead>
            <tbody>
              {filtrarVentas().map((venta, index) => {
                let estadoClass = '';
                switch (venta.estado_venta) {
                  case 'Completado':
                    estadoClass = 'px-3 py-1 bg-green-300 bg-opacity-35 text-[#2F9B5D] font-bold';
                    break;
                  case 'Rechazado':
                    estadoClass = 'px-4 py-1 bg-red-300 bg-opacity-35 text-[#D33363] font-bold';
                    break;
                  case 'Pendiente':
                    estadoClass = 'px-5 py-1 bg-yellow-200 bg-opacity-35 text-[#ffc131] font-bold';
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
    </div>
  );
};

export default MainVenta;
