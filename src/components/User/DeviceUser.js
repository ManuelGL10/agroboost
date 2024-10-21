import React, { useState, useEffect } from "react";
import Sensor from '../../img/sensor.jpeg';
import ModalEditar from '../User/ModalEditar'
import ModalEliminar from '../User/ModalEliminar'
import { useParams } from 'react-router-dom';
import { NewDispositivo } from "../../img/NewDispositivo";
import DeviceModal from "../Modals/DeviceModal";
import { IconPlus} from '@tabler/icons-react';

const DeviceUser = () => {
    const [modalEditarIsOpen, setModalEditarIsOpen] = useState(false);
    const [modalEliminarIsOpen, setModalEliminarIsOpen] = useState(false);
    const [ modalAdd, setModalAdd ] = useState(false)
    const [ dispositivos, setDispositivos ] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/dispositivo/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los datos de los dispositivos');
            }
            return response.json();
        })
        .then(data => setDispositivos(data))
        .catch(error => console.error('Error al obtener los dispositivos:', error));
    }, []);

    const abrirModalEditar = () => {
        setModalEditarIsOpen(true);
    };

    const abrirModalEliminar = () => {
        setModalEliminarIsOpen(true);
    };

    const handleAddModal = () => {
        setModalAdd(!modalAdd)
    }

    return (
        <div className='bg-background p-4'>
            {dispositivos.length === 0 ? (
                <div className='mb-6 py-20'>
                    <h1 className='text-3xl font-semibold'>Dispositivos</h1>
                    <div className='mt-6 h-full flex justify-center items-center px-12 bg-white rounded-xl'>
                        <div className='grid grid-cols-3 gap-x-6'>
                            <div className='flex items-center justify-center'>
                                <NewDispositivo/>
                            </div>
                            <div className='items-center justify-center flex flex-col col-span-2'>
                                <h1 className='text-2xl font-medium'>¡Registra tu primer dispositivo para empezar!</h1>
                                <span className='text-justify text-lg text-gray-600 my-4'>Parece que aún no has registrado ningún dispositivo. Para empezar a disfrutar de todas las funciones de nuestra plataforma, te invitamos a registrar tu primer dispositivo. Una vez registrado, podrás controlar y monitorear tus dispositivos de forma remota, recibir notificaciones importantes y mucho más.</span>
                                <button onClick={handleAddModal} className='bg-custom-color_logo py-3 px-6 rounded-lg text-white font-semibold'>
                                    Agregar Dispositivo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='mt-20'>
                    <div className='flex'>
                        <h1 className='lg:text-3xl md:text-3xl text-2xl font-semibold dark:text-white'>Dispositivos</h1>
                        <button onClick={handleAddModal} className='bg-custom-color_logo lg:py-3 lg:px-6 md:py-3 md:px-6 p-2 lg:rounded-lg md:rounded-lg rounded-full text-white font-semibold ml-auto'>
                            {/* Texto visible solo en pantallas lg y md */}
                            <p className="lg:block md:block hidden">Agregar Dispositivo</p>
                            {/* Ícono visible solo en pantallas sm */}
                            <IconPlus className="lg:hidden md:hidden visible" size={24} />
                        </button>                 
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                        {dispositivos.map((dispositivo, index) => (
                            <div key={index} className='bg-white flex items-center rounded-xl border-custom-D9D9D9 border-2 p-2 w-width-full'>
                                <img src={Sensor} alt='Sensor' className="lg:size-36 size-32 mr-2 rounded-lg" />
                                <div className='grid gap-y-3 col-span-2 w-width-full'>
                                    <div className='flex items-center w-width-full'>
                                        <h2 className='text-[#4D7A7D] lg:text-lg md:text-lg text-base mr-2'>Sensor:</h2>
                                        <input
                                            type="text"
                                            value={dispositivo.nombre_dispositivo}
                                            className='text-custom-204E51 lg:text-lg md:text-lg text-base text-semiboad border border-gray-300 rounded-md px-1 py-1 w-width-full'
                                        />
                                    </div>
                                    <div className='flex items-center'>
                                        <h2 className='text-[#4D7A7D] lg:text-lg md:text-lg text-base mr-2'>Cultivo:</h2>
                                        <input
                                            type="text"
                                            value={dispositivo.id_cultivo.tipo_cultivo}
                                            className='text-custom-204E51 lg:text-lg md:text-lg text-base text-semiboad border border-gray-300 rounded-md px-1 py-1 w-width-full'
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-4">
                                        <button onClick={abrirModalEditar} className="bg-custom-color_logo hover:bg-[#2F9B5D] text-white font-semibold py-2 rounded-lg">Editar</button>
                                        <button onClick={abrirModalEliminar} className="bg-[#D33363] hover:bg-red-700 text-white font-semibold rounded-lg py-2 ">Borrar</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
             )}
            <ModalEditar isOpen={modalEditarIsOpen} onClose={() => setModalEditarIsOpen (false)} />
            <ModalEliminar isOpen={modalEliminarIsOpen} onClose={() => setModalEliminarIsOpen (false)} />
            {modalAdd && (
                <DeviceModal isOpen={modalAdd} onClose={handleAddModal}/>
            )}
        </div>
    );
}

export default DeviceUser;
