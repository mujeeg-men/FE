import { useLocation, useNavigate } from "react-router";
import { bookData } from "../assets/data/temp";
import Background from "../components/Common/Background";
import { CommonLayout } from "../components/Common/Common.style";
import SearchItem from "../components/SearchPage/SearchItem";
import useSearch from "@/hooks/useSearch";

const SearchPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchText = params.get("searchText") || "";

  const filteredData = useSearch({
    data: bookData,
    filterText: searchText,
    key: "title", // 책 제목(title) 기준으로 검색할 거라면
  });

  return (
    <Background>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {filteredData.length === 0 ? (
          <span>검색 결과가 존재하지 않습니다.</span>
        ) : (
          filteredData.map((item) => {
            return (
              <SearchItem
              data={item}
                // key={item.id}
                // id={item.id}
                // title={item.title}
                // story={item.story}
                // detail={item.detail}
                // imageUrl={item.imageUrl}
                navigate={navigate}
              />
            );
          })
        )}
      </div>
    </Background>
  );
};

export default SearchPage;
