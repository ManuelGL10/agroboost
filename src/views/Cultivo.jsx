import React from "react";
import NavBarLat from '../components/User/NavBarLat'
import NavBarUser from '../components/User/NavBarUser'
import CultivoForm from "../components/CultivoForm";


function Cultivo() {
    return(
        <div className='bg-background'>
            <NavBarLat/>
            <NavBarUser/>
            <CultivoForm/>
        </div>
    );

};

export default Cultivo