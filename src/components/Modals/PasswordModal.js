import React, { useState, useEffect } from 'react';
import { IconX } from '@tabler/icons-react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UpdatePassAdmin } from '../request/UpdatePassAdmin';

const PasswordModal = ({ userData, isOpen, onClose }) => {
  const [ eyeOpen, setEyeOpen ] = useState(false)
  const [ newEyeOpen, setNewEyeOpen ] = useState(false)

  const inictalValues = {
    contrasena: '',
    newContrasena: ''
  }

  const validationSchema = Yup.object().shape({
    contrasena: Yup.string()
        .required('Campo requerido')
        .min(8, "La contraseña debe de tener al menos 8 caracteres"),
    newContrasena: Yup.string()
        .required('Campo requerido')
        .min(8, "La contraseña debe de tener al menos 8 caracteres")
        .oneOf([Yup.ref('contrasena'), null], 'Las contraseñas deben coincidir')
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    const { contrasena } = values
        try {
            const { success, data, error } = await UpdatePassAdmin({
              id: userData._id,
              contrasena,
            });
            onClose()
          } catch (error) {
            console.error('Error al actualizar los datos:', error.message);
        }
        setSubmitting(false);
    };

    const handleOpen = () => {
        setEyeOpen(!eyeOpen);
    };
    const handleOpenNew = () => {
        setNewEyeOpen(!newEyeOpen);
    };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white px-4 py-4 rounded-xl z-20 w-[35%]">
        <div className='flex w-full justify-end'>
          <button onClick={onClose}>
            <IconX size={28}/>
          </button>
        </div>
        <h2 className="text-2xl font-semibold w-full">Editar Contraseña</h2>
        <Formik
            initialValues={inictalValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className='text-lg py-2 flex flex-col'>
                        <label htmlFor="contrasena">Nueva Contraseña:</label>
                        <div className='mt-2 border border-gray-300 rounded-lg py-1 px-1 flex'>
                            <Field
                                type={eyeOpen ? "text" : "password"} 
                                id="contrasena"
                                name="contrasena"
                                className="w-full focus:outline-none"
                                placeholder="Ingrese la nueva contraseña"
                            />
                            <button type='button' onClick={handleOpen}>
                                {eyeOpen ? <IconEye size={28} stroke={1.8} color='#4b5563' /> : <IconEyeOff size={28} stroke={1.8} color='#4b5563' />}
                            </button>
                        </div>
                        <ErrorMessage name="contrasena" component="div" className="text-red-500"/>
                    </div>
                    <div className='text-lg py-2 flex flex-col'>
                        <label htmlFor="newContrasena">Confirmar Contraseña:</label>
                        <div className='mt-2 border border-gray-300 rounded-lg py-1 px-1 flex'>
                            <Field
                                type={newEyeOpen ? "text" : "password"} 
                                id="newContrasena"
                                name="newContrasena"
                                className="w-full focus:outline-none"
                                placeholder="Ingrese de nuevo la contraseña"
                            />
                            <button type='button' onClick={handleOpenNew}>
                                {newEyeOpen ? <IconEye size={28} stroke={1.8} color='#4b5563' /> : <IconEyeOff size={28} stroke={1.8} color='#4b5563' />}
                            </button>
                        </div>
                        <ErrorMessage name="newContrasena" component="div" className="text-red-500"/>
                        <div className='flex justify-center items-center mt-4'>
                            <button type='submit' className="px-4 py-2 bg-custom-color_logo text-white rounded-md font-semibold">Actualizar</button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
      </div>
    </div>
  );
};

export default PasswordModal;
