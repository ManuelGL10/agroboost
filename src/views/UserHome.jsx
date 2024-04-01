import React from 'react'
import NavBarUser from '../components/User/NavBarUser'
import NavBarLat from '../components/User/NavBarLat'
import IncioUser from '../components/User/InicioUser'


const UserHome = () => {
  return (
    <div>
      <NavBarUser/>
      <NavBarLat/>
      <IncioUser/>
    </div>
  )
}

export default UserHome