import axios from 'axios';
import React from 'react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
function ResetPassword() {
  const navigate = useNavigate();
   const { register, handleSubmit} = useForm();
   
   function onSubmit(data) {
    //  console.log(data);
      // console.log(data.email)
     axios.post(`${process.env.REACT_APP_BASE_URL}/reset_password`,data)
     .then(result=>{
      alert("Success"); 
      // console.log(result.data);
      // alert(`${result.data.message}`);
      // console.log(result.data.success);
      
        navigate('/login')
     })
     .catch((error)=>{
        console.log(error);
        // alert(`${error.response.data.message}`);
        alert("failed")
     })

   }

//   function handler(){
//       navigate('/signup')
//   }

  return (
    <div className='flex justify-center items-center mt-36'>
    <form onSubmit={handleSubmit(onSubmit)} className='bg-gray-100 shadow-md rounded px-8 pt-6 pb-8'>
      <div className='mb-6 text-center'>
        <p className='text-3xl font-bold text-[#333333]'>Reset Password</p>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700 text-lg font-semibold mb-2' htmlFor="email">Email</label>
        <input type="email"  placeholder="Email" {...register("email")} required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
      </div>
      <div className='mb-6'>
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'>Send Mail</button>
      </div>
    </form>
  </div>
  



    // <div  className= ' flex justify-center items-center mt-36 ' >
    //    <form onSubmit={handleSubmit(onSubmit)}>
    //        <div className='flex justify-center items-center'>
    //           <p className=' text-2xl font-bold text-[#000000] '>Reset Password</p>
    //        </div>
    //        <div className='flex flex-col'>
    //           <label className=' text-lg font-semibold' >Email</label>
    //           <input type="email" placeholder="Email" {...register("email")} required className=' h-5' />
    //        </div>
    //        <div className='flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white '>
    //           <button className='text-xl'>Send Mail</button>
    //        </div>
    //    </form>
    // </div>
  )
}

export default ResetPassword