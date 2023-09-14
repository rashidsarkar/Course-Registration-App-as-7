import React, { useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Card = ({ catagoryData }) => {
  const [seletedData, setSeletedData] = useState([]);
  const [creditOnCart, setCreditOnCart] = useState(0);
  const [totalPriceOnCart, setTotalPriceOnCart] = useState(0);

  const handleCorseName = (data) => {
    const temData = [...seletedData];
    const newData = seletedData.find((item) => item.title === data.title);
    if (!newData) {
      temData.push(data);

      setSeletedData(temData);
      let temCredit = creditOnCart;
      temCredit = temCredit + Number(data.credit);
      setCreditOnCart(temCredit);

      let temPrice = totalPriceOnCart;
      temPrice = temPrice + Number(data.price);
      setTotalPriceOnCart(temPrice);
    } else {
      toast.error("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
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

        <Cart
          seletedData={seletedData}
          totalPriceOnCart={totalPriceOnCart}
          creditOnCart={creditOnCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Card;
