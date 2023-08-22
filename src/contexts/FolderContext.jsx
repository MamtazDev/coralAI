import { createContext, useState } from "react";

export const FolderContext = createContext();

const FolderProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState(null);
  const [maskedImages, setMaskImages] = useState([]);
  const [masking, setMasking] = useState(null);
  const info = {
    images,
    setImages,
    selectedImages,
    setSelectedImages,
    maskedImages,
    setMaskImages,
    masking,
    setMasking,
  };

  return (
    <FolderContext.Provider value={info}>{children}</FolderContext.Provider>
  );
};

export default FolderProvider;
