import React from "react";
import upload from "../../assets/images/upload.png";

const UploadModal = ({ setShowUploadModal, showUploadModal }) => {
  return (
    <div>
      <input
        checked={showUploadModal}
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
      />
      <div className="modal ">
        <div className="modal-box max-w-[567px] p-[36px]">
          <div className="text-end">
            <p
              className="font-semibold text-[20px] cursor-pointer"
              onClick={() => setShowUploadModal(false)}
            >
              &#10005;
            </p>
          </div>
          <div className="mx-auto max-w-[352px] mb-[24px]">
            <img src={upload} alt="" />
          </div>
          <div className="text-center">
            <h3 className=" text-[#000] text-[32px] font-[600]">Get started</h3>
            <p className="my-[24px] text-[20px] font-[400] max-w-[495px] mx-auto text-[#808080]">
              Upload 1 - 3 transect/quadrant images and review the results of
              our Open Coral AI beta version
            </p>
            <p className="text-[20px] font-[400] max-w-[392px] mx-auto text-[#808080]">
              Your feedback and support to our project is very much appreciated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
