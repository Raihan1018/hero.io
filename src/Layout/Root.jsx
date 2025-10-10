import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <div className="font-inter ">
      <main className="container max-w-screen-2xl mx-auto min-h-screen flex flex-col px-2 md:px-4 lg:px-6">
        <Header />

        {isPageLoading && (
          <div className="flex flex-col justify-center items-center absolute inset-0 bg-base-300/60 z-50 backdrop-blur-sm">
            <div className="w-12 h-12 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
            <p className="mt-3 text-gray-600 text-4xl font-medium">
              Loading...
            </p>
          </div>
        )}

        <div className="flex-1 bg-base-300">
          <Outlet />
        </div>
      </main>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
