import React from "react";
import NavbarUser from "../components/User/NavBarUser";
import NavbarLat from "../components/User/NavBarLat";
import StatesmanUser from "../components/User/StatesmanUser";

const UserStatesman = () => {
    return(
        <div>
            <NavbarUser/>
            <NavbarLat/>
            <StatesmanUser/>
        </div>
    )
}

export default UserStatesman