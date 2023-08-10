import React from "react";
import SinglePieChart from "./PieChart";

const AverageCoralCover = () => {
  const Data = [
    { name: "Image1", value: 15 },
    { name: "Image2", value: 35 },
    { name: "Image3", value: 65 },
  ];

  const Colors = ["#f77a55", "#291f85", "#962dff"];
  return (
    <div className=" p-[33px]">
      <h5 className="text-[20px] font-[600]">Average Coral Cover</h5>
      <SinglePieChart data={Data} COLORS={Colors} />
      <div className="flex flex-col items-center gap-[15px]">
        {[
          { value: 15, color: "#f77a55" },
          { value: 35, color: "#291f85" },
          { value: 65, color: "#962dff" },
        ].map((item, idx) => (
          <div className="flex items-center gap-[7px]">
            <div
              className="h-[14px] w-[14px] rounded-full bg-[#F77A55]"
              style={{ backgroundColor: `${item.color}` }}
            ></div>
            <p className="text-[16px] text-[#9291A5]">Image1.png</p>
            <p className="text-[16px] font-[600] text-[#1E1B39]">
              {item.value}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AverageCoralCover;
