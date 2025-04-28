import React from 'react'

import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Api = 'https://https-github-com-v121212-healthbackend.onrender.com';


function Signup() {
  
  const navigate = useNavigate();

  const { register , handleSubmit  } = useForm();

  const onSubmit = (data) => { 
    console.log( "data is  " ,data)
           
    // Here you can add your login logic, like sending a request to your backend
    // axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/signup`, data)
    // axios.post(`https://https-github-com-v121212-healthbackend.onrender.com/api/v1/auth/signup`, data)
    axios.post(`${Api}/api/v1/auth/signup`, data)
    .then(result => {
        console.log("Response message:", result.data.message);
        // toast.success("SignUp success");
        alert(`${result.data.message}`);
        // console.log(`Login Sucess`);

       //  localStorage.setItem('email', result.data.email);
        navigate("/login");
    })
    .catch(err => {
        // console.error("Error occurred:", err);
        console.log("Failed to signin");
        // Display error message using toast
        // toast.error("Failed to sign up: " + err.message);
        // toast.error("Failed to sign up: ");
        alert(`Failed to signup check you are emial or pass`);
    });
    // navigate('/login')
  }
  
  function handler(){
    navigate('/login');
  }


  return (
    <div className="max-w-md mt-28 mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl">
    <div className="p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold">Name</label>
          <input type="text" {...register("name")} className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500" required/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-semibold">Email</label>
          <input type="email" {...register("email")} className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg font-semibold">Password</label>
          <input type="password"  {...register("password")} className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className='flex gap-5 justify-between'>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out">Signup</button>
          <p><button className="text-blue-600 font-semibold py-2 px-4 rounded " onClick={handler}>Login</button></p>
        </div>
      </form>
    </div>
  </div>
  



    // <div>
    //     <form onSubmit={handleSubmit(onSubmit)} >
    //        <h2>Registration Form</h2>
    //        <div>
    //           <label htmlFor="name">Name</label>
    //           <input type="text" name="name" id="name"  {...register("name")}  />
    //         </div>
    //         <div>
    //           <label htmlFor="email">Email</label>
    //           <input type="email" name="email" id="email"  {...register("email")} />
    //         </div>
    //         <div>
    //           <label htmlFor="password">Password</label>
    //           <input type="password" name="password" id="password"  {...register("password")}/>
    //         </div>
    //         <button>Signup</button>
    //     </form>
    // </div>
  )
}

export default Signup