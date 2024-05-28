import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
  let body = document.querySelector("body");

  const imgSrc =
    "https://t3.ftcdn.net/jpg/02/81/34/82/360_F_281348262_uAaQbY6S6Vg3Otp7hrTzeYckiMMruiYe.jpg";

  const divStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
  };
  return (
    <div style={divStyle}>
      <p>Soda!</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Soda;
