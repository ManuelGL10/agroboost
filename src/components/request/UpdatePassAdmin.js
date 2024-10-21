export const UpdatePassAdmin = async ({ id, contrasena }) => {
    try {
        const response = await fetch('http://localhost:4000/updatePassAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, contrasena })
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
