import React, { useContext } from "react";
import { FolderContext } from "../../contexts/FolderContext";

const Results = ({ images }) => {
  // console.log(images, "gg");
  const { setSelectedImages, setMasking, maskedImages, chartData } =
    useContext(FolderContext);

  const handleClick = (value) => {
    setSelectedImages(value);

    // const image = maskedImages.find((i) => i.name === value.name);

    setMasking(value);
  };

  console.log(chartData, "gg");

  const findAverage = () => {
    const average =
      maskedImages.reduce(
        (total, avg) =>
          total +
          (avg.percentages["hard corals"] + avg.percentages["soft corals"]),
        0
      ) / maskedImages.length;

    return average;
  };

  console.log(maskedImages, "jkjkjkkmkk");
  return (
    <div className="p-5 ">
      <div className="p-4 resultBox rounded-[6px]">
        <h5 className="font-[700] text-lg mb-3">Results</h5>
        <div className="flex flex-col gap-2 mb-2">
          {maskedImages &&
            maskedImages?.map((item, idx) => (
              <div
                className="flex justify-between items-center cursor-pointer"
                key={idx}
                onClick={() => handleClick(item)}
              >
                <p className="text-[#857be0] font-[600]">{item?.name}</p>
                <p className="font-[600]">
                  {(
                    item?.percentages["hard corals"] +
                    item?.percentages["soft corals"]
                  ).toFixed(2)}
                  %
                </p>
              </div>
            ))}
        </div>
        <div className="flex gap-5 justify-end">
          <p className="font-[600]">Average</p>
          <p className="font-[600]">
            {maskedImages && findAverage().toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
