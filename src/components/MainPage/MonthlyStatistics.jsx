import { StatisticsContainer } from "./Statistics.style";
import BookCarousel from "./BookCarousel";

import COLOR from "@/constants/color";

const MonthlyStatistics = ({feelData}) => {
  return (
    <StatisticsContainer>
      <div>
        <span>읽은 책 목록</span>
        <BookCarousel />
      </div>

      <span>소감문</span>
      <div style={{overflow: 'auto', height: 200}}>
        {feelData.map((item, index) => {
          return <FeelItem data={item} />;
        })}
      </div>
    </StatisticsContainer>
  );
};

const FeelItem = ({ data, index }) => {
  return (
    <div key={index} style={{padding: '10px 0'}}>
      <div>
        <span>{data.bookTitle}</span> <span style={{color: COLOR.gray}}>{data.feelDate}</span>
      </div>

      <div>
        <span>{data.feelContents} </span>
        <span>{data.pageCount}P</span>
      </div>
    </div>
  );
};

export default MonthlyStatistics;
