// app/dashboard/layout.tsx
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import React from "react";


const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-6 ml-64 mt-16">{children}</main> 
      </div>
    </div>
  );
};

export default DashboardLayout;
