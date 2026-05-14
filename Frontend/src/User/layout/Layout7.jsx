import React from "react";
import Header7 from "../components/header/header7/Header7";
import { Outlet } from "react-router-dom";

const Layout7 = () => {
  return (
    <div className="min-h-screen bg-[#f5f3ef] overflow-hidden p-6">
      <Header7 />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout7;