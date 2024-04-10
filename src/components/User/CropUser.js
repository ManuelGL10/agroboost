import React from 'react';
import { IconSearch, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom'; // Importar Link para la redirección

const CropUser = () => {
    return (
        <div className='bg-background ml-[20%] p-4 h-screen'>
            <div className='flex mt-20'>
                <h1 className='text-3xl font-semibold dark:text-white'>Cultivos</h1>
                <Link to='/' className='bg-custom-color_logo hover:bg-[#2F9B5D] text-white px-4 py-2 rounded-lg ml-auto mr-5'>Agregar Cultivo</Link>
            </div>
            <div className='py-6'>
                <div className='w-full bg-white rounded-2xl overflow-hidden'>
                    <table className='w-full'>
                        <thead className='bg-custom-color_logo text-medium'>
                            <tr>
                                <th className='px-2 py-4 text-left text-white'>ID</th>
                                <th className='px-2 py-4 text-left text-white'>Tipo de Cultivo</th>
                                <th className='px-2 py-4 text-left text-white'>Tipo de Riego</th>
                                <th className='px-2 py-4 text-left text-white'>Método de Fertilización</th> {/* Corregir ortografía */}
                                <th className='px-2 py-4 text-left text-white'>Superficie</th>
                            </tr>
                        </thead>
                        <tbody className='dark:text-gray-300'>
                            <tr className='border-gray-200 dark:border-gray-600 border-y'>
                                <td colSpan="6" className="text-center py-4">No se encontraron resultados</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex'>
                <div className='flex justify-around py-2 px-4 rounded-lg bg-gray-50 dark:bg-[#323D4E] border border-gray-300 ml-auto'>
                    <span className='mx-4 text-gray-300 font-semibold'>|</span>
                </div>
            </div>
        </div>
    );
};

export default CropUser;
