import React from "react";
import NavbarTop from "../components/Navbar_Top";
import UserInfo from "../components/UserInfo";
import NavbarLat from "../components/User/NavBarLat";
import NavbarUser from "../components/User/NavBarUser";

function UserInf() {
    return(
        <div className='bg-background'>
            <NavbarUser/>
            <UserInfo/>
            <NavbarLat/>
        </div>
    );

};

export default UserInf