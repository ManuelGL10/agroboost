import React from "react";
import NavbarUser from "../components/User/NavBarUser";
import NavbarLat from "../components/User/NavBarLat";
import CropUser from "../components/User/CropUser"

const UserCrop = () => {
    return(
        <div>
            <NavbarUser/>
            <NavbarLat/>
            <CropUser/>
        </div>
    )
}

export default UserCrop