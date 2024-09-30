import React, { useState, useEffect, useContext } from 'react';
import { IconX } from '@tabler/icons-react';
import { UpdateProduct } from '../request/UpdateProduct';
import { DarkModeContext } from '../../context/DarkModeContext';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [ nombre, setNombre ] = useState('')
  const [ precio, setPrecio ] = useState('')
  const [ stock, setStock ] = useState('')
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    setNombre(product.nombre_producto || '');
    setPrecio(product.precio || '');
    setStock(product.stock || '');
  }, [product]);

  console.log(product)

  const handleSubmit = async (e) => {
    e.preventDefault();
        try {
            const data = await UpdateProduct({
              id: product._id,
              nombre_producto: nombre,
              precio: precio,
              stock: stock
            });
            console.log("Datos actualizados")
            onClose()
          } catch (error) {
            console.error('Error al actualizar los datos:', error.message);
        }
    };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-white dark:bg-[#273142] px-4 py-6 rounded-xl z-10 lg:max-w-md md:max-w-md w-width-full m-4">
          <div className='flex w-full justify-end'>
            <button onClick={onClose}>
              <IconX size={28} className='dark:text-white'/>
            </button>
          </div>
          <h2 className="text-2xl font-semibold w-full dark:text-white">Editar Producto</h2>
          <form className='py-2 w-full' onSubmit={handleSubmit}>
            <div className='dark:text-gray-300'>
              <div className='text-lg py-2 flex flex-col'>
                <p>Nombre:</p>
                <input 
                className='mt-2 border border-gray-300 dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100 rounded-lg py-1 px-1'
                value={nombre}
                onChange={e => setNombre(e.target.value)}/>
              </div>
              <div className='grid grid-cols-2 gap-x-4'>
                <div className='text-lg py-2 flex flex-col'>
                  <p>Precio:</p>
                  <input 
                  className='mt-2 border border-gray-300 dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100 rounded-lg py-1 px-1'
                  value={precio}
                  onChange={e => setPrecio(e.target.value)}/>
                </div>
                <div className='text-lg py-2 flex flex-col'>
                  <p>Disponibles:</p>
                  <input 
                  className='mt-2 border border-gray-300 dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100 rounded-lg py-1 px-1'
                  value={stock}
                  onChange={e => setStock(e.target.value)}/>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center mt-4'>
              <button type='submit' className="px-4 py-2 w-width-full bg-custom-color_logo text-white rounded-md font-semibold">Actualizar</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
