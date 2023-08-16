import React from "react";
import { PiUploadSimpleBold } from "react-icons/pi";

const Upload = () => {
  return (
    <div>
      <div className="max-w-[]">
        <PiUploadSimpleBold />
        <div>
          <figure>
            <div class="progress">
              <div
                class="progress-bar progress-bar-info progress-bar-striped active"
                style={{ width: "100%" }}
              ></div>
            </div>
            <figcaption class="info">Info</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Upload;
