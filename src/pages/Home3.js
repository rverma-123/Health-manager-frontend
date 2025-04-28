import React from "react";
import bmiImg from "../Images/bmiImg.jpg"
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Home3() {
  const navigate = useNavigate();
    
  // this is for fetching img from cluodinary
  const BmiImg = 'https://res.cloudinary.com/dpxkuy4nn/image/upload/v1718390856/HelathFiles/BMI.jpg'

    function handler(){
        console.log('Put a route on bmi or dirctly show on the screen')
        navigate('/bmi');
    }

  return (
    <div className=" min-h-screen flex flex-row max-sm:flex-col max-sm:w-screen justify-center items-center bg-slate-200 gap-3">
      <div className=" w-1/2 max-sm:w-screen flex flex-col gap-2 justify-center ">
        <div className="text-3xl font-bold">
          <p>What is BMI index ?</p>
        </div>
        <div >
          <p className="text-lg">
            BMI stands for Body Mass Index. It's a tool used to estimate body
            fat based on a person's height and weight. <br/> Here's a breakdown of
            BMI:<br/> <b>Calculation:</b> BMI is calculated by dividing your weight in
            kilograms by the square of your height in meters. There are also
            online calculators that can handle imperial units (pounds and
            inches). <br/> <b>Purpose:</b> BMI is a general indicator of whether you're
            underweight, healthy weight, overweight, or obese. It helps screen
            for weight categories that might lead to health problems.<br/>
            <b>Limitations:</b> BMI is not a perfect measure of body fat, especially
            for some individuals. Muscle tissue is denser than fat, so very
            muscular people may have a high BMI even though they have a low body
            fat percentage. Additionally, BMI doesn't consider factors like age,
            sex, ethnicity, or body composition.
          </p>
        </div>
        <div className=" w-72 mt-3">
        <div className=" p-4 flex flex-row bg-blue-600  max-sm:gap-1 max-sm:w-56 gap-4 rounded-full items-center hover:bg-blue-800 hover:scale-105 hover:shadow-2xl">
            <div>
              <button className=" text-2xl max-sm:text-xl " onClick={handler} >Check Your BMI  </button>
            </div>
            <div>
              < BsBoxArrowInUpRight onClick={handler} size={25} className=" max-sm:w-5" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-2/5 mix-blend-darken max-sm:w-screen ">
        {/* <div> <img src={bmiImg} alt="img"  /> </div> */}
        <div> <img src={BmiImg} alt="img"  /> </div>
      </div>
    </div>
  );
}

export default Home3;
