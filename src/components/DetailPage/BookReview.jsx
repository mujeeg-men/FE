import { useNavigate } from "react-router";
import Button from "../Common/Button";
import { BookReviewItem } from "./BookReview.style";

const BookReview = ({ reviewData={}, bookData = {} }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{marginTop: 50}}>
        <p>독후감 리스트</p>
        <Button
          func={() => {
            navigate("/write-review", { state: { bookData } });
          }}
        >
          독후감 쓰러가기
        </Button>
      </div>
      {reviewData.length> 0 ? reviewData?.map((item, index) => {
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
      }): <span>독후감이 존재하지 않습니다.</span>}
    </div>
  );
};

export default BookReview;
