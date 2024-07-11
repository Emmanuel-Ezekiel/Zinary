import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/sidebar";

const DashboardLayout = () => {
  return (
    <div className="w-full bg-backgroud h-screen overflow-auto lg:flex">
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default DashboardLayout;
