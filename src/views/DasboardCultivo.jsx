import React from 'react'
import NavbarTop from '../components/Navbar_Top'
import NavbarAdmin from '../components/Navbar_Admin'
import MainCultivo from '../components/dashboard/MainCultivo'

const DasboardCultivo = () => {
  return (
    <div className='flex'>
      <div className='w-sidebar-cero lg:w-sidebar'>
        <NavbarAdmin />
      </div>
      <div className='w-content-full lg:w-content'>
        <NavbarTop/>
        <MainCultivo/>
      </div>
    </div>
  )
}

export default DasboardCultivo