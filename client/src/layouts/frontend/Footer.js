import React from "react";
import Logo from "../../components/elements/Logo";
import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div id="contact" className="w-full text-gray-700 bg-gray-50 body-font">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <div className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
            <Logo />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Food, Delicios and Order!
          </p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <Link
                to="/#"
                className="text-gray-700 cursor-pointer hover:text-gray-900 transition-all duration-200 ease-linear hover:scale-110"
              >
                <BiLogoFacebook size={24} />
              </Link>
              <Link
                to="/#"
                className="ml-3 text-gray-700 cursor-pointer hover:text-gray-900 transition-all duration-200 ease-linear hover:scale-110"
              >
                <BiLogoTwitter size={24} />
              </Link>
              <Link
                to="/#"
                className="ml-3 text-gray-700 cursor-pointer hover:text-gray-900 transition-all duration-200 ease-linear hover:scale-110"
              >
                <BiLogoInstagram size={24} />
              </Link>
              <Link
                to="/#"
                className="ml-3 text-gray-700 cursor-pointer hover:text-gray-900 transition-all duration-200 ease-linear hover:scale-110"
              >
                <BiLogoLinkedin size={24} />
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium text-black text-fontlg uppercase title-font">
              Address
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <span className="text-gray-700 cursor-pointer transition-all duration-200 ease-linear hover:scale-110">
                  Address 500 Terry Francine Street San Francisco, CA 94158
                </span>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium text-black text-fontlg uppercase title-font">
              Opening Hours
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <span className="text-gray-700 cursor-pointer transition-all duration-200 ease-linear hover:scale-110">
                  Mon - Fri: 11am - 10pm
                </span>
              </li>
              <li className="mt-3">
                <span className="text-gray-700 cursor-pointer transition-all duration-200 ease-linear hover:scale-110">
                  Sat - Sun: 11am - 12am
                </span>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/3 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium text-black text-fontlg uppercase title-font">
              Contact Us
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <span className="text-gray-700 cursor-pointer transition-all duration-200 ease-linear hover:scale-110">
                  info@wellys.com
                </span>
              </li>
              <li className="mt-3">
                <span className="text-gray-700 cursor-pointer transition-all duration-200 ease-linear hover:scale-110">
                  123 456 6780
                </span>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
