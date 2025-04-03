import { bookData } from "../assets/data/temp";
import Background from "../components/Common/Background";
import { CommonLayout } from "../components/Common/Common.style";
import SearchItem from "../components/SearchPage/SearchItem";

const SearchPage = () => {
  return (
    <Background>
      <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
        {bookData.map((item) => {
          return (
            <SearchItem
              title={item.title}
              story={item.story}
              detail={item.detail}
              imageUrl={item.imageUrl}
            />
          );
        })}
      </div>
    </Background>
  );
};

export default SearchPage;
