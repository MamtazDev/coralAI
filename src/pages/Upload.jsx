import React, { useContext, useRef, useState } from "react";
import { PiUploadSimpleBold } from "react-icons/pi";
import UploadModal from "../components/modal/UploadModal";
import { Link } from "react-router-dom";
import { FolderContext } from "../contexts/FolderContext";
import logo from "../../src/assets/images/logo.png";

const Upload = () => {
  const { setImages, images, setMaskImages, maskedImages } =
    useContext(FolderContext);

  const [showUploadModal, setShowUploadModal] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [text, setText] = useState("Upload");

  const inputRef = useRef(null);

  // const [selectedFiles, setSelectedFiles] = useState(null);

  // const handleFolderSelection = (event) => {
  //   const allItems = event.target.files;
  //   const filesArray = [];

  //   for (const key in allItems) {
  //     filesArray.push(allItems[key]);
  //   }
  //   if (filesArray.length > 0) {
  //     setImages(filesArray.splice(0, 3));
  //   }
  // };

  const handleFileChange = (event) => {
    setImages([...images, event.target.files[0]]);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFilter = (data) => {
    if (data.size) {
      return data;
    }
  };

  let defaultUrl = "https://api.reef.support";

  const handleUploading = async () => {
    setUploading(true);

    const uploadData = images.map((item) => {
      const formData = new FormData();
      formData.append("picture", item);
      setText("Upload");
      setUploading(true);
      fetch(`${defaultUrl}/models/coral_ai/segmentation`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.output) {
            setMaskImages((current) => [
              ...current,
              { image: data.output, name: item.name },
            ]);

            setUploading(false);
            setText("Done");
          }
        });
    });
  };

  return (
    <div className="container mx-auto">
      <img src={logo} alt="" className="max-w-[300px] mt-[50px]" />
      <div>
        <div className="max-w-[900px] mx-auto grid grid-cols-6 mt-[93px]">
          <div className="col-span-1 h-full px-3 flex flex-col gap-2 justify-between">
            <img
              src={images.length > 0 ? URL.createObjectURL(images[0]) : ""}
              alt=""
              className="h-full rounded-md object-cover"
            />
            <img
              src={
                images.length > 0 && images[1]
                  ? URL.createObjectURL(images[1])
                  : ""
              }
              alt=""
              className="h-full rounded-md object-cover"
            />
            <img
              src={
                images.length > 0 && images[2]
                  ? URL.createObjectURL(images[2])
                  : ""
              }
              alt=""
              className="h-full rounded-md object-cover"
            />
          </div>
          <div className=" bg-[#F3F3F3] rounded-[20px]  col-span-4">
            <div className="pt-[139px] pb-[27px]">
              <div className="flex justify-center">
                <button
                  onClick={handleClick}
                  className="w-[73px] h-[73px] flex  cursor-pointer"
                  disabled={images.length === 3}
                >
                  <PiUploadSimpleBold className="w-full h-full" />
                </button>
              </div>

              <input
                ref={inputRef}
                type="file"
                // onChange={handleFolderSelection}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
                // multiple
              />
            </div>
            <div className="max-w-[390px] mx-auto pb-[140px]">
              {uploading && (
                <figure>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-info progress-bar-striped active"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </figure>
              )}
            </div>
          </div>
        </div>
        {text === "Upload" ? (
          <div className="mt-[27px] w-[221px] bg-[#4368AA] rounded-[8px] py-[12px] mx-auto">
            <button
              onClick={handleUploading}
              disabled={uploading || images.length === 0}
              className="w-full text-white text-[32px] font-[500]"
            >
              {text}
            </button>
          </div>
        ) : (
          <div className="mt-[27px] w-[221px] bg-[#4368AA] rounded-[8px] py-[12px] mx-auto">
            <Link
              to="/upload"
              className="w-full flex justify-center text-white text-[32px] font-[500]"
            >
              {text}
            </Link>
          </div>
        )}
      </div>
      <UploadModal
        setShowUploadModal={setShowUploadModal}
        showUploadModal={showUploadModal}
      />
      <p className="mt-[180px] text-end">
        Copyright © 2023 Coral AI. All rights reserved.
      </p>
    </div>
  );
};

export default Upload;
