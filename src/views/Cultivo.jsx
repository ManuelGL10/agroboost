import React from "react";
import NavbarAdmin from '../components/Navbar_Admin';
import NavbarTop from "../components/Navbar_Top";
import MainRegistro from "../components/dashboard/MainRegistro";
import CultivoForm from "../components/CultivoForm";


function Cultivo() {
    return(
        <div className='bg-background'>
            <NavbarTop/>
            <CultivoForm/>
            <NavbarAdmin/>
        </div>
    );

};

export default Cultivo