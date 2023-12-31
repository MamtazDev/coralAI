import React from "react";

const ButtonsContainer = ({ generatePDF, setShowSignUpModal }) => {
  return (
    <div className="border-t border-[#cccccc] mt-[35px] p-[24px] flex justify-between gap-[10px]">
      <button className="rounded-[8px] border border-[#4368AA] w-full text-[16px] text-[#4368AA] font-[600] py-[12px]">
       
        <a href="https://www.reef.support/contact" target="_blank" >
        Contact
        </a>
      </button>
      <button
        className="rounded-[8px] border border-[#4368AA] w-full text-[16px] text-[#4368AA] font-[600] py-[12px]"
        onClick={() => setShowSignUpModal(true)}
      >
        Full Version
      </button>
      <button
        onClick={() => generatePDF()}
        className="rounded-[8px]  bg-[#4368AA] w-full text-[16px] text-white font-[600] py-[12px]"
      >
        {/* <a href="/src/assets/files/demo.pdf" download="demo.pdf"> */}
          Download
        {/* </a> */}
      </button>
    </div>
  );
};

export default ButtonsContainer;
