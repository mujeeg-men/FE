import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReviewDetailGoodButtonContainer } from "./ReviewDetailGoodButton.style";

const ReviewDetailGoodButton = ({ isGood, setIsGood }) => {
  const buttonClickHandler = () => {
    setIsGood(!isGood);
  };
  return (
    <ReviewDetailGoodButtonContainer onClick={buttonClickHandler}>
      <span>좋아요</span>
      {isGood ? (
        <FontAwesomeIcon icon={solidHeart} />
      ) : (
        <FontAwesomeIcon icon={regularHeart} />
      )}
    </ReviewDetailGoodButtonContainer>
  );
};

export default ReviewDetailGoodButton;
