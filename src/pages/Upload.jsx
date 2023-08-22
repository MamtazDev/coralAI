import React, { useState } from "react";
import { PiUploadSimpleBold } from "react-icons/pi";
import UploadModal from "../components/modal/UploadModal";
import { Link } from "react-router-dom";

const Upload = () => {
  const [showUploadModal, setShowUploadModal] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [text, setText] = useState("Upload");

  const handleUploading = () => {
    setUploading(true);

    setTimeout(() => {
      setUploading(false);
      setText("Done");
    }, 1500);
  };

  setTimeout(() => {
    setShowUploadModal(false);
  }, 2000);
  return (
    <div>
      <div className="max-w-[770px] bg-[#F3F3F3] rounded-[20px] mx-auto mt-[93px]">
        <div className="pt-[139px] pb-[27px]">
          <PiUploadSimpleBold className="mx-auto w-[73px] h-[73px] " />
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
      {text === "Upload" ? (
        <div
          className="mt-[27px] w-[221px] bg-[#4368AA] rounded-[8px] py-[12px] mx-auto"
          onClick={handleUploading}
        >
          <button className="w-full text-white text-[32px] font-[500]">
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

      {/* <img src="https://reef-support-storage.s3.amazonaws.com//app/resources/deployment_requests/099e5fd3-2e7b-4391-a746-7fb0d3cb3566/output/d2888e41-0000-4b62-a4be-89520cd1ce7f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAX5DA6CRXLV3RUYDH%2F20230822%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230822T042941Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7dee9a577de1abfedc99ab1b6d3595748998fc336a19a8609e326f7d2ada638d" alt="Image"/> */}


      <UploadModal
        setShowUploadModal={setShowUploadModal}
        showUploadModal={showUploadModal}
      />
    </div>
  );
};

export default Upload;
