import React from "react";

const SignUpModa = ({ showSignUpModal, setShowSignUpModal }) => {
  return (
    <div>
      <input
        checked={showSignUpModal}
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="  text-[24px] font-[600] text-center ">Sign Up</h3>
          <p className="text-[#8f8f8f] text-center text-[18px] my-[24px]">
            Please fill in your details and we will get you started on the full
            version of Open Coral AI
          </p>

          <div className="flex justify-center mb-[24px]"></div>

          <div className="mb-[54px]">
            <div className="mb-[30px]">
              <label className="text-[16px] font-[600] text-[#666666] ">
                Name
              </label>
              <input
                type="text"
                className="mt-[6px] w-full outline-none border border-[#CCC2C2] rounded-[4px] px-[19px] py-[13px]"
                placeholder="Input your name"
              />
            </div>
            <div className="mb-[30px]">
              <label className="text-[16px] font-[600] text-[#666666] ">
                Organizations
              </label>
              <input
                type="text"
                className="mt-[6px] w-full outline-none border border-[#CCC2C2] rounded-[4px] px-[19px] py-[13px]"
                placeholder="Input your organization"
              />
            </div>
            <div className="mb-[30px]">
              <label className="text-[16px] font-[600] text-[#666666] ">
                Email
              </label>
              <input
                type="email"
                className="mt-[6px] w-full outline-none border border-[#CCC2C2] rounded-[4px] px-[19px] py-[13px]"
                placeholder="Input your email"
              />
            </div>
          </div>

          <div className="flex gap-[16px]">
            <button
              className="w-full py-[12px] rounded-[8px] border border-[#D61B16] text-[16px] font-[600] text-[#D61B16]"
              onClick={() => setShowSignUpModal(false)}
            >
              Cancel
            </button>
            <button
              className="w-full py-[12px] rounded-[8px] text-[16px] font-[600] text-white bg-[#4368AA] "
              onClick={() => setShowSignUpModal(false)}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModa;
