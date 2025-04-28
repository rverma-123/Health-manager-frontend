import React from "react";
// import Img2 from "../Images/dietImg2.jpeg"

function Cards(props) {
  return (
    <div className="flex max-sm:flex-col flex-row gap-4 justify-center items-center border-4 w-1/2 max-sm:w-screen hover:bg-orange-400 hover:duration-1000">
      <div className=" w-28 max-sm:w-1/3 "> <img src={props.img} alt="img"  className=" rounded-full"/> </div>
      <div>
        <div>
          <p className="text-lg font-bold">{props.head}</p>
        </div>
        <div className=" w-96">
         {props.text}
        </div>
      </div>
    </div>
  );
}

export default Cards;
