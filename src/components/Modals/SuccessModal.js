import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { IconCheck } from '@tabler/icons-react';

const SuccessModal = ({ isOpen, onClose, title, mensaje }) => {
    const { darkMode } = useContext(DarkModeContext);
  
    return (
        <div className={`${darkMode && "dark"}`}>
            <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="bg-white dark:bg-[#273142] px-4 py-6 rounded-xl z-10 w-[45%]">
                    <div className='flex flex-col w-full justify-end p-2'>
                        <div className='flex items-center'>
                            <div className='h-8 w-8 rounded-full bg-green-500 flex items-center justify-center'>
                                <IconCheck color='white'/>
                            </div>
                            <div>
                                <span className='ml-2 text-xl font-semibold dark:text-white'>{title}</span>
                            </div>  
                        </div>
                        <div className='py-6 text-lg text-gray-600 dark:text-gray-400'>
                            <span>{mensaje}</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-end'>
                        <button onClick={onClose} className='py-2 px-6 font-bold bg-green-500 text-white rounded-md'>Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessModal;
