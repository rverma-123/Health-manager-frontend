
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
   const navigate = useNavigate();

  const isLogedIn = localStorage.getItem('email');
   console.log(" isLogen in is " , isLogedIn);
    let Links =[
      {name:"Home", link:"/" },
      {name:"Yoga",link:"/yoga"},
      {name:"WorkOut",link:"/gym"},
      {name:"Account",link:"/account"},
      {name:"Shop",link:"/shopping"},
      // {name:"Admin",link:"/admin"},
       (isLogedIn ==='v.verma7271@gmail.com' ? {name:"Admin",link:"/admin"} : ""),
       (isLogedIn ? "" :{name:"SignUp",link:"/signup"}),
    ];
    let [open,setOpen]=useState(false);

     function handler(){
      localStorage.removeItem('email');
      alert("!! Thanks's for Visiting our Website !!")
      window.location.reload();
     }
     function handler1(){
        navigate('/')
     }


  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        <button onClick={handler1}>Health</button>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}> < FaBars /> </ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
          {isLogedIn ? <button className=' text-xl' onClick={handler}>Logout</button> : ""}
      </ul>
      </div>
    </div>
  )
}

export default NavBar