import React, { useState, useEffect } from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";
import { IoIosStar, IoMdDownload } from "react-icons/io";
import { toast, Toaster } from "react-hot-toast";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AppNotFound from "../AppNotFound/AppNotFound";
import Button from "../../components/UI/Button/Button";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const app = data.find((item) => item.id === parseInt(id));

  const [isInstalled, setIsInstalled] = useState(false);

  // Check if already installed
  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    setIsInstalled(installedApps.includes(app?.id));
  }, [app?.id]);

  if (!app) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-xl font-semibold text-gray-600">
        App not found!
      </div>
    );
  }

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;

  const formatNumber = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };

  // handle Install click
  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setIsInstalled(true);
      toast.success("App installed successfully!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-5 py-8 sm:py-10 bg-base-300">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start bg-base-100 rounded-2xl shadow-lg p-5 sm:p-6">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-md shadow-md bg-white p-2 sm:p-3"
        />
        <div className="md:ml-6 mt-4 md:mt-0 w-full">
          <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
          <p className="text-gray-500 mb-3 text-sm sm:text-base">
            Developed by{" "}
            <span className="text-[#632EE3] font-medium">{companyName}</span>
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-3">
            <div className="flex flex-col items-center gap-1">
              <img
                src={downloadIcon}
                alt="Downloads"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <span className="text-gray-700 text-lg sm:text-2xl font-semibold">
                {formatNumber(downloads)}+
              </span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <img
                src={ratingIcon}
                alt="Rating"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <span className="text-gray-700 text-lg sm:text-2xl font-semibold">
                {ratingAvg}
              </span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <img
                src={reviewIcon}
                alt="Reviews"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <span className="text-gray-700 text-lg sm:text-2xl font-semibold">
                {formatNumber(reviews)} reviews
              </span>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`relative inline-block overflow-hidden rounded-xl px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-base sm:text-lg shadow-md transition-transform duration-300 mt-5
              ${
                isInstalled
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-[#00D390] text-white hover:scale-105"
              }`}
          >
            <span className="relative z-10">
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </span>
            {!isInstalled && (
              <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine"></span>
            )}
          </button>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 bg-base-100 p-4 sm:p-6 rounded-md shadow-md">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-5 text-[#632EE3]">
          Ratings
        </h3>
        <div className="bg-white p-3 sm:p-4 rounded-xl shadow-inner">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              layout="vertical"
              data={[...ratings].reverse()}
              margin={{ top: 10, right: 20, left: 30, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                tick={{ fill: "#555" }}
                domain={[0, "dataMax + 1000"]}
              />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fill: "#555" }}
                width={60}
              />
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#FF9800"
                barSize={18}
                radius={[4, 4, 4, 4]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="divider my-8 sm:my-10"></div>

      <div className="mt-8 sm:mt-10 bg-base-100 p-4 sm:p-6 rounded-md shadow-md">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
          Description
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
