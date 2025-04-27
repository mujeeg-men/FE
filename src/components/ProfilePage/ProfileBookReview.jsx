import { useNavigate } from "react-router";
import { BookReviewItem } from "../DetailPage/BookReview.style";
import { ProfilePageWrapper } from "./ProfilePage.style";
import { bookData } from "@/assets/data/temp";

const ProfileBookReview = () => {
  const navigate = useNavigate();

  const reviewData = bookData[0].reviewData;

  return (
    <ProfilePageWrapper>
      {reviewData?.map((item, index) => {
        return (
          <BookReviewItem
            onClick={() => {
              navigate(`/review-detail/${index + 1}`);
            }}
            key={index}
          >
            {item.reviewTitle}
          </BookReviewItem>
        );
      })}
    </ProfilePageWrapper>
  );
};

export default ProfileBookReview;
