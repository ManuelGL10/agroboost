import React from 'react';
import Navbar from '../components/Navbar';
import Producto from '../components/Producto';
import Footer from '../components/Footer'
import sensor from '../img/sensor.jpeg';
import nutriente from '../img/nutriente.jpeg';
import regar from '../img/pexels-fox-750836.jpg';


const ProductosVenta = () => {
  const productos = [
    {
      id: 1,
      nombre: 'Sensor de Temperatura',
      precio: 50,
      imagen: sensor
    },
    {
      id: 2,
      nombre: 'Sensor de Humedad',
      precio: 60,
      imagen: regar
    },
    {
        id: 3,
        nombre: 'Sensor de Nutrientes',
        precio: 60,
        imagen: nutriente
      },
      
    // Agrega más productos según sea necesario
  ];

  const handleCompra = (id) => {
    console.log(`Se ha comprado el producto con ID ${id}`);
    // Aquí puedes agregar la lógica para comprar el producto
  };

  return (
    <div>
        <Navbar/>
        <div className="flex flex-col text-center px-12 py-6">
            <span className='block font-semibold md:text-6xl sm:text-5xl text-4xl text-custom-204E51'>
                    Producto en Venta
            </span>
            <div className="container mx-auto mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {productos.map(producto => (
                    <Producto
                    key={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    imagen={producto.imagen}
                    onCompra={() => handleCompra(producto.id)}
                    />
                ))}
            </div>
        </div>
        <Footer/>
    </div>
  );
};

export default ProductosVenta;
