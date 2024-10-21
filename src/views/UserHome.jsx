import React, { useEffect, useState } from 'react'
import NavBarLat from '../components/User/NavBarLat'
import IncioUser from '../components/User/InicioUser'
import Navbartop from '../components/Navbar_Top'
import { useParams } from 'react-router-dom';
import GetUser from '../components/request/GetUser';
import NavbarUser from '../components/User/NavBarUser';

const UserHome = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userId) {
      GetUser(userId)
        .then(userData => {
          setUserData(userData);
        })
        .catch(error => {
          console.error('Error al obtener los datos del usuario:', error);
        });
    }
  }, [userId]);

  return (
    <div className='flex'>
      <div className='w-sidebar-cero lg:w-sidebar'>
        <NavBarLat userData={userData}/>
      </div>
      <div className='w-content-full lg:w-content'>
        <NavbarUser userData={userData}/>
        <IncioUser/>
      </div>
    </div>
  )
}

export default UserHome