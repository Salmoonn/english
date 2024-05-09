import { createBrowserRouter } from "react-router-dom";
import { Home } from "pages/home";
import { Converter } from "pages/convert";
import { Layout } from "../layout";
import { TestsPage } from "pages/tests-page";

export const appRouter = () =>
  createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "tests",
          element: <TestsPage />,
        },
        {
          path: "converter",
          element: <Converter />,
        },
      ],
    },
  ]);
