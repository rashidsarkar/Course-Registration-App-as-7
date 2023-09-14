import React, { useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import Cart from "../Cart/Cart";

const Card = ({ catagoryData }) => {
  const [seletedData, setSeletedData] = useState([]);

  const handleCorseName = (data) => {
    const temData = [...seletedData];
    const newData = seletedData.find((item) => item.title === data.title);
    if (!newData) {
      temData.push(data);

      setSeletedData(temData);
    }
  };

  return (
    <div>
      <div className="container flex mx-auto my-3 gap-2">
        <div className="flex-1 ">
          <div className="grid grid-cols-3 gap-2">
            {catagoryData.map((item, idx) => (
              <SingleCard
                key={idx}
                handleCorseName={handleCorseName}
                catagoryData={item}
              ></SingleCard>
            ))}
          </div>
        </div>

        <Cart seletedData={seletedData}></Cart>
      </div>
    </div>
  );
};

export default Card;
