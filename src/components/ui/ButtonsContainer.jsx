import React from "react";

const ButtonsContainer = () => {
  return (
    <div className="border-t border-[#cccccc] p-[24px] flex justify-between gap-[10px]">
      <button className="rounded-[8px] border border-[#4368AA] w-full text-[16px] text-[#4368AA] font-[600] py-[12px]">
        Contact
      </button>
      <button className="rounded-[8px] border border-[#4368AA] w-full text-[16px] text-[#4368AA] font-[600] py-[12px]">
        Sign Up
      </button>
      <button className="rounded-[8px]  bg-[#4368AA] w-full text-[16px] text-white font-[600] py-[12px]">
        Download
      </button>
    </div>
  );
};

export default ButtonsContainer;
