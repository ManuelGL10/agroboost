import React from "react";
import NavbarTop from "../components/Navbar_Top";
import UserInfo from "../components/UserInfo";
import NavbarLat from "../components/User/NavBarLat";
import NavbarUser from "../components/User/NavBarUser";

function UserInf() {
    return(
        <div className='flex'>
        <div className='w-sidebar-cero lg:w-sidebar'>
          <NavbarLat/>
        </div>
        <div className='w-content-full lg:w-content'>
          <NavbarUser/>
          <UserInfo/>
        </div>
      </div>
    );

};

export default UserInf