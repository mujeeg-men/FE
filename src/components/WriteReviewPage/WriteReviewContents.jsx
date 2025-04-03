import { WriteReviewWrapper } from "./WriteReviewCommon.style";
import { ContentsInput } from "./WriteReviewContents.style";

const WriteReviewContents = () => {
  return (
    <WriteReviewWrapper>
      <span>독후감 내용</span>
      <ContentsInput type="text" />
    </WriteReviewWrapper>
  );
};
 
export default WriteReviewContents;