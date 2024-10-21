export const UpdateProduct = async (userData) => {
    try {
        const response = await fetch('http://localhost:4000/updateProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Error al actualizar los datos');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error interno del servidor');
    }
};