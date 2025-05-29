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
import {
  getBestSeller,
  getMyDateBookFeel,
  getMyMonthBookFeel,
} from "@/apis/api/book/bookApi";
import { isLoginState, myInterestBookState } from "@/store/user.store";
import { feelDataState, pickedDateState } from "@/store/feel.store";
import { loginCheck } from "@/apis/api/user/auth";
import { getMyInterestBook } from "@/apis/api/user/userBook";
import { formattedDate } from "@/utils/fomattedData";

const MainPage = () => {
  const navigate = useNavigate();

  const [isModal, setIsModal] = useState(false);
  const [dailyFeelData, setDailyFeelData] = useState([])

  const [bestSellerData, setBestSellerData] =
    useRecoilState(bestSellerDataState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [feelData, setFeelData] = useRecoilState(feelDataState);
  const [myInterestBook, setMyInterestBook] =
    useRecoilState(myInterestBookState);
  const [pickedDate, setPickedDate] = useRecoilState(pickedDateState);

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
        // console.log(temp); // 응답 확인
        setBestSellerData(temp); // 상태 업데이트
      } catch (error) {
        console.error("Error fetching data:", error); // 오류 처리
      }
    };

    fetchData(); // 실행

    const tokenLogin = async () => {
      try {
        const temp = await loginCheck(); // 비동기 함수 호출
        // console.log(temp); // 응답 확인
        setIsLogin(true);
      } catch (error) {
        console.error("Error token login:", error); // 오류 처리
      }
    };

    // 로그인 확인
    if (!!localStorage.getItem("accessToken")) {
      tokenLogin();
    }

    // 관심있는 책 조회
    const fetchMyInterestBook = async () => {
      try {
        const res = await getMyInterestBook();
        // console.log(res);
        setMyInterestBook(res.data);
      } catch (error) {
        console.error("fetch my interest book error:", error); // 오류 처리
      }
    };

    // 월별 소감 조회회
    const fetchMyMonthBookFeel = async () => {
      try {
        const tempDate = new Date();
        const res = await getMyMonthBookFeel(
          tempDate.getFullYear(),
          tempDate.getMonth() + 1
        );
        console.log(res);
        setFeelData(res.data);
      } catch (error) {
        console.error("fetch my interest book error:", error); // 오류 처리
      }
    };

    fetchMyInterestBook();
    fetchMyMonthBookFeel();
  }, []);

  // 일별 소감 조회회
  useEffect(() => {
    const fetchMyDateBookFeel = async () => {
      // console.log(pickedDate?.getDate());
      const date = pickedDate?.getDate();
      if (date!=undefined) {
        const res = await getMyDateBookFeel(formattedDate(pickedDate));
        console.log(res)
        setDailyFeelData(res.data)
      }
    };

    fetchMyDateBookFeel();
  }, [pickedDate]);

  return (
    <Background>
      {isModal && <FeelModal closeModal={closeModal} />}
      <div style={{ display: "flex", marginBottom: 30 }}>
        <Calendar setPickedDate={setPickedDate} />
        {pickedDate == null ? (
          <MonthlyStatistics feelData={feelData} setIsModal={setIsModal} />
        ) : (
          <DailyStatistics setIsModal={setIsModal} dailyFeelData={dailyFeelData} />
        )}
      </div>
      <BookCarousel data={bestSellerData} />
    </Background>
  );
};

export default MainPage;
