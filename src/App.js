import './App.css';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros'
import Producto from './views/Producto';
import Servicio from './views/Servicio';
import Login from './views/Login';
import Registro from './views/Registro';
import { Route, Routes } from 'react-router-dom';
import DashboardHome from './views/Dashboard_Home';
import DashboardVenta from './views/DashboardVenta';
import DashboardProduct from './views/DashboardProduct';
import DashboardUsuarios from './views/DashboardUsuarios';
import DashboardRegistro from './views/DashboardRegistro'; 
import DashboardConfig from './views/DashboardConfig';
import DasboardCultivo from './views/DasboardCultivo';
import '@fontsource/hind-madurai'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/producto' element={<Producto/>}/>
      <Route path='/servicio' element={<Servicio/>}/>
      <Route path='/dashboardhome' element={<DashboardHome/>}/>
      <Route path='/dashboardventa' element={<DashboardVenta/>}/>
      <Route path='/dashboardproduct' element={<DashboardProduct/>}/>
      <Route path='/dashboardusers' element={<DashboardUsuarios/>}/>
      <Route path='/dashboardconfig' element={<DashboardConfig/>}/>
      <Route path='/dasboardcultivo' element={<DasboardCultivo/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registro' element={<Registro/>} />
      <Route path='/dashboardregistro' element={<DashboardRegistro/>}/>
    </Routes>
  );
}

export default App;
