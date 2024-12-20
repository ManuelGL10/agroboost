import React, { useState, useContext } from 'react';
import { IconCameraUp } from '@tabler/icons-react';
import { UpdateUser } from '../request/UpdateUser';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { DarkModeContext } from '../../context/DarkModeContext';
import DeleteModal from '../Modals/DeleteModal';
import SuccessModal from '../Modals/SuccessModal';

const MainProfile = ({ userData }) => {
    const { darkMode } = useContext(DarkModeContext);
    const [ onClose, setIsOnClose] = useState(false)
    const [ onCloseS, setIsOnCloseS] = useState(false)
    const [ onCloseSE, setIsOnCloseSE] = useState(false)
    
    const validationSchema = Yup.object({
        nombre: Yup.string().required('Campo requerido'),
        apellido_paterno: Yup.string().required('Campo requerido'),
        apellido_materno: Yup.string().required('Campo requerido'),
        correo_electronico: Yup.string().email('Correo electrónico inválido').required('Campo requerido'),
        contrasena: Yup.string().min(8, 'La contraseña debe tener al menos 8 caracteres').required('Campo requerido')
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        const {nombre, apellido_paterno, apellido_materno, correo_electronico} = values
        setTimeout(async () => {
            try {
                await UpdateUser({
                    id: userData._id,
                    nombre: nombre,
                    apellido_paterno: apellido_paterno,
                    apellido_materno: apellido_materno,
                    correo_electronico: correo_electronico,
                });
                setIsOnCloseS(!onCloseS)
                console.log('Datos actualizados:');
            } catch (error) {
                console.error('Error al actualizar los datos:', error.message);
            }
            setSubmitting(false);
        }, 400);
    };

    const handleCloseModal = () => {
        setIsOnClose(!onClose);
    };

    const handleCloseModalS = () => {
        setIsOnCloseS(!onCloseS);
    };

    const handleCloseModalSE = () => {
        setIsOnCloseSE(!onCloseSE);
    };

    return (
        <div className={`${darkMode && "dark"}`}>
            <div className='bg-background dark:bg-[#1B2431] h-height-screen p-4'>
                <h1 className='lg:text-3xl text-2xl font-semibold mt-16 dark:text-white'>Perfil de Administrador</h1>
                <div className='py-6'>
                    <div className='w-full bg-white dark:bg-[#273142] rounded-2xl py-4 px-8'>
                        <div className='w-full flex flex-col items-center justify-center py-2'>
                            <div className='bg-gray-300 rounded-full lg:p-10 p-8'>
                                <IconCameraUp size={32} />
                            </div>
                            <button className='mt-4 lg:text-lg text-base font-medium py-1 px-3 lg:max-w-36 md:max-w-36 w-width-full rounded-lg bg-custom-color_logo text-white hover:bg-[#2F9B5D]'>
                                Cambiar foto
                            </button>
                        </div>
                        <Formik
                            enableReinitialize
                            initialValues={userData ? {
                                nombre: userData.nombre || '',
                                apellido_paterno: userData.apellido_paterno || '',
                                apellido_materno: userData.apellido_materno || '',
                                correo_electronico: userData.correo_electronico || '',
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
                                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 my-6 lg:text-lg text-base font-medium text-gray-600 dark:text-gray-300'>
                                    <div className='flex flex-col order-1'>
                                        <span>Nombre</span>
                                        <Field 
                                            type='text' 
                                            id='nombre' 
                                            name='nombre' 
                                            className='border border-gray-300 bg-background dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100 p-2 rounded-md text-black mt-2' />
                                        <ErrorMessage name='nombre' component='div' className='text-red-500' />
                                    </div>
                                    <div className='flex flex-col order-1'>
                                        <span>Apellido Paterno</span>
                                        <Field 
                                            type='text' 
                                            id='apellido_paterno'
                                            name='apellido_paterno' 
                                            className='border border-gray-300 bg-background dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100 p-2 rounded-md text-black mt-2' 
                                        />
                                        <ErrorMessage name='apellido_paterno' component='div' className='text-red-500' />
                                    </div>
                                    <div className='flex flex-col order-1'>
                                        <span>Apellido Materno</span>
                                        <Field 
                                            type='text' 
                                            id='apellido_materno'
                                            name='apellido_materno' 
                                            className='border border-gray-300 bg-background dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100 p-2 rounded-md text-black mt-2' 
                                        />
                                        <ErrorMessage name='apellido_materno' component='div' className='text-red-500' />
                                    </div>
                                    <div className='flex flex-col order-1'>
                                        <span>Correo Electrónico</span>
                                        <Field 
                                            type='email' 
                                            id='correo_electronico'
                                            name='correo_electronico' 
                                            className='border border-gray-300 bg-background dark:bg-[#323D4E] dark:border-gray-600 dark:text-slate-100 p-2 rounded-md text-black mt-2'
                                            disabled={true}
                                        />
                                        <ErrorMessage name='correo_electronico' component='div' className='text-red-500' />
                                    </div>
                                </div>
                                <div className='lg:justify-evenly grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-8 md:grid-cols-2 md:gap-x-8 py-4'>
                                    <button type='submit' className='lg:text-xl text-base font-semibold py-2 px-6 rounded-lg bg-custom-color_logo text-white hover:bg-[#2F9B5D]'>
                                        Actualizar Datos
                                    </button>
                                    <button type='button' onClick={handleCloseModal} className='lg:text-xl text-base font-semibold py-2 px-6 rounded-lg bg-red-500 text-white hover:bg-red-600'>
                                        Eliminar Cuenta
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            <DeleteModal 
                users={userData} 
                isOpen={onClose} 
                onClose={handleCloseModal}
                onSuccessModalOpen={handleCloseModalSE}
                title={"Eliminar Cuenta"}
                mensaje={"¿Está seguro de que desea eliminar su cuenta? Esta acción no puede deshacerse."}
            />
            <SuccessModal
                isOpen={onCloseS}
                onClose={handleCloseModalS}
                title={"Datos Actualizados"}
                mensaje={"Sus datos se han actualizado"}
            />
            <SuccessModal
                isOpen={onCloseSE}
                onClose={handleCloseModalSE}
                title={"Usuario Eliminado"}
                mensaje={"Su cuenta ha sido eliminada"}
            />
        </div>
    );
};

export default MainProfile;
