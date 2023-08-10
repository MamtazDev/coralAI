import React from "react";
import SinglePieChart from "./PieChart";

const AverageCoralCover = () => {
  return (
    <div className=" p-[33px]">
      <h5 className="text-[20px] font-[600]">Average Coral Cover</h5>
      <SinglePieChart />
      <div className="flex flex-col items-center gap-[15px]">
        {[15, 35, 65].map((item, idx) => (
          <div className="flex items-center gap-[7px]">
            <div className="h-[14px] w-[14px] rounded-full bg-[#F77A55]"></div>
            <p className="text-[16px] text-[#9291A5]">Image1.png</p>
            <p className="text-[16px] font-[600] text-[#1E1B39]">{item}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AverageCoralCover;
