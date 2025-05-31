import { useLocation, useNavigate } from "react-router";
import { bookData } from "../assets/data/temp";
import Background from "../components/Common/Background";
import { CommonLayout } from "../components/Common/Common.style";
import SearchItem from "../components/SearchPage/SearchItem";
import useSearch from "@/hooks/useSearch";
import { useEffect, useState } from "react";
import { getBookDataByString } from "@/apis/api/book/bookApi";
import { getBookRate } from "@/apis/api/review/reviewApi";

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

  const [searchData, setSearchData] = useState([]);

useEffect(() => {
  const fetchSearchData = async () => {
    try {
      const res = await getBookDataByString(searchText);
      console.log(res.data);
      setSearchData(res.data);
    } catch (error) {
      console.error("검색 데이터 가져오기 실패:", error);
    }
  };

  fetchSearchData();
}, []);


  return (
    <Background>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {searchData.length === 0 ? (
          <span>검색 결과가 존재하지 않습니다.</span>
        ) : (
          searchData?.map((item) => {
            return (
              <SearchItem
                data={item}
                key={item.bookIsbn}
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
