import COLOR from "@/constants/color";
import {
  BookDetailInfoContainer,
  BookDetailWrapper,
} from "./DetailPageInfo.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const DetailPageInfo = ({ data }) => {
  return (
    <BookDetailInfoContainer>
      <BookDetailWrapper style={{textAlign: 'center'}}>
        <img src={data.bookImageUrl} alt="" />
      </BookDetailWrapper>
      <BookDetailWrapper
        style={{
          backgroundColor: "white",
          flex: 1.5,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          height: '100%',
          padding: 15
        }}
      >
        <span
          style={{ color: COLOR.defalutColor, fontWeight: 700, fontSize: 20 }}
        >
          {data.bookName}
        </span>
        <span>{data.bookAuthor}</span>
        <span style={{ color: COLOR.gray }}>{data.bookPublisher}</span>
        <span>{Number(data.bookPrice).toLocaleString()}원</span>
        <span>
          <FontAwesomeIcon icon={faStar} color="#efef2b" /> 4.7/5.0(12)
        </span>
        <span style={{whiteSpace: 'pre-wrap'}}>{data.bookDescription}</span>
      </BookDetailWrapper>
    </BookDetailInfoContainer>
  );
};

export default DetailPageInfo;
