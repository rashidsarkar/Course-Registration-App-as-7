import React from "react";
import SingleCard from "../SingleCard/SingleCard";
import Cart from "../Cart/Cart";

const Card = ({ catagoryData }) => {
  // console.log(catagoryData);
  return (
    <div>
      <div className="container flex mx-auto my-3 gap-2">
        <div className="flex-1 ">
          <div className="grid grid-cols-3 gap-2">
            {catagoryData.map((item, idx) => (
              <SingleCard key={idx} catagoryData={item}></SingleCard>
            ))}
          </div>
        </div>

        <Cart></Cart>
      </div>
    </div>
  );
};

export default Card;
