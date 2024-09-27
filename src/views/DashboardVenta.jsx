import React from 'react'
import NavbarAdmin from '../components/Navbar_Admin'
import NavbarTop from '../components/Navbar_Top'
import MainVenta from '../components/dashboard/MainVenta'

const DashboardVenta = () => {
  return (
    <div className='flex'>
      <div className='w-sidebar-cero lg:w-sidebar'>
        <NavbarAdmin />
      </div>
      <div className='w-content-full lg:w-content'>
        <NavbarTop/>
        <MainVenta/>
      </div>
    </div>
  )
}

export default DashboardVenta