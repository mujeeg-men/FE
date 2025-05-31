import { bookData } from "@/assets/data/temp";
import Background from "@/components/Common/Background";
import SearchItem from "@/components/SearchPage/SearchItem";
import { useNavigate } from "react-router";

const InterestBookPage = ()=>{
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
              cover={item.cover}
              navigate={navigate}
            />
          );
        })}
      </div>
    </Background>
  );
}

export default InterestBookPage;