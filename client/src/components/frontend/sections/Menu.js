import React from "react";
import Menus from "../Menus";

const Menu = () => {
  return (
    <div id="menu" className="mb-10 w-screen relative mt-8 bg-white">
      <div className="text-[72px] font-satisfy capitalize flex justify-center items-center mx-auto bg-white">
        Menu
      </div>
      <div className="text-fontmd font-medium uppercase flex justify-center items-center mx-auto text-gray-600 mb-6 mt-1">
        OUR MOST POPULAR MENU
      </div>
      <Menus />
    </div>
  );
};

export default Menu;
