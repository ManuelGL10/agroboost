import './App.css';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros'
import Producto from './views/Producto';
import Servicio from './views/Servicio';
import { Route, Routes } from 'react-router-dom';
import DashboardHome from './views/Dashboard_Home';
import DashboardVenta from './views/DashboardVenta';
import DashboardProduct from './views/DashboardProduct';
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
    </Routes>
  );
}

export default App;
