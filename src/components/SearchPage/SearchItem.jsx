import COLOR from "@/constants/color";
import { SearchItemContainer, SearchItemWrapper } from "./SearchItem.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SearchItem = ({ data, navigate }) => {
  return (
    <SearchItemContainer
      onClick={() => {
        navigate(`${data.id}`);
      }}
    >
      <div style={{ display: "flex", gap: "12px" }}>
        <div>
          <img src={data.imageUrl} style={{ width: "150px" }} alt="" />
        </div>
        {/* 제목, 설명 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <span
            style={{ color: COLOR.defalutColor, fontWeight: 700, fontSize: 20 }}
          >
            {data.title}
          </span>
          <span>{data.story}</span>
          <span>{data.author}</span>
          <span style={{ color: COLOR.gray }}>{data.publisher}</span>
          <span>{Number(data.price).toLocaleString()}원</span>
          <span>
            <FontAwesomeIcon icon={faStar} color="#efef2b" /> 4.7/5.0(12)
          </span>
        </div>
      </div>
    </SearchItemContainer>
  );
};

export default SearchItem;
