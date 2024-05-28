import React from "react";
import Snacks from "./Snacks";
import "./Home.css";

const Home = () => {
  const imgSrc =
    "https://evending.com/cdn/shop/files/snack_3_Yes_575_2048x.webp?v=1692775803";

  const divStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center", // Adjust as needed
    height: "100vh", // Adjust as needed
    width: "100%", // Adjust as needed
  };

  return (
    <div>
      <div style={divStyle}></div>
      <p>This is the home page</p>
      <Snacks />
    </div>
  );
};

export default Home;
