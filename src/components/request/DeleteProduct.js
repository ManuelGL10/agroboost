export const DeleteProduct = async ( id ) => {
    try {
        const response = await fetch('http://localhost:4000/deleteProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( id )
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
