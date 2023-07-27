import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MasterLayout(props) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MasterLayout;
