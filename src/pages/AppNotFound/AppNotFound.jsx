import SectionBlock from "../../components/UI/SectionBlock/SectionBlock";
import Button from "../../components/UI/Button/Button";
import appNotFoundImg from "../../assets/appNotFound.png";
import { Link } from "react-router-dom";
import ButtonLink from "../../components/UI/ButtonLink/ButtonLink";

const AppNotFound = () => {
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
      <ButtonLink to="/" text={"Go Back"} />
    </div>
  );
};

export default AppNotFound;
