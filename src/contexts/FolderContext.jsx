import { createContext, useState } from "react";

export const FolderContext = createContext();

const FolderProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState(null);
  const [maskedImages, setMaskImages] = useState([]);
  const [masking, setMasking] = useState(null);
  const [chartData, setChartData] = useState([]);
  const info = {
    images,
    setImages,
    selectedImages,
    setSelectedImages,
    maskedImages,
    setMaskImages,
    masking,
    setMasking,
    setChartData,
    chartData,
  };

  return (
    <FolderContext.Provider value={info}>{children}</FolderContext.Provider>
  );
};

export default FolderProvider;

// const findAverage = () => {
//   const average =
//     maskedImages.reduce(
//       (total, avg) => total + avg.percentages["hard corals"],
//       0
//     ) / maskedImages.length;

//   return average;
// };

// <p className="font-[600]">{item?.percentages["hard corals"].toFixed(2)}%</p>;
