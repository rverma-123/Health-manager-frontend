import React from 'react';

const Cart = ({ cart, addToCart, removeFromCart }) => {
  // console.log(cart[0].price);
  // console.log(cart[0].quantity);
  // console.log(removeFromCart);
  const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  // const total = cart.reduce((sum, product) => sum +cart[0].price* cart[0].quantity , 0);
  // console.log(total);
  const buyAllProducts = () => {
    const alertMessage = cart.map(product => `${product.name} x ${product.quantity}`).join('\n');
    alert(`Buying:\n${alertMessage}\nTotal: RS ${total}`);
  };

  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="mb-2 flex justify-between items-center">
                <div>
                  {product.name} - Rs {product.price} x {product.quantity}
                </div>
                <div>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 mx-1"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(product)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 mx-1"
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-end mt-4">
            {cart.length > 0 && (
              <button
                onClick={buyAllProducts}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Buy Now
              </button>
            )}
          </div>
          <p className="text-xl font-bold mt-2">Total: Rs {total}</p>
        </>
      )}
    </div>
  );
};

export default Cart;




// import React from 'react';

// const Cart = ({ cart, addToCart, removeFromCart }) => {
//   const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

//   return (
//     <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-gray-700">Your cart is empty.</p>
//       ) : (
//         <>
//           <ul>
//             {cart.map((product) => (
//               <li key={product.id} className="mb-2 flex justify-between items-center">
//                 <div>
//                   {product.name} - ${product.price} x {product.quantity}
//                 </div>
//                 <div>
//                   <button
//                     onClick={() => addToCart(product)}
//                     className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 mx-1"
//                   >
//                     +
//                   </button>
//                   <button
//                     onClick={() => removeFromCart(product)}
//                     className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 mx-1"
//                   >
//                     -
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <p className="text-xl font-bold mt-4">Total: ${total}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;





// import React from 'react';

// const Cart = ({ cart, addToCart, removeFromCart }) => {
//   const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

//   return (
//     <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-gray-700">Your cart is empty.</p>
//       ) : (
//         <>
//           <ul>
//             {cart.map((product) => (
//               <li key={product.id} className="mb-2 flex justify-between items-center">
//                 <div>
//                   {product.name} - ${product.price} x {product.quantity}
//                 </div>
//                 <div>
//                   <button
//                     onClick={() => addToCart(product)}
//                     className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 mx-1"
//                   >
//                     +
//                   </button>
//                   <button
//                     onClick={() => removeFromCart(product)}
//                     className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 mx-1"
//                   >
//                     -
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <p className="text-xl font-bold mt-4">Total: ${total}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


