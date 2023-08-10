import React from "react";

const FeedbackModal = ({ showFeedbackModal, setFeedbackModal }) => {
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
          <h3 className="font-bold text-lg">Give Feedback</h3>
          <p className="py-4">
            How did the model perform? Please rate and suggest some feedback
            that we can implement for the next version
          </p>
          
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="btn"
              onClick={() => setFeedbackModal(false)}
            >
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
