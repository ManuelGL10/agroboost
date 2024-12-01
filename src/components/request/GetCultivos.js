const GetCultivos = async () => {
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${backendUrl}/cultivos`, {
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
  