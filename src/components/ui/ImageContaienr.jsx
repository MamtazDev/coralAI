import React, { useContext, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import coverPic from "../../assets/images/coverImage.png";
import { FolderContext } from "../../contexts/FolderContext";
import "./ImageContainer.css";

const ImageContaienr = ({ setFeedbackModal }) => {
  const { selectedImages, images, maskedImages, masking } =
    useContext(FolderContext);

  // console.log(maskedImages, "ffsfk");

  // const handleHoverImage = () => {
  //   const data = selectedImages ? selectedImages : images[0];
  //   if (data.name === maskedImages.name) {
  //     setMasking(maskedImages.output);
  //   }
  // };

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <RiCloseFill className="text-[26px] font-[700]" />
          <p className="text-[20px] font-[700]">
            {selectedImages ? selectedImages.name : images[0].name}
          </p>
        </div>

        <button
          className="bg-[#4368aa] text-white py-2 px-3 rounded-[8px] font-[600]"
          onClick={() => setFeedbackModal(true)}
        >
          Give feedback
        </button>
      </div>

      <div className="h-[300px] tooltip ">
        <img
          src={
            selectedImages
              ? URL.createObjectURL(selectedImages)
              : URL.createObjectURL(images[0])
          }
          className="object-cover h-full w-full"
          alt=""
        />

        <div className="tooltiptext">
          <img
            src={masking ? masking.image : maskedImages[0].image}
            // src={uploadimage}
            alt=""
          />
        </div>
      </div>
      <p className="mt-3 text-[#b8b7bf] font-[600]">
        The coral covered by soft coral
      </p>
    </div>
  );
};

export default ImageContaienr;
