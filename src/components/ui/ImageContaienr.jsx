import React, { useContext, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import coverPic from "../../assets/images/coverImage.png";
import { FolderContext } from "../../contexts/FolderContext";
import "./ImageContainer.css";
import { useNavigate } from "react-router-dom";

const ImageContaienr = ({ setFeedbackModal }) => {
  const {
    selectedImages,
    images,
    maskedImages,
    masking,
    setImages,
    setMaskImages,
    setMasking,
    setChartData,
    setSelectedImages,
  } = useContext(FolderContext);

  const navigate = useNavigate();

  // console.log(maskedImages, "ffsfk");

  // const handleHoverImage = () => {
  //   const data = selectedImages ? selectedImages : images[0];
  //   if (data.name === maskedImages.name) {
  //     setMasking(maskedImages.output);
  //   }
  // };

  const handleGoBack = () => {
    setImages([]);
    setSelectedImages(null);
    setMaskImages([]);
    setMasking(null);
    setChartData([]);
    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <RiCloseFill
            className="text-[26px] font-[700] cursor-pointer"
            onClick={handleGoBack}
          />
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

      <div className="h-[300px] tooltip w-full">
        <img
          src={
            selectedImages
              ? URL.createObjectURL(selectedImages.item)
              : URL.createObjectURL(maskedImages[0].item)
          }
          className="object-contain h-full w-full"
          alt=""
        />

        <div className="tooltiptext">
          <img
            src={masking ? masking.image : maskedImages[0].image}
            // src={uploadimage}
            alt=""
            className="object-contain h-full w-full"
          />
        </div>
      </div>
      <p className="mt-3 text-[#b8b7bf] font-[600]">
        Hover over the image to show the area covered by hard and soft corals
      </p>
    </div>
  );
};

export default ImageContaienr;
