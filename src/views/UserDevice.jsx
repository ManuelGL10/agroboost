import React from 'react'
import NavbarUser from '../components/User/NavBarUser'
import NavbarLat from '../components/User/NavBarLat'
import DeviceUser from '../components/User/DeviceUser'


const UserDevice = () =>{
    return (
      <div className='flex'>
        <div className='w-sidebar-cero lg:w-sidebar'>
          <NavbarLat/>
        </div>
        <div className='w-content-full lg:w-content'>
          <NavbarUser/>
          <DeviceUser/>
        </div>
      </div>
    )
}

export default UserDevice