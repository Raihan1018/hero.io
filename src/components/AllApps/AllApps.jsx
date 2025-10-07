import { IoIosStar, IoMdDownload } from "react-icons/io";
import SectionBlock from "../UI/SectionBlock/SectionBlock";
import Button from "../UI/Button/Button";
import { HashLoader } from "react-spinners";
import { Link } from "react-router-dom";

const AllApps = ({ data }) => {
  // Format large numbers into K, M, B
  const formatNumber = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };

  // Show spinner if data not loaded or empty
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
        <p className="flex justify-center items-center min-h-screen">
          <HashLoader />
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="py-5">
        <SectionBlock
          title="Trending Apps"
          subTitle="Explore All Trending Apps on the Market developed by us"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mx-auto p-3">
        {data.slice(0, 8).map((app, index) => {
          const totalRatings =
            app.ratings?.reduce((sum, rating) => sum + rating.count, 0) || 0;

          return (
            <div
              key={index}
              className="card card-compact bg-base-100 shadow-xl p-3 hover:-translate-y-2 transition-all ease-in-out duration-200"
            >
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
          );
        })}
      </div>

      <Link to= "/apps" className="flex justify-center py-5">
        <Button text="Show All" />
      </Link>
    </div>
  );
};

export default AllApps;
