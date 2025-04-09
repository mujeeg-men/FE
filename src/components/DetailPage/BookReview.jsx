import { useNavigate } from "react-router";
import Button from "../Common/Button";
import { BookReviewItem } from "./BookReview.style";

const BookReview = () => {
  const reviewData = [
    { contents: "책 재밋노" },
    { contents: "책 재밋노" },
    { contents: "책 재밋노" },
  ];

  const navigate = useNavigate()

  return (
    <div>
      <div>
        <p>독후감 리스트</p>
        <Button func={()=>{navigate("/write-review")}}>독후감 쓰러가기</Button>
      </div>
      {reviewData.map((item, index) => {
        return <BookReviewItem key={index}>{item.contents}</BookReviewItem>;
      })}
    </div>
  );
};

export default BookReview;
