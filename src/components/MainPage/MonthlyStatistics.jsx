import { StatisticsContainer } from "./Statistics.style";
import BookCarousel from "./BookCarousel";

import COLOR from "@/constants/color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { bestSellerDataState } from "@/store/book.store";
import { myInterestBookState } from "@/store/user.store";

const MonthlyStatistics = ({ feelData, setIsModal }) => {
  const [bestSellerData, setBestSellerData] = useRecoilState(myInterestBookState)

  return (
    <StatisticsContainer>
      <div>
        <span>읽은 책 목록</span>
        <BookCarousel data={bestSellerData} />
      </div>

      <span>이번 달 소감</span>
      <div style={{ overflow: "auto", height: 200 }}>
        {feelData.map((item, index) => {
          return <FeelItem data={item} key={index} />;
        })}
      </div>
    </StatisticsContainer>
  );
};

export const FeelItem = ({ data, index }) => {
  return (
    <div key={index} style={{ padding: "10px 0" }}>
      <div>
        <span>{data.bookTitle}</span>{" "}
        <span style={{ color: COLOR.gray }}>{data.feelDate}</span>
      </div>

      <div>
        <span>{data.comment} </span>
        <span>{data.pageRead}P</span>
      </div>
    </div>
  );
};

export default MonthlyStatistics;
