import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StatesmanUser = () =>{

    const {userId} = useParams(); 
    const [prediction, setPrediction] = useState(null); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPrediction = async () => {
            try {
                const response = await fetch('http://localhost:5000/predict', {
                    method:'POST', 
                    headers:{
                        'Content-Type': 'application/json',
                    }, 
                    body: JSON.stringify({user_id: userId}),
                });
                
                if (!response.ok){
                    throw new Error('Error al hacer la predicción');
                }

                const data = await response.json(); 
                setPrediction(data.prediction);
            } catch (err) {
                setError(err.message)
            }
        };
        fetchPrediction();
    }, [userId]); 
    

    return(
        <div className='bg-background ml-[20%] p-4 h-screen'>
            <div className='h-full py-20'>
                <div>
                    <h1 className='text-3xl font-semibold dark:text-white'>Estadística</h1>
                </div>
                <div className='mt-6'>
                    {error ? (
                        <div className='text-red-500'>{error}</div>
                    ) : (
                        <div className='text-2xl'> 
                            {prediction === null ? (
                                'Cargando...'
                            ) : prediction === 1 ? (
                                'Las condiciones son buenas'
                            ) : (
                                'Las condiciones no son buenas'
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}; 

export default StatesmanUser