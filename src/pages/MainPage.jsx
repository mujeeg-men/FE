import { useNavigate } from "react-router";
import Background from "../components/Common/Background";
import Calendar from "@components/MainPage/Calendar";
import BookCarousel from "@/components/MainPage/BookCarousel";
import FeelModal from "@/components/MainPage/FeelModal/FeelModal";
import { useState } from "react";
import MonthlyStatistics from "@/components/MainPage/MonthlyStatistics";

import { feelData } from "@/assets/data/temp";
import DailyStatistics from "@/components/MainPage/DailyStatistics";

const MainPage = () => {
  const navigate = useNavigate();

  const [isModal, setIsModal] = useState(false);
  const [pickDate, setPickDate] = useState(null);

  const goToPage = (name) => {
    navigate(name);
  };

  const closeModal = () => {
    setIsModal(false);
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

      {isModal && <FeelModal closeModal={closeModal} />}
      <div style={{ display: "flex", marginBottom: 30 }}>
        <Calendar setPickDate={setPickDate} />
        {pickDate == null ? (
          <MonthlyStatistics feelData={feelData} setIsModal={setIsModal} />
        ) : (
          <DailyStatistics pickDate={pickDate} setPickDate={setPickDate} />
        )}
      </div>
      <BookCarousel />
    </Background>
  );
};

export default MainPage;
