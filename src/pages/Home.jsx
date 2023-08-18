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
      <div className="container mx-auto my-[30px]  mainBox grid grid-cols-1   lg:grid-cols-5">
        <div className="col-span-3 p-[25px]">
          <ImageContaienr setFeedbackModal={setFeedbackModal} />
          <ChartContainer />
        </div>
        <div className="border-l col-span-2 border-[#cccccc] ">
          <div className="flex items-center gap-4 px-[25px] py-[15px] border-b border-[#cccccc] ">
            <FaArrowLeft className="text-[26px] font-[700]" />
            <p className="text-[24px] font-[700]">Live Coral Cover</p>
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
