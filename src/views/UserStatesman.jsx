import React from "react";
import NavbarUser from "../components/User/NavBarUser";
import NavbarLat from "../components/User/NavBarLat";
import StatesmanUser from "../components/User/StatesmanUser";

const UserStatesman = () => {
    return(
        <div className='flex'>
        <div className='w-sidebar-cero lg:w-sidebar'>
          <NavbarLat/>
        </div>
        <div className='w-content-full lg:w-content'>
          <NavbarUser/>
          <StatesmanUser/>
        </div>
      </div>
    )
}

export default UserStatesman