import React from "react";
import { Link } from "react-router-dom";

const Sardines = () => {
  const imgSrc =
    "https://www.msc.org/images/default-source/msc-english/content-banner/fish-to-eat/sardine.jpg?sfvrsn=8f6e89ac_7";

  const divStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
  };
  return (
    <div style={divStyle}>
      <p>Sardines</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Sardines;
