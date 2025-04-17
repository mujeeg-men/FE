import { StatisticsContainer } from "./Statistics.style";

import { feelData } from "@/assets/data/temp";

const DailyStatistics = ({pickDate}) => {
    // console.log(pickDate)
  return (
    <StatisticsContainer>
        {pickDate.getFullYear()}-
        {String(pickDate.getMonth()+1).padStart(2, '0')}-
        {pickDate.getDate()}
    </StatisticsContainer>
  );
};

export default DailyStatistics;
