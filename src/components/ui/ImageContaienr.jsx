import React from "react";
import { RiCloseFill } from "react-icons/ri";
import coverPic from "../../assets/images/coverImage.png";

const ImageContaienr = ({ setFeedbackModal }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <RiCloseFill className="text-[26px] font-[700]" />
          <p className="text-xl font-[700]">Image1.png</p>
        </div>

        <button
          className="bg-[#4368aa] text-white py-2 px-3 rounded-[8px] font-[600]"
          onClick={() => setFeedbackModal(true)}
        >
          Give feedback
        </button>
      </div>

      <div className="h-[400px]">
        <img src={coverPic} className="object-cover h-full w-full" alt="" />
      </div>
      <p className="mt-3 text-[#b8b7bf] font-[600]">
        The coral covered by soft coral
      </p>
    </div>
  );
};

export default ImageContaienr;
