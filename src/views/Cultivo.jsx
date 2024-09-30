import React from "react";
import NavBarLat from '../components/User/NavBarLat'
import NavBarUser from '../components/User/NavBarUser'
import CultivoForm from "../components/CultivoForm";


function Cultivo() {
    return(
        <div className='flex'>
        <div className='w-sidebar-cero lg:w-sidebar'>
          <NavBarLat/>
        </div>
        <div className='w-content-full lg:w-content'>
          <NavBarUser/>
          <CultivoForm/>
        </div>
      </div>
    );

};

export default Cultivo