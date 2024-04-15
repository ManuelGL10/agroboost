import React, { useState, useEffect } from "react";
import Sensor from '../../img/sensor.jpeg';
import ModalEditar from '../User/ModalEditar'
import ModalEliminar from '../User/ModalEliminar'
import { useParams } from 'react-router-dom';
import { NewDispositivo } from "../../img/NewDispositivo";

const DeviceUser = () => {
    const [modalEditarIsOpen, setModalEditarIsOpen] = useState(false);
    const [modalEliminarIsOpen, setModalEliminarIsOpen] = useState(false);
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

    const opcionesCultivo = ['Tomate', 'Papa', 'Cebolla', 'Zanahoria']; // Añade más opciones según sea necesario

    console.log(dispositivos)

    return (
        <div className='bg-background ml-[20%] p-4 h-screen'>
            <div className='mb-6 h-full py-20'>
                <h1 className='text-3xl font-semibold'>Dispositivos</h1>
                {dispositivos.length === 0 ? (
                    <div className='mt-6 h-full flex justify-center items-center px-12 bg-white rounded-xl'>
                        <div className='grid grid-cols-3 gap-x-6'>
                            <div className='flex items-center justify-center'>
                                <NewDispositivo/>
                            </div>
                            <div className='items-center justify-center flex flex-col col-span-2'>
                                <h1 className='text-2xl font-medium'>¡Registra tu primer dispositivo para empezar!</h1>
                                <span className='text-justify text-lg text-gray-600 my-4'>Parece que aún no has registrado ningún dispositivo. Para empezar a disfrutar de todas las funciones de nuestra plataforma, te invitamos a registrar tu primer dispositivo. Una vez registrado, podrás controlar y monitorear tus dispositivos de forma remota, recibir notificaciones importantes y mucho más.</span>
                                <button className='bg-custom-color_logo py-3 px-6 rounded-lg text-white font-semibold'>
                                    Agregar Dispositivo
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        {dispositivos.map((dispositivo, index) => (
                            <div key={index} className='bg-white grid grid-cols-3 gap-x-2 items-center rounded-xl border-custom-D9D9D9 border-2 py-2 px-3'>
                                <img src={Sensor} alt='Sensor' className="w-36 h-36 rounded-lg" />
                                <div className='grid gap-y-3 col-span-2 h-full'>
                                    <div className='flex items-center w-full'>
                                        <h2 className='text-[#4D7A7D] text-lg mr-2'>Sensor:</h2>
                                        <input
                                            type="text"
                                            value={dispositivo.nombre_dispositivo}
                                            className='text-custom-204E51 text-lg text-semiboad border border-gray-300 rounded-md px-1 py-1 w-full'
                                        />
                                    </div>
                                    <div className='flex items-center'>
                                        <h2 className='text-[#4D7A7D] text-lg mr-2'>Cultivo:</h2>
                                        <input
                                            type="text"
                                            value={dispositivo.id_cultivo.tipo_cultivo}
                                            className='text-custom-204E51 text-lg text-semiboad border border-gray-300 rounded-md px-1 py-1 w-full'
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
                )}
            </div>
            <ModalEditar isOpen={modalEditarIsOpen} onClose={() => setModalEditarIsOpen (false)} />
            <ModalEliminar isOpen={modalEliminarIsOpen} onClose={() => setModalEliminarIsOpen (false)} />
        </div>
    );
}

export default DeviceUser;
