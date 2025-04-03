import { createBrowserRouter } from "react-router";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  }
]);

export default router