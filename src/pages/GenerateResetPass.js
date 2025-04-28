import axios from 'axios';
import React from 'react'

import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';

function GenerateResetPass() {
  const navigate = useNavigate();
   const { register, handleSubmit} = useForm();
   const {id,token} = useParams()

   function onSubmit(data) {
    //  console.log(data);
      // console.log(data.email)
     axios.post(`${process.env.REACT_APP_BASE_URL}/reset_password/${id}/${token}`,data)
     .then(result=>{
      alert("Successfuly generated new pass"); 
      // console.log(result.data);
      // alert(`${result.data.message}`);
      // console.log(result.data.success);
      
        navigate('/login')
     })
     .catch((error)=>{
        console.log(error);
        // alert(`${error.response.data.message}`);
        alert("failed to generate new password")
     })

   }

//   function handler(){
//       navigate('/signup')
//   }

  return (
    <div className='mt-28 max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-2xl'>
  <form onSubmit={handleSubmit(onSubmit)} className='p-6'>
    <h2 className='text-2xl font-bold mb-4'>Generate New Password</h2>
    <div className='mb-4'>
      <label htmlFor="password" className='block text-gray-700 font-semibold mb-2'>Password</label>
      <input type="password" placeholder="Enter password" {...register("password")} required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
    </div>
    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'>Update</button>
  </form>
</div>

  



    // <div className=' mt-20'>
    //    <form onSubmit={handleSubmit(onSubmit)}>
    //        <p>Generate new Password</p>
    //        <label >Password</label>
    //        <input type="password" placeholder="Enter password" {...register("password")} required/>
    //        <button>Update</button>
    //    </form>
    // </div>
  )
}

export default GenerateResetPass