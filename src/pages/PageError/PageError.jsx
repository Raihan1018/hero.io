import React from "react";
import SectionBlock from "../../components/UI/SectionBlock/SectionBlock";
import pageErrorImg from "../../assets/pageError.png";
import Button from "../../components/UI/Button/Button";
import { Link } from "react-router-dom";

const PageError = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="flex flex-col items-center justify-center flex-1 bg-gray-100 p-6">
        <div className="w-full max-w-md mb-6">
          <img
            src={pageErrorImg}
            alt="Page not found"
            className="w-full object-contain rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center mb-8">
          <SectionBlock
            title={"Oops, page not found!"}
            subTitle={"The page you are looking for is not available."}
          />
        </div>

        <div>
          <Link to="/">
            <Button
              text={"Go Back!"}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300"
            />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default PageError;
