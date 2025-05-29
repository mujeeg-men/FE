import { WriteReviewWrapper } from "./WriteReviewCommon.style";
import { ContentsInput } from "./WriteReviewContents.style";

const WriteReviewContents = ({onChange}) => {
  return (
    <WriteReviewWrapper>
      <span>독후감 내용</span>
      <ContentsInput type="text" onChange={onChange} />
    </WriteReviewWrapper>
  );
};
 
export default WriteReviewContents;