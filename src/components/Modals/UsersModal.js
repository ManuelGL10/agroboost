import React, { useContext } from 'react';
import { IconX } from '@tabler/icons-react';
import { UpdateUser } from '../request/UpdateUser'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { DarkModeContext } from '../../context/DarkModeContext';

const ProductModal = ({ users, isOpen, onClose }) => {
    const { darkMode } = useContext(DarkModeContext);

    const validationSchema = Yup.object({
        nombre: Yup.string().required('Campo requerido'),
        apellido_paterno: Yup.string().required('Campo requerido'),
        apellido_materno: Yup.string().required('Campo requerido'),
        correo_electronico: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
        contrasena: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('Campo requerido')
    });

    const handleSubmit = async (values) => {
        const { nombre, apellido_paterno, apellido_materno, correo_electronico} = values
        try {
            await UpdateUser({
              id: users._id,
              nombre: nombre,
              apellido_paterno: apellido_paterno,
              apellido_materno: apellido_materno,
              correo_electronico: correo_electronico,
            });
            console.log("Datos actualizados")
            onClose()
            window.location.reload();
        } catch (error) {
            console.error('Error al actualizar los datos:', error.message);
        }
    };

  return (
    <div className={`${darkMode && "dark"}`}>
        <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white dark:bg-[#273142] px-4 py-6 rounded-xl z-10 lg:max-w-md md:max-w-md w-width-full m-4">
                <div className='flex w-full justify-end'>
                    <button onClick={onClose}>
                        <IconX size={28} className='dark:text-white'/>
                    </button>
                </div>
                <h2 className="text-2xl font-semibold w-full dark:text-white">Editar Usuario</h2>
                <Formik
                        enableReinitialize
                        initialValues={users ? {
                            nombre: users.nombre || '',
                            apellido_paterno: users.apellido_paterno || '',
                            apellido_materno: users.apellido_materno || '',
                            correo_electronico: users.correo_electronico || '',
                        } : {
                            nombre: '',
                            apellido_paterno: '',
                            apellido_materno: '',
                            correo_electronico: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className='flex flex-col'>
                            <div className='grid grid-cols-2 gap-x-8 gap-y-4 my-6 text-lg font-medium text-gray-600 dark:text-gray-300'>
                                <div className='flex flex-col order-1'>
                                    <span>Nombre</span>
                                    <Field 
                                        type='text' 
                                        id='nombre' 
                                        name='nombre' 
                                        className='border border-gray-300 bg-white dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100 p-2 rounded-md text-black mt-2' />
                                    <ErrorMessage name='nombre' component='div' className='text-red-500' />
                                </div>
                                <div className='flex flex-col order-1'>
                                    <span>Apellido Paterno</span>
                                    <Field 
                                        type='text' 
                                        id='apellido_paterno'
                                        name='apellido_paterno' 
                                        className='border border-gray-300 bg-white dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100 p-2 rounded-md text-black mt-2' 
                                    />
                                    <ErrorMessage name='apellido_paterno' component='div' className='text-red-500' />
                                </div>
                                <div className='flex flex-col order-1'>
                                    <span>Apellido Materno</span>
                                    <Field 
                                        type='text' 
                                        id='apellido_materno'
                                        name='apellido_materno' 
                                        className='border border-gray-300 bg-white dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100 p-2 rounded-md text-black mt-2' 
                                    />
                                    <ErrorMessage name='apellido_materno' component='div' className='text-red-500' />
                                </div>
                                <div className='flex flex-col order-1'>
                                    <span>Correo Electrónico</span>
                                    <Field 
                                        type='email' 
                                        id='correo_electronico'
                                        name='correo_electronico' 
                                        className='border border-gray-300 bg-white dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100 p-2 rounded-md text-black mt-2'
                                        disabled={true}
                                    />
                                    <ErrorMessage name='correo_electronico' component='div' className='text-red-500' />
                                </div>
                            </div>
                            <div className='flex justify-center items-center mt-4'>
                                <button type='submit' className="px-4 py-2 w-width-full bg-custom-color_logo text-white rounded-md font-semibold">Actualizar</button>
                            </div>
                        </Form>
                    </Formik>
            </div>
        </div>
    </div>
  );
};

export default ProductModal;
