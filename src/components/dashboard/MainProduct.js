import React, { useState, useEffect } from 'react';
import { IconTrash, IconEdit, IconSearch } from '@tabler/icons-react';
import regar from '../../img/pexels-fox-750836.jpg';
import sensor from '../../img/sensor.jpeg';
import nutriente from '../../img/nutriente.jpeg';
import GetProductos from '../request/GetProductos';
import ProductModal from '../Modals/ProductModal';

const MainProduct = () => {
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productoData = await GetProductos();
        setProductos(productoData);
      } catch (error) {
        console.error('Error al obtener los datos de los usuarios:', error);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className='bg-background ml-[20%] p-4'>
      <div className='flex mt-20'>
        <h1 className='text-3xl font-semibold'>Productos</h1>
      </div>
      <div className='py-6'>
        <div className='w-full bg-white rounded-2xl overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-white text-medium'>
              <tr>
                <th className='px-4 py-4 text-left'>ID</th>
                <th className='px-4 py-4 text-left'>Imagen</th>
                <th className='px-4 py-4 text-left'>Nombre</th>
                <th className='px-4 py-4 text-left'>Precio</th>
                <th className='px-4 py-4 text-left'>Disponible</th>
                <th className='px-4 py-4 text-left'>Acción</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, index) => (
                <tr key={producto._id} className='border-gray-200 border-y'>
                  <td className='px-2 py-4 text-center font-medium'>{index + 1}</td>
                  <td className='px-2 py-4'><img className='w-24 mx-auto rounded-xl' src={nutriente} alt='nutriente' /></td>
                  <td className='px-2 py-4'>{producto.nombre_producto}</td>
                  <td className='px-2 py-4'>${producto.precio}</td>
                  <td className='px-2 py-4'>{producto.stock}</td>
                  <td className='px-2 py-4'>
                    <div className='flex justify-around p-2 rounded-lg bg-gray-50 border border-gray-300'>
                      <button type='button' onClick={() => handleEditClick(producto)} ><IconEdit className='text-gray-500' /></button>
                      <span className='mx-2 text-gray-300 font-semibold'>|</span>
                      <IconTrash className='text-[#D33363]' />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default MainProduct;
