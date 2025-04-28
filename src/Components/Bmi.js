import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Bmi = () => {
 
   const navigate = useNavigate();

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    const weightInKgs = parseFloat(weight);
    const heightInMeters = parseFloat(height);
    
    if (!isNaN(weightInKgs) && !isNaN(heightInMeters) && heightInMeters !== 0) {
      const bmi = weightInKgs / (heightInMeters * heightInMeters);
      setResult(bmi.toFixed(2));
      setWeight('')
      setHeight('')
    } else {
      setResult(null);
    }
  };

  function handler(){
    console.log("A page with all the buttons with proper diet chart")
  }

  function handler2(){
    navigate('/calori_counter')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-5">
        <div className=' text-3xl font-bold'>
            <p> Calculate Your BMI index</p>
        </div>
      <div className="bg-white p-8 rounded shadow-md">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="number"
          placeholder="Height (m)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={calculateBMI}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
        >
          Calculate
        </button>
        {result !== null && (
          <div className="mt-4">
            <p>Your BMI: {result}</p>
          </div>
        )}
      </div>
      <div className=' mt-6'>
        { result!== null &&(
            <div className='font-bold text-2xl'>
                {
                 result < 18.5 ? <p>You'r under weight</p> : 
                 (result >= 18.5 && result <= 24.9) ? <p>Your weight is Normal</p> :
                 (result >= 25 && result <= 29.9) ? <p>You'are in Overweight category</p> :
                 (result >= 30 && result <= 35) ? <p>You'are in Obese category</p> :
                 <p>You lie in Morbid obesity</p>
                }
            </div>
        )}
      </div>
      
      <div>
        {result !== null && (
            <div>
                <button onClick={handler}> <p className=' text-blue-950'>Diet according to your BMI</p></button>
            </div>
        )}
      </div>
      <div className=' flex gap-3'>
         <p>Want to Count your dialy limit calories ?</p>
         <button className=' text-blue-700' onClick={handler2}> Click Here</button>
      </div>
    </div>
  );
};

export default Bmi;
