import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
// import { ShoppingCartIcon } from '@heroicons/react/outline'; // Importing ShoppingCartIcon from Heroicons
import { MdOutlineShoppingCart } from "react-icons/md";// Importing react icons from Heroicons
import whatLogo from '../Images/what logo.jpeg'


const products = [
  { id: 1,   name: (<span>Product 1<br/> <div className=' text-small font-light '>This is a protien powder of 500g.</div> </span> ), price: 599, image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720449209/HelathFiles/Mb_protien_powder_zftrmj.jpg' },
  { id: 2, name: (<span>Product 2<br/> <div className=' text-small font-light '>This is a Fitbit band.</div> </span> ), price: `14,999 `, image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720449289/HelathFiles/fitbit_band_lwpbxp.jpg' },
  { id: 3, name: (<span>Product 3<br/> <div className=' text-small font-light '>A resistance tube weight up to 25 kg's.</div> </span> ), price: 699, image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720449291/HelathFiles/resistance_tube_pfbdfd.jpg' },
  { id: 4, name: (<span>Product 4<br/> <div className=' text-small font-light '>A skipping rope.</div> </span> ), price: 199, image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720449291/HelathFiles/skipping_roep_fwhhwu.jpg' },
  { id: 5, name: (<span>Product 5<br/> <div className=' text-small font-light '>A Yoga mate with a strong grip.</div> </span> ), price: 349, image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720449292/HelathFiles/yoga_mate_heo6x6.jpg' },
  { id: 6, name: (<span>Product 6<br/> <div className=' text-small font-light '>This is a Apple Watch Ultra 2 .</div> </span> ), price: `79,999`, image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720449293/HelathFiles/apple_ultra_yeiclv.jpg' },
  { id: 7, name: (<span>Product 7<br/> <div className=' text-small font-light '>Apple Watch series 6.</div> </span> ), price: '46,999', image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720449293/HelathFiles/apple_watch_6_mci59c.jpg' },
  { id: 8, name: (<span>Product 8<br/> <div className=' text-small font-light '>Dumbells of 20 kg's.</div> </span> ), price: 499 , image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720450699/HelathFiles/dumbell_img_ehugxb.jpg' },
];

function Shopping() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); // State to control cart visibility

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  const buyNow = (product) => {
    // console.log(product);
    // console.log(product.id);
    alert(`Buying product ${product.id} for RS.${product.price}`);
    window.open(`https://wa.me/917803087585?text= product ${product.id} for Rs. ${product.price} `, '_blank');
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-14">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Buy Our Best Products</h1>
        <button
          onClick={toggleCart}
          className="relative inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        >
          {/* <ShoppingCartIcon className="h-6 w-6 mr-2" aria-hidden="true" /> */}
          <MdOutlineShoppingCart size={25} />
          <span className="font-bold">Cart ({cart.length})</span>
        </button>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} buyNow={buyNow} />
        ))}
      </div>

      {cart.length > 0 && showCart && <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />}
      
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4 mt-9">
          <div className="text-center text-lg font-semibold text-gray-700">
              This above are out some products. <br/>
              If you want to buy some categories of product just WhatsApp us by clicking the below WhatsApp button. <br/>
              If there product's available - we respond you. 
          </div>
          <div>
              <a href="https://wa.me/7803087585" target="_blank" rel="noopener noreferrer">
                  <img src={whatLogo} alt='WhatsApp logo' className="w-16 h-16 object-contain cursor-pointer transition-transform transform hover:scale-110" />
              </a>
          </div>
          <p className="text-center text-lg font-semibold text-gray-700">
            Out team reaches you as fast as possible
          </p>
          <p className="text-center text-lg font-semibold text-gray-700">
            Thank You for visit !!
          </p>
      </div>



    </div>
  );
}

export default Shopping;
