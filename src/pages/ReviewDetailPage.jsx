import Background from "@/components/Common/Background";
import { useParams } from "react-router";
import ReviewDetailTitle from "@/components/ReviewDetailPage/ReviewDetailTitle";
import ReviewDetailContents from "@/components/ReviewDetailPage/ReviewDetailContents";
import ReviewDetailGoodButton from "@/components/ReviewDetailPage/ReviewDetailGoodButton";
import { useState } from "react";
import { bookData } from "@/assets/data/temp";

const ReviewDetailPage = () => {
  const { reviewId } = useParams();
  const data = bookData.find((item) => item.id === Number(reviewId)).reviewData[
    reviewId-1
  ];
  const [isGood, setIsGood] = useState(false);

  return (
    <Background>
      <ReviewDetailTitle data={data} />
      <ReviewDetailContents data={data} />
      <div style={{ marginTop: 10 }}>
        <ReviewDetailGoodButton isGood={isGood} setIsGood={setIsGood} />
      </div>
    </Background>
  );
};

export default ReviewDetailPage;
