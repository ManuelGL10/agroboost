const GetCultivos = async () => {
    try {
      const response = await fetch(`http://localhost:4000/cultivos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener los datos del usuario');
      }
  
      const cultivosData = await response.json();
      return cultivosData;
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      return null;
    }
  };
  
  export default GetCultivos;
  