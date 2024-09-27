import React from 'react'
import NavbarTop from '../components/Navbar_Top'
import NavbarAdmin from '../components/Navbar_Admin'
import MainConfig from '../components/dashboard/MainConfig'

const DashboardConfig = () => {
  return (
    <div className='flex'>
      <div className='w-sidebar-cero lg:w-sidebar'>
        <NavbarAdmin />
      </div>
      <div className='w-content-full lg:w-content'>
        <NavbarTop/>
        <MainConfig/>
      </div>
    </div>
  )
}

export default DashboardConfig