import React, { useState } from 'react'
import { IconPlus, IconMinus } from '@tabler/icons-react'

const Questions = () => {
    const [hidd1, setHidd1] = useState(true);
    const [hidd2, setHidd2] = useState(true);
    const [hidd3, setHidd3] = useState(true);
    const [hidd4, setHidd4] = useState(true);
    
    const handleHidd1 = () => {
        setHidd1(!hidd1)
        setHidd2(true);
        setHidd3(true);
        setHidd4(true);
    }

    const handleHidd2 = () => {
        setHidd2(!hidd2)
        setHidd1(true);
        setHidd3(true);
        setHidd4(true);
    }

    const handleHidd3 = () => {
        setHidd3(!hidd3)
        setHidd1(true);
        setHidd2(true);
        setHidd4(true);
    }

    const handleHidd4 = () => {
        setHidd4(!hidd4)
        setHidd1(true);
        setHidd2(true);
        setHidd3(true);
    }
    
    return (
        <div className='flex justify-center items-center py-12 max-w-[1545px] mx-auto md:px-12 px-4 p-2'>
            <div className='w-width-full'>
                <h1 className='text-custom-264948 font-semibold lg:text-4xl md:text-3xl text-2xl text-center mb-6'>Preguntas Frecuentes</h1>
                <div className="bg-white shadow-md rounded-lg mb-4 max-w">
                    <div className='flex items-center justify-between p-4 cursor-pointer' onClick={handleHidd1}>
                        <p className='lg:text-xl md:text-lg text-base font-semibold'>¿Qué es AgroBoost y cómo puede beneficiarme?</p>
                        {!hidd1 ? <IconMinus size={32}/> : <IconPlus size={32}/>}
                    </div>
                    <div className={!hidd1 ? "p-4 border-t transition-all duration-300 ease-in-out" : "hidden"}>
                        <p className='lg:text-lg md:text-base text-sm'>AgroBoost es una plataforma innovadora diseñada para optimizar la producción agrícola. Ofrecemos herramientas avanzadas de monitoreo y gestión para ayudarte a mejorar la eficiencia de tus cultivos, maximizar los rendimientos y reducir los costos operativos.</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg mb-4">
                    <div className='flex items-center justify-between p-4 cursor-pointer' onClick={handleHidd2}>
                        <p className='lg:text-xl md:text-lg text-base font-semibold'>¿Cómo funciona AgroBoost?</p>
                        {!hidd2 ? <IconMinus size={32}/> : <IconPlus size={32}/>}
                    </div>
                    <div className={!hidd2 ? "p-4 border-t transition-all duration-300 ease-in-out" : "hidden"}>
                        <p className='lg:text-lg md:text-base text-sm'>AgroBoost utiliza tecnología de vanguardia, como sensores de campo, análisis de datos y algoritmos inteligentes, para recopilar información en tiempo real sobre tus cultivos. Esta información se utiliza para proporcionarte recomendaciones personalizadas y acciones específicas para optimizar el crecimiento y la salud de tus plantas.</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg mb-4">
                    <div className='flex items-center justify-between p-4 cursor-pointer' onClick={handleHidd3}>
                        <p className='lg:text-xl md:text-lg text-base font-semibold'>¿Cómo puedo empezar a usar AgroBoost en mi granja?</p>
                        {!hidd3 ? <IconMinus size={32}/> : <IconPlus size={32}/>}
                    </div>
                    <div className={!hidd3 ? "p-4 border-t transition-all duration-300 ease-in-out" : "hidden"}>
                        <p className='lg:text-lg md:text-base text-sm'>Es fácil comenzar con AgroBoost. Solo necesitas registrarte en nuestra plataforma, configurar tus cultivos y empezar a recibir recomendaciones personalizadas para optimizar tu producción. Nuestro equipo de soporte está disponible para ayudarte en cada paso del proceso.</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg mb-4">
                    <div className='flex items-center justify-between p-4 cursor-pointer' onClick={handleHidd4}>
                        <p className='lg:text-xl md:text-lg text-base font-semibold'>¿Cuáles son los beneficios de usar AgroBoost en mi granja?</p>
                        {!hidd4 ? <IconMinus size={32}/> : <IconPlus size={32}/>}
                    </div>
                    <div className={!hidd4 ? "p-4 border-t transition-all duration-300 ease-in-out" : "hidden"}>
                        <p className='lg:text-lg md:text-base text-sm'>Algunos de los principales beneficios de utilizar AgroBoost incluyen un aumento en los rendimientos de los cultivos, una reducción en los costos operativos, una mejor gestión del riego y los nutrientes, y una mayor eficiencia en general en la producción agrícola.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions
