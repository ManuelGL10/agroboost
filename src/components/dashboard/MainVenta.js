import React, { useState, useEffect } from 'react';
import { IconSearch } from '@tabler/icons-react';
import GetVentas from '../request/GetVentas'

const MainVenta = () => {
  const [ ventas, setVentas ] = useState([])
  
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

  return (
    <div className='bg-background ml-[20%] p-4 h-screen'>
      <div className='flex mt-20'>
        <h1 className='text-3xl font-semibold'>Ventas</h1>
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
                <th className='px-4 py-4 text-left'>Nombre</th>
                <th className='px-4 py-4 text-left'>Dirección</th>
                <th className='px-4 py-4 text-left'>Fecha</th>
                <th className='px-4 py-4 text-left'>Producto</th>
                <th className='px-4 py-4 text-left'>Estado</th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((venta, index) => {
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
                    <td className='px-4 py-4 text-center'>{index + 1}</td>
                    <td className='px-4 py-4'>{venta.usuario.nombre}</td>
                    <td className='px-4 py-4'>{venta.usuario.direccion.colonia}, {venta.usuario.direccion.ciudad}, {venta.usuario.direccion.estado}, {venta.usuario.direccion.codigo_postal}</td>
                    <td className='px-4 py-4'>{fechaVenta}</td>
                    <td className='px-4 py-4'>{venta.producto.nombre_producto}</td>
                    <td className='px-4 py-4'><span className={`rounded-md ${estadoClass}`}>{venta.estado_venta}</span></td>
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
