import { padTwoZero } from "@/utils/fomattedData";
import { FeelItem } from "./MonthlyStatistics";
import { StatisticsContainer } from "./Statistics.style";

import COLOR from "@/constants/color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { pickedDateState } from "@/store/feel.store";

const DailyStatistics = ({setIsModal, dailyFeelData }) => {
  const [pickedDate, setPickedDate] = useRecoilState(pickedDateState);
  // 년월일 추출 함수
  const getYearMonthDate = (data) => {
    const year = data.getFullYear();
    const month = data.getMonth();
    const date = data.getDate();

    return `${year} ${month} ${date}`;
  };

  return (
    <StatisticsContainer>
      <div>
        <button
          onClick={() => {
            setPickedDate(null);
          }}
        >
          이전
        </button>
      </div>
      {pickedDate.getFullYear()}-{padTwoZero(String(pickedDate.getMonth() + 1))}-
      {padTwoZero(String(pickedDate.getDate()))}
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>소감문</span>
        <button
          style={{
            backgroundColor: COLOR.gray,
            borderRadius: "50%",
            width: 25,
            height: 25,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            cursor: "pointer",

            // color: 'white'
          }}
          onClick={() => {
            setIsModal(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {dailyFeelData.map((item, index) => {
        return <FeelItem data={item} key={index} />;
      })}
    </StatisticsContainer>
  );
};

export default DailyStatistics;
