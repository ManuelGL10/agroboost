import React, { useState } from 'react';

const AddressInformation = () => {
    const [direccion, setDireccion] = useState('');
    const [numeroInterior, setNumeroInterior] = useState('')
    const [numeroExterior, setNumeroExterior] = useState('')
    const [colonia, setColonia] = useState('')
    const [estado, setEstado] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [codigoPostal, setCodigoPostal] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Dirección:', direccion);
        console.log('Numero Interior', numeroInterior);
        console.log('Numero Exterior', numeroExterior);
        console.log('Colonia', colonia);
        console.log('Estado', estado);
        console.log('Ciudad', ciudad);
        console.log('CodigoPostal', codigoPostal);
    };

    return (
        <div>
            <h1 className="block font-medium md:text-3xl sm:text-2xl text-xl text-gray-100 mb-10 text-left ml-72">.</h1>
            <h1 className="block font-medium md:text-3xl sm:text-2xl text-xl text-black mb-6 text-left ml-72">Información del domicilio</h1>
            <div className="relative max-w-5xl mx-auto mt-5 p-3 bg-white rounded-lg shadow-lg ml-auto mr-auto" style={{ marginLeft: '270px', borderRadius: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="direccion" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Dirección</label>
                            <input
                                type="text"
                                id="direccion"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                                style={{ backgroundColor: '#E3EBEE', borderColor: '#AFC1C4' }}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="numeroInterior" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Número Interior</label>
                            <input
                                type="text"
                                id="numeroInterior"
                                value={numeroInterior}
                                onChange={(e) => setNumeroInterior(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                                style={{ backgroundColor: '#E3EBEE', borderColor: '#AFC1C4' }}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="numeroExterior" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Número Exterior</label>
                            <input
                                type="text"
                                id="numeroExterior"
                                value={numeroExterior}
                                onChange={(e) => setNumeroExterior(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                                style={{ backgroundColor: '#E3EBEE', borderColor: '#AFC1C4' }}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="colonia" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Colonia</label>
                            <input
                                type="text"
                                id="colonia"
                                value={colonia}
                                onChange={(e) => setColonia(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                                style={{ backgroundColor: '#E3EBEE', borderColor: '#AFC1C4' }}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="estado" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Estado</label>
                            <input
                                type="text"
                                id="estado"
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                                style={{ backgroundColor: '#E3EBEE', borderColor: '#AFC1C4' }}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="ciudad" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Ciudad</label>
                            <input
                                type="text"
                                id="ciudad"
                                value={ciudad}
                                onChange={(e) => setCiudad(e.target.value)}
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                                style={{ backgroundColor: '#E3EBEE', borderColor: '#AFC1C4' }}
                            />
                        </div>
                        <div className="mb-4 col-span-2">
                            <label htmlFor="codigoPostal" className="block font-medium text-lg text-custom-00000 mb-2 text-left">Código Postal</label>
                            <input
                                type="text"
                                id="codigoPostal"
                                value={codigoPostal}
                                onChange={(e) => setCodigoPostal(e.target.value)}
                                className="w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder=""
                                required
                                style={{ backgroundColor: '#E3EBEE', borderColor: '#AFC1C4' }}
                            />
                        </div>
                    </div>
                    <div className="mb-8 flex justify-center" style={{ marginTop: '5px' }}>
                        <button type="submit" className="bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring-2 focus:ring-green-300" style={{ fontSize: '1.1rem' }}>
                            Actualizar datos
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddressInformation;
