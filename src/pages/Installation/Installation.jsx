import React, { useState, useEffect } from "react";
import SectionBlock from "../../components/UI/SectionBlock/SectionBlock";
import { useLoaderData } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import Button from "../../components/UI/Button/Button";
import { formatNumber } from "../../utils/FormateNumber/FormateNumber";

const Installation = () => {
  const data = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  formatNumber();

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const filteredApps = data.filter((app) => storedApps.includes(app.id));
    setInstalledApps(filteredApps);
  }, [data]);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem(
      "installedApps",
      JSON.stringify(updatedApps.map((app) => app.id))
    );
    toast.success("App uninstalled successfully!");
  };

  // sorting function — Sort by Downloads
  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sorted = [...installedApps].sort((a, b) => {
      if (order === "low-high") return a.downloads - b.downloads;
      if (order === "high-low") return b.downloads - a.downloads;
      return 0;
    });

    setInstalledApps(sorted);
  };

  return (
    <div className="p-5">
      <Toaster position="top-right" />

      <div className="bg-base-300">
        <SectionBlock
          title="Your Installed Apps"
          subTitle="Explore all trending apps on the market developed by us"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2 sm:gap-0">
        <h2 className="text-lg sm:text-xl font-semibold text-center">
          <span className="text-purple-600">{installedApps.length}</span> Apps
          Found
        </h2>

        <select
          className="select select-bordered w-full sm:w-auto max-w-xs"
          onChange={handleSort}
          value={sortOrder}
        >
          <option disabled value="">
            Sort By Downloads
          </option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        {installedApps.length === 0 && (
          <p className="text-center text-gray-500">No installed apps found!</p>
        )}

        {installedApps.map((app) => (
          <div
            key={app.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-base-100 p-4 rounded-lg shadow-md gap-4"
          >
            {/* App Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
              <div className="w-20 h-20 sm:w-16 sm:h-16 bg-gray-200 rounded-lg flex-shrink-0 mx-auto sm:mx-0">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-base md:text-lg">
                  {app.title}
                </h3>
                <p className="text-sm text-gray-500">{app.companyName}</p>

                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <img
                      src={downloadIcon}
                      alt="Downloads"
                      className="w-4 h-4"
                    />
                    {formatNumber(app.downloads)}
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={ratingIcon} alt="Rating" className="w-4 h-4" />
                    {app.ratingAvg}
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={reviewIcon} alt="Reviews" className="w-4 h-4" />
                    {formatNumber(app.reviews)}
                  </div>
                  <div>{app.size} MB</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center sm:justify-end w-full sm:w-auto">
              <button onClick={() => handleUninstall(app.id)}>
                <Button text={"Uninstall"} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
