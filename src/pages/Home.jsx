import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import ImageContaienr from "../components/ui/ImageContaienr";
import ChartContainer from "../components/ui/ChartContainer";
import { FaArrowLeft } from "react-icons/fa6";
import Results from "../components/ui/Results";
import AverageCoralCover from "../components/ui/AverageCoralCover";
import ButtonsContainer from "../components/ui/ButtonsContainer";
import FeedbackModal from "../components/modal/FeedbackModal";
import SignUpModa from "../components/modal/SignUpModa";
import { FolderContext } from "../contexts/FolderContext";
import { useNavigate } from "react-router-dom";

import html2pdf from "html2pdf.js";

const Home = () => {
  const { images } = useContext(FolderContext);

  const [showFeedbackModal, setFeedbackModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const contentRef = useRef(null);

  const generatePDF = () => {
    if (contentRef.current) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const aspectRatio = screenWidth / screenHeight;

      const opt = {
        margin: 10,
        filename: "my_webpage.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: "mm",
          format: "ledger",
          orientation: aspectRatio > 1 ? "landscape" : "portrait",
        },
      };

      html2pdf().from(contentRef.current).set(opt).save();
    }
  };

  console.log(images, "fjkjfk");
  return (
    <>
      <div
        ref={contentRef}
        id="content-to-export"
        className="container mx-auto my-[30px]  mainBox grid grid-cols-1   lg:grid-cols-5"
      >
        <div className="col-span-3 p-[25px]">
          <ImageContaienr setFeedbackModal={setFeedbackModal} images={images} />
          <ChartContainer />
        </div>
        <div className="border-l col-span-2 border-[#cccccc] ">
          <div className="flex items-center gap-4 px-[25px] py-[15px] border-b border-[#cccccc] ">
            <FaArrowLeft className="text-[26px] font-[700]" />
            <p className="text-[24px] font-[700]">Live Coral Cover</p>
          </div>
          <Results images={images} />
          <AverageCoralCover />
          <ButtonsContainer
            generatePDF={generatePDF}
            setShowSignUpModal={setShowSignUpModal}
          />
        </div>
      </div>

      <FeedbackModal
        setFeedbackModal={setFeedbackModal}
        showFeedbackModal={showFeedbackModal}
      />
      <SignUpModa
        showSignUpModal={showSignUpModal}
        setShowSignUpModal={setShowSignUpModal}
      />
    </>
  );
};

export default Home;
