// making payment integration
import axios from "axios";
import React from "react";

export default function Graphs(){

 const buyFunction = async ()=>{
  
  let response = await axios.post('http://localhost:4000/payment')

  if(response && response.status == 200){
    window.location.href = response.data.url;
    console.log(response.data);
  }

 }


  return (
    <div className=" mt-40">
          <button onClick={buyFunction}>
            Buy Now
          </button>
    </div>
  )


}






























// Makign product system-----------------------------------------------
// import React, { useState } from 'react';
// import Product from './Product';
// import Cart from './Cart';
// // import { ShoppingCartIcon } from '@heroicons/react/outline'; // Importing ShoppingCartIcon from Heroicons
// import { MdOutlineShoppingCart } from "react-icons/md";// Importing react icons from Heroicons
// import whatLogo from '../Images/what logo.jpeg'

// const products = [
//   { id: 1,   name: (<span>Product 1<br/> <div className=' text-small font-light '>This is a protien powder of 500g.</div> </span> ), price: 599, image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720449209/HelathFiles/Mb_protien_powder_zftrmj.jpg' },
//   { id: 2, name: (<span>Product 2<br/> <div className=' text-small font-light '>This is a Fitbit band.</div> </span> ), price: `14,999 `, image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720449289/HelathFiles/fitbit_band_lwpbxp.jpg' },
//   { id: 3, name: (<span>Product 3<br/> <div className=' text-small font-light '>A resistance tube weight up to 25 kg's.</div> </span> ), price: 699, image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720449291/HelathFiles/resistance_tube_pfbdfd.jpg' },
//   { id: 4, name: (<span>Product 4<br/> <div className=' text-small font-light '>A skipping rope.</div> </span> ), price: 199, image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720449291/HelathFiles/skipping_roep_fwhhwu.jpg' },
//   { id: 5, name: (<span>Product 5<br/> <div className=' text-small font-light '>A Yoga mate with a strong grip.</div> </span> ), price: 349, image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720449292/HelathFiles/yoga_mate_heo6x6.jpg' },
//   { id: 6, name: (<span>Product 6<br/> <div className=' text-small font-light '>This is a Apple Watch Ultra 2 .</div> </span> ), price: `79,999`, image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720449293/HelathFiles/apple_ultra_yeiclv.jpg' },
//   { id: 7, name: (<span>Product 7<br/> <div className=' text-small font-light '>Apple Watch series 6.</div> </span> ), price: '46,999', image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720449293/HelathFiles/apple_watch_6_mci59c.jpg' },
//   { id: 8, name: (<span>Product 8<br/> <div className=' text-small font-light '>Dumbells of 20 kg's.</div> </span> ), price: 499 , image: 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1720450699/HelathFiles/dumbell_img_ehugxb.jpg' },
// ];

// function Graphs() {
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false); // State to control cart visibility

//   const addToCart = (product) => {
//     const existingProduct = cart.find(item => item.id === product.id);
//     if (existingProduct) {
//       setCart(cart.map(item =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       ));
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (product) => {
//     const existingProduct = cart.find(item => item.id === product.id);
//     if (existingProduct.quantity === 1) {
//       setCart(cart.filter(item => item.id !== product.id));
//     } else {
//       setCart(cart.map(item =>
//         item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
//       ));
//     }
//   };

//   const buyNow = (product) => {
//     alert(`Buying ${product.name} for RS.${product.price}`);
//     window.open(`https://wa.me/917803087585?text= ${product.name} for Rs. ${product.price} `, '_blank');
//   };

//   const toggleCart = () => {
//     setShowCart(!showCart);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 mt-14">
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-4xl font-bold">Buy Our Best Products</h1>
//         <button
//           onClick={toggleCart}
//           className="relative inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
//         >
//           {/* <ShoppingCartIcon className="h-6 w-6 mr-2" aria-hidden="true" /> */}
//           <MdOutlineShoppingCart size={25} />
//           <span className="font-bold">Cart ({cart.length})</span>
//         </button>
//       </header>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map(product => (
//           <Product key={product.id} product={product} addToCart={addToCart} buyNow={buyNow} />
//         ))}
//       </div>

//       {cart.length > 0 && showCart && <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />}
      
//       <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4 mt-9">
//           <div className="text-center text-lg font-semibold text-gray-700">
//               This above are out some products. <br/>
//               If you want to buy some categories of product just WhatsApp us by clicking the below WhatsApp button. <br/>
//               If there product's available - we respond you. 
//           </div>
//           <div>
//               <a href="https://wa.me/7803087585" target="_blank" rel="noopener noreferrer">
//                   <img src={whatLogo} alt='WhatsApp logo' className="w-16 h-16 object-contain cursor-pointer transition-transform transform hover:scale-110" />
//               </a>
//           </div>
//           <p className="text-center text-lg font-semibold text-gray-700">
//             Out team reaches you as fast as possible
//           </p>
//           <p className="text-center text-lg font-semibold text-gray-700">
//             Thank You for visit !!
//           </p>
//       </div>



//     </div>
//   );
// }

// export default Graphs;


// import React, { useState } from 'react';
// import Product from './Product';
// import Cart from './Cart';

// const products = [
//   { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/150' },
//   { id: 2, name: 'Product 2', price: 150, image: 'https://via.placeholder.com/150' },
//   { id: 3, name: 'Product 3', price: 200, image: 'https://via.placeholder.com/150' },
// ];

// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     const existingProduct = cart.find(item => item.id === product.id);
//     if (existingProduct) {
//       setCart(cart.map(item =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       ));
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (product) => {
//     const existingProduct = cart.find(item => item.id === product.id);
//     if (existingProduct.quantity === 1) {
//       setCart(cart.filter(item => item.id !== product.id));
//     } else {
//       setCart(cart.map(item =>
//         item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
//       ));
//     }
//   };

//   const buyNow = (product) => {
//     alert(`Buying ${product.name} for $${product.price}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-4xl font-bold mb-6 text-center">E-commerce Site</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map(product => (
//           <Product key={product.id} product={product} addToCart={addToCart} buyNow={buyNow} />
//         ))}
//       </div>
//       <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
//     </div>
//   );
// }

// export default App;




















// Whatsapp message ----------------------------------------------------------------------------------
// import React from 'react'
// function Graphs() {
// for sending the message on whatsapp --------------------------------------
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   alert('You can place your order');
  //   window.open('https://wa.me/917489439505?text=Hello how can i help you? /n You can place your order here', '_blank');
  // };

  // return (
  //   <div className="mt-56">
  //     <div>Hello</div>
  //     <div>
  //       <a 
  //         href="https://wa.me/917489439505?text=Hello how can i help you? /n You can place your order here" 
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         onClick={handleClick}
  //       >
  //         Click me
  //       </a>
  //     </div>
  //   </div>
  // );



// for sending the message on whatsapp --------------------------------------
  // return (
  //   <div className=' mt-56'>
  //        <div>Hello </div>
  //        <div>
  //           <a href="https://wa.me/919770424352?text=Hello how can i help you?"  target='_blank' >Click me</a>
  //        </div>
  //   </div>
  // )
// }

// export default Graphs








































// demo cloudinary ulpoad---------------------
// import axios from 'axios';
// import React from 'react'
// import { useState } from 'react'

// function Graphs() {
//     const [img , setImg] = useState(null); 
//     // for taking email from local storage
//     const emaill = localStorage.getItem('email');

//     const uploadFile = async (type) =>{
//         const data = new FormData();
//         data.append('file', img);
       
//         // (this is only for unauthentication(held by api calling in frontend directly) steps there are df stpes for authenticated cloudinary upload (that is held in backend eith the help of keys and secrets))
//         // this  'images_preset' is a preset name in cloudinary just follow this steps therwise see this "Web Wizard - ultimate guid to cloudinary" 
//         //  1. go to cloudinary setting 
//         // 2. got to Upload -> Upload presets -> Add upload preset
//         // 3. enter name in 'upload preset' ( i.e. images_preset) 
//         // 4. change 'sigend Mode' to 'unsigned'
//         // 5. than enter a folder name for images upload  
//         data.append('upload_preset', 'images_preset');
//         try {
//            let resourceType = 'image';
//            let cloudname  = 'dpxkuy4nn';
//            let api = `http://api.cloudinary.com/v1_1/${cloudname}/${resourceType}/upload`;

//            const res  = await axios.post(api, data);
//            const {secure_url} = res.data;
//            console.log(secure_url);
//            return secure_url;

//         } catch (error) {
//           console.log('Error in upload file system ');
//           console.log(error);
//         }
         
//     }
 

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try{
//           //  Upload img
//           const imgUrl = await uploadFile('image');
          
//           //sending backend api request for storing the image url
//           await axios.post('http://localhost:4000/profileImgUpload' , {imgUrl ,emaill});

//           setImg(null);
//           console.log(' File uploaded successfully ');

//         }catch(error){
//           console.log(' Error Comes in uploading files.. ')
//           console.log(error);
//         }
//     }
  

//   return (
//     <div className=' mt-48'>
//        <form onSubmit={handleSubmit}>
//           <div>
//              <label htmlFor='img'>Image:</label>
//              <br/>
//              <input
//                 type='file'
//                 accept='image/'
//                 id='img'
//                 onChange={ (e) => setImg((prev) => e.target.files[0] ) }
//              />
//           </div>
//           <button type='submit'>Submit</button>
//        </form>
        
//     </div>
//   )
// }

// export default Graphs











// import React, { useState } from 'react';

// // 


// export default function Graphs(){

//    const [file, setFile] = useState("");

   
//   // const previweFiles(file){
//   //    const reader = new FileReader();
//   //  }



//   const handleChange = (e) => {
//     // console.log(e.target.files);
//     const file = e.Graphs.files[0];
//     // setFile(file);
//     // previweFiles(file);
//   }

//   const handleSubmit = () => {
   
//     console.log('Submitted');
//   }

  
//   return (
//     <div className=' mt-60'>
//        <form onSubmit={e => handleSubmit(e)} >
//           <label htmlFor='fileInput'> Upload your file </label>
//           <input type='file' id='fileInput' onChange={e => handleChange(e)} required
//            accept='image/png , image/jpeg , image/jpg , image/jfif' />
//           <button type='submit'>Submit</button>
//       </form>
//  </div>

//   );
// }










// import { Bar } from 'react-chartjs-2';
// import axios from 'axios'
// function Graphs() {


//   const [data, setData] = useState([]);
//   const [intake, setIntake] = useState(0);
//   const [burn, setBurn] = useState(0);


//   //for taking the id and gmail from the backend
  

//   // const handleAddData = () => {
//   //   const today = new Date().toLocaleDateString();
//   //   const existingDayIndex = data.findIndex(entry => entry.date === today);

//   //   if (existingDayIndex !== -1) {
//   //     // Update existing day's data
//   //     const updatedData = [...data];
//   //     updatedData[existingDayIndex] = {
//   //       date: today,
//   //       // intake: updatedData[existingDayIndex].intake + parseInt(intake),
//   //       intake:  parseInt(intake),
//   //       burn:   parseInt(burn)
//   //       // burn: updatedData[existingDayIndex].burn + parseInt(burn)
//   //     };
//   //     setData(updatedData);
//   //   } else {
//   //     // Add new day's data
//   //     setData(prevData => [...prevData, { date: today, intake: parseInt(intake), burn: parseInt(burn) }]);
//   //   }

//   //   setIntake(0);
//   //   setBurn(0);
//   // };

//   // // Generate labels for each day
//   // const labels = data.map(entry => entry.date);

//   // // Generate datasets for intake and burn data
//   // const intakeData = data.map(entry => entry.intake);
//   // const burnData = data.map(entry => entry.burn);

//   // // Clear data after 7 days
//   // if (data.length === 7) {
//   //   setTimeout(() => {
//   //     setData([]);
//   //   }, 604800000); // 7 days in milliseconds
//   // }

  


//   return (

//     // <div className='mt-16 flex flex-col gap-12 min-h-screen bg-slate-200 justify-center'>
//     //   <div className='flex flex-row pt-6 gap-20 w-2/3 items-center'>
//     //     <div className='w-3/4 h-auto border-3 shadow-2xl border-slate-100'>
//     //       <Bar
//     //         data={{
//     //           labels,
//     //           datasets: [
//     //             {
//     //               label: 'Intake',
//     //               data: intakeData,
//     //               backgroundColor: 'green',
//     //               borderColor: 'rgba(75, 192, 192, 1)',
//     //               borderWidth: 1,
//     //               borderRadius:8
//     //             },
//     //             {
//     //               label: 'Burn',
//     //               data: burnData,
//     //               backgroundColor: 'red',
//     //               borderColor: 'rgba(255, 99, 132, 1)',
//     //               borderWidth: 1,
//     //               borderRadius:8
//     //             }
//     //           ]
//     //         }}
//     //       />
//     //     </div>

//     //     <div className='flex flex-col justify-start gap-6'>
//     //       <input
//     //         type="number"
//     //         value={intake}
//     //         onChange={(e) => setIntake(e.target.value)}
//     //         placeholder="How many calories you consumed today?"
//     //       />
//     //       <input
//     //         type="number"
//     //         value={burn}
//     //         onChange={(e) => setBurn(e.target.value)}
//     //         placeholder="How many calories you burned today?"
//     //       />
//     //       <div>
//     //         <button onClick={handleAddData}>Add Data</button>
//     //       </div>
//     //     </div>
//     //   </div>
         
//         //  <div>
//           //  {/* <img src='https://res.cloudinary.com/dpxkuy4nn/image/upload/v1706981122/sample.jpg' alt='demo' /> */}
//         //  </div>

           


//          {/* <div className=' flex flex-row '>
//             <form action="/profileImgUpload" method="post" encType="multipart/form-data">
//               <input type="file" name="photo" />
//               {/* <input type="text" name="email" placeholder="Enter your email" /> */}
//             {/* <div className="mt-4">
//               <button type="submit" className="text-xl">Upload</button>
//             </div>
//          </form>  */}

//             {/* <form action="/profileImgUpload" method="POST" enctype="multipart/form-data">
//                <input type="file" name="profileImg" />
//                <input type="text" name='email'  />
//                <div className=' mt-4'>
//                  <button type='submit' className='text-xl'>Upload</button>
//                </div>
//             </form> */}
//     //      </div>


//     // </div>
//   );
// }

// export default Graphs;
















// import React, { useState } from 'react';
// import { Bar } from 'react-chartjs-2';

// function Graphs() {
//   const [data, setData] = useState([]);
//   const [intake, setIntake] = useState(0);
//   const [burn, setBurn] = useState(0);

//   const handleAddData = () => {
//     const newData = {
//       intake,
//       burn
//     };
//     setData(prevData => [...prevData, newData]);
//     setIntake(0);
//     setBurn(0);
//   };

//   // Generate labels for each day
//   const labels = data.map((_, index) => `Day ${index + 1}`);

//   // Generate datasets for intake and burn data
//   const intakeData = data.map(entry => entry.intake);
//   const burnData = data.map(entry => entry.burn);

//   return (
//     <div className='mt-16 flex flex-col gap-12 min-h-screen bg-slate-200'>
//       <div className='flex flex-row pt-6 gap-20'>
//         <div className='w-96 h-80 border-3 shadow-2xl border-slate-100'>
//           <Bar
//             data={{
//               labels,
//               datasets: [
//                 {
//                   label: 'Intake',
//                   data: intakeData,
//                   backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                   borderColor: 'rgba(75, 192, 192, 1)',
//                   borderWidth: 1
//                 },
//                 {
//                   label: 'Burn',
//                   data: burnData,
//                   backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                   borderColor: 'rgba(255, 99, 132, 1)',
//                   borderWidth: 1
//                 }
//               ]
//             }}
//           />
//         </div>

//         <div className='flex flex-col justify-start gap-6'>
//           <input
//             type="number"
//             value={intake}
//             onChange={(e) => setIntake(e.target.value)}
//             placeholder="How many calories you consumed today?"
//           />
//           <input
//             type="number"
//             value={burn}
//             onChange={(e) => setBurn(e.target.value)}
//             placeholder="How many calories you burned today?"
//           />
//           <div>
//             <button onClick={handleAddData}>Add Data</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Graphs;










//  import React from 'react'
//  import { Chart as ChartJS } from 'chart.js/auto';
//  import {Bar , Doughnut , Line} from 'react-chartjs-2';
//  import { useState } from 'react';

//  import ChartData from "../data/ChartData.json"
// import Graphs from './Graphs';

//  function Graphs() {

//   const [intake, setIntak] = useState(0);
//   const [burn, setBurn] = useState(0);

//   function handler(){
//     console.log()
//   }


  //  return (
  //    <div className=' mt-16 flex flex-col gap-12 min-h-screen bg-slate-200 '>
  //     <div className='flex flex-row pt-6 gap-20'>  
      
           {/* <div className='w-96 h-80 border-3 shadow-2xl border-slate-100'> 
                <Bar 
                  data={{
                    labels:["A","B","C"],  //the x axis values
                    datasets:[
                      {
                        label : "intake",
                        data : [`${intake}`],
                        backgroundColor:[
                          "green",
                        ],
                        borderRadius:8,
                      },
                      {
                        label : "burn",
                        data : [`${burn}`],
                        backgroundColor:[
                          "red",
                        ],
                        borderRadius:8, 
                      },
                    ]
                  }}
                /> 
             </div>   */}

            {/* <div className='flex flex-col justify-start gap-6'>
                 <input
                 type="number"
                 value={intake}
                 onChange={(e) => setIntak(e.target.value)}
                 placeholder="How many calories you consume today ? "
                 />
                 <input
                 type="number"
                 value={burn}
                 onChange={(e) => setBurn(e.target.value)}
                 placeholder="How many calories you had burned today ? "
                 />
                 <div>
                  <button onClick={handler}>Add Data</button>
                 </div>
            </div> */}



      {/* </div> */}

        {/* <div className= "w-96 h-80 broder-3  shadow-2xl  border-slate-100">
           <Bar
              data={{
                labels: ChartData.map((data) => data.label) ,  //the x axis values
                datasets:[
                    {
                        label : "intake",
                        data :  ChartData.map((data) => data.valueIn),
                        borderRadius:5,
                        backgroundColor:"gray",
                    },
                    {
                        label : "burn",
                        data :  ChartData.map((data) => data.valueOut),
                        backgroundColor:"green",
                    },
                ]
              }}
           />
        </div>
      </div> */}
     {/* <div className='flex flex-row gap-20'>
        <div>
           <Doughnut
              data={{
                labels: ChartData.map((data) => data.label) ,  //the x axis values
                datasets:[
                    {
                        label : "intake",
                        data :  ChartData.map((data) => data.valueIn),
                        backgroundColor:[
                            "green","blue","yellow"
                        ]
                    },
                ]
              }}
           />
        </div> */}

        {/* <div className=' w-1/3'>
           <Line
              data={{
                labels: ChartData.map((data) => data.label) ,  //the x axis values
                datasets:[
                    {
                        label : "intake",
                        data :  ChartData.map((data) => data.valueIn),
                        backgroundColor:[
                            "green","blue","yellow"
                        ]
                    },
                ]
              }}
           />
        </div> */}
    
     {/* --------------------------- */}
     
  {/* </div>
   )
 }
 
 export default Graphs */}