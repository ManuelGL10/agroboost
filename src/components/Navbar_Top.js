import React from 'react'
import { IconChevronDown, IconSearch, IconSun, IconMoon } from '@tabler/icons-react'

const Navbar_Top = () => {
  return (
    <div className='w-full flex items-center px-6 py-2'>
        <div className='flex ml-[20%] items-center bg-custom-F0F0F0 border-2 border-gray-200 p-2 rounded-full w-[30%]'>
            <IconSearch size={18} className='text-[#9ca3af] ml-2'/>
            <input placeholder='Buscar' className='bg-custom-F0F0F0 ml-2 w-[80%] focus:outline-none'></input>
        </div>
        <div className='items-center flex ml-auto'>
            <div className='items-center flex mr-4'>
                <IconMoon/>
                <IconSun/>
            </div>
            <div className='flex items-center'>
                <div className='rounded-full bg-custom-color_logo h-10 w-10'/>
                <ul className='ml-4'>
                    <li>
                        <span className='text-lg font-semibold'>Edgar</span>
                    </li>
                    <li>
                        <span className='text-base font-light'>Admin</span>
                    </li>
                </ul>
                <div className='rounded-full border-2 border-gray-300 ml-4'>
                    <IconChevronDown size={18} stroke={1.5}/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar_Top