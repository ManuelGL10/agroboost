import React, { useState, useEffect, useContext} from 'react'
import { IconUsers, IconTrendingUp, IconShoppingCart, IconClockStop } from '@tabler/icons-react'
import LinesChart from '../graphics/LinesChar'
import PiesChar from '../graphics/PiesChar'
import BarsChar from '../graphics/BarsChar'
import GetUsers from '../request/GetUsers'
import GetVentas from '../request/GetVentas'
import GetProductos from '../request/GetProductos'
import { DarkModeContext } from '../../context/DarkModeContext'

const MainHome = () => {
    const [, setUsers] = useState([]);
    const [, setVentas] = useState([]);
    const [, setPreductos] = useState([])
    const [usersCount, setUsersCount] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener los datos de los usuarios
        const usersData = await GetUsers();
        setUsers(usersData);
  
        // Obtener los datos de ventas
        const ventasData = await GetVentas();
        setVentas(ventasData);

        const productosData = await GetProductos();
        setPreductos(productosData)
  
        // Calcular el total de usuarios
        const totalUsers = usersData.length;
        setUsersCount(totalUsers);
  
        // Calcular el total de órdenes
        const totalOrders = ventasData.length;
        setTotalOrders(totalOrders);
  
        // Calcular el total de órdenes pendientes
        const pendingOrders = ventasData.filter(venta => venta.estado_venta === 'Pendiente').length;
        setPendingOrders(pendingOrders);

        const totalSales = productosData.reduce((acc, producto) => {
            return acc + producto.vendidos * producto.precio;
          }, 0);
          setTotalSales(totalSales);  
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
  
    fetchData();
  }, []);  

  return (
    <div className={`${darkMode && "dark"}`}>
        <div className='bg-background dark:bg-[#1B2431] p-4 mt-16'>
            <h1 className='lg:text-3xl text-2xl font-semibold dark:text-white'>Panel</h1>
            <div className='py-4 grid lg:grid-cols-4 lg:gap-x-4 grid-cols-2 gap-2 md:gap-2 md:grid-cols-4 justify-between dark:text-white'>
                <div className='p-4 bg-white dark:bg-[#273142] rounded-lg'>
                    <div className='grid grid-cols-4 items-center'>
                        <div className='grid gap-2 col-span-3'>
                            <span className='lg:text-lg text-md font-medium text-gray-600 dark:text-gray-300'>Total de Usuarios</span>
                            <span className='lg:text-2xl text-xl font-bold'>{usersCount}</span>
                        </div>
                        <div className='flex items-center justify-center rounded-2xl bg-[#8280FF] lg:size-12 md:size-10 size-12'>
                            <IconUsers size={28} color='white' />
                        </div>
                    </div>
                </div>
                <div className='p-4 bg-white dark:bg-[#273142] rounded-lg'>
                    <div className='grid grid-cols-4 items-center h-full'>
                        <div className='grid gap-2 col-span-3 h-full'>
                            <span className='lg:text-lg text-md font-medium text-gray-600 dark:text-gray-300'>Ordenes Totales</span>
                            <span className='lg:text-2xl text-xl font-bold'>{totalOrders}</span>
                        </div>
                        <div className='flex items-center justify-center rounded-2xl bg-[#FEC53D] lg:size-12 md:size-10 size-12'>
                            <IconShoppingCart size={28} color='white' />
                        </div>
                    </div>
                </div>
                <div className='p-4 bg-white dark:bg-[#273142] rounded-lg'>
                    <div className='grid grid-cols-4 items-center h-full'>
                        <div className='grid gap-2 col-span-3 h-full'>
                            <span className='lg:text-lg text-md font-medium text-gray-600 dark:text-gray-300'>Ventas Totales</span>
                            <span className='lg:text-2xl text-xl font-bold'>${totalSales}</span>
                        </div>
                        <div className='flex items-center justify-center rounded-2xl bg-[#4AD991] lg:size-12 md:size-10 size-12'>
                            <IconTrendingUp size={28} color='white' />
                        </div>
                    </div>
                </div>
                <div className='p-4 bg-white dark:bg-[#273142] rounded-lg'>
                    <div className='grid grid-cols-4 items-center h-full'>
                        <div className='grid gap-2 col-span-3 h-full'>
                            <span className='lg:text-lg text-md font-medium text-gray-600 dark:text-gray-300'>Pendientes</span>
                            <span className='lg:text-2xl text-xl font-bold'>{pendingOrders}</span>
                        </div>
                        <div className='flex items-center justify-center rounded-2xl bg-[#FF9066] lg:size-12 md:size-10 size-12'>
                            <IconClockStop size={28} color='white' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-4'>
                <div className='w-full bg-white dark:bg-[#273142] rounded-lg p-4'>
                    <h1 className='text-lg font-medium dark:text-white'>Ventas Mensuales</h1>
                    <LinesChart/>                
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-x-4'>
                <div className='py-4 col-span-2'>
                    <div className='w-full bg-white dark:bg-[#273142] rounded-lg p-4'>
                        <h1 className='text-lg font-medium dark:text-white'>Usuarios Mensuales</h1>
                        <BarsChar />
                    </div>
                </div>
                <div className='py-4 col-span-1'>
                    <div className='w-full h-full bg-white dark:bg-[#273142] rounded-lg p-4'>
                        <h1 className='text-lg font-medium dark:text-white'>Detalles de Ventas</h1>
                        <PiesChar />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainHome