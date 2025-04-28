import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function Meal() {
  const { register, handleSubmit } = useForm();
  const [mealData, setMealData] = useState(0);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('1 tomato');

  useEffect(() => {
    const apiKey = 'uAesWLP9eT6gdT6la3efWA==DNbpw0P4kmfVY1VR';
    
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey
          },
          contentType: 'application/json'
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setMealData(result);
      } catch (error) {
        setError(error);
        setMealData([]); // Set mealData as an empty array
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [query]);

  function onSubmit(data) {
    setQuery(data.name);
  }

  return (
    <div className='mt-20 flex flex-col justify-center items-center gap-6'>
      <div className='flex flex-row gap-5'>
        <form onSubmit={handleSubmit(onSubmit)} className=' flex gap-3 '>
          <input type='text' placeholder='Enter a meal name' {...register('name')} className=' border-2 text-2xl p-3 rounded-xl' />
          <button type='submit' className=' bg-blue-500 text-2xl p-2 rounded-2xl hover:bg-blue-700'>Find</button>
        </form>
      </div>
     
      <div className=' border-2 w-96 p-4 shadow-2xl rounded-xl '>  
        {error && <p>Error: {"Sorry I couldn't find that meal"}</p>}
        {mealData && mealData.length > 0 && (
          <div className='flex flex-col gap-3'>
            {/* Render mealData here */}
            <p className=' border-1 text-xl'>Meal Name: {mealData[0].name}</p>
            <p className=' border-1 text-xl'>Calories: {mealData[0].calories}</p>
            <p className=' border-1 text-xl'>Carbohydrates: {mealData[0].carbohydrates_total_g}</p>
            <p className=' border-1 text-xl'>Cholesterol: {mealData[0].cholesterol_mg}</p>
            <p className=' border-1 text-xl'>Total Fat: {mealData[0].fat_total_g}</p>
            <p className=' border-1 text-xl'>Protein: {mealData[0].protein_g}</p>
            <p className=' border-1 text-xl'>Sodium: {mealData[0].sodium_mg}</p>
            <p className=' border-1 text-xl'>Sugar: {mealData[0].sugar_g}</p>
            {/* Add other meal properties you want to display */}
          </div>
        )}
        {
            mealData.length === 0 && (
                <div>Sorry I couldn't fond this meal</div>
            )
        }
      </div>
    </div>
  );
}

export default Meal;
