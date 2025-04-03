import { WriteReviewWrapper } from "./WriteReviewCommon.style";
import { TitleInput } from "./WrtieReviewTitle.style";

const WriteReviewTitle = () => {
  return (
    <WriteReviewWrapper>
      <span>독후감 제목</span>
      <TitleInput type="text" />
    </WriteReviewWrapper>
  );
};

export default WriteReviewTitle;
