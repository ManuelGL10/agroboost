import React from 'react';

const ProductDetails = ({ productName, productDescription, productPrice, productImage }) => {
  return (
    <div className="px-4 py-3 flex items-center mr-28">
      <img className="w-28 mx-auto rounded-lg" src={productImage} alt={productName} />
      <div className="ml-4">
        <p className="text-sm text-gray-600">Nombre: {productName}</p>
        <p className="text-sm text-gray-600">Descripción: {productDescription}</p>
        <p className="text-sm text-gray-600">Precio: ${productPrice}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
