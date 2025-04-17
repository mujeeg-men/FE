import { reviewData } from "@/assets/data/temp";
import Background from "@/components/Common/Background";
import { useParams } from "react-router";
import ReviewDetailTitle from "@/components/ReviewDetailPage/ReviewDetailTitle";
import ReviewDetailContents from "@/components/ReviewDetailPage/ReviewDetailContents";
import ReviewDetailGoodButton from "@/components/ReviewDetailPage/ReviewDetailGoodButton";
import { useState } from "react";

const ReviewDetailPage = () => {
  const { reviewId } = useParams();
  const data = reviewData.find((item, index) => index == Number(reviewId));

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
