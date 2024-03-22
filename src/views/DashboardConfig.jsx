import React from 'react'
import NavbarTop from '../components/Navbar_Top'
import NavbarAdmin from '../components/Navbar_Admin'
import MainConfig from '../components/dashboard/MainConfig'

const DashboardConfig = () => {
  return (
    <div className='bg-background h-screen'>
        <NavbarTop/>
        <NavbarAdmin/>
        <MainConfig/>
    </div>
  )
}

export default DashboardConfig