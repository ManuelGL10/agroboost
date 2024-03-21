import React from "react";
import NavbarAdmin from '../components/Navbar_Admin';
import NavbarTop from "../components/Navbar_Top";
import MainRegistro from "../components/MainRegistro";


function DashboardRegistro() {
    return(
        <div>
            <NavbarTop/>
            <MainRegistro/>
            <NavbarAdmin/>
        </div>
    );

};

export default DashboardRegistro