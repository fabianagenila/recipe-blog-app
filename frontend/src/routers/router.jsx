import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "../pages/home/Home";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <div>Orders</div>,
      },
    ],
  },
]);

export default router;
