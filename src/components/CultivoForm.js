import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CultivoForm = () => {
    const [fechaSiembra, setFechaSiembra] = useState('');
    const [tipoRiego, setTipoRiego] = useState('')
    const [programaRiego, setProgramaRiego] = useState('')
    const [metodoFertilizacion, setMetodoFertilizacion] = useState('')
    const [tiempoFertilizacion, setTiempoFertilizacion] = useState('')
    const [cantidadFertilizante, setCantidadFertilizante] = useState('')
    const [metodoControl, setMetodoControl] = useState('')
    const [tecnicaPolinizacion, setTecnicaPolinizacion] = useState('')
    const [metroSiembra, setMetroSiembra] = useState('')
    const [fechaCosecha, setFechaCosecha] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Fecha Siembra:', fechaSiembra);
        console.log('Tipo Riego', tipoRiego);
        console.log('Programa Riego', programaRiego);
        console.log('Metodo Fertilizacion', metodoFertilizacion);
        console.log('Tiempo Fertilizacion', tiempoFertilizacion);
        console.log('Cantidad Fertilizante', cantidadFertilizante);
        console.log('Metodo Control', metodoControl);
        console.log('Tecnica Polinizacion', tecnicaPolinizacion);
        console.log('Metro Siembra', metroSiembra);
        console.log('Fecha Cosecha', fechaCosecha);
    };

    return (
        <div className='bg-background ml-[20%] p-4'>
            <h1 className="block font-medium md:text-3xl sm:text-2xl text-xl text-black mb-6 text-left mt-20">Agregar cultivo</h1>
            <div className="max-w-5xl mx-auto mt-5 p-3 bg-white rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="fechaSiembra" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Fecha de siembra</label>
                            <input
                                type="date"
                                id="fechaSiembra"
                                value={fechaSiembra}
                                onChange={(e) => setFechaSiembra(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tipoRiego" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Tipo de riego</label>
                            <select
                                id="tipoRiego"
                                value={tipoRiego}
                                onChange={(e) => setTipoRiego(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            >
                                <option value="">Seleccionar tipo de riego</option>
                                <option value="1">Riego por goteo</option>
                                <option value="2">Riego por aspersión</option>
                                <option value="3">Riego por nebulización</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="programaRiego" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Programa de riego</label>
                            <input
                                type="text"
                                id="programaRiego"
                                value={programaRiego}
                                onChange={(e) => setProgramaRiego(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="metodoFertilizacion" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Método de fertilización</label>
                            <select
                                id="metodoFertilizacion"
                                value={metodoFertilizacion}
                                onChange={(e) => setMetodoFertilizacion(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            >
                                <option value="">Seleccionar método de fertilizacion</option>
                                <option value="1">Fertilización químmica convencional</option>
                                <option value="2">Fertilización orgánica</option>
                                <option value="3">Fertilización foliar</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tiempoFertilizacion" className="block font-medium text-lg text-custom-00000 mb-2 text-left">¿Cada cuánto fertiliza su cultivo?</label>
                            <input
                                type="text"
                                id="tiempoFertilizacion"
                                value={tiempoFertilizacion}
                                onChange={(e) => setTiempoFertilizacion(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="cantidadFertilizante" className="block font-medium text-lg text-custom-00000 mb-2 text-left">¿Qué cantidades de fertilizante aplica?</label>
                            <input
                                type="text"
                                id="cantidadFertilizante"
                                value={cantidadFertilizante}
                                onChange={(e) => setCantidadFertilizante(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="metodoControl" className="block font-medium text-lg text-custom-00000 mb-2 text-left">¿Qué métodos de control de plagas utiliza?</label>
                            <select
                                id="metodoControl"
                                value={metodoControl}
                                onChange={(e) => setMetodoControl(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            >
                                <option value="">Seleccionar método de control de plagas</option>
                                <option value="1">Control biológico</option>
                                <option value="2">Control físico</option>
                                <option value="3">Control químico</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tecnicaPolinizacion" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Uso de técnicas de polinización</label>
                            <select
                                id="tecnicaPolinizacion"
                                value={tecnicaPolinizacion}
                                onChange={(e) => setTecnicaPolinizacion(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            >
                                <option value="">Seleccionar técnica de polinización</option>
                                <option value="1">Introducción de polinizadores naturales</option>
                                <option value="2">Polinización por vibración</option>
                                <option value="3">Polinización por ventiladores</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="metroSiembra" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Metros cuadrados de la siembra</label>
                            <input
                                type="text"
                                id="metroSiembra"
                                value={metroSiembra}
                                onChange={(e) => setMetroSiembra(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fechaCosecha" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Fecha prevista de cosecha esperada</label>
                            <input
                                type="date"
                                id="fechaCosecha"
                                value={fechaCosecha}
                                onChange={(e) => setFechaCosecha(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-8 flex justify-center" style={{ marginTop: '5px' }}>
                        <button type="submit" className="bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring-2 focus:ring-green-300" style={{ fontSize: '1.1rem' }}>
                            Agregar Cultivo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CultivoForm;
