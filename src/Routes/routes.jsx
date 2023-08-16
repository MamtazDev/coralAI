import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Upload from "../pages/Upload";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
]);
