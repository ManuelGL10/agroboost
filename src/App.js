import './App.css';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros'
import Producto from './views/Producto';
import Servicio from './views/Servicio';
import Login from './views/Login';
import Registro from './views/Registro';
import { Route, Routes } from 'react-router-dom';
import '@fontsource/hind-madurai'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/producto' element={<Producto/>}/>
      <Route path='/servicio' element={<Servicio/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registro' element={<Registro/>} />
    </Routes>
  );
}

export default App;
