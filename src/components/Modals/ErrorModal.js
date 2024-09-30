import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { IconExclamationMark } from '@tabler/icons-react';

const ErrorModal = ({ isOpen, onClose, title, mensaje }) => {
    const { darkMode } = useContext(DarkModeContext);
  
    return (
        <div className={`${darkMode && "dark"}`}>
            <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div className="bg-white dark:bg-[#273142] px-4 py-6 rounded-xl z-10 lg:max-w-md md:max-w-md w-width-full m-4">
                    <div className='flex flex-col w-full justify-end p-2'>
                        <div className='flex items-center'>
                            <div className='h-8 w-8 rounded-full bg-red-500 flex items-center justify-center'>
                                <IconExclamationMark color='white'/>
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
                        <button onClick={onClose} className='py-2 px-6 w-width-full font-bold bg-red-500 text-white rounded-md'>Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorModal;
