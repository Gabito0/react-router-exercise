import React from "react";
import { Link } from "react-router-dom";

const Chips = () => {
  const imgSrc =
    "https://www.kroger.com/product/images/large/front/0075752800868";

  const divStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
  };
  return (
    <div style={divStyle}>
      <p>Chips</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Chips;
