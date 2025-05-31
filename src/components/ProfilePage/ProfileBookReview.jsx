import { useNavigate } from "react-router";
import { BookReviewItem } from "../DetailPage/BookReview.style";
import { ProfilePageWrapper } from "./ProfilePage.style";
import { bookData } from "@/assets/data/temp";
import { useRecoilState } from "recoil";
import { reviewDataState } from "@/store/review.store";

const ProfileBookReview = () => {
  const navigate = useNavigate();

  // const reviewData = bookData[0].reviewData;
  const [reviewData, setReviewData] = useRecoilState(reviewDataState);

  return (
    <ProfilePageWrapper>
      {reviewData?.map((item, index) => {
        return (
          <BookReviewItem
            onClick={() => {
              navigate(`/review-detail`, { state: { reviewData, id:index } });
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
