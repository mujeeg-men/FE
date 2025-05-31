import Background from "@components/Common/Background";

import WriteReviewTitle from "@components/WriteReviewPage/WrtieReviewTitle";
import WriteReviewContents from "@components/WriteReviewPage/WriteReviewContents";
import Button from "@components/Common/Button";
import { useLocation, useParams } from "react-router";
import { useState } from "react";
import { postWriteReview } from "@/apis/api/user/userBook";
import { postReview } from "@/apis/api/review/reviewApi";

const WriteReviewPage = () => {
  const location = useLocation();
  const { bookData } = location.state || {}; // 데이터가 없을 수도 있으니 fallback

  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContents, setReviewContents] = useState("");
  const [rating, setRating] = useState(0); // 별점 상태

  const writeClickHandler = async () => {
    await postWriteReview();
  };

  const clickSaveRevidewHandler = async () => {
    if (!bookData) {
      console.error("bookData가 없습니다.");
      return;
    }

    if (rating === 0) {
      alert("별점을 선택해주세요!");
      return;
    }
    if (!reviewContents.trim()) {
      alert("내용을 입력해주세요!");
      return;
    }
    // console.log(bookData.id, rating, reviewContents)
    try {
      const res = await postReview(bookData.id, rating, reviewContents, reviewTitle);
      console.log(res);
    } catch (error) {
      console.error("독후감 저장 에러: ", error);
    }
  };

  return (
    <Background>
      <div style={{ marginBottom: 12 }}>
        <span>책 제목</span>
        <div>{bookData?.bookName}</div>
        <img src={bookData.bookImageUrl} alt="" />
      </div>
      <WriteReviewTitle
        onChange={(e) => {
          setReviewTitle(e.target.value);
        }}
      />
      <WriteReviewContents
        onChange={(e) => {
          setReviewContents(e.target.value);
        }}
      />

      <StarRating rating={rating} setRating={setRating} />
      <div style={{ textAlign: "center" }}>
        <Button
          func={() => {
            clickSaveRevidewHandler();
          }}
        >
          게시하기
        </Button>
      </div>
    </Background>
  );
};

export const StarRating = ({ rating, setRating }) => {
  return (
    <div style={{ fontSize: 24, marginBottom: 12 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            cursor: "pointer",
            color: star <= rating ? "#eeca00" : "#ccc", // 노란색 or 회색
            marginRight: 4,
          }}
        >
          ★
        </span>
      ))}
      <span style={{ marginLeft: 4 }}>{rating}점</span>
    </div>
  );
};

export default WriteReviewPage;
