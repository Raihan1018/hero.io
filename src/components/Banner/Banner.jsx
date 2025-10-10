import { Link } from "react-router-dom";
import googlePlayStore from "../../assets/google_play_store.png";
import appleApp from "../../assets/apple_app.png";
import bannerImg from "../../assets/hero.png";
import BannerState from "../BannerState/BannerState";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 ">
        <div className=" text-center">
          <div>
            <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold mt-5 md:mt-20 lg:mt-28 md:mb-5">
              We Build <br />{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
                Productive
              </span>
              <span> Apps</span>
            </h1>
            <p className="py-6 text-[#627382]">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. <br /> Our goal is to
              turn your ideas into digital experiences that truly make an
              impact.
            </p>

            <div className="w-1/2 md:w-full  md:flex items-center mx-auto justify-center md:space-x-5 lg:space-x-10 space-y-5 md:space-y-0 my-5">
              <Link
                to="https://play.google.com/store/games?hl=en"
                target="_blank"
                className="flex items-center border px-4 py-1.5 rounded-md border-gray-300 shadow-sm hover:-translate-y-1 transition-all duration-200 ease-in-out space-x-2"
              >
                {" "}
                <img src={googlePlayStore} alt="Google play" />{" "}
                <span className="font-semibold md:text-xl">Google Play</span>
              </Link>
              <Link
                to="https://www.apple.com/app-store/"
                target="_blank"
                className="flex items-center border px-4 py-1.5 rounded-md border-gray-300 shadow-sm hover:-translate-y-1 transition-all duration-200 ease-in-out space-x-2"
              >
                {" "}
                <img src={appleApp} alt="Apple app" />{" "}
                <span className="font-semibold md:text-xl">App Store</span>
              </Link>
            </div>
            <div className="pt-5">
              <img
                className="w-2/3 mx-auto"
                src={bannerImg}
                alt="Banner image"
              />
            </div>
          </div>
        </div>
      </div>
      <BannerState />
    </div>
  );
};

export default Banner;
