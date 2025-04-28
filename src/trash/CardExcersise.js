import React from "react";
import BackVideo from "./dumbel_curl.mp4";
import { useState } from "react";


function CardExcersise() {
  const [result, setResult] = useState(false);

  function handler() {
    setResult(true);
  }

  return (
    <div className="w-full">
      <div className="flex flex-col border border-gray-300 shadow-lg rounded-lg overflow-hidden w-1/4">
        <div className="relative">
          <video muted loop autoPlay className="w-full">
            <source src={BackVideo} type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-3 py-1 rounded-tr-lg">
            Dumbbell Curl
          </div>
        </div>
        <div className="flex flex-row justify-between items-center px-4 py-3">
          <div className="text-xl font-semibold text-gray-800">
            Dumbbell Curl
          </div>
          <button
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300 "
            onClick={handler}
          >
            Show
          </button>
        </div>
        <div>
          {result === true && (
            <div className=" flex justify-center items-center scale-150  ">
              <video muted loop autoPlay className="w-full">
                <source src={BackVideo} type="video/mp4" />
              </video>
            </div>
          )}
        </div>

      </div>
   </div>

  );
}

export default CardExcersise;
