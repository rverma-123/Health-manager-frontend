import React from 'react'

import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const Api = 'https://https-github-com-v121212-healthbackend.onrender.com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  // react form gives this 3 proprties
  const { register , handleSubmit  } = useForm();
   
  const onSubmit = (data) => {
    console.log(data.email)
    // console.log("AYAAAAAAAAAAA");
    console.log( "your host is - " , `${process.env.REACT_APP_BASE_URL}` );
    
    axios.post(`${Api}/api/v1/auth/login`,data)
     .then(result=>{
      toast.success("Login Successfully", {
        position: "top-right",
      });
      console.log(result.data);
      alert(`${result.data.message}`);
      console.log(result.data.success);
      if(result.data.success === true){
        console.log(result.data);
          localStorage.setItem('email', data.email);
        navigate('/');
        window.location.reload();
      }
     })
     .catch((error)=>{
        console.log(error);
        toast(`${error.response.data.message}`, {
          position: "top-right",
        });
        // alert(`${error.response.data.message}`);
     })


    // localStorage.setItem('email', data.email);
    // navigate('/')
    // window.location.reload();
  }

  const navigate = useNavigate();
   
  function handler(){
    navigate('/signup')
  }

  function handler2(){
    console.log("make a password forgate configuration")
    navigate('/reset_password')
  }

  return (
    <div className="max-w-md  mt-28 mx-auto shadow-2xl bg-white rounded-xl overflow-hidden md:max-w-2xl">
    <div className="p-8">
      <img className="mx-auto h-48 w-48 object-cover mb-2" src="/img/login-image.jpg" alt="Login " />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Login Form</h2>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-semibold">Email</label>
          <input type="email" name="email" id="email" {...register("email")} className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500"  />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg font-semibold">Password</label>
          <input type="password" name="password" id="password" {...register("password")} className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500" />
        </div>
        <div className=' flex justify-between '>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out">Login</button>
          <button onClick={handler} className="text-blue-500 font-semibold hover:underline focus:outline-none">Signup</button>
        </div>
      </form>
      <div className='flex flex-row gap-2'>
          <p>Forgot your password ? </p>
          <p className=' text-blue-600'><button onClick={handler2}>Click here</button></p>
        </div>
    </div>
    <ToastContainer />
  </div>
  
  

     
    // <div className='flex mt-14 justify-center items-center'>
    //     <form onSubmit={handleSubmit(onSubmit)} >
    //        <h2>Login Form</h2>
    //         <div>
    //           <label htmlFor="email">Email</label>
    //           <input type="email" name="email" id="email"  {...register("email")} />
    //         </div>
    //         <div>
    //           <label htmlFor="password">Password</label>
    //           <input type="password" name="password" id="password"  {...register("password")}/>
    //         </div>
    //         <button>Login</button>
    //         <button onClick={handler}> Signup</button>
    //     </form>
    // </div>
  )
}

export default Login