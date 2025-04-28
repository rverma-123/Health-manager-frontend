import React from 'react'
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Api = 'https://https-github-com-v121212-healthbackend.onrender.com';

function ProfileUpdateForm() {
   const navigate = useNavigate();

   const {register , handleSubmit} = useForm();

   const email = localStorage.getItem('email');

   const [gender, setGender] = useState('');
   
   const handleChange = (event) => {
      const { name } = event.target;
      setGender(name);
   };

   function onSubmit(data){
    console.log(data);
    const name = data.name;
    const weight = data.weight;
    const height = data.height;
    const bmi = data.bmi;
          
    
    axios.post(`${Api}/profile_update_form`,{email,name,weight,height,bmi,gender})
    .then(result=>{
    //  toast.success("Data updated Successfully", {
    //    position: "top-right",
    //  });
    console.log("user Updated succes");
    //  console.log(result.data);
    //  alert(`${result.data.message}`);
     console.log(result.data.message);
    //  if(result.data.success === true){
      //  console.log(result.data);
        //  localStorage.setItem('email', data.email);
       navigate('/account');
      //  window.location.reload();
    //  }
    })
    .catch((error)=>{
       console.log(error);
       console.log("Error while updating data bbbbbb");
       console.log(error.message);
      //  toast(`${error.response.data.message}`, {
      //    position: "top-right",
      //  });
       // alert(`${error.response.data.message}`);
    })

    // navigate('/account')
   }
 

  return (
    <div className='mt-16 bg-gray-100 min-h-full overflow-hidden ' >
               
           <div className="bg-gray-100 py-8 px-4 lg:px-16 pt-24 ">
             <p className="text-center text-xl font-bold mb-8">Fill this form to update your profile</p>
             
             <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
               <div className="mb-4">
                 <label htmlFor="name" className="block text-lg font-semibold">Name</label>
                 <input
                   type="text"
                   id="name"
                   placeholder="Enter your name"
                   {...register("name")}
                   required
                   className="w-full rounded-lg px-4 py-2 border-gray-300 focus:outline-none focus:border-blue-500"
                 />
               </div>
               
               <div className="mb-4">
                 <label htmlFor="weight" className="block text-lg font-semibold">Weight</label>
                 <input
                   type="number"
                   id="weight"
                   placeholder="Enter Weight in kg's"
                   {...register("weight")}
                   required
                   className="w-full rounded-lg px-4 py-2 border-gray-300 focus:outline-none focus:border-blue-500"
                 />
               </div>
               
               <div className="mb-4">
                 <label htmlFor="height" className="block text-lg font-semibold">Height</label>
                 <input
                   type="number"
                   id="height"
                   placeholder="Enter Height in cm's"
                   {...register("height")}
                   required
                   className="w-full rounded-lg px-4 py-2 border-gray-300 focus:outline-none focus:border-blue-500"
                 />
               </div>
               
               <div className="mb-4">
                 <label htmlFor="bmi" className="block text-lg font-semibold">BMI</label>
                 <input
                   type="number"
                   id="bmi"
                   placeholder="Enter Body mass index"
                   {...register("bmi")}
                   required
                   className="w-full rounded-lg px-4 py-2 border-gray-300 focus:outline-none focus:border-blue-500"
                 />
               </div>

               <div className=' flex flex-row gap-6 text-xl '>    
                    <label>
                          <input
                            className=' h-4 w-4 cursor-pointer'
                            type="checkbox"
                            name="male"
                            checked={gender === 'male'}
                            onChange={handleChange}
                               />
                          Male
                    </label>
                    <label>
                          <input
                          className=' h-4 w-4 cursor-pointer'
                            type="checkbox"
                            name="female"
                            checked={gender === 'female'}
                            onChange={handleChange}
                          />
                        Female
                    </label>
                </div>

               <div className="text-center">
                 <button
                   type="submit"
                   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                 >
                   Submit
                 </button>
               </div>
             </form>
           </div>

           
         {/* <div>
            <p>Fill this for update your profile</p>
         </div>
          
          <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <label className=' text-lg font-semibold' >Name</label>
                    <input type="text" placeholder="Enter your name" {...register("email")} required className=' h-5' />
                </div>
                <div>
                    <label className=' text-lg font-semibold' >Weight</label>
                    <input type="number" placeholder="Enter Weight in kg's" {...register("weight")} required className=' h-5' />
                </div>
                <div>
                    <label className=' text-lg font-semibold' >Height</label>
                    <input type="number" placeholder="Enter Height in cm's " {...register("height")} required className=' h-5' />
                </div>
                <div>
                    <label className=' text-lg font-semibold' >BMI</label>
                    <input type="number" placeholder="Enter Body mass index" {...register("bmi")} required className=' h-5' />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
          </div> */}

    </div>
  )
}

export default ProfileUpdateForm