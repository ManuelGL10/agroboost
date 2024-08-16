import React, { useEffect, useState } from "react";
import { IconBug } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import NewReminder from "../../img/NewReminder";
import ReminderModal from "../Modals/ReminderModal";

const ReminderUser = () => {
    const [recordatorios, setRecordatorios] = useState([]);
    const { userId } = useParams();
    const [ modalAdd, setModalAdd ] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:4000/recordatorio/${userId}`)
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
        <div className='bg-background ml-[20%] p-4 h-screen'>
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
                        <h1 className='text-3xl font-semibold dark:text-white'>Recordatorios</h1>
                        <button onClick={handleAddModal} className='bg-custom-color_logo py-3 px-6 rounded-lg text-white font-semibold ml-auto'>
                            Crear Recordatorio                            
                        </button>                    
                    </div>
                    <div className='grid grid-cols-2 gap-y-4 gap-x-6 mt-6'>
                        {recordatorios.map((recordatorio, index) => (
                            <div key={index} className={`grid grid-cols-5 gap-x-2 rounded-lg p-4 border-custom-D9D9D9 border-2 ${recordatorio.activo ? 'bg-white border-green-500' : 'bg-gray-200 border-gray-500'}`}>
                                <div className={`rounded-lg flex items-center justify-center ${recordatorio.activo ? 'bg-white' : 'bg-gray-200'}`}>
                                    <IconBug size={90} stroke={2}/>
                                </div>
                                <div className="flex flex-col col-span-3 w-full h-full">
                                    <span className='text-xl font-semibold'>{recordatorio.nombre_recordatorio}</span>
                                    <span className='text-gray-600 text-lg'>{formatDays(recordatorio.dias_recordatorio)}</span>
                                    <span className='text-lg font-medium'>{formatTime(recordatorio.hora_recordatorio)}</span>
                                </div>
                                <div className="flex justify-end">
                                    <button 
                                        className={`w-14 h-8 rounded-full p-1 ${recordatorio.activo ? 'bg-green-500' : 'bg-gray-300'}`}
                                        onClick={() => toggleReminder(index)}
                                    >
                                        <div className={`w-6 h-6 bg-white rounded-full shadow-md transform ${recordatorio.activo ? 'translate-x-6' : 'translate-x-0'} transition-transform`}></div>
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
