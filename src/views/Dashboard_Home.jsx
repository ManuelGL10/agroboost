import React from 'react';
import NavbarAdmin from '../components/Navbar_Admin';
import NavbarTop from '../components/Navbar_Top';
import MainHome from '../components/dashboard/MainHome';

const Dashboard_Home = () => {
  return (
      <div>
        <NavbarTop />
        <MainHome/>
        <NavbarAdmin />
      </div>
  );
};

export default Dashboard_Home;
