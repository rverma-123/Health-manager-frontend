import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HashLoader } from 'react-spinners';

export default  function WorkOutExcercise() {
    // var muscle = "lats"
  const [exercises, setExercises] = useState([]);
 
  const [loader , setLoader] = useState(false);
    
  async function fetchExercises(para) {
    setExercises([]);
    try {
      setLoader(true);
      const response = await axios.request({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/exercises?muscle=${para}`,
        headers: { 'X-Api-Key': 'uAesWLP9eT6gdT6la3efWA==DNbpw0P4kmfVY1VR' }
      });
      setExercises(response.data);
    } catch (error) {
      console.error(error);
    }finally{
      setLoader(false);
    }
  }
   

  useEffect(() => {
    fetchExercises();
  },[]);


  return (
    <div>
      <h2>Exercise List</h2>
      <buttom onClick={ () => fetchExercises("chest")} >CLick</buttom>
      <div>
        {
          loader === true && (
            <HashLoader color="#36d7b7" />
          )
        }
      </div>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
}





  // useEffect(() => {
  //   async function fetchExercises() {
  //     try {
  //       const response = await axios.request({
  //         method: 'GET',
  //         url: `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
  //         headers: { 'X-Api-Key': 'uAesWLP9eT6gdT6la3efWA==DNbpw0P4kmfVY1VR' }
  //       });
  //       setExercises(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchExercises();
  // }, [muscle]);
