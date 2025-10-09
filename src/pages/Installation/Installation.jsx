import React, { useState, useEffect } from "react";
import SectionBlock from "../../components/UI/SectionBlock/SectionBlock";
import { useLoaderData } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";

const Installation = () => {
  const data = useLoaderData(); 
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); 

  const formatNumber = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };

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

  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sorted = [...installedApps].sort((a, b) => {
      if (order === "low-high") return a.size - b.size;
      if (order === "high-low") return b.size - a.size;
      return 0;
    });

    setInstalledApps(sorted);
  };

  return (
    <div className="p-5">
      <Toaster position="top-right" />

      <div className="bg-base-300 mb-5">
        <SectionBlock
          title="Your Installed Apps"
          subTitle="Explore all trending apps on the market developed by us"
        />
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2>
          <span>{installedApps.length}</span> Apps Found
        </h2>

        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleSort}
          value={sortOrder}
        >
          <option disabled value="">
            Sort By Size
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
            className="flex items-center justify-between bg-base-100 p-4 rounded-lg shadow-md"
          >
            {/* App Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-semibold">{app.title}</h3>
                <p className="text-sm text-gray-500">{app.companyName}</p>

                <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
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

            
            <button
              onClick={() => handleUninstall(app.id)}
              className="btn btn-success btn-sm"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
