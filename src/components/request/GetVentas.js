const GetVentas = async () => {
    try {
      const response = await fetch(`http://localhost:4000/ventas`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener los datos de las ventas');
      }
  
      const cultivosData = await response.json();
      return cultivosData;
    } catch (error) {
      console.error('Error al obtener los datos de las ventas:', error);
      return null;
    }
  };
  
  export default GetVentas;
  