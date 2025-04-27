import { StatisticsContainer } from "./Statistics.style";
import BookCarousel from "./BookCarousel";

import COLOR from "@/constants/color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const MonthlyStatistics = ({ feelData, setIsModal }) => {
  return (
    <StatisticsContainer>
      <div>
        <span>읽은 책 목록</span>
        <BookCarousel />
      </div>
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
      <div style={{ overflow: "auto", height: 200 }}>
        {feelData.map((item, index) => {
          return <FeelItem data={item} />;
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
        <span>{data.feelContents} </span>
        <span>{data.pageCount}P</span>
      </div>
    </div>
  );
};

export default MonthlyStatistics;
