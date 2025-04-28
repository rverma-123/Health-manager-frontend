import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import profileImg from '../Images/profileImg (2).png'
//importing all the logos
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { IoBody } from "react-icons/io5";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";

const Api = 'https://https-github-com-v121212-healthbackend.onrender.com';

import axios from 'axios';
function Profile() {
  const navigate = useNavigate();
  const email = localStorage.getItem('email');
  
  const [profileImg ,setProfileImg] = useState();
  // const [demoProfileImg ,setDemoProfileImg] = useState();
  // for image hidding
  const [hide , setHide] = useState(1);
  // all for img upload
  const [img , setImg] = useState(null); 
  // for taking email from local storage
  const emaill = localStorage.getItem('email');

  const [name, setName] = useState("");
    const [emaail, setEmail] = useState("");
    const [weight, setWeight] = useState("00");
    const [height, setHeight] = useState("00");
    const [bmi, setBmi] = useState("00");
    const [gender, setGender] = useState("NONE");


  //all info collect from backend soon:
  //when we update user profile
  // const name = "Vishal Verma";
  // const email = "v.verma7271@gmail.com"
  // const weight = "80";
  // const BMI = "25";
  // const height = "174";
   
    
    //this is a get method wich takes email , weight,height , bmi from db
    useEffect(() => {
      console.log(email);
      // axios.get(`${process.env.REACT_APP_BASE_URL}/show_profile`,{ params: { email: email }})
      // axios.get(`https://https-github-com-v121212-healthbackend.onrender.com/show_profile`,{ params: { email: email }})
      axios.get(`${Api}/show_profile`,{ params: { email: email }})
          .then(result => {
              // console.log(result.data.message);
              // console.log(result.data.name)
                setName(result.data.name);
                setEmail(result.data.email);
                setWeight(result.data.weight);
                setHeight(result.data.height);
                setBmi(result.data.bmi);
                setGender(result.data.gender);
                console.log( "image url " + result.data.image);
                setProfileImg(result.data.image);
                console.log(result.data);
              console.log("Data came successfully");
          })
          .catch(err => {
            if (err.response) {
                // The request was made and the server responded with a status code
                console.log("Server responded with status code:", err.response.status);
                console.log("Error message from server:", err.response.data.message);
            } else if (err.request) {
                // The request was made but no response was received
                console.log("No response received from the server:", err.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.error("Error occurred while setting up the request:", err.message);
            }
        });
  }, []); // Empty dependency array to ensure it runs only once when the component mounts


  //for cloudinary image
  useEffect(() =>{
    
  })


  // functon for img sec hide
  function hideImgSec(){
    hide === 1 ? setHide(0) : setHide(1); 
  }

   

  function handler(){
      navigate('/profile_update_form')
  } 

// this is got upload files in cloudinary -------------------------------------
  const uploadFile = async (type) =>{
    const data = new FormData();
    data.append('file', img);
   
    // (this is only for unauthentication(held by api calling in frontend directly) steps there are df stpes for authenticated cloudinary upload (that is held in backend eith the help of keys and secrets))
    // this  'images_preset' is a preset name in cloudinary just follow this steps therwise see this "Web Wizard - ultimate guid to cloudinary" 
    //  1. go to cloudinary setting 
    // 2. got to Upload -> Upload presets -> Add upload preset
    // 3. enter name in 'upload preset' ( i.e. images_preset) 
    // 4. change 'sigend Mode' to 'unsigned'
    // 5. than enter a folder name for images upload  
    data.append('upload_preset', 'images_preset');
    try {
       let resourceType = 'image';
       let cloudname  = 'dpxkuy4nn';
       let api = `http://api.cloudinary.com/v1_1/${cloudname}/${resourceType}/upload`;

       const res  = await axios.post(api, data);
       const {secure_url} = res.data;
       console.log(secure_url);
       return secure_url;

    } catch (error) {
      console.log('Error in upload file system ');
      console.log(error);
    }
     
}

//for upload the cloudinary url to backedn user
const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      //  Upload img
      const imgUrl = await uploadFile('image');
      
      //sending backend api request for storing the image url
      // await axios.post('https://https-github-com-v121212-healthbackend.onrender.com/profileImgUpload' , {imgUrl ,emaill});
      await axios.post( `${Api}/profileImgUpload` , {imgUrl ,emaill});

      setImg(null);
      console.log(' File uploaded successfully ');
      setProfileImg(imgUrl)
      hide === 1 ? setHide(0) : setHide(1); 

    }catch(error){
      console.log(' Error Comes in uploading files.. ')
      console.log(error);
    }
}








  return (
    <div className='flex flex-col justify-center items-center'>

  {/* Header */}
  <div className='text-center'>
    <p className='text-lg font-bold'>Hello, {name} !</p>
    <p className='text-xl font-bold'>Your Profile</p>
  </div>

  {/* Profile Card */}
  <div className='bg-white rounded-lg shadow-2xl p-6 mt-6 max-w-xl w-full'>

    {/* Profile Image directly*/}
    {/* <div className= "w-full lg:w-1/3 p-4 flex items-center justify-center">
          <img src={profileImg} alt="Profile Image" className="rounded-full w-32 lg:w-full" />
       </div> */}

       {/* <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
         <button onClick={hideImgSec} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 text-sm rounded-lg">
           Upload
         </button>
       </div> */}
    {/* <div className="relative flex justify-center items-center h-full"> */}
       
         {/*profile image from cloudinary */}
       { hide === 1 ? 
            <div className="relative flex justify-center items-center h-full">
               <div className= "w-full lg:w-1/3 p-4 flex items-center justify-center">
                  <img src={profileImg} alt="Profile Image" className="rounded-full w-32 lg:w-full h-40" />
               </div>
               <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
                 <button onClick={hideImgSec} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 text-sm rounded-lg">
                  Upload
                 </button>
               </div>
            </div>  
          :
          <div>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center space-y-4 p-4 bg-gray-50 rounded-lg shadow-md w-full max-w-md mx-auto mt-8">
                       <div className="w-full">
                         <label htmlFor="img" className="block text-sm font-medium text-gray-700 mb-1">Image:</label>
                         <input
                           type="file"
                           accept="image/*"
                           id="img"
                           className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                           onChange={(e) => setImg(e.target.files[0])}
                         />
                       </div>
                     <button
                         type="submit"
                         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                       >
                        Submit
                     </button>
                   </div>

                </form>
          </div>
       }



       {/* <div className= "w-full lg:w-1/3 p-4 flex items-center justify-center">
          <img src={profileImg} alt="Profile Image" className="rounded-full w-32 lg:w-full" />
       </div> */}

       {/* <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
         <button onClick={hideImgSec} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 text-sm rounded-lg">
           Upload
         </button>
       </div> */}

    {/* </div> */}




    

    {/* Profile Info */}
    <div className='flex flex-col items-center lg:items-start'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-4'>
          <MdDriveFileRenameOutline size={30} />
          <p className='text-lg font-semibold'> {name} </p>
        </div>
        <div className='flex items-center gap-4'>
          <MdEmail size={30} />
          <p className='text-lg font-semibold'>{emaail} </p>
        </div>
        <div className='flex items-center gap-4'>
          <FaWeight size={27} />
          <p className='text-lg font-semibold'>{weight}  kg's</p>
        </div>
        <div className='flex items-center gap-4'>
          <GiBodyHeight size={30} />
          <p className='text-lg font-semibold'> {height} cm's</p>
        </div>
        <div className='flex items-center gap-4'>
          <IoBody size={30} />
          <p className='text-lg font-semibold'>{bmi} body mass index</p>
        </div>
        <div className='flex items-center gap-4'>
          {
            gender == 'male' ? 
              <>
               <BsGenderMale size={28} /> 
              <p className='text-lg font-semibold'>{gender}</p> 
              </>
            :
            <>
              <BsGenderFemale size={28} /> 
             <p className='text-lg font-semibold'>{gender}</p> 
             </>
          }
        </div>
      </div>
      <div className='mt-4'>
        <button onClick={handler} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg'>
          Update Profile
        </button>
      </div>
    </div>
  </div>
</div>

  




    // <div className='  flex flex-col justify-center items-center '>
      
    //   <div>
    //     <p>Hii ! {name}</p>
    //     <p>Your Profile</p>
    //   </div>
      
    //   <div className='flex flex-row items-center justify-center gap-3'>

    //     <div className=' w-1/3 p-7'>
    //        <img src={profileImg} alt='profile ima' className='mix-blend-darken' />
    //     </div>

    //     <div className=' flex flex-col  items-center'>
    //        <div>
    //             <div className='flex flex-row gap-5  '>
    //               <p><MdDriveFileRenameOutline size={30}/></p>
    //               <p className=' text-2xl font-bold'>{name}</p>
    //             </div>
    //             <div className='flex flex-row gap-5  '>
    //               <p><MdEmail size={30}/></p>
    //               <p className=' text-2xl font-bold'>{email}</p>
    //             </div>
    //             <div className='flex flex-row gap-5  '>
    //               <p><FaWeight size={27}/></p>
    //               <p className=' text-2xl font-bold'>{weight}</p>
    //             </div>
    //             <div className='flex flex-row gap-5  '>
    //               <p><GiBodyHeight size={30}/></p>
    //               <p className=' text-2xl font-bold'>{height}</p>
    //             </div>
    //             <div className='flex flex-row gap-5  '>
    //               <p><IoBody size={30}/></p>
    //               <p className=' text-2xl font-bold'>{BMI}</p>
    //             </div>
    //        </div>
    //        <div>
    //         <button>Update</button>
    //        </div>
    //     </div>


    //   </div>
      
        
    // </div>
  )
}

export default Profile