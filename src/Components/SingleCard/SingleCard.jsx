import React from "react";

import { LuDollarSign } from "react-icons/Lu";

const SingleCard = ({ catagoryData }) => {
  const { title, price, credit, description, image_url } = catagoryData;
  // console.log(image_url);

  return (
    <div>
      <div className="bg-[#f3f3f3] p-4 h-[400px] rounded-xl">
        <div className="mx-auto  ">
          <div className="mx-auto">
            <div className=" w-[270px]">
              <img
                className="rounded-xl h-[205px] relative"
                src={image_url}
                alt=""
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="text-sm">{description}</p>
            </div>
            <div>
              <div className="icons flex">
                <LuDollarSign className="text-2xl mr-2" />
                <h3>Price : {price}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
