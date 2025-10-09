import React from "react";
import SectionBlock from "../../components/UI/SectionBlock/SectionBlock";
import Button from "../../components/UI/Button/Button";
import appNotFoundImg from "../../assets/appNotFound.png";
import { useNavigate } from "react-router-dom";

const AppNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      
      <div className="w-full max-w-md mb-6">
        <img
          src={appNotFoundImg}
          alt="App not found"
          className="w-full object-contain rounded-lg shadow-lg"
        />
      </div>

      <div className="text-center mb-8">
        <SectionBlock
          title={"OOPS!! APP NOT FOUND"}
          subTitle={
            "The App you are requesting is not found on our system. Please try another app."
          }
        />
      </div>

      <div>
        <Button
          title={"Go Back!"}
          onClick={() => navigate(-1)}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300"
        />
      </div>
    </div>
  );
};

export default AppNotFound;
