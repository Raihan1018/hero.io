import React, { useState, useEffect } from "react";
import { IoIosStar, IoMdDownload } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link, useLoaderData } from "react-router-dom";
import SectionBlock from "../../components/UI/SectionBlock/SectionBlock";
import ButtonLink from "../../components/UI/ButtonLink/ButtonLink";

const Apps = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredApps, setFilteredApps] = useState(data);

  const formatNumber = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
        <p className="flex justify-center items-center min-h-screen">
          Loading...
        </p>
      </div>
    );
  }

  useEffect(() => {
    setIsSearching(true);
    const timer = setTimeout(() => {
      const filtered = data.filter(
        (app) =>
          app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.companyName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApps(filtered);
      setIsSearching(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchTerm, data]);

  return (
    <div>
      <SectionBlock
        title={"Our All Applications"}
        subTitle={
          "Explore All Apps on the Market developed by us. We code for Millions"
        }
      />

      <div className="flex justify-between items-center px-5 mb-4">
        <h1 className="font-semibold text-lg">
          Total Apps: {filteredApps.length}
        </h1>

        <div className="relative w-full max-w-xs">
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search apps..."
            className="input input-bordered w-full pl-10 pr-3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {isSearching ? (
        <div className="flex flex-col justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
          <p className="mt-3 text-gray-500">Searching...</p>
        </div>
      ) : filteredApps.length === 0 ? (
        <p className="text-center text-gray-500 text-2xl mt-20">
          No apps found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mx-auto p-3">
          {filteredApps.map((app, index) => {
            const totalRatings =
              app.ratings?.reduce((sum, rating) => sum + rating.count, 0) || 0;

            return (
              <Link key={index} to={`/app-details/${app.id}`}>
                <div className="card card-compact bg-base-100 shadow-xl p-3 hover:-translate-y-2 transition-all ease-in-out duration-200">
                  <figure>
                    <img src={app.image} alt={app.title} />
                  </figure>

                  <div className="flex items-center justify-between py-3">
                    <h2 className="font-semibold">{app.title}</h2>
                    <p className="text-sm text-gray-500">{app.companyName}</p>
                  </div>

                  <div className="flex justify-between items-center gap-4 text-gray-600 text-sm">
                    <span className="flex items-center gap-1 text-green-600 bg-green-100 p-2 rounded-md">
                      <IoMdDownload />
                      {formatNumber(app.downloads)}
                    </span>
                    <span className="flex items-center gap-1 text-orange-600 bg-orange-100 p-2 rounded-md">
                      <IoIosStar />
                      {formatNumber(totalRatings)}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      <ButtonLink to="/" text={"Go Back"}/>
    </div>
  );
};

export default Apps;
