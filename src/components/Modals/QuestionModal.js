import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/DarkModeContext';
import { IconQuestionMark } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const QuestionModal = ({ isOpen, onClose, title, mensaje }) => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`${darkMode && "dark"}`}>
        <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white dark:bg-[#273142] px-4 py-6 rounded-xl z-10 lg:max-w-md md:max-w-md w-width-full m-4">
                <div className='flex flex-col w-full justify-end'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='size-10 rounded-full bg-blue-400 flex items-center justify-center'>
                            <IconQuestionMark color='white'/>
                        </div>
                        <span className='mt-2 text-xl font-semibold dark:text-white'>{title}</span>
                    </div>
                    <div className='py-6 text-lg text-gray-600 dark:text-gray-400 text-center'>
                        <span>{mensaje}</span>
                    </div>
                </div>
                <div className='w-full grid grid-cols-2 gap-x-4'>
                    <button onClick={onClose} className='border-2 border-gray-500 py-2 font-bold text-gray-500 dark:border-gray-300 dark:text-gray-300 rounded-md'>Cancelar</button>
                    <Link to='/login' className='bg-blue-400 py-2 font-bold text-white text-center rounded-md'>Aceptar</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuestionModal