import React, { useState } from "react";
import star from "../../assets/images/whiteStar.png";
import yellowStar from "../../assets/images/yellowStar.png";

const FeedbackModal = ({ showFeedbackModal, setFeedbackModal }) => {
  const [feedback, setFeedback] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState(null);
  return (
    <div>
      <input
        checked={showFeedbackModal}
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="  text-[24px] font-[600] text-center ">
            Give feedback
          </h3>
          <p className="text-[#8f8f8f] text-center text-[18px] my-[24px]">
            How did the model perform? Please rate and suggest some feedback
            that we can implement for the next version
          </p>

          <div className="flex justify-center mb-[24px]">
            <div className="flex gap-[20px]">
              {feedback >= 1 ? (
                <img
                  src={yellowStar}
                  alt=""
                  onClick={() => setFeedback(1)}
                  className="cursor-pointer"
                />
              ) : (
                <img
                  src={star}
                  alt=""
                  onClick={() => setFeedback(1)}
                  className="cursor-pointer"
                />
              )}
              {feedback >= 2 ? (
                <img
                  src={yellowStar}
                  alt=""
                  onClick={() => setFeedback(2)}
                  className="cursor-pointer"
                />
              ) : (
                <img
                  src={star}
                  alt=""
                  onClick={() => setFeedback(2)}
                  className="cursor-pointer"
                />
              )}
              {feedback >= 3 ? (
                <img
                  src={yellowStar}
                  alt=""
                  onClick={() => setFeedback(3)}
                  className="cursor-pointer"
                />
              ) : (
                <img
                  src={star}
                  alt=""
                  onClick={() => setFeedback(3)}
                  className="cursor-pointer"
                />
              )}
              {feedback >= 4 ? (
                <img
                  src={yellowStar}
                  alt=""
                  onClick={() => setFeedback(4)}
                  className="cursor-pointer"
                />
              ) : (
                <img
                  src={star}
                  alt=""
                  onClick={() => setFeedback(4)}
                  className="cursor-pointer"
                />
              )}
              {feedback === 5 ? (
                <img
                  src={yellowStar}
                  alt=""
                  onClick={() => setFeedback(5)}
                  className="cursor-pointer"
                />
              ) : (
                <img
                  src={star}
                  alt=""
                  onClick={() => setFeedback(5)}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>

          <div className="mb-[48px]">
            <p className="text-[16px] font-[600] text-[#666] mb-[6px]">
              Description
            </p>
            <textarea
              className="h-[111px] w-full border border-[#CCC2C2] rounded-[4px] outline-0 p-[14px]"
              style={{ resize: "none" }}
              placeholder="Input your description"
              onChange={(e) => setFeedbackMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="flex gap-[16px]">
            <button
              className="w-full py-[12px] rounded-[8px] border border-[#D61B16] text-[16px] font-[600] text-[#D61B16]"
              onClick={() => setFeedbackModal(false)}
            >
              Cancel
            </button>
            <button
              className={`w-full py-[12px] rounded-[8px] text-[16px] font-[600] text-white ${
                feedbackMessage ? "bg-[#4368AA]" : "bg-[#cfcfd4]"
              }`}
              disabled={!feedbackMessage}
              onClick={() => setFeedbackModal(false)}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
