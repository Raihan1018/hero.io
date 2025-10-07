import React from "react";

const SectionBlock = ({ title, subTitle }) => {
  return (
    <div className="text-center space-y-3">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">{title}</h1>
      <p className="text-[#627382]">{subTitle}</p>
    </div>
  );
};

export default SectionBlock;
