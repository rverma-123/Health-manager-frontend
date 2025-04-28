import React from 'react';

const Modal = ({ product, closeModal }) => {
  return (
    <div className=" fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-3/5">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <div className="mb-4">
          <img src={product.image} alt={product.name} className="w-full rounded-lg" />
        </div>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-gray-900 font-bold">Price: ${product.price}</p>
        <button
          onClick={closeModal}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
