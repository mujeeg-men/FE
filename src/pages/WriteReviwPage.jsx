import Background from "@components/Common/Background";

import WriteReviewTitle from "@components/WriteReviewPage/WrtieReviewTitle";
import WriteReviewContents from "@components/WriteReviewPage/WriteReviewContents";
import Button from "@components/Common/Button";

const WriteReviewPage = () => {
  return (
    <Background>
      <WriteReviewTitle />
      <WriteReviewContents />
      <div style={{ textAlign: "center" }}>
        <Button>게시하다</Button>
      </div>
    </Background>
  );
};

export default WriteReviewPage;
