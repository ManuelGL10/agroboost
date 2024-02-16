import logo from './logo.svg';
import './App.css';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros'
import Producto from './views/Producto';
import Servicio from './views/Servicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/producto' element={<Producto/>}/>
      <Route path='/servicio' element={<Servicio/>}/>
    </Routes>
  );
}

export default App;
