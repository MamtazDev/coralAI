import React from "react";
import ImageContaienr from "../components/ui/ImageContaienr";
import ChartContainer from "../components/ui/ChartContainer";
import { FaArrowLeft } from "react-icons/fa6";
import Results from "../components/ui/Results";

const Home = () => {
  return (
    <div className="container mx-auto my-[10px] h-screen  shadow-2xl grid grid-cols-3">
      <div className="col-span-2 p-[25px]">
        <ImageContaienr />
        <ChartContainer />
      </div>
      <div className="border-l border-[#cccccc] ">
        <div className="flex items-center gap-4 p-[25px] border-b border-[#cccccc] mb-3">
          <FaArrowLeft className="text-[26px] font-[700]" />
          <p className="text-2xl font-[700]">Live Coral Cover</p>
        </div>
        <Results />
      </div>
    </div>
  );
};

export default Home;
