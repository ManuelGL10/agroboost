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
import ProductosVenta from './views/ProductosVenta';
import UserHome from './views/UserHome';
import UserDevice from './views/UserDevice';
import UserInf from './views/UserInf';
import AddressInf from './views/AddressInf';
import Cultivo from './views/Cultivo';
import UserReminder from './views/UserReminder';
import UserCrop from './views/UserCrop';
import Venta from './views/Venta';
import VentaCart from './views/VentaCart';
import Clima from './views/Clima';
import VentaCart from './views/VentaCart';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/producto' element={<Producto/>}/>
      <Route path='/servicio' element={<Servicio/>}/>
      <Route path='/dashboardhome/:userId' element={<DashboardHome/>}/>
      <Route path='/dashboardventa' element={<DashboardVenta/>}/>
      <Route path='/dashboardproduct' element={<DashboardProduct/>}/>
      <Route path='/dashboardusers' element={<DashboardUsuarios/>}/>
      <Route path='/dashboardconfig' element={<DashboardConfig/>}/>
      <Route path='/dasboardcultivo' element={<DasboardCultivo/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registro' element={<Registro/>} />
      <Route path='/dashboardregistro' element={<DashboardRegistro/>}/>
      <Route path='/password' element={<Password/>} />
      <Route path='/newpass' element={<NewPass/>} />
      <Route path='/domicilio' element={<Domicilio/>} />
      <Route path='/profile/:userId' element={<ProfileUser/>} />
      <Route path='/verificationpage' element={<VerificationPage/>} />
      <Route path='/productosventa' element={<ProductosVenta/>} />
      <Route path='/userhome/:userId' element={<UserHome/>} />
      <Route path='/userDevice/:userId' element={<UserDevice/>} />
      <Route path='/userReminder/:userId' element={<UserReminder/>} />
      <Route path='/userCrop/:userId' element={<UserCrop/>} />
      <Route path='/userinf/:userId' element={<UserInf/>} />
      <Route path='/addressinf' element={<AddressInf/>} />
      <Route path='/cultivo' element={<Cultivo/>} />
      <Route path='/userReminder' element={<UserReminder/>} />
      <Route path='/userCrop' element={<UserCrop/>} />
      <Route path='/venta' element={<Venta/>}/>
      <Route path='/ventacard' element={<VentaCart/>}/>
      <Route path='/clima' element={<Clima/>}/>
      <Route path='/ventacard' element={<VentaCart/>}/>
    </Routes>
  );
}

export default App;
