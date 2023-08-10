import React, { useState } from "react";
import ImageContaienr from "../components/ui/ImageContaienr";
import ChartContainer from "../components/ui/ChartContainer";
import { FaArrowLeft } from "react-icons/fa6";
import Results from "../components/ui/Results";
import AverageCoralCover from "../components/ui/AverageCoralCover";
import ButtonsContainer from "../components/ui/ButtonsContainer";
import FeedbackModal from "../components/modal/FeedbackModal";
import SignUpModa from "../components/modal/SignUpModa";

const Home = () => {
  const [showFeedbackModal, setFeedbackModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  return (
    <>
      <div className="container mx-auto my-[10px] h-screen  shadow-2xl grid grid-cols-3">
        <div className="col-span-2 p-[25px]">
          <ImageContaienr setFeedbackModal={setFeedbackModal} />
          <ChartContainer />
        </div>
        <div className="border-l border-[#cccccc] ">
          <div className="flex items-center gap-4 p-[25px] border-b border-[#cccccc] mb-3">
            <FaArrowLeft className="text-[26px] font-[700]" />
            <p className="text-2xl font-[700]">Live Coral Cover</p>
          </div>
          <Results />
          <AverageCoralCover />
          <ButtonsContainer setShowSignUpModal={setShowSignUpModal} />
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
