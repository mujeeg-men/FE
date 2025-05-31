import { WriteReviewWrapper } from "./WriteReviewCommon.style";
import { TitleInput } from "./WrtieReviewTitle.style";

const WriteReviewTitle = ({onChange}) => {
  return (
    <WriteReviewWrapper>
      <span>독후감 제목</span>
      <TitleInput type="text" onChange={onChange} />
    </WriteReviewWrapper>
  );
};

export default WriteReviewTitle;
