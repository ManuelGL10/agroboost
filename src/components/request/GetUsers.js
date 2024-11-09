const GetUsers = async () => {
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${backendUrl}/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener los datos de los usuarios');
      }
  
      const getUsers = await response.json();
      return getUsers;
    } catch (error) {
      console.error('Error al obtener los datos de los usuarios:', error);
      return null;
    }
  };
  
  export default GetUsers;
  