import React, { useState } from "react";
import axios from 'axios';
import star from "../../assets/images/whiteStar.png";
import yellowStar from "../../assets/images/yellowStar.png";


const FeedbackModal = ({ showFeedbackModal, setFeedbackModal }) => {
  const [feedback, setFeedback] = useState(0);

  const [feedbackMessage, setFeedbackMessage] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(true);


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const subscriptionHandler = async () => {

    if (!isValidEmail) {
      console.error('Invalid email');
      return;
    }


    const url = 'https://api.reef.support/contact';
    const requestBody = {
      full_name: "Dihan",
      email: "nahid@gmail.com",
      message: "hello"
    };

    try {
      const response = await axios.post(url, requestBody);
      console.log('Subscription response:', response.data["msg"]);
      response.data["msg"] && setFeedbackModal(false);
    } catch (error) {
      console.error('Error subscribing:', error);
    }


  }




  const handleEmailBlur = (e) => {
    const enteredEmail = e.target.value;

    if (!enteredEmail) {
      setIsValidEmail(false);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(enteredEmail)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };


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

          <div className="mb-[30px]">
            <label className="text-[16px] font-[600] text-[#666666] ">
              Name
            </label>
            <input onBlur={(e) => setName(e.target.value)}
              type="text"
              className="mt-[6px] w-full outline-none border border-[#CCC2C2] rounded-[4px] px-[19px] py-[13px]"
              placeholder="Input your Name"
            />
          </div>
          <div className="mb-[30px]">
            <label className="text-[16px] font-[600] text-[#666666] ">
              Email
            </label>
            <input onBlur={handleEmailBlur}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="mt-[6px] w-full outline-none border border-[#CCC2C2] rounded-[4px] px-[19px] py-[13px]"
              placeholder="Input your Email"
              required
            />
          {
          !isValidEmail && <p style={{color:'red'}} >Enter valid email</p>
          }
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
              className={`w-full py-[12px] rounded-[8px] text-[16px] font-[600] text-white ${feedbackMessage ? "bg-[#4368AA]" : "bg-[#cfcfd4]"
                }`}
              disabled={!feedbackMessage}
              onClick={() => {

                // mailHandler();
                subscriptionHandler()
                // 
              }}
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
