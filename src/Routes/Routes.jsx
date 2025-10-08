import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("./data.json"),
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch("./data.json"),
      },
      {
        path: "/app-details/:id",
        Component: AppDetails,
        loader: () => fetch("./data.json"),
      },
      {
        path: "/installation",
        Component: Installation,
        loader: () => fetch("./data.json"),
      },
    ],
  },
]);
