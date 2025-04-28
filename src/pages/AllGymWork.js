import React, { useEffect, useState } from "react";


//from here all my gym exercises comes that is written by me
import WorkOutData from "../data/WorkOutData";

// import { FaPlay } from "react-icons/fa";

import Timer from "../Components/Timer";

function AllGymWork() {

  //  for adding timer and response-------------
  const [isScaled, setIsScaled] = useState(false);
  const [dataId, setDataId] = useState();
  function handleClick(i) {
    setDataId(i);
    setIsScaled(!isScaled);
  }
  function handleClick1() {
    setIsScaled(!isScaled);
  }




  //main function ----------
  const first = WorkOutData.filter((data) => {
    return data.category === "biceps";
  });

  const [items, setItems] = useState(first);

  const [pressed, setPressed] = useState(first);

  function filterItem(para) {
    const updatedItems = WorkOutData.filter((data) => {
      return data.category === para;
    });
    setItems(updatedItems);
    setPressed(para);
  }

  return (
    <div className="flex  flex-col justify-center items-center w-full gap-4 min-h-screen bg-slate-500  scroll-smooth mt-16">
      <div>
        <p className="text-2xl font-bold max-lg:text-xl">Select your catagory</p>
        <hr />
      </div>

      {/* All button section */}
      <div
        className={`flex flex-wrap justify-center gap-4 sm:gap-8 items-center ${
          isScaled ? "hidden" : " "
        }`}
      >
        <button
          onClick={() => filterItem("biceps")}
          className={`bg-white shadow-md  hover:bg-blue-700 p-2 rounded-full transition duration-500 ease-in-out  ${
            pressed === "biceps" ? "bg-blue-700" : ""
          } `}
        >
          {" "}
          Biceps
        </button>
        <button
          onClick={() => filterItem("triceps")}
          className={`bg-white shadow-md hover:bg-blue-700 p-2 rounded-full transition duration-500 ease-in-out  ${
            pressed === "triceps" ? "bg-blue-700" : ""
          } `}
        >
          Triceps
        </button>
        <button
          onClick={() => filterItem("forearms")}
          className={`bg-white shadow-md hover:bg-blue-700 p-2 rounded-full transition duration-500 ease-in-out ${
            pressed === "forearms" ? "bg-blue-700" : ""
          } `}
        >
          Forearms
        </button>
        <button
          onClick={() => filterItem("chest")}
          className={`bg-white shadow-md hover:bg-blue-700 p-2 rounded-full transition duration-500 ease-in-out ${
            pressed === "chest" ? "bg-blue-700" : ""
          } `}
        >
          Chest
        </button>
        <button
          onClick={() => filterItem("back")}
          className={`bg-white shadow-md hover:bg-blue-700 p-2 rounded-full transition duration-500 ease-in-out ${
            pressed === "back" ? "bg-blue-700" : ""
          } `}
        >
          Back
        </button>
      </div>

      {/* All items are here */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full `}
      >
        {items.map((ele) => {
          const { id, vidio, name, description } = ele;
          return (
            <div
              key={id}
              className={`flex flex-col bg-white rounded-lg shadow-md p-4  ${
                isScaled ? "hidden" : " "
              }`}
            >
              <div className="aspect-w-16 aspect-h-9">
                <video
                  muted
                  loop
                  autoPlay
                  className="object-cover w-full h-full"
                >
                  <source src={vidio} type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col mt-4">
                <div className="text-lg font-semibold">{name}</div>
                <div className="text-sm text-gray-600">{description}</div>
                <button
                  onClick={() => handleClick(id)}
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Show
                </button>
              </div>
            </div>
          );
        })}
      </div>

                          




     <div className={`max-lg:w-full max-sm:w-full ${isScaled ? "" : " hidden"}`}>
        <div>
          {items.map((ele) => {
            const { id, vidio, name, description } = ele;
            return (
              <div>
                <div>
                  {id === dataId && (
                    <div>
                      <div className="aspect-w-16 aspect-h-9">
                        <p className="text-3xl font-bold max-lg:text-xl"> {name}</p>
                        <video
                          muted
                          loop
                          autoPlay
                          className="object-cover w-1/2 h-1/2 rounded-2xl shadow-2xl max-lg:w-full max-sm:w-full max-sm:h-48  "
                        >
                          <source src={vidio} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

       <div className=" mt-8 flex flex-row gap-10 max-lg:flex-col max-sm:flex-col">
              
            <div className=" bg-white w-72 max-lg:w-screen  rounded-2xl">
               <div >
                  <Timer />
               </div>
             </div>
               <div className=" p-4 h-14 max-lg:w-24 flex flex-row bg-blue-500 hover:bg-blue-700 rounded-2xl items-center hover:scale-105 hover:shadow-2xl">
                  <div className=" mx-auto " >
                     <button className=" p-4" onClick={handleClick1}>Close</button>
                  </div>
          </div>

       </div> 



      </div>

    </div>
  );
}

export default AllGymWork;
