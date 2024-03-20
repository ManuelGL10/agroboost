import React from 'react'
import NavbarTop from '../components/Navbar_Top'
import NavbarAdmin from '../components/Navbar_Admin'
import MainConfig from '../components/MainConfig'

const DashboardConfig = () => {
  return (
    <div>
        <NavbarTop/>
        <NavbarAdmin/>
        <MainConfig/>
    </div>
  )
}

export default DashboardConfig