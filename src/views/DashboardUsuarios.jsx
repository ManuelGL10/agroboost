import React, { useState, useEffect } from 'react'
import NavbarAdmin from '../components/Navbar_Admin'
import NavbarTop from '../components/Navbar_Top'
import MainUsers from '../components/dashboard/MainUsers'
import GetUser from '../components/request/GetUser'
import { useParams } from 'react-router-dom'

const DashboardUsuarios = () => {
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

  console.log(userData)

  return (
    <div>
        <NavbarTop userData={userData}/>
        <NavbarAdmin userData={userData}/>
        <MainUsers/>
    </div>
  )
}

export default DashboardUsuarios