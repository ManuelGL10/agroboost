import React, { useState, useEffect, useContext } from 'react';
import { IconTrash, IconEdit, IconSearch } from '@tabler/icons-react';
import regar from '../../img/pexels-fox-750836.jpg';
import sensor from '../../img/sensor.jpeg';
import nutriente from '../../img/nutriente.jpeg';
import GetProductos from '../request/GetProductos';
import ProductModal from '../Modals/ProductModal';
import { DarkModeContext } from '../../context/DarkModeContext';

const MainProduct = () => {
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

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
    <div className={`${darkMode && "dark"}`}>
      <div className='bg-background dark:bg-[#1B2431] lg:h-[100%] h-screen p-4'>
        <div className='flex mt-20'>
          <h1 className='text-3xl font-semibold dark:text-white'>Productos</h1>
        </div>
        <div className='py-6'>
          <div className='w-full bg-white dark:bg-[#273142] rounded-2xl overflow-hidden'>
            <table className='w-width-full'>
              <thead className='bg-slate-200 dark:bg-[#313D4F] dark:text-white text-medium text-sm lg:text-base'>
                <tr>
                  <th className='px-4 py-4 text-center'>Imagen</th>
                  <th className='px-4 py-4 text-left'>Nombre</th>
                  <th className='px-4 py-4 text-left'>Precio</th>
                  <th className='px-4 py-4 text-left lg:table-cell md:table-cell hidden'>Disponible</th>
                  <th className='px-4 py-4 text-left'>Acción</th>
                </tr>
              </thead>
              <tbody className='dark:text-gray-300'>
                {productos.map((producto, index) => (
                  <tr key={producto._id} className='border-gray-200 dark:border-gray-600 border-y text-sm lg:text-base'>
                    <td className='px-2 py-4'><img className='lg:size-32 md:size-24 size-16 mx-auto rounded-xl' src={nutriente} alt='nutriente' /></td>
                    <td className='px-2 py-4'>{producto.nombre_producto}</td>
                    <td className='px-2 py-4'>${producto.precio}</td>
                    <td className='px-2 py-4 lg:table-cell md:table-cell hidden'>{producto.stock}</td>
                    <td className='px-2 py-4'>
                      <div className='flex justify-around p-2 rounded-lg bg-gray-50 dark:bg-[#323D4E] border border-gray-300 dark:border-gray-600'>
                        <button type='button' onClick={() => handleEditClick(producto)}>
                          <IconEdit  className='text-gray-500 dark:text-gray-300 lg:size-6 size-4 md:size-6'/>
                        </button>
                        <span className='mx-2 text-gray-300 font-semibold'>|</span>
                        <IconTrash className='text-[#D33363] lg:size-6 size-4 md:size-6'/>
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
    </div>
  );
};

export default MainProduct;
