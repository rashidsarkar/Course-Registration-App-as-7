import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Home = () => {
  const [catagoryData, setCatagoryData] = useState([]);

  useEffect(() => {
    fetch("courseJson.json")
      .then((res) => res.json())
      .then((data) => setCatagoryData(data.courses));
  }, []);

  return (
    <>
      <Card catagoryData={catagoryData}></Card>
    </>
  );
};

export default Home;
