import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="font-akaya text-[64px] uppercase transition-all duration-200 ease-linear hover:scale-110">
      <Link to="/">Welly's</Link>
    </div>
  );
};

export default Logo;
