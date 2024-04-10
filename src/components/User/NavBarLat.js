import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/LogoAgroBoostPNG.svg';
import { IconListDetails, IconPlant, IconDevices, IconSettings, IconLogout,IconHome } from '@tabler/icons-react'

const NavbarLat = () => {
  return (
    <div className='bg-white w-[20%] h-full fixed left-0 top-0 justify-center'>
        <div className='mt-4'>
            <div className='flex items-center justify-center'>
                <img className='h-14' src={Logo} alt="Logo AgroBoost" />
                <h1 className='font-semibold text-xl'>AgroBoost</h1>
            </div>
        </div>
        <ul className='py-8 px-6 text-xl'>
            <li className='flex p-2 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                <Link to='/userhome' className='flex w-full'>
                    <IconHome size={30} stroke={1.5}/>
                    <span className='ml-4'>Inicio</span>
                </Link>
            </li>
            <li className='flex p-2 my-4 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                <Link to='/userDevice' className='flex w-full'>
                    <IconDevices size={30} stroke={1.5}/>
                    <span className='ml-4'>Dispositivo</span>
                </Link>
            </li>
            <li className='flex p-2 my-4 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                <Link to='' className='flex w-full'>
                    <IconPlant size={30} stroke={1.5}/>
                    <span className='ml-4'>Cultivo</span>
                </Link>
                
            </li>
            <li className='flex p-2 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                <Link to='/userReminder' className='flex w-full'>
                    <IconListDetails size={30} stroke={1.5}/>
                    <span className='ml-4'>Recordatorio</span>
                </Link>
                
            </li>
        </ul>
        <ul className='p-6 text-xl absolute bottom-0 left-0 right-0'>
            <li className='flex p-2 mb-4 cursor-pointer hover:bg-custom-color_logo hover:rounded-md hover:text-white'>
                <Link to='' className='flex w-full'>
                    <IconSettings size={30} stroke={1.5}/>
                    <span className='ml-4'>Ajustes</span>
                </Link>
                
            </li>
            <li className='flex p-2 cursor-pointer hover:text-[#D33363] hover:rounded-md hover:font-semibold'>
                <Link to='/login' className='flex w-full'>
                    <IconLogout size={30} stroke={1.5}/>
                    <span className='ml-4'>Cerrar Sesión</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavbarLat