import React from "react";
import Home from "../pages/Home/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-inter container max-w-screen-2xl mx-auto">
      <Header />
      <div className="bg-base-300">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
