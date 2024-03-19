import React from 'react'
import NavbarTop from '../components/Navbar_Top'
import NavbarAdmin from '../components/Navbar_Admin'
import MainProduct from '../components/MainProduct'

function DashboardProduct() {
  return (
    <div>
        <NavbarTop/>
        <NavbarAdmin/>
        <MainProduct/>
    </div>
  )
}

export default DashboardProduct