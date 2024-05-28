import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Snacks = () => {
  return (
    <div>
      <Link to="/soda"> Soda</Link>
      <Link to="/chips">Chips</Link>
      <Link to="/sardines">Sardines</Link>
    </div>
  );
};

export default Snacks;
