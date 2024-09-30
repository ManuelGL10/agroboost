import React from "react";
import NavbarUser from "../components/User/NavBarUser";
import NavbarLat from "../components/User/NavBarLat";
import CropUser from "../components/User/CropUser"

const UserCrop = () => {
    return(
      <div className='flex'>
        <div className='w-sidebar-cero lg:w-sidebar'>
          <NavbarLat/>
        </div>
        <div className='w-content-full lg:w-content'>
          <NavbarUser/>
          <CropUser/>
        </div>
      </div>
    )
}

export default UserCrop