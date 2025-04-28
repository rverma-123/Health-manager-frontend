import { useState, useEffect } from "react";
import Timer from "../Components/Timer"
import {DNA} from 'react-loader-spinner'

//I fetch all this yogas from a api "https://yoga-api-nzy4.onrender.com/v1/categories"

function AllYogas() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCategory, setFilteredCategory] = useState("Core Yoga"); // Set initial filtered category here

  useEffect(() => {
    fetch("https://yoga-api-nzy4.onrender.com/v1/categories")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // No need for filterItem function

  // Filter items based on selected category
  const filteredItems = categories.filter((category) =>
    category.category_name.includes(filteredCategory)
  );

 // for second display--
  const [clicked, SetClicked] = useState(false);
  const [dataId , setDataId] = useState();
  function handler(para) {
    SetClicked(true);
    setDataId(para);
    console.log(para);
  }
  function handler1(){
    SetClicked(false);
  }



  return (
    <div className="min-h-screen bg-slate-500 flex flex-col gap-3 mt-16 ">
      <div className={`${clicked === false ? "" : "hidden"}`}>
        <div>
          <h1 className=" text-3xl font-bold text-center mb-2">Yogas</h1>
        </div>
        <div className=" flex flex-col  justify-center items-center">
          <p className="text-2xl font-bold mb-2">Select your catagory</p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-8 items-center mb-8">
          {[
            "Core Yoga",
            "Seated Yoga",
            "Strengthening Yoga",
            "Chest Opening Yoga",
            "Backbend Yoga",
            "Forward Bend Yoga",
            "Hip Opening Yoga",
            "Standing Yoga",
            "Restorative Yoga",
            "Arm Balance Yoga",
            "Balancing Yoga",
            "Inversion Yoga",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setFilteredCategory(category)}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                filteredCategory === category ? "bg-blue-700" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* main content -------------------------------------------------------------------------- */}
        <div>
          {loading ? (
            <div className="flex justify-center  items-center">
               <p > < DNA color="white"/></p>
            </div>
          ) : error ? (
            <p className="text-center text-red-500">Error: {error}</p>
          ) : (
            //  the main display
            <div className="">
              {filteredItems.map((category) => (
                <div key={category.id} className=" ">
                  <div className=" ml-8">
                    <h2 className="text-2xl font-semibold ">
                      {category.category_name}{" "}
                    </h2>
                    <p className="text-sm  mb-4 text-black">
                      {category.category_description}
                    </p>
                  </div>
                  {/* Display yoga poses */}
                  <div className=" flex flex-col">
                    {category.poses.map((pose) => (
                      <div key={pose.id} className=" px-4 mb-4">
                        <div className=" flex flex-col w-full bg-white rounded-lg shadow-md p-4 max-md:flex-col max-sm:flex-col">
                          <div className="w-2/5 ">
                            <img
                              src={pose.url_svg_alt}
                              alt="Images"
                              className=" w-full h-24 mix-blend-darken"
                            />
                          </div>
                          <div>
                            <h3 className="text-base font-bold">
                              {pose.english_name} ({pose.sanskrit_name_adapted}){" "}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {pose.pose_description}
                            </p>
                            <div>
                              <p className=" font-semibold">Pose Benefits</p>
                              <p className="text-sm text-gray-600">
                                {pose.pose_benefits}
                              </p>
                            </div>
                            <div className="font-bold ">
                              <button className=" text-fuchsia-700" onClick={() => handler(pose.id)}>
                                Show more
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

         {/* Second contents ------------------------------------------------------------------- */}
    
      <div className={` ${clicked === false ? "hidden" : "" } mt-28 flex justify-center items-center`}>
       <div>
           <div ><p className=" ml-5 text-lg font-semibold">Do minimum 30's</p></div>
            <div className=" flex justify-center items-center">
              {filteredItems.map((category) => (
                <div key={category.id} className=" ">
                  {/* Display yoga poses */}
                  <div className=" flex flex-col">
                    {category.poses.map((pose) => (
                      <div key={pose.id} className=" px-4 mb-4">
                        { dataId === pose.id &&(

                             <div className={`flex flex-col w-full bg-white rounded-lg shadow-md p-4 max-md:flex-col max-sm:flex-col`}>
                               <div className="w-2/5 ">
                                 <img
                                   src={pose.url_svg_alt}
                                   alt="Images"
                                   className=" w-full h-24 mix-blend-darken"
                                   />
                               </div>
                               <div>
                                 {/* <h3 className="text-base font-bold">
                                   {pose.english_name} ({pose.sanskrit_name_adapted}){" "}
                                 </h3>
                                 <p className="text-sm text-gray-600">
                                   {pose.pose_description}
                                 </p> */}
                                 <div>
                                   <p className=" font-semibold">({pose.sanskrit_name_adapted}) Pose Benefits</p>
                                   <p className="text-sm text-gray-600">
                                     {pose.pose_benefits}
                                   </p>
                                 </div>
                                 <div>
                                 </div>
                               </div>
                             </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="  ml-4">
                    <div className="flex flex-row gap-10 max-lg:flex-col max-sm:flex-col">
                       <div className=" bg-white w-72 max-lg:w-screen  rounded-2xl">
                           <div >
                              <Timer />
                           </div>
                       </div>
                          <div className=" p-4 h-14 max-lg:w-24 flex flex-row bg-blue-500 hover:bg-blue-700 rounded-2xl items-center hover:scale-105 hover:shadow-2xl">
                             <div className=" mx-auto " >
                               <button className=" p-4" onClick={handler1}>Close</button>
                             </div>
                        </div>
                    </div> 
            </div>
        </div>



      </div>





    </div>
  );
}

export default AllYogas;
