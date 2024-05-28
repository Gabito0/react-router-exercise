import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Snacks = () => {
  const [background, setBackground] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/soda":
        setBackground(
          "url('https://evending.com/cdn/shop/files/snack_3_Yes_575_2048x.webp?v=1692775803')"
        );
        break;
      case "/chips":
        setBackground("url('https://example.com/path/to/chips-image.jpg')");
        break;
      case "/sardines":
        setBackground("url('https://example.com/path/to/sardines-image.jpg')");
        break;
      default:
        setBackground(""); // Default background
    }
  }, [location.pathname]);
  useEffect(() => {
    const body = document.body;
    body.style.backgroundImage = background;
    return () => {
      body.style.backgroundImage = "";
    };
  }, [background]);
  return (
    <div>
      <Link to="/soda"> Soda</Link>
      <Link to="/chips">Chips</Link>
      <Link to="/sardines">Sardines</Link>
    </div>
  );
};

export default Snacks;
