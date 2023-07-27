import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineLogout, HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="fixed w-full flex items-center justify-between h-14 text-gray-900 z-10">
      <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-white border-none">
        <img
          className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
          src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
          alt="admin"
        />
        <span className="hidden md:block">ADMIN DASHBOARD</span>
      </div>
      <div className="flex justify-between items-center h-14 bg-white  header-right">
        <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
          <button className="outline-none focus:outline-none">
            <HiOutlineSearch
              size={24}
              className="w-5 text-gray-600 h-5 cursor-pointer"
            />
          </button>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
          />
        </div>
        <ul className="flex items-center">
          <li>
            <div className="block w-px h-6 mx-3 bg-gray-400"></div>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center mr-4 hover:text-indigo-600"
            >
              <span className="inline-flex mr-1">
                <HiOutlineLogout size={32} className="w-5 h-5" />
              </span>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
