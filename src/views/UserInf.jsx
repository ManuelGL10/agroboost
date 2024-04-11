import React from "react";
import NavbarAdmin from '../components/Navbar_Admin';
import NavbarTop from "../components/Navbar_Top";
import MainRegistro from "../components/dashboard/MainRegistro";
import UserInfo from "../components/UserInfo";


function UserInf() {
    return(
        <div className='bg-background'>
            <NavbarTop/>
            <UserInfo/>
            <NavbarAdmin/>
        </div>
    );

};

export default UserInf