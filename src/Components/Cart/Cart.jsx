import React from "react";

const Cart = () => {
  return (
    <div>
      <div className=" bg-[#f3f3f3]  w-[350px] p-5 rounded-xl">
        <h3 className="text-xl font-bold  text-[#2F80ED]">
          Credit Hour Remaining 7 hr
        </h3>
        <hr className="w-11/12 my-3" />

        <h2 className="text-xl font-bold mb-3">Course Name</h2>
        <ul className="list-decimal">
          <li className="relative left-[19px] text-base text-[#1c1b1b99]">
            Introduction to c programming
          </li>
        </ul>
        <hr className="w-11/12 my-3" />
        <p className="text-[#1c1b1bcc] text-base font-medium">
          Total Credit Hour : 13
        </p>
        <hr className="w-11/12 my-3" />
        <p className="text-[#1c1b1bcc] text-base font-semibold">
          Total Price : 48000 USD
        </p>
      </div>
    </div>
  );
};

export default Cart;
