import { useNavigate } from "react-router";
import Background from "../components/Common/Background";
import Calendar from "@components/MainPage/Calendar";
import BookCarousel from "@/components/MainPage/BookCarousel";
import FeelModal from "@/components/MainPage/FeelModal/FeelModal";
import { useEffect, useState } from "react";
import MonthlyStatistics from "@/components/MainPage/MonthlyStatistics";

import DailyStatistics from "@/components/MainPage/DailyStatistics";
import { useRecoilState } from "recoil";
import { bestSellerDataState } from "@/store/book.store";
import { getBestSeller } from "@/apis/api/book/bookApi";
import { isLoginState } from "@/store/user.store";
import { feelDataState } from "@/store/feel.store";
import { loginCheck } from "@/apis/api/user/auth";

const MainPage = () => {
  const navigate = useNavigate();

  const [isModal, setIsModal] = useState(false);
  const [pickDate, setPickDate] = useState(null);

  const [bestSellerData, setBestSellerData] =
    useRecoilState(bestSellerDataState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [feelData, setFeelData] = useRecoilState(feelDataState)

  const goToPage = (name) => {
    navigate(name);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const temp = await getBestSeller(); // 비동기 함수 호출
        console.log(temp); // 응답 확인
        setBestSellerData(temp); // 상태 업데이트
      } catch (error) {
        console.error("Error fetching data:", error); // 오류 처리
      }
    };

    fetchData(); // 실행

    const tokenLogin = async()=>{
      try {
        const temp = await loginCheck(); // 비동기 함수 호출
        console.log(temp); // 응답 확인
        setIsLogin(true)
      } catch (error) {
        console.error("Error token login:", error); // 오류 처리
      }
    }

    // 로그인 확인
    if (!!localStorage.getItem("accessToken")) {
      tokenLogin();
    }
  }, []);

  return (
    <Background>
      {isModal && <FeelModal closeModal={closeModal} />}
      <div style={{ display: "flex", marginBottom: 30 }}>
        <Calendar setPickDate={setPickDate} />
        {pickDate == null ? (
          <MonthlyStatistics feelData={feelData} setIsModal={setIsModal} />
        ) : (
          <DailyStatistics pickDate={pickDate} setPickDate={setPickDate} />
        )}
      </div>
      <BookCarousel data={bestSellerData} />
    </Background>
  );
};

export default MainPage;
