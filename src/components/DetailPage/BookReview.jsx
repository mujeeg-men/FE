import { BookReviewItem } from "./BookReview.style";

const BookReview = () => {
  const reviewData = [
    { contents: "책 재밋노" },
    { contents: "책 재밋노" },
    { contents: "책 재밋노" },
  ];

  return (
    <div>
      <p>독후감 리스트</p>
      {reviewData.map((item) => {
        return <BookReviewItem>{item.contents}</BookReviewItem>;
      })}
    </div>
  );
};

export default BookReview;
