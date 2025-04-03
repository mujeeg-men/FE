import { SearchItemContainer, SearchItemWrapper } from "./SearchItem.style";

const SearchItem = ({ title, story, detail, imageUrl }) => {
  return (
    <SearchItemContainer>
      <div style={{display: 'flex', gap: "12px"}}>
        <div>
          <img src={imageUrl} style={{ width: "150px" }} alt="" />
        </div>
        {/* 제목, 설명 */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
          <span>{title}</span>
          <span>{story}</span>
        </div>
      </div>
    </SearchItemContainer>
  );
};

export default SearchItem;
