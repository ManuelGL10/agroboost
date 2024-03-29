import './App.css';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros'
import Producto from './views/Producto';
import Servicio from './views/Servicio';
import Login from './views/Login';
import Registro from './views/Registro';
import Password from './views/Password';
import NewPass from './views/NewPass';
import Domicilio from './views/Domicilio';
import { Route, Routes } from 'react-router-dom';
import DashboardHome from './views/Dashboard_Home';
import DashboardVenta from './views/DashboardVenta';
import DashboardProduct from './views/DashboardProduct';
import DashboardUsuarios from './views/DashboardUsuarios';
import DashboardRegistro from './views/DashboardRegistro'; 
import DashboardConfig from './views/DashboardConfig';
import DasboardCultivo from './views/DasboardCultivo';
import VerificationPage from './views/VerificationPage';
import '@fontsource/hind-madurai'
import ProfileUser from './views/ProfileUser';
import Navbar_Top from './components/Navbar_Top';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/producto' element={<Producto/>}/>
      <Route path='/servicio' element={<Servicio/>}/>
      <Route path='/dashboardhome/:userId' element={<DashboardHome/>}/>
      <Route path='/dashboardventa/:userId' element={<DashboardVenta/>}/>
      <Route path='/dashboardproduct/:userId' element={<DashboardProduct/>}/>
      <Route path='/dashboardusers/:userId' element={<DashboardUsuarios/>}/>
      <Route path='/dashboardconfig' element={<DashboardConfig/>}/>
      <Route path='/dasboardcultivo/:userId' element={<DasboardCultivo/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registro' element={<Registro/>} />
      <Route path='/dashboardregistro' element={<DashboardRegistro/>}/>
      <Route path='/password' element={<Password/>} />
      <Route path='/newpass' element={<NewPass/>} />
      <Route path='/domicilio' element={<Domicilio/>} />
      <Route path='/profile/:userId' element={<ProfileUser/>} />
      <Route path='/verificationpage' element={<VerificationPage/>} />
    </Routes>
  );
}

export default App;
