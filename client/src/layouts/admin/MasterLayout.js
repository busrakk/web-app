import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MasterLayout(props) {
  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
        <Navbar />
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default MasterLayout;
