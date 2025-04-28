import React, { useState } from "react";
import lossWeight from "../Images/lossWeight.jpg";
import gainWeight from "../Images/gainWeight.jpg";
import calBalance from "../Images/calBalance.jpg";
import { useNavigate } from "react-router-dom";

function CaloriCounter() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "male",
    activity: "sedentary",
  });
  const [res, setRes] = useState(false);
  const [BMR, setBMR] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.weight || !formData.height || !formData.age)
      alert("All fields requires");
    else if (formData.gender === "male") {
      let val =
        10 * formData.weight + 6.25 * formData.height - 5 * formData.age + 5;
      if (formData.activity === "sedentary") setBMR(val * 1.2);
      if (formData.activity === "lightly") setBMR(val * 1.375);
      if (formData.activity === "moderately") setBMR(val * 1.55);
      if (formData.activity === "very") setBMR(val * 1.725);
      if (formData.activity === "extra") setBMR(val * 1.9);
      setRes(true);
      console.log(val);
      //   setBMR (val)
    } else if (formData.gender === "female") {
      let val =
        10 * formData.weight + 6.25 * formData.height - 5 * formData.age - 161;
      if (formData.activity === "sedentary") setBMR(val * 1.2);
      if (formData.activity === "lightly") setBMR(val * 1.375);
      if (formData.activity === "moderately") setBMR(val * 1.55);
      if (formData.activity === "very") setBMR(val * 1.725);
      if (formData.activity === "extra") setBMR(val * 1.9);
      setRes(true);
      console.log(val);
      //   setBMR (val)
    }
    // Your calculation logic goes here
    // setRes(true)
    console.log(formData);
  };

  function hanlde11(){
    navigate('/meal_manager')
  }

  return (
    <div className=" min-h-full bg-gray-100 mt-16 ">
      <div>
        <div className="flex flex-col justify-center items-center  ">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8 max-w-lg w-full mt-16">
            <h1 className="text-5xl font-bold mb-8 text-center text-gray-800 ">
              Calorie Counter
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="weight" className="text-gray-700">
                    Weight (kg)
                  </label>
                  <input
                    id="weight"
                    name="weight"
                    type="number"
                    placeholder="kg"
                    className="input-field"
                    value={formData.weight}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="height" className="text-gray-700">
                    Height (cm)
                  </label>
                  <input
                    id="height"
                    name="height"
                    type="number"
                    placeholder="cm"
                    className="input-field"
                    value={formData.height}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="age" className="text-gray-700">
                    Age (years)
                  </label>
                  <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="years"
                    className="input-field"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="text-gray-700">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="input-field"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="activity" className="text-gray-700">
                    Activity level
                  </label>
                  <select
                    id="activity"
                    name="activity"
                    className="input-field"
                    value={formData.activity}
                    onChange={handleInputChange}
                  >
                    <option value="sedentary">
                      Sedentary (little or no exercise)
                    </option>
                    <option value="lightly">
                      Lightly active (light exercise/sports 1-3 days​/week)
                    </option>
                    <option value="moderately">
                      Moderately active (moderate exercise/sports 3-5 days/week)
                    </option>
                    <option value="very">
                      Very active (hard exercise/sports 6-7 days a week){" "}
                    </option>
                    <option value="extra">
                      Extra active (very hard exercise/sports & physical job){" "}
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Calculate
                </button>
              </div>
            </form>
            <div className=" mt-4">
              {res === true && (
                <p>You need {BMR} Calories for maintaining your weight </p>
              )}
            </div>
          </div>
        </div>

        <div className=" ml-10 mt-28  flex flex-col gap-14">
          <div className=" text-lg flex flex-col gap-2">
            <p className=" font-semibold text-2xl">Calories :</p>
            <p>The Basal Metabolic Rate (BMR)=</p>
            <p>
              10 * weight (kg) + 6.25 * height(cm) - 5 * age(y) + 5 for (man)
            </p>
            <p>
              10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) - 161 for
              ​(woman)
            </p>
            <p>
              To determin​e your total daily calorie needs, multiply your BMR by
              the appropriate activity factor, as follows:
            </p>
            <li>
              If you are sedentary (little or no exercise) : Calorie-Calculation
              = BMR x 1.2
            </li>
            <li>
              If you are lightly active (light exercise/sports 1-3 days​/week) :
              Calorie-Calculation = BMR x 1.375
            </li>
            <li>
              If you are moderately active (moderate exercise/sports 3-5
              days/week) : Calorie-Calculation = BMR x 1.55
            </li>
            <li>
              If you are very active (hard exercise/sports 6-7 days a week) :
              Calorie-Calculation = BMR x 1.725
            </li>
            <li>
              If you are extra active (very hard exercise/sports & physical job
              or 2x training) : Calorie-Calculation = BMR x 1.9
            </li>
            For example If you are sedentary, and your BMR equal 1745 so the
            total number of calories you need in order to maintain your current
            weight = 1745*1.2 = 2094.
          </div>

          <div className="flex flex-row max-sm:flex-col max-sm:w-screen max-sm:gap-9  justify-between">

            <div className="border border-white shadow-2xl p-3 w-2/5 max-sm:w-4/5">
              <p className="text-xl font-bold">For loss weight</p>
              <div className="flex flex-row">
                <div>
                  {" "}
                  <img src={lossWeight} alt="img" className=" w-28" />{" "}
                </div>
                <div className="p-3">
                  <p>
                    You only have to take less calories than you are taking right now
                  </p>
                  <button onClick={hanlde11}  className=" text-blue-700">OR follow our diet plan</button>
                </div>
              </div>
            </div>
             
            <div className="border border-white shadow-2xl p-3 w-2/5 max-sm:w-4/5">
              <p className="text-xl font-bold">For gain weight</p>
              <div className="flex flex-row">
                <div>
                  {" "}
                  <img src={gainWeight} alt="img" className=" w-28" />{" "}
                </div>
                <div className="p-3">
                  <p>
                    You only have to take more calories than you are taking right now
                  </p>
                  <button onClick={hanlde11}  className=" text-blue-700">OR follow our diet plan</button>
                </div>
              </div>
            </div>
           

          </div>
                   
          <div className="flex  justify-center items-center max-sm:-ml-14  max-sm:-mt-3">
            <div className="border border-white shadow-2xl p-3 w-2/5 max-sm:w-4/5">
              <p className="text-xl font-bold">For maintain weight</p>
              <div className="flex flex-row">
                <div>
                  {" "}
                  <img src={calBalance} alt="img" className=" w-28" />{" "}
                </div>
                <div className="p-3">
                  <p>
                    You have need to take the same amount of calories
                  </p>
                  <button onClick={hanlde11} className=" text-blue-700">OR follow our diet plan</button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default CaloriCounter;

// import React , {useState} from "react";

// function CaloriCounter() {
//     const [weight, setWeight] = useState('');
//     const [height, setHeight] = useState('');
//     const [age, setAge] = useState('');
//     const [gender, setGender] = useState('male');
//     const[activity , setActivity] = useState('sedentary')

//   return (
//    <div>
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//   <div className="bg-white p-8 rounded-lg shadow-md">
//     <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">Calorie Counter</h1>
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       <div>
//         <label htmlFor="weight" className="text-gray-700">Weight (kg)</label>
//         <input id="weight" value={weight} type="number" placeholder="kg" className="input-field border border-green-500 rounded-lg py-2 px-4 w-full transition duration-300 ease-in-out;"/>
//       </div>
//       <div>
//         <label htmlFor="height" className="text-gray-700">Height (cm)</label>
//         <input id="height" value={height} type="number" placeholder="cm" className="input-field border border-green-500 rounded-lg py-2 px-4 w-full transition duration-300 ease-in-out;"/>
//       </div>
//       <div>
//         <label htmlFor="age" className="text-gray-700">Age (years)</label>
//         <input id="age" value={age} type="number" placeholder="years" className="input-field border border-green-500 rounded-lg py-2 px-4 w-full transition duration-300 ease-in-out;"/>
//       </div>
//       <div>
//         <label htmlFor="gender" className="text-gray-700">Gender</label>
//         <select id="gender"value={gender} className="input-field border border-green-500 rounded-lg py-2 px-4 w-full transition duration-300 ease-in-out">
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="activity" className="text-gray-700">Activity level</label>
//         <select id="activity" value={activity} className="input-field border border-green-500 rounded-lg py-2 px-4 w-full transition duration-300 ease-in-out">
//           <option value="sedentary">sedentary (little or no exercise)</option>
//           <option value="lightly">lightly active (light exercise/sports 1-3 days​/week)</option>
//           <option value="moderately">moderately active (moderate exercise/sports 3-5 days/week)</option>
//           <option value="very">very active (hard exercise/sports 6-7 days a week) </option>
//           <option value="extra">extra active (very hard exercise/sports & physical job or 2x training) </option>
//         </select>
//       </div>
//       <div className=" w-full flex items-center justify-center">
//          <div className="bg-green-500 flex items-center justify-center w-1/2 h-3/4 rounded-2xl">
//            <button>Calculate</button>
//          </div>
//       </div>
//     </div>
//   </div>
// </div>

//    </div>
//   );
// }

// export default CaloriCounter;
