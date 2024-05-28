import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
  let body = document.querySelector("body");

  return (
    <div>
      <p>Soda!</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Soda;
