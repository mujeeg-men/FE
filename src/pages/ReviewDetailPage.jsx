import Background from "@/components/Common/Background";
import { useLocation, useParams } from "react-router";
import ReviewDetailTitle from "@/components/ReviewDetailPage/ReviewDetailTitle";
import ReviewDetailContents from "@/components/ReviewDetailPage/ReviewDetailContents";
import ReviewDetailGoodButton from "@/components/ReviewDetailPage/ReviewDetailGoodButton";
import { useState } from "react";
import { bookData } from "@/assets/data/temp";

const ReviewDetailPage = () => {
  const location = useLocation();
  const { reviewData, id } = location.state || {}; // 데이터가 없을 수도 있으니 fallback

  const [isGood, setIsGood] = useState(false);

  return (
    <Background>
      <ReviewDetailTitle data={reviewData} id={id} />
      <ReviewDetailContents data={reviewData} id={id} />
      <div style={{ marginTop: 10 }}>
        <ReviewDetailGoodButton isGood={isGood} setIsGood={setIsGood} />
      </div>
    </Background>
  );
};

export default ReviewDetailPage;
