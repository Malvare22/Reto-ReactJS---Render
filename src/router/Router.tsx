import { createBrowserRouter } from "react-router-dom";
import LayoutGeneral from "../layout/General";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutGeneral />,
      children: [
        {
          path: "/",
          element: <Settings/>
        }
      ],
    },
  ]);

