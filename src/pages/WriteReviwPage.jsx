import Background from "@components/Common/Background";

import WriteReviewTitle from "@components/WriteReviewPage/WrtieReviewTitle";
import WriteReviewContents from "@components/WriteReviewPage/WriteReviewContents";
import Button from "@components/Common/Button";
import { useParams } from "react-router";
import { useState } from "react";
import { postWriteReview } from "@/apis/api/user/userBook";

const WriteReviewPage = () => {
  const { bookData } = useParams();

  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewContents, setReviewContents] = useState('')
  const [rating, setRating] = useState(0); // 별점 상태

  const writeClickHandler = async()=>{
    await postWriteReview()
  }

  return (
    <Background>
      <div style={{marginBottom: 12}}>
        <span>책 제목</span>
        {/* <div>{bookData.bookTitle}</div> */}
      </div>
      <WriteReviewTitle onChange={setReviewTitle} />
      <WriteReviewContents onChange={setReviewContents} />

      <StarRating rating={rating} setRating={setRating} />
      <div style={{ textAlign: "center" }}>
        <Button>게시하기</Button>
      </div>
    </Background>
  );
};

const StarRating = ({ rating, setRating }) => {
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
      <span style={{marginLeft: 4}}>{rating}점</span>
    </div>
  );
};


export default WriteReviewPage;
