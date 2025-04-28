import React, { useState, useRef } from 'react';
import beepSound from "../sound/beepSound.mp3" ; // Import your beep sound file
// import beepSound2 from "../sound/beepSound2.mp3" ; // Import your beep sound file

import { FaPlayCircle } from "react-icons/fa";
import { FaCirclePause } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";

function Timer() {
  const [time, setTime] = useState({ minutes: 3, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const audioRef = useRef(new Audio(beepSound));

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(prevTime => {
        if (prevTime.minutes === 0 && prevTime.seconds === 0) {
          stopTimer();
          playBeepSound(); // Play beep sound when time is over
          return prevTime;
        } else if (prevTime.seconds === 0) {
          return { minutes: prevTime.minutes - 1, seconds: 59 };
        } else {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        }
      });
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setTime({ minutes: 3, seconds: 0 });
  };

  const handleMinuteChange = (e) => {
    const minutes = parseInt(e.target.value);
    setTime(prevTime => ({ ...prevTime, minutes }));
  };

  const handleSecondChange = (e) => {
    const seconds = parseInt(e.target.value);
    setTime(prevTime => ({ ...prevTime, seconds }));
  };

  const playBeepSound = () => {
    const audio = audioRef.current;
    audio.play();
    setTimeout(() => {
        audio.play();
        audio.currentTime = 0; // Reset audio to the beginning
      },1000); // 1000 milliseconds = 1 seconds
  };

  const formatTime = (time) => {
    return `${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='flex flex-col justify-center items-center gap-5 border-3  shadow-2xl shadow-rose-600 w-72 h-60 max-lg:w-screen max-sm:w-screen max-lg:h-48 max-lg:gap-1 '>
        <div className=' text-2xl font-semibold  max-sm:text-lg'>
           <p>Countdown Timer</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3 max-lg:gap-1 '>
           {!isRunning ? (
             <div className='flex flex-col justify-center items-center gap-3 max-lg:gap-1 ' >
                   <div className=' ml-20 max-auto '>
                        <input type="number" placeholder="Enter minutes" onChange={handleMinuteChange} />
                        <input type="number" placeholder="Enter seconds" onChange={handleSecondChange} />
                   </div>
                   <div>
                         <button onClick={startTimer}> <FaPlayCircle size={25}/></button>
                   </div>
             </div>
             ) : (
                <div>
                    <button onClick={stopTimer}> <FaCirclePause size={25}/></button>
                </div>
           )}
           
           <div className='flex flex-row gap-12 text-xl font-bold'>
               <button onClick={resetTimer}>< VscDebugRestart size={25}/> </button>
              <p >{formatTime(time)}</p>
           </div>
        
        </div>
    </div>
  );
}

export default Timer;
