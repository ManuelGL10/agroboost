import React, { useEffect, useState } from "react";
import { IconBug, IconPlus } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import NewReminder from "../../img/NewReminder";
import ReminderModal from "../Modals/ReminderModal";

const ReminderUser = () => {
    const [recordatorios, setRecordatorios] = useState([]);
    const { userId } = useParams();
    const [ modalAdd, setModalAdd ] = useState(false)

    useEffect(() => {
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        fetch(`${backendUrl}/recordatorio/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los datos de los recordatorios');
            }
            return response.json();
        })
        .then(data => setRecordatorios(data))
        .catch(error => console.error('Error al obtener los recordatorios:', error));
    }, [userId]);

    const formatTime = (timeString) => {
        const time = new Date(timeString);
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const amPm = hours >= 12 ? 'p.m.' : 'a.m.';
        const formattedHours = hours % 12 || 12;
        return `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${amPm}`;
    };

    const formatDays = (daysArray) => {
        const abbreviatedDays = daysArray.map(day => day.substr(0, 3));
        return abbreviatedDays.join(', ');
    };

    const toggleReminder = (index) => {
        const updatedRecordatorios = [...recordatorios];
        updatedRecordatorios[index].activo = !updatedRecordatorios[index].activo;
        setRecordatorios(updatedRecordatorios);

        // Actualizar el estado en la base de datos
        fetch(`http://localhost:4000/recordatorio/${recordatorios[index]._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ activo: updatedRecordatorios[index].activo }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al actualizar el estado del recordatorio');
            }
        })
        .catch(error => console.error('Error al actualizar el estado del recordatorio:', error));
    };

    const handleAddModal = () => {
        setModalAdd(!modalAdd)
    }

    return (
        <div className='bg-background p-4 h-height-screen'>
            {recordatorios.length === 0 ? (
                <div className='h-full py-20'>
                    <h1 className='text-3xl font-semibold'>Recordatorios</h1>
                    <div className='mt-6 h-full flex justify-center items-center px-12 bg-white rounded-xl'>
                        <div className='grid grid-cols-3 gap-x-6'>
                            <div className='flex items-center justify-center'>
                                <NewReminder/>
                            </div>
                        <div className='items-center justify-center flex flex-col col-span-2'>
                            <h1 className='text-2xl font-medium'>¡Registra un Nuevo Recordatorio!</h1>
                            <span className='text-justify text-lg text-gray-600 my-4'>Registra un nuevo recordatorio para mantenerte al tanto de tus pendientes y compromisos. Con un simple clic, asegúrate de no perder de vista lo que es importante para ti.</span>
                            <button className='bg-custom-color_logo py-3 px-6 rounded-lg text-white font-semibold'>
                                Crear Recordatorio
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='mt-20'>
                    <div className='flex'>
                        <h1 className='lg:text-3xl text-2xl font-semibold dark:text-white'>Recordatorios</h1>
                        <button onClick={handleAddModal} className='bg-custom-color_logo lg:py-3 lg:px-6 md:py-3 md:px-6 p-2 lg:rounded-lg md:rounded-lg rounded-full text-white font-semibold ml-auto'>
                            <p className="lg:block md:block hidden">Agregar Cultivo</p>
                            {/* Ícono visible solo en pantallas sm */}
                            <IconPlus className="lg:hidden md:hidden visible" size={24} />
                        </button>                   
                    </div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-6'>
                        {recordatorios.map((recordatorio, index) => (
                            <div key={index} className={`flex rounded-lg p-4 border-custom-D9D9D9 border-2 ${recordatorio.activo ? 'bg-white border-green-500' : 'bg-gray-200 border-gray-500'}`}>
                                <div className={`rounded-lg flex items-center justify-center ${recordatorio.activo ? 'bg-white' : 'bg-gray-200'}`}>
                                    <IconBug className="lg:size-20 md:size-20 size-16" stroke={2}/>
                                </div>
                                <div className="flex flex-col w-width-full ml-2">
                                    <span className='lg:text-xl text-lg font-semibold'>{recordatorio.nombre_recordatorio}</span>
                                    <span className='text-gray-600 lg:text-lg text-base'>{formatDays(recordatorio.dias_recordatorio)}</span>
                                    <span className='lg:text-xl text-lg font-medium'>{formatTime(recordatorio.hora_recordatorio)}</span>
                                </div>
                                <div className="flex justify-end">
                                    <button 
                                        className={`w-[52px] h-[28px] rounded-full p-1 ${recordatorio.activo ? 'bg-green-500' : 'bg-gray-300'}`}
                                        onClick={() => toggleReminder(index)}
                                    >
                                        <div className={`size-5 bg-white rounded-full shadow-md transform ${recordatorio.activo ? 'translate-x-6' : 'translate-x-0'} transition-transform`}></div>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {modalAdd && (
                <ReminderModal isOpen={modalAdd} onClose={handleAddModal}/>
            )}
        </div>  
    );
};

export default ReminderUser;
