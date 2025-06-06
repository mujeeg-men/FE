import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../Common/Button";
import { BookReviewItem } from "./BookReview.style";

const REVIEWS_PER_PAGE = 5; // 한 페이지당 리뷰 수

const BookReview = ({ reviewData = [], bookData = {} }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(reviewData.length / REVIEWS_PER_PAGE);
  const startIdx = (currentPage - 1) * REVIEWS_PER_PAGE;
  const currentReviews = reviewData.slice(startIdx, startIdx + REVIEWS_PER_PAGE);

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div style={{ marginTop: 50 }}>
        <p>독후감 리스트</p>
        <Button
          func={() => {
            navigate("/write-review", { state: { bookData } });
          }}
        >
          독후감 쓰러가기
        </Button>
      </div>

      {reviewData.length > 0 ? (
        <>
          {currentReviews.map((item, index) => (
            <BookReviewItem
              onClick={() => {
                navigate(`/review-detail/${startIdx + index + 1}`);
              }}
              key={startIdx + index}
            >
              {item.reviewTitle}
              <span style={{ fontSize: 14, color: "gray" }}>{item.reviewDate}</span>
            </BookReviewItem>
          ))}

          {/* 페이지네이션 컨트롤 */}
          <div style={{ marginTop: 20, display: "flex", gap: 10, alignItems:'center' }}>
            <Button func={goToPrevPage} disabled={currentPage === 1}>
              이전
            </Button>
            <span>
              {currentPage} / {totalPages}
            </span>
            <Button func={goToNextPage} disabled={currentPage === totalPages}>
              다음
            </Button>
          </div>
        </>
      ) : (
        <span>독후감이 존재하지 않습니다.</span>
      )}
    </div>
  );
};

export default BookReview;
