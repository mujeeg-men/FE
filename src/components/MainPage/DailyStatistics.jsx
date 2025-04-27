import { StatisticsContainer } from "./Statistics.style";

import { feelData } from "@/assets/data/temp";

const DailyStatistics = ({pickDate, setPickDate}) => {
    // console.log(pickDate)
  return (
    <StatisticsContainer>
      <div><button onClick={()=>{setPickDate(null)}}>이전</button></div>
        {pickDate.getFullYear()}-
        {String(pickDate.getMonth()+1).padStart(2, '0')}-
        {pickDate.getDate()}
    </StatisticsContainer>
  );
};

export default DailyStatistics;
