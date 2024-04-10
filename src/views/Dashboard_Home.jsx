import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../components/Navbar_Admin';
import NavbarTop from '../components/Navbar_Top';
import MainHome from '../components/dashboard/MainHome';
import { Params, useParams } from 'react-router-dom';
import GetUser from '../components/request/GetUser';

const Dashboard_Home = () => {
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
      <NavbarAdmin />
      <NavbarTop userData={userData}/>
      <MainHome/>
    </div>
  );
};

export default Dashboard_Home;
