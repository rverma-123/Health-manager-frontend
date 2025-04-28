import React, { useState } from 'react';
import Modal from './Modal';

const Product = ({ product, addToCart, buyNow }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className=" object-contain w-full h-40 rounded-lg cursor-pointer "
        onClick={openModal}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-700">RS.{product.price}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <button
            onClick={() => buyNow(product)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Buy Now
          </button>
        </div>
      </div>
      {showModal && <Modal product={product} closeModal={closeModal} />}
    </div>
  );
};

export default Product;


