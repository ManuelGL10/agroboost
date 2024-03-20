import React from 'react'

const MainConfig = () => {
  return (
    <div className='bg-background ml-[20%] p-4'>
        <h1 className='text-3xl font-semibold mt-20'>Configuración</h1>
        <div className='py-4 px-6 grid grid-cols-2 gap-x-6 bg-white mt-6'>
            <div>
                <span className='text-xl font-semibold'>Respaldo</span>
                <div className='px-4 py-2'>
                    <span className='text-lg font-medium'>Selecciona las Colecciones</span>
                    <div className='grid gap-2 grid-cols-2 mt-2'>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Usuarios</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Cultivo</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Dispositivo</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Agroquimico</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Todas</span>
                        </div>
                    </div>
                </div>
                <div className='px-4 py-2 grid'>
                    <span className='text-lg font-medium mb-2'>Frecuencia de Respaldo</span>
                    <select className='border-2 border-gray-300 rounded-lg p-2'>
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="Diario">Diario</option>
                        <option value="Semanal">Semanal</option>
                        <option value="Mensual">Mensual</option>
                    </select>
                </div>
                <div className='px-4 py-2 grid'>
                    <span className='text-lg font-medium mb-2'>Día de Respaldo</span>
                    <select className='border-2 border-gray-300 rounded-lg p-2'>
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="Diario">Lunes</option>
                        <option value="Semanal">Martes</option>
                        <option value="Mensual">Miércoles</option>
                        <option value="Mensual">Jueves</option>
                        <option value="Mensual">Viernes</option>
                        <option value="Mensual">Sábado</option>
                        <option value="Mensual">Domingo</option>
                    </select>
                </div>
                <div className='px-4 py-2 grid'>
                    <span className='text-lg font-medium mb-2'>Horario de Respaldo</span>
                    <input type='time' className='border-2 border-gray-300 rounded-lg p-2'/>
                </div>
            </div>
            <div>
                <span className='text-xl font-semibold'>Restauración</span>
                <div className='px-4 py-2'>
                    <span className='text-lg font-medium'>Selecciona las Colecciones</span>
                    <div className='grid gap-y-2 grid-cols-2 mt-2'>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Usuarios</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Cultivo</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Dispositivo</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Agroquimico</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Todas</span>
                        </div>
                    </div>
                </div>
                <div className='px-4 py-2'>
                    <span className='text-lg font-medium'>Selecciona los días</span>
                    <div className='grid grid-cols-2 gap-y-2 mt-2'>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Lunes</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Martes</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Miércoles</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Jueves</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Viernes</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Sábado</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Domingo</span>
                        </div>
                        <div className='flex text-lg'>
                            <input type='checkbox' className='mr-2'/>
                            <span>Todos los días</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainConfig