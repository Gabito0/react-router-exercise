import React from "react";
import Snacks from "./Snacks";
import "./Home.css";

const Home = () => {
  const imgSrc =
    "https://evending.com/cdn/shop/files/snack_3_Yes_575_2048x.webp?v=1692775803";

  const divStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
  };

  return (
    <div style={divStyle}>
      <p>This is the home page</p>
      <Snacks />
    </div>
  );
};

export default Home;
