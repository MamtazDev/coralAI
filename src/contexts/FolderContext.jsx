import { createContext, useState } from "react";

export const FolderContext = createContext();

const FolderProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState(null);
  const info = { images, setImages, selectedImages, setSelectedImages };

  return (
    <FolderContext.Provider value={info}>{children}</FolderContext.Provider>
  );
};

export default FolderProvider;
