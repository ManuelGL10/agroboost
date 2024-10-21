import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IconPlus } from '@tabler/icons-react';
import NewCultivo from '../../img/NewCultivo'
import maiz from '../../img/Maiz.jpeg'
import frambuesa from '../../img/pexels-andre-altergott-6889551.jpg'

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

    const cosechaDate = (dateString) => {
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const date = new Date(dateString);
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        return `${day < 10 ? '0' + day : day} de ${months[monthIndex]} de ${year}`;
    };
    
    return (
        <div className='bg-background p-4'>
            {cultivos.length === 0 ? (
                <div className='h-screen py-20'>
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
                                <Link to='/cultivo' className='bg-custom-color_logo py-3 px-6 rounded-lg text-white font-semibold'>
                                    Agregar Cultivo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='flex mt-20'>
                        <h1 className='text-3xl font-semibold dark:text-white'>Cultivo</h1>
                        <Link to='/cultivo' className='bg-custom-color_logo lg:py-3 lg:px-6 md:py-3 md:px-6 p-2 lg:rounded-lg md:rounded-lg rounded-full text-white font-semibold ml-auto'>
                            <p className="lg:block md:block hidden">Agregar Cultivo</p>
                            {/* Ícono visible solo en pantallas sm */}
                            <IconPlus className="lg:hidden md:hidden visible" size={24} />
                        </Link>                    
                    </div>
                    <div className='py-6'>
                        <div className='w-width-full p-4 bg-white rounded-2xl overflow-hidden grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
                            {cultivos.map(cultivo => {
                                const imagenCultivo = cultivo.tipo_cultivo === 'Maíz' ? maiz : frambuesa;
                                return(
                                    <div className='flex flex-col p-4 rounded-xl border-2 border-gray-300'>
                                        <div className='w-width-full relative'>
                                            <img src={imagenCultivo} alt={cultivo.tipo_cultivo} className='filter brightness-50 rounded-xl z-0 relative' />                                        
                                            <div className='absolute top-0 p-2 w-width-full grid grid-cols-2 text-white text-lg'>
                                                <span className='font-semibold'>{cultivo.tipo_cultivo}</span>
                                                <span className='text-end'>{cultivo.medidas_siembra} m²</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col mt-2 text-lg'>
                                            <span>Programa de riego: {cultivo.programa_riego}</span>
                                            <span>Técnicas de polinización: {cultivo.tecnica_polinizacion}</span>
                                            <span>Se prevé que la fecha estimada de cosecha es del <span className='text-green-500 font-medium'>{cosechaDate(cultivo.fecha_prevista)}</span></span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CropUser;