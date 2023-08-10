import React from "react";

const Results = () => {
  return (
    <div className="p-5 ">
      <div className="p-4 shadow-lg rounded-[6px]">
        <h5 className="font-[700] text-lg mb-3">Results</h5>
        <div className="flex flex-col gap-2 mb-2">
          {[10, 2, 38].map((item, idx) => (
            <div className="flex justify-between items-center" key={idx}>
              <p className="text-[#857be0] font-[600]">Image{idx + 1}.png</p>
              <p className="font-[600]">{item}%</p>
            </div>
          ))}
        </div>
        <div className="flex gap-5 justify-end">
          <p className="font-[600]">Average</p>
          <p className="font-[600]">20%</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
