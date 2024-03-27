import React, { useEffect, useState} from 'react'
import NavbarTop from '../components/Navbar_Top'
import NavbarAdmin from '../components/Navbar_Admin'
import MainProfile from '../components/dashboard/MainProfile'
import { useParams } from 'react-router-dom'
import GetUser from '../components/request/GetUser'

const ProfileUser = () => {
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
    <div>
        <NavbarTop userData={userData}/>
        <NavbarAdmin/>
        <MainProfile userData={userData}/>
    </div>
  )
}

export default ProfileUser