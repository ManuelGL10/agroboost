const SendEmail = async ({ email }) => {
    try {
      const response = await fetch('http://localhost:4000/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo_electronico: email,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        return { success: true, data };
      } else {
        return { success: false, error: data.mensaje };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  
  export default SendEmail;
  