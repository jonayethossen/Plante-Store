import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
export default router;
