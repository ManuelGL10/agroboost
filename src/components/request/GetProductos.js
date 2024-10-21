const GetProductos = async () => {
    try {
      const response = await fetch(`http://localhost:4000/productos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener los productos');
      }
  
      const cultivosData = await response.json();
      return cultivosData;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      return null;
    }
  };
  
  export default GetProductos;
  