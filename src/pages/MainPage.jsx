import { useNavigate } from "react-router";
import Background from "../components/Common/Background";
import Calendar from "@components/MainPage/Calendar";
import BookCarousel from "@/components/MainPage/BookCarousel";
import FeelModal from "@/components/MainPage/FeelModal";
import { useState } from "react";

const MainPage = () => {
  const navigate = useNavigate();

  const [isModal, setIsModal] = useState(false);

  const goToPage = (name) => {
    navigate(name);
  };

  const closeModal = ()=>{
    setIsModal(false);
  }

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
        <button onClick={()=>{setIsModal(true)}}>소감 모달 오픈</button>
      </div>

      {isModal && <FeelModal closeModal={closeModal} />}
      <Calendar />
      <BookCarousel />
    </Background>
  );
};

export default MainPage;
