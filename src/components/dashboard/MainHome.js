import React, { useState, useEffect} from 'react'
import { IconUsers, IconTrendingUp, IconShoppingCart, IconClockStop, IconTrendingDown } from '@tabler/icons-react'
import LinesChart from '../graphics/LinesChar'
import PiesChar from '../graphics/PiesChar'
import BarsChar from '../graphics/BarsChar'
import GetUser from '../request/GetUser'
import { useParams } from 'react-router-dom';

const MainHome = () => {

  return (
    <div className='bg-background ml-[20%] p-4'>
        <h1 className='text-3xl font-semibold mt-20'>Panel</h1>
        <div className='py-4 flex justify-between'>
            <div className='p-4 bg-white rounded-lg'>
                <div className='flex items-center'>
                    <div className='grid gap-2 flex-grow'>
                        <span className='text-lg font-medium'>Total de Usuarios</span>
                        <span className='text-2xl font-semibold'>2,000</span>
                    </div>
                    <div className='flex items-center justify-center rounded-2xl bg-[#8280FF] w-12 h-12 ml-2'>
                        <IconUsers size={28} color='white' />
                    </div>
                </div>
                <div className='flex mt-4 items-center'>
                    <IconTrendingUp color='#66bc8a' />
                    <span><span className='text-custom-color_logo font-semibold px-1'>8,5%</span> Más que ayer</span>
                </div>
            </div>
            <div className='p-4 bg-white rounded-lg'>
                <div className='flex items-center'>
                    <div className='grid gap-2 flex-grow'>
                        <span className='text-lg font-medium'>Ordenes Totales</span>
                        <span className='text-2xl font-semibold'>1,460</span>
                    </div>
                    <div className='flex items-center justify-center rounded-2xl bg-[#FEC53D] w-12 h-12 ml-2'>
                        <IconShoppingCart size={28} color='white' />
                    </div>
                </div>
                <div className='flex mt-4 items-center'>
                    <IconTrendingUp color='#66bc8a' />
                    <span><span className='text-custom-color_logo font-semibold px-1'>1.3%</span> Más que ayer</span>
                </div>
            </div>
            <div className='p-4 bg-white rounded-lg'>
                <div className='flex items-center'>
                    <div className='grid gap-2 flex-grow'>
                        <span className='text-lg font-medium'>Ventas Totales</span>
                        <span className='text-2xl font-semibold'>$10,820</span>
                    </div>
                    <div className='flex items-center justify-center rounded-2xl bg-[#4AD991] w-12 h-12 ml-2'>
                        <IconTrendingUp size={28} color='white' />
                    </div>
                </div>
                <div className='flex mt-4 items-center'>
                    <IconTrendingDown color='#D33363' />
                    <span><span className='text-[#D33363] font-semibold px-1'>4.3%</span> Menos que ayer</span>
                </div>
            </div>
            <div className='p-4 bg-white rounded-lg'>
                <div className='flex items-center'>
                    <div className='grid gap-2 flex-grow'>
                        <span className='text-lg font-medium'>Pendientes</span>
                        <span className='text-2xl font-semibold'>310</span>
                    </div>
                    <div className='flex items-center justify-center rounded-2xl bg-[#FF9066] w-12 h-12 ml-2'>
                        <IconClockStop size={28} color='white' />
                    </div>
                </div>
                <div className='flex mt-4 items-center'>
                    <IconTrendingUp color='#66bc8a' />
                    <span><span className='text-custom-color_logo font-semibold px-1'>1.8%</span> Más que ayer</span>
                </div>
            </div>
        </div>
        <div className='py-4'>
            <div className='w-full bg-white rounded-lg p-4'>
                <h1 className='text-lg font-medium'>Ventas Mensuales</h1>
                <LinesChart/>                
            </div>
        </div>
        <div className='grid grid-cols-3 gap-x-4'>
            <div className='py-4 col-span-2'>
                <div className='w-full bg-white rounded-lg p-4'>
                    <h1 className='text-lg font-medium'>Usuarios Mensuales</h1>
                    <div className='flex justify-center items-center h-full'>
                        <BarsChar style={{ flexGrow: 1 }} />
                    </div>
                </div>
            </div>
            <div className='py-4 col-span-1'>
                <div className='w-full h-full bg-white rounded-lg p-4 flex flex-col'>
                    <h1 className='text-lg font-medium'>Detalles de Ventas</h1>
                    <div className='flex justify-center items-center h-full w-full'>
                        <div className='h-[90%] w-[90%]'>
                            <PiesChar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainHome