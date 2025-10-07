import React from "react";

const BannerState = () => {
  const states = [
    {
      id: 1,
      title: "Total Downloads",
      value: "29.6M",
      description: "21% more than last month",
    },
    {
      id: 2,
      title: "Total Reviews",
      value: "906K",
      description: "46% more than last month",
    },
    {
      id: 3,
      title: "Active Apps",
      value: "132+",
      description: "31 more will Launch",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
      <h1 className="text-white text-2xl  md:text-3xl lg:text-5xl font-bold text-center py-5  md:py-10">
        Trusted by Millions, Built for You
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-2/3 mx-auto py-5 md:py-10">
          {states.map((state) => (
            <div
              className="space-y-3 text-center shadow-lg md:shadow-none p-5 md:p-0 rounded-md"
              key={state.id}
            >
              <h4 className="text-white opacity-80">{state.title}</h4>
              <h1 className="text-4xl font-extrabold text-white">
                {state.value}
              </h1>
              <h3 className="text-white opacity-80">{state.description}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerState;
