import React from 'react'
import NavbarUser from '../components/User/NavBarUser'
import NavbarLat from '../components/User/NavBarLat'
import DeviceUser from '../components/User/DeviceUser'


const UserDevice = () =>{
    return (
        <div>
            <NavbarUser/>
            <NavbarLat/>
            <DeviceUser/>
        </div>
    )
}

export default UserDevice