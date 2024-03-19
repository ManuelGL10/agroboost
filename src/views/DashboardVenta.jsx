import React from 'react'
import NavbarAdmin from '../components/Navbar_Admin'
import NavbarTop from '../components/Navbar_Top'
import MainVenta from '../components/MainVenta'

const DashboardVenta = () => {
  return (
    <div>
        <NavbarTop/>
        <NavbarAdmin/>
        <MainVenta/>
    </div>
  )
}

export default DashboardVenta