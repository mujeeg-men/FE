import { useNavigate } from "react-router";
import Background from "../components/Common/Background";
import Calendar from "@components/MainPage/Calendar";
import BookCarousel from "@/components/MainPage/BookCarousel";

const MainPage = () => {
  const navigate = useNavigate();

  const goToPage = (name) => {
    navigate(name);
  };

  return (
    <Background>
      <div>
        <button
          onClick={() => {
            goToPage("/search");
          }}
        >
          검색 결과 페이지
        </button>
        <button
          onClick={() => {
            goToPage("/write-review");
          }}
        >
          리뷰 작성 페이지
        </button>
      </div>
      <Calendar />
      <BookCarousel />
    </Background>
  );
};

export default MainPage;
