import { FeelItem } from "./MonthlyStatistics";
import { StatisticsContainer } from "./Statistics.style";

import { feelData } from "@/assets/data/temp";

const DailyStatistics = ({ pickDate, setPickDate }) => {
  // 년월일 추출 함수
  const getYearMonthDate = (data) => {
    const year = data.getFullYear();
    const month = data.getMonth();
    const date = data.getDate();

    return `${year} ${month} ${date}`;
  };

  const filteredFeelData = feelData.filter(
    (data) =>
      getYearMonthDate(new Date(data.feelDate)) === getYearMonthDate(pickDate)
  );

  return (
    <StatisticsContainer>
      <div>
        <button
          onClick={() => {
            setPickDate(null);
          }}
        >
          이전
        </button>
      </div>
      {pickDate.getFullYear()}-
      {String(pickDate.getMonth() + 1).padStart(2, "0")}-{pickDate.getDate()}
      {filteredFeelData.map((item, index) => {
        return <FeelItem data={item} />;
      })}
    </StatisticsContainer>
  );
};

export default DailyStatistics;
