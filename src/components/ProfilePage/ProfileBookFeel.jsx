// import { feelData } from "@/assets/data/temp";
import { ProfilePageWrapper } from "./ProfilePage.style";
import { FeelItem } from "../MainPage/MonthlyStatistics";
import { useRecoilState } from "recoil";
import { feelDataState } from "@/store/feel.store";

const ProfileBookFeel = () => {
  const [feelData, setFeelData] = useRecoilState(feelDataState)
  return (
    <ProfilePageWrapper>
      {feelData.map((value, index) => {
        return <FeelItem data={value} />;
      })}
    </ProfilePageWrapper>
  );
};

export default ProfileBookFeel;
