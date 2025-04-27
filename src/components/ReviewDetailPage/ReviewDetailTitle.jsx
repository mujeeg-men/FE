import { ReviewDetailTitleContainer } from "./ReviewDetailTitle.style";

const ReviewDetailTitle = ({ data }) => {
  return (
    <ReviewDetailTitleContainer>
      <span style={{fontSize: "24px"}}>{data.reviewTitle}</span>
      <div style={{display: "flex", gap: 8}}>
        <span>{data.nickname}</span>
        <span style={{color: 'gray'}}>{data.date}</span>
      </div>
    </ReviewDetailTitleContainer>
  );
};

export default ReviewDetailTitle;
