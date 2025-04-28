//in this i am using react-hook-form for easy data access:
import Bmi from "./Components/Bmi";
import Home1 from "./pages/Home1";
import NavBar from "./Components/NavBar";
import CaloriCounter from "./Components/CaloriCounter";
import AllGymWork from "./pages/AllGymWork";
import AllYogas from "./pages/AllYogas";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Tracker from "./pages/Tracker";
import Login from "./pages/Login"; 
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import GenerateResetPass from "./pages/GenerateResetPass";
import ProfileUpdateForm from "./pages/ProfileUpdateForm";
import ProtectedRoute from "./Components/ProtectedRoute";
import ChatBot from "./Components/ChatBot";
import Meal from "./pages/Meal";
import Meal_Manager from "./pages/Meal_Manager";
import GraphComponent from "./Components/GraphComponent";
import Graphs from "./Components/Graphs";
import AdminPannel from "./pages/AdminPannel";
import Shopping from "./Components/Shopping";
// import ChatBot from "./Components/ChatBot";
// import Home2 from "./Components/Home2";
// import Home3 from "./Components/Home3";
// import Graphs from "./Components/Graphs";
// import WorkOutExcercise from "./Components/WorkOutExcercise";

import { useEffect , useState } from "react";
// NON imp
// import Timer from "./Components/Timer";
// import Demo from "./trash/Demo";
// import { useState } from "react";
// import imge from "../src/Images/bmiImg.jpg";

// import axios from 'axios';
// import { useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
function App() {

  const [isLogedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    setIsLoggedIn(email === 'v.verma7271@gmail.com');
  }, []);

  // const backFunction = () => {      
  //   axios.get('http://localhost:4000/visit')
  //   .then(result=>{
  //    console.log("Visitors update from front end");
  //    console.log(result.data.visitors);
  //   })
  //   .catch((error)=>{
  //      console.log("Error in visitors updating from frontend");
  //      console.log(error);
  //   })
  //  } 
  //  backFunction();


  // const [isScaled, setIsScaled] = useState(false);

  // const handleClick = () => {
  //   setIsScaled(!isScaled);
  // };

  return (
    <div className=" overflow-x-hidden">
      <NavBar/>
      <Routes>
         <Route path="/" element={<Home1 />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/yoga" element={ <ProtectedRoute  Compo={AllYogas} />} />
         <Route path="/gym" element={ <ProtectedRoute  Compo={AllGymWork} />} />
         <Route path="/calori_counter" element={ <ProtectedRoute  Compo={CaloriCounter} />} />
         <Route path="/bmi" element={ <ProtectedRoute  Compo={Bmi} />} />
         <Route path="/account" element={ <ProtectedRoute  Compo={Account} />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/tracker" element={<Tracker />} />
         <Route path="/reset_password" element={<ResetPassword />}/>
        <Route path="/reset_password/:id/:token" element={<GenerateResetPass />}/>
         <Route path="/profile_update_form" element={ <ProtectedRoute  Compo={ProfileUpdateForm} />} />
         {/* <Route path="/chtbot" element={ <ProtectedRoute  Compo={ChatBot} />} /> */}
         <Route path="/meal_calori" element={ <ProtectedRoute  Compo={Meal} />} />
         <Route path="/meal_manager" element={ <ProtectedRoute  Compo={Meal_Manager} />} />
         {/* <Route path="/chatbot" element={ <ProtectedRoute  Compo={ChatBot} />} /> */}
         <Route path="/graph1" element={<GraphComponent/>} />
         <Route path="/graph2" element={<Graphs/>} />
         {/* <Route path="/admin" element={<AdminPannel/>} /> */}
         { isLogedIn ? <Route path="/admin" element={<AdminPannel/>} /> : "" }
         {/* <Route path="/admin" element={ <ProtectedRoute  Compo={AdminPannel} />} /> */}
         <Route path="/shopping" element={<Shopping />} />
         <Route path="*" element={<div>404 PageNotFound</div>} />
      </Routes>


      {/* <Home1 /> */}
      {/* <Home2 /> */}
      {/* <Home3 /> */}
      {/* <Graphs /> */}
      {/* <Bmi /> */}
      {/* < CaloriCounter /> */}


      {/* <AllGymWork /> */}
      {/* <AllYogas />/ */}


      {/* <Timer /> */}
      {/* <WorkOutExcercise/> */}

      {/* <div className={` ${isScaled ? "hidden" : ""} `}>
        <div
          className={`relative flex justify-center items-center h-screen overflow-hidden`}
        >
          <div className="absolute inset-0 bg-center bg-cover blur-sm"></div>
          <div className="absolute gap-3 flex justify-center items-center image-container transform transition-transform">
          <img  className="image"  src="https://via.placeholder.com/150" alt="placeholder"/>
          <img  className="image"  src="https://via.placeholder.com/150" alt="placeholder"/>
            <img  className="image"  src="https://via.placeholder.com/150" alt="placeholder"/>
          </div>
          <button onClick={handleClick}  className="absolute bottom-0 mb-8 px-4 py-2 text-white bg-blue-500 rounded cursor-pointer z-10">
            {isScaled ? "Shrink" : "Scale"}
          </button>
        </div>
       </div>

       <div className={` ${isScaled ? "" : "hidden"} `}>
            <p>Hii vishal how are you</p>
            <div>
                <button onClick={handleClick}  className="absolute bottom-0 mb-8 px-4 py-2 text-white bg-blue-500 rounded cursor-pointer z-10">
                {isScaled ? "Shrink" : "Scale"}
               </button>
            </div>
        </div> */}

      {/* <Demo /> */}
    </div>
  );
}

export default App;
