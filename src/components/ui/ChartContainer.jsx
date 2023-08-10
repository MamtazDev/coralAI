import React from "react";
import PieChart from "./PieChart";

const ChartContainer = () => {
  return (
    <div className="grid grid-cols-2 mt-8">
      <div>
        <h5 className="text-lg font-[700]">Hard/Soft Coral</h5>
        <PieChart />
        <div className="flex justify-center gap-10">
          <div className="flex gap-2 items-center">
            <div className="h-[16px] w-[16px] bg-[red] rounded-full"></div>
            <p className="text-[#cbcace] font-[600]">Hard coral</p>
            <p className=" font-[700]">78%</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="h-[16px] w-[16px] bg-[red] rounded-full"></div>
            <p className="text-[#cbcace] font-[600]">Soft coral</p>
            <p className=" font-[700]">22%</p>
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-lg font-[700]">Live Coral Cover</h5>
        <PieChart />
        <div className="flex justify-center gap-10">
          <div className=" flex gap-2 items-center">
            <div className="h-[16px] w-[16px] bg-[red] rounded-full"></div>
            <p className="text-[#cbcace] font-[600]">Coral</p>
            <p className=" font-[700]">48%</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="h-[16px] w-[16px] bg-[red] rounded-full"></div>
            <p className="text-[#cbcace] font-[600]">Non-coral</p>
            <p className=" font-[700]">52%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartContainer;
