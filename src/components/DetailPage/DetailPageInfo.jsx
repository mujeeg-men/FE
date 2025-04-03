import { BookDetailInfoContainer } from "./DetailPageInfo.style";

const DetailPageInfo = ({data}) => {
  return (
    <BookDetailInfoContainer>
      <img src={data.imageUrl} alt="" />
      <h2>{data.title}</h2>
      <p style={{whiteSpace: "pre-wrap"}}>{data.detail}</p>
    </BookDetailInfoContainer>
  );
};

export default DetailPageInfo;
