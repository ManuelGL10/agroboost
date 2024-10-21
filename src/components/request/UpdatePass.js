export const UpdatePass = async ({ email, contrasena }) => {
    try {
        const response = await fetch('http://localhost:4000/updatePass', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, contrasena })
        });

        if (!response.ok) {
            throw new Error('Error al actualizar la contraseña');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error interno del servidor');
    }
};
