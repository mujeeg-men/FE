import { createBrowserRouter } from "react-router";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import DetailPage from "../pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "search/:bookId",
    element: <DetailPage />
  }
]);

export default router