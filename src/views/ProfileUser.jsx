import React from 'react'
import NavbarTop from '../components/Navbar_Top'
import NavbarAdmin from '../components/Navbar_Admin'
import MainProfile from '../components/dashboard/MainProfile'

const ProfileUser = () => {
  return (
    <div>
        <NavbarTop/>
        <NavbarAdmin/>
        <MainProfile/>
    </div>
  )
}

export default ProfileUser