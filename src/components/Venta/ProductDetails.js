import React from 'react';

const ProductDetails = ({ productName, productDescription, productPrice, productImage }) => {
  return (
    <div className="px-4 py-3 items-center">
      <img className="w-64 mx-auto rounded-lg" src={productImage} alt={productName} />
      <div className="mt-4">
        <p className="text-gray-600 font-semibold flex">Nombre:<p className='font-normal ml-2'>{productName}</p></p>
        <p className="text-gray-600 font-semibold flex">Descripción:<p className='font-normal ml-2'>{productDescription}</p></p>
        <p className="text-gray-600 font-semibold flex">Precio:<p className='font-normal ml-2'>${productPrice}</p></p>
      </div>
    </div>
  );
};

export default ProductDetails;
