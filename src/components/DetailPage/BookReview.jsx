import { useNavigate } from "react-router";
import Button from "../Common/Button";
import { BookReviewItem } from "./BookReview.style";

const BookReview = ({ reviewData }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <p>독후감 리스트</p>
        <Button
          func={() => {
            navigate("/write-review");
          }}
        >
          독후감 쓰러가기
        </Button>
      </div>
      {reviewData.map((item, index) => {
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
    </div>
  );
};

export default BookReview;
