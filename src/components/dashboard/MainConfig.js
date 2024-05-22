import React, { useState, useContext, useEffect } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import SuccessModal from '../Modals/SuccessModal';
import ErrorModal from '../Modals/ErrorModal';

const MainConfig = () => {
  const [frecuenciaRespaldo, setFrecuenciaRespaldo] = useState('');
  const [frecuenciaRestauracion, setFrecuenciaRestauracion] = useState('');
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [collections, setCollections] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [ modalSuccess, setModalSuccess ] = useState(false)
  const [ modalError, setModalError ] = useState(false)

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch('http://localhost:4000/collections', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }); 
        const data = await response.json();
        setCollections(data);
      } catch (error) {
        console.error('Error al obtener las colecciones:', error);
      }
    };

    fetchCollections();
  }, []);

  const handleBackup = async () => {
    try {
      const selected = collections.filter(collection => selectedCollections.includes(collection));
  
      const response = await fetch('http://localhost:4000/backup', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ collections: selected, frecuencia: frecuenciaRespaldo }),
      });
  
      if (response.ok) {
        console.log('Respaldo exitoso');
        setModalSuccess(!modalSuccess)
      } else {
        console.error('Error al realizar el respaldo');
        setModalError(!modalError)
      }
    } catch (error) {
      console.error('Error al realizar el respaldo:', error);
    }
  };

  const handleSuccess= () => {
    setModalSuccess(!modalSuccess)
  }
  const handleError = () => {
    setModalError(!modalError)
  }
  
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className='bg-background dark:bg-[#1B2431] ml-[20%] p-4 h-screen'>
        <h1 className='text-3xl font-semibold mt-20 dark:text-white'>Ajustes</h1>
        <div className='p-4 gap-x-4 bg-white dark:bg-[#273142] dark:text-white mt-6 rounded-2xl'>
          <div>
            <span className='text-xl font-semibold'>Respaldo</span>
            <div className='px-4 py-2 grid grid-cols-2'>
              <div>
                <span className='text-lg font-medium'>Selecciona las Colecciones</span>
                <div className='grid gap-2 grid-cols-3 mt-2'>
                  {collections.map(collection => (
                    <div key={collection} className='flex text-lg'>
                      <input
                        type="checkbox"
                        className='mr-2'
                        id={collection}
                        value={collection}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          setSelectedCollections(prev => {
                            if (isChecked) {
                              return [...prev, collection];
                            } else {
                              return prev.filter(item => item !== collection);
                            }
                          });
                        }}
                      />
                      <label htmlFor={collection}>{collection}</label>
                    </div>
                  ))}
                  <div className='flex text-lg'>
                    <input
                      type='checkbox'
                      className='mr-2'
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        if (isChecked) {
                          setSelectedCollections(collections);
                        } else {
                          setSelectedCollections([]);
                        }
                      }}
                    />
                    <span>Todas</span>
                  </div>
                </div>
                <div className='py-2 flex justify-center'>
                  <button className='flex py-2 px-6 rounded-lg bg-custom-color_logo right-0 text-white font-medium hover:bg-[#2F9B5D]' onClick={handleBackup}>
                    Respaldar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal
        isOpen={modalSuccess}
        onClose={handleSuccess}
        title={"Respaldo Exitoso"}
        mensaje={"Las colecciones se han respaldado correctamente"}
      />
      <ErrorModal
        isOpen={modalError}
        onClose={handleError}
        title={"Algo no salió bién"}
        mensaje={"Hubo un error al respaldar las colecciones"}
      />
    </div>
  );
}

export default MainConfig;
