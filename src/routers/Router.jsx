import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/product",
        Component: Product,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
export default router;
