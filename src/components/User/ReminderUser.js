import React, { useState } from "react";
import { IconBug } from '@tabler/icons-react';

const ReminderUser = () => {
    const [reminderActive1, setReminderActive1] = useState(false);
    const [reminderActive2, setReminderActive2] = useState(false);

    const toggleReminder1 = () => {
        setReminderActive1(!reminderActive1);
    };

    const toggleReminder2 = () => {
        setReminderActive2(!reminderActive2);
    };

    return (
        <div className='bg-background ml-[20%] p-4 h-screen'>
            <div className='mt-20 mb-6'>
                <h1 className='text-3xl font-semibold mt-20'>Recordatorios</h1>
                <div className='flex flex-wrap justify-evenly'>
                    <div className={`flex items-center rounded-lg border border-custom-D9D9D9 border-2 flex mt-5 w-[35%] h-40 mr-5 ml-2 relative ${reminderActive1 ? 'bg-white border-green-500' : 'bg-gray-200 border-gray-500'}`}>
                        <div className='bg-[#E6E6E7] w-[35%] h-[90%] ml-3 rounded-lg flex items-center'>
                            <IconBug className='ml-6' size={90} stroke={2}/>
                        </div>
                        <div className="flex flex-col">
                            <h2 className='text-[#4D7A7D] text-lg text-boad ml-5  w-[150px]'>Aplicar pesticidas</h2>
                            <h2 className='text-[#203651] text-lg text-boad ml-5  w-[150px]'>Lun, Vie</h2>
                            <h2 className='text-[#203651] text-lg text-boad ml-5 w-[150px]'>09:00 am</h2>
                        </div>
                        <button 
                            className={`absolute top-0 right-0 mr-4 mt-4 w-14 h-8 rounded-full p-1 ${reminderActive1 ? 'bg-green-500' : 'bg-gray-300'}`}
                            onClick={toggleReminder1}
                        >
                            <div className={`w-6 h-6 bg-white rounded-full shadow-md transform ${reminderActive1 ? 'translate-x-6' : 'translate-x-0'} transition-transform`}></div>
                        </button>
                    </div>
                    <div className={`flex items-center rounded-lg border border-custom-D9D9D9 border-2 flex mt-5 w-[35%] h-40 mr-2 ml-2 relative ${reminderActive2 ? 'bg-white border-green-500' : 'bg-gray-200 border-gray-500'}`}>
                        <div className='bg-[#E6E6E7] w-[35%] h-[90%] ml-3 rounded-lg flex items-center'>
                            <IconBug className='ml-6' size={90} stroke={2}/>
                        </div>
                        <div className="flex flex-col">
                            <h2 className='text-[#4D7A7D] text-lg text-boad ml-5  w-[150px]'>Aplicar pesticidas</h2>
                            <h2 className='text-[#203651] text-lg text-boad ml-5  w-[150px]'>Lun, Vie</h2>
                            <h2 className='text-[#203651] text-lg text-boad ml-5 w-[150px]'>09:00 am</h2>
                        </div>
                        <button 
                            className={`absolute top-0 right-0 mr-4 mt-4 w-14 h-8 rounded-full p-1 ${reminderActive2 ? 'bg-green-500' : 'bg-gray-300'}`}
                            onClick={toggleReminder2}
                        >
                            <div className={`w-6 h-6 bg-white rounded-full shadow-md transform ${reminderActive2 ? 'translate-x-6' : 'translate-x-0'} transition-transform`}></div>
                        </button>
                    </div>
                    <div className={`flex items-center rounded-lg border border-custom-D9D9D9 border-2 flex mt-5 w-[35%] h-40 mr-2 ml-2 relative ${reminderActive2 ? 'bg-white border-green-500' : 'bg-gray-200 border-gray-500'}`}>
                        <div className='bg-[#E6E6E7] w-[35%] h-[90%] ml-3 rounded-lg flex items-center'>
                            <IconBug className='ml-6' size={90} stroke={2}/>
                        </div>
                        <div className="flex flex-col">
                            <h2 className='text-[#4D7A7D] text-lg text-boad ml-5  w-[150px]'>Aplicar pesticidas</h2>
                            <h2 className='text-[#203651] text-lg text-boad ml-5  w-[150px]'>Lun, Vie</h2>
                            <h2 className='text-[#203651] text-lg text-boad ml-5 w-[150px]'>09:00 am</h2>
                        </div>
                        <button 
                            className={`absolute top-0 right-0 mr-4 mt-4 w-14 h-8 rounded-full p-1 ${reminderActive2 ? 'bg-green-500' : 'bg-gray-300'}`}
                            onClick={toggleReminder2}
                        >
                            <div className={`w-6 h-6 bg-white rounded-full shadow-md transform ${reminderActive2 ? 'translate-x-6' : 'translate-x-0'} transition-transform`}></div>
                        </button>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default ReminderUser;
