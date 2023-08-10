import React from "react";
import PieChart from "./PieChart";

const ChartContainer = () => {
  const chart1Data = [
    { name: "Hard Coral", value: 78 },
    { name: "Soft Coral", value: 22 },
  ];

  const chart2Data = [
    { name: "Coral", value: 48 },
    { name: "Non-coral", value: 52 },
  ];

  const chart1Colors = ["#962dff", "#e0c6fd"];
  const chart2Colors = ["#f77a55", "#f9bf59"];

  return (
    <div className="grid grid-cols-2 mt-8">
      <div>
        <h5 className="text-lg font-[700]">Hard/Soft Coral</h5>
        <PieChart data={chart1Data} COLORS={chart1Colors} />
        <div className="flex justify-center gap-10">
          <div className="flex gap-2 items-center">
            <div className="h-[16px] w-[16px] bg-[#962dff] rounded-full"></div>
            <p className="text-[#cbcace] font-[600]">Hard coral</p>
            <p className=" font-[700]">78%</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="h-[16px] w-[16px] bg-[#e0c6fd] rounded-full"></div>
            <p className="text-[#cbcace] font-[600]">Soft coral</p>
            <p className=" font-[700]">22%</p>
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-lg font-[700]">Live Coral Cover</h5>
        <PieChart data={chart2Data} COLORS={chart2Colors} />
        <div className="flex justify-center gap-10">
          <div className=" flex gap-2 items-center">
            <div className="h-[16px] w-[16px] bg-[#f77a55] rounded-full"></div>
            <p className="text-[#cbcace] font-[600]">Coral</p>
            <p className=" font-[700]">48%</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="h-[16px] w-[16px] bg-[#f9bf59] rounded-full"></div>
            <p className="text-[#cbcace] font-[600]">Non-coral</p>
            <p className=" font-[700]">52%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartContainer;
