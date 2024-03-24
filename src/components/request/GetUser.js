const GetUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/user/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al obtener los datos del usuario');
      }
  
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      return null;
    }
  };
  
  export default GetUser;
  