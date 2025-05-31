import { ReviewDetailTitleContainer } from "./ReviewDetailTitle.style";
import { useState } from "react";

const ReviewDetailTitle = ({ data, id }) => {
  const [rating, setRating] = useState(data[id].rate)
  return (
    <ReviewDetailTitleContainer>
      <div style={{display: "flex", gap: 12, alignItems: 'center'}}>
      <span style={{fontSize: "24px"}}>{data[id].reviewTitle}</span>
        <StarRating rating={rating} setRating={setRating} />
      </div>
      <div style={{display: "flex", gap: 8}}>
        <span>admin</span>
        <span style={{color: 'gray'}}>2025-05-31</span>
      </div>
    </ReviewDetailTitleContainer>
  );
};

const StarRating = ({ rating, setRating }) => {
  return (
    <div style={{ fontSize: 16 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            color: star <= rating ? "#eeca00" : "#ccc", // 노란색 or 회색
            marginRight: 4,
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default ReviewDetailTitle;

