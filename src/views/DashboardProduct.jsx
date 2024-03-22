import React from 'react'
import NavbarTop from '../components/Navbar_Top'
import NavbarAdmin from '../components/Navbar_Admin'
import MainProduct from '../components/dashboard/MainProduct'

function DashboardProduct() {
  return (
    <div>
      <NavbarTop/>
      <MainProduct/>
      <NavbarAdmin/>
    </div>
  )
}

export default DashboardProduct