import { createBrowserRouter } from "react-router";
import MainPage from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import DetailPage from "../pages/DetailPage";
import WriteReviewPage from "../pages/WriteReviwPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import InterestBookPage from "@/pages/InterestBookPage";
import ReviewDetailPage from "@/pages/ReviewDetailPage";
import ProfilePage from "@/pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DetailPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/search/:bookId",
    element: <DetailPage />
  },
  {
    path: "/write-review",
    element: <WriteReviewPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/sign-up",
    element: <SignUpPage />
  },
  {
    path: "/interest-book",
    element: <InterestBookPage />
  },
  {
    path: "/review-detail",
    element: <ReviewDetailPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  },

]);

export default router