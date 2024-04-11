import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IconSearch } from '@tabler/icons-react';
import NewCultivo from '../../img/NewCultivo'

const CropUser = () => {
    const [cultivos, setCultivos] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/cultivos/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los datos del cultivo');
            }
            return response.json();
        })
        .then(data => setCultivos(data))
        .catch(error => console.error('Error al obtener los cultivos:', error));
    }, []);
    
    return (
        <div className='bg-background ml-[20%] p-4 h-screen'>
            {cultivos.length === 0 ? (
                <div className='h-full py-20'>
                    <div className=''>
                        <h1 className='text-3xl font-semibold dark:text-white'>Cultivos</h1>
                    </div>
                    <div className='mt-6 h-full flex justify-center items-center px-12 bg-white rounded-xl'>
                        <div className='grid grid-cols-3 gap-x-6'>
                            <div className='flex items-center justify-center'>
                                <NewCultivo/>
                            </div>
                            <div className='items-center justify-center flex flex-col col-span-2'>
                                <h1 className='text-2xl font-medium'>¡Empieza a cultivar tu propio camino!</h1>
                                <span className='text-justify text-lg text-gray-600 my-4'>Parece que aún no has registrado ningún cultivo. ¿Por qué no comienzas tu viaje agrícola ahora mismo? Registra tu primer cultivo y empieza a cultivar tus propios alimentos de manera sostenible y gratificante.</span>
                                <button className='bg-custom-color_logo py-3 px-6 rounded-lg text-white font-semibold'>
                                    Agregar Cultivo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
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
                                        <th className='px-2 py-4 text-left text-white'>Método de Fertilización</th>
                                        <th className='px-2 py-4 text-left text-white'>Superficie</th>
                                    </tr>
                                </thead>
                                <tbody className='dark:text-gray-300'>
                                    {cultivos.map(cultivo => (
                                        <tr key={cultivo._id} className='border-gray-200 dark:border-gray-600 border-y'>
                                            <td className='px-2 py-4'>{cultivo._id}</td>
                                            <td className='px-2 py-4'>{cultivo.tipoCultivo}</td>
                                            <td className='px-2 py-4'>{cultivo.tipoRiego}</td>
                                            <td className='px-2 py-4'>{cultivo.metodoFertilizacion}</td>
                                            <td className='px-2 py-4'>{cultivo.superficie}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex justify-around py-2 px-4 rounded-lg bg-gray-50 dark:bg-[#323D4E] border border-gray-300 ml-auto'>
                            <IconSearch size={18} className='text-[#9ca3af] ml-2' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CropUser;