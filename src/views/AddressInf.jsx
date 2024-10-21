import React from "react";
import NavbarAdmin from '../components/Navbar_Admin';
import NavbarTop from "../components/Navbar_Top";
import MainRegistro from "../components/dashboard/MainRegistro";
import AddressInformation from "../components/AddressInformation";


function AddressInf() {
    return(
        <div className='bg-background'>
            <NavbarTop/>
            <AddressInformation/>
            <NavbarAdmin/>
        </div>
    );

};

export default AddressInf