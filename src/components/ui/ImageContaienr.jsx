import React from "react";
import { RiCloseFill } from "react-icons/ri";

const ImageContaienr = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <RiCloseFill className="text-[26px] font-[700]" />
          <p className="text-xl font-[700]">Image1.png</p>
        </div>

        <button className="bg-[#4368aa] text-white py-2 px-3 rounded-[8px] font-[600]">
          Give feedback
        </button>
      </div>

      <div className="h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29yYWwlMjByZWVmfGVufDB8fDB8fHww&w=1000&q=80"
          className="object-cover h-full w-full"
          alt=""
        />
      </div>
      <p className="mt-3 text-[#b8b7bf] font-[600]">
        The coral covered by soft coral
      </p>
    </div>
  );
};

export default ImageContaienr;
