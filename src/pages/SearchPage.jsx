import { useNavigate } from "react-router";
import { bookData } from "../assets/data/temp";
import Background from "../components/Common/Background";
import { CommonLayout } from "../components/Common/Common.style";
import SearchItem from "../components/SearchPage/SearchItem";

const SearchPage = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {bookData.map((item) => {
          return (
            <SearchItem
              id={item.id}
              title={item.title}
              story={item.story}
              detail={item.detail}
              imageUrl={item.imageUrl}
              navigate={navigate}
            />
          );
        })}
      </div>
    </Background>
  );
};

export default SearchPage;
