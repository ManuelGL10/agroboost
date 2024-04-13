import React, { useState } from "react";
import Sensor from '../../img/sensor.jpeg';
import ModalEditar from '../User/ModalEditar'
import ModalEliminar from '../User/ModalEliminar'

const DeviceUser = () => {
    const [nombre, setNombre] = useState('Sensor temperatura');
    const [cultivo, setCultivo] = useState('Tomate');
    const [modalEditarIsOpen, setModalEditarIsOpen] = useState(false);
    const [modalEliminarIsOpen, setModalEliminarIsOpen] = useState(false);

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleCultivoChange = (event) => {
        setCultivo(event.target.value);
    };

    const abrirModalEditar = () => {
        setModalEditarIsOpen(true);
    };

    const abrirModalEliminar = () => {
        setModalEliminarIsOpen(true);
    };

    const opcionesCultivo = ['Tomate', 'Papa', 'Cebolla', 'Zanahoria']; // Añade más opciones según sea necesario

    return (
        <div className='bg-background ml-[20%] p-4 h-screen h-full'>
            <div className='mt-20 mb-6'>
                <h1 className='text-3xl font-semibold mt-20'>Dispositivos</h1>
                <div className="flex flex-wrap justify-between">
                    {[1, 2,3, 4].map((index) => (
                        <div key={index} className='bg-white flex items-center rounded-lg border border-custom-D9D9D9 border-2 flex mt-5 w-[45%] h-48 mr-5 ml-5'>
                            <img src={Sensor} alt='Sensor' className="w-40 h-40 rounded-lg ml-7" />
                            <div className='flex flex-col flex-grow'>
                                <div className='flex items-center'>
                                    <h2 className='text-[#4D7A7D] text-lg ml-5 w-[60px]'>Nombre:</h2>
                                    <input
                                        type="text"
                                        value={nombre}
                                        onChange={handleNombreChange}
                                        className='text-custom-204E51 text-lg text-semiboad ml-5 mt-1 border border-gray-300 rounded-md px-1 py-1'
                                    />
                                </div>
                                <div className='flex items-center mt-2'>
                                    <h2 className='text-[#4D7A7D] text-lg ml-5 w-[60px]'>Cultivo:</h2>
                                    <select
                                        value={cultivo}
                                        onChange={handleCultivoChange}
                                        className='text-custom-204E51 text-lg text-semiboad ml-5 mt-1 border border-gray-300 rounded-md px-1 py-1'
                                    >
                                        {opcionesCultivo.map((opcion, index) => (
                                            <option key={index} value={opcion}>{opcion}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mt-7 flex justify-center">
                                    <button onClick={abrirModalEditar} className="bg-custom-color_logo  hover:bg-[#2F9B5D]  text-white font-semibold py-2 px-8 rounded-lg mr-2">Editar</button>
                                    <button onClick={abrirModalEliminar} className="bg-[#D33363] hover:bg-red-700 text-white font-semibold rounded-lg py-2 px-8 ">Borrar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ModalEditar isOpen={modalEditarIsOpen} onClose={() => setModalEditarIsOpen (false)} />
            <ModalEliminar isOpen={modalEliminarIsOpen} onClose={() => setModalEliminarIsOpen (false)} />
        </div>
    );
}

export default DeviceUser;
