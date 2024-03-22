import React from 'react'
import NavbarAdmin from '../components/Navbar_Admin'
import NavbarTop from '../components/Navbar_Top'
import MainUsers from '../components/dashboard/MainUsers'

const DashboardUsuarios = () => {
  return (
    <div>
        <NavbarTop/>
        <NavbarAdmin/>
        <MainUsers/>
    </div>
  )
}

export default DashboardUsuarios