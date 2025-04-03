import { createBrowserRouter } from "react-router";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import DetailPage from "../pages/DetailPage";
import WriteReviewPage from "../pages/WriteReviwPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

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
  },
  {
    path: "write-review",
    element: <WriteReviewPage />
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "sign-up",
    element: <SignUpPage />
  }
]);

export default router