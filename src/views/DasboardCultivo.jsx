import React from 'react'
import NavbarTop from '../components/Navbar_Top'
import NavbarAdmin from '../components/Navbar_Admin'
import MainCultivo from '../components/MainCultivo'

const DasboardCultivo = () => {
  return (
    <div>
        <NavbarTop/>
        <NavbarAdmin/>
        <MainCultivo/>
    </div>
  )
}

export default DasboardCultivo