const GetUsers = async () => {
    try {
      const response = await fetch('http://localhost:4000/users', {
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
  