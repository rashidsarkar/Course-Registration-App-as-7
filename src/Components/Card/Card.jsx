import React from "react";
import SingleCard from "../SingleCard/SingleCard";

const Card = ({ catagoryData }) => {
  // console.log(catagoryData);
  return (
    <div>
      <div className="container flex mx-auto my-3">
        <div className="flex-1 ">
          <div className="grid grid-cols-3 gap-2">
            {catagoryData.map((item, idx) => (
              <SingleCard key={idx} catagoryData={item}></SingleCard>
            ))}
          </div>
        </div>

        <div className="text-center bg-green-400 h-52 w-[350px]">
          <h3>Hello this is Card</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
