import React from 'react'
import NavbarTop from '../components/Navbar_Top'
import NavbarAdmin from '../components/Navbar_Admin'
import MainProduct from '../components/dashboard/MainProduct'

function DashboardProduct() {
  return (
    <div className='flex'>
      <div className='w-sidebar-cero lg:w-sidebar'>
        <NavbarAdmin />
      </div>
      <div className='w-content-full lg:w-content'>
        <NavbarTop/>
        <MainProduct/>
      </div>
    </div>
  )
}

export default DashboardProduct