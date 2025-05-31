import COLOR from "@/constants/color";
import {
  BookDetailInfoContainer,
  BookDetailWrapper,
} from "./DetailPageInfo.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const DetailPageInfo = ({ data, saveInterestBook }) => {
  // console.log(data)
  return (
    <BookDetailInfoContainer>
      <BookDetailWrapper style={{ textAlign: "center" }}>
        <img src={data.bookImageUrl} style={{width: '62%'}} alt="" />
      </BookDetailWrapper>
      <BookDetailWrapper
        style={{
          backgroundColor: "white",
          flex: 1.5,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          height: "100%",
          padding: 15,
        }}
      >
        <div>
          <span
            style={{
              color: COLOR.defalutColor,
              fontWeight: 700,
              fontSize: 20,
              marginRight: 8,
            }}
          >
            {data.bookName}
          </span>
          <div
            onClick={() => {
              saveInterestBook(data.id);
            }}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faHeart} color="red" />
          </div>
        </div>
        <span>{data.bookAuthor}</span>
        <span style={{ color: COLOR.gray }}>{data.bookPublisher}</span>
        <span>{Number(data.bookPrice).toLocaleString()}원</span>
        <span>
          <FontAwesomeIcon icon={faStar} color="#efef2b" /> 4.7/5.0(12)
        </span>
        <span style={{ whiteSpace: "pre-wrap" }}>{data.bookDescription}</span>
      </BookDetailWrapper>
    </BookDetailInfoContainer>
  );
};

export default DetailPageInfo;
