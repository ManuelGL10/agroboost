import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IconCheck, IconX } from '@tabler/icons-react';

const StatesmanUser = () => {
    const { userId } = useParams();
    const [prediction, setPrediction] = useState(null);
    const [explanation, setExplanation] = useState(null);
    const [error, setError] = useState(null);
    const [chartError, setChartError] = useState(null);
    const [humidityChartError, setHumidityChartError] = useState(null);
    const [phosphorusChartError, setPhosphorusChartError] = useState(null);
    const [potassiumChartError, setPotassiumChartError] = useState(null);
    const [nitrogenChartError, setNitrogenChartError] = useState(null);

    useEffect(() => {
        const fetchPrediction = async () => {
            try {
                const response = await fetch('http://localhost:5000/predict', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user_id: userId }),
                });

                if (!response.ok) {
                    throw new Error('Error al hacer la predicción');
                }

                const data = await response.json();
                setPrediction(data.prediction);
                setExplanation(data.explanation);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPrediction();
    }, [userId]);

    const renderExplanation = () => {
        return explanation.map((explanationText, index) => (
            <div key={index} className='flex items-center'>
                <div className='mr-2'>
                    {explanationText.includes('adecuada') || explanationText.includes('adecuado') ? (
                        <IconCheck size={20} color="green" />
                    ) : (
                        <IconX size={20} color="red" />
                    )}
                </div>
                <div>{explanationText}</div>
            </div>
        ));
    };

    return (
        <div className='bg-background ml-[20%] p-4'>
            <div className='h-full py-20'>
                <div>
                    <h1 className='text-3xl font-semibold dark:text-white'>Reporte</h1>
                </div>
                <div className='mt-6'>
                    {error ? (
                        <div className='text-red-500'>{error}</div>
                    ) : (
                        <div className='text-2xl'>
                            {prediction === null ? (
                                'Cargando...'
                            ) : (
                                <div>
                                    <div>
                                        {prediction === 1 ? 'Las condiciones son buenas' : 'Las condiciones no son buenas'}
                                    </div>
                                    <div className='text-xl mt-4'>
                                        {renderExplanation()}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
                    <div>
                        {chartError ? (
                            <div className='text-red-500'>{chartError}</div>
                        ) : (
                            <iframe
                                src={`http://localhost:5000/chart/temperature/${userId}`}
                                width="100%"
                                height="400"
                                title='Gráfica de temperatura'
                                style={{ border: 'none' }}
                            ></iframe>
                        )}
                    </div>
                    <div>
                        {humidityChartError ? (
                            <div className='text-red-500'>{humidityChartError}</div>
                        ) : (
                            <iframe
                                src={`http://localhost:5000/chart/humidity/${userId}`}
                                width="100%"
                                height="400"
                                title='Gráfica de Humedad'
                                style={{ border: 'none' }}
                            ></iframe>
                        )}
                    </div>
                    <div>
                        {phosphorusChartError ? (
                            <div className='text-red-500'>{phosphorusChartError}</div>
                        ) : (
                            <iframe
                                src={`http://localhost:5000/chart/phosphorus/${userId}`}
                                width="100%"
                                height="400"
                                title='Gráfica de Fósforo'
                                style={{ border: 'none' }}
                            ></iframe>
                        )}
                    </div>
                    <div>
                        {potassiumChartError ? (
                            <div className='text-red-500'>{potassiumChartError}</div>
                        ) : (
                            <iframe
                                src={`http://localhost:5000/chart/potassium/${userId}`}
                                width="100%"
                                height="400"
                                title='Gráfica de Potasio'
                                style={{ border: 'none' }}
                            ></iframe>
                        )}
                    </div>
                    <div>
                        {nitrogenChartError ? (
                            <div className='text-red-500'>{nitrogenChartError}</div>
                        ) : (
                            <iframe
                                src={`http://localhost:5000/chart/nitrogen/${userId}`}
                                width="100%"
                                height="400"
                                title='Gráfica de Nitrógeno'
                                style={{ border: 'none' }}
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatesmanUser;
