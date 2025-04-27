import { feelData } from "@/assets/data/temp";
import { ProfilePageWrapper } from "./ProfilePage.style";
import { FeelItem } from "../MainPage/MonthlyStatistics";

const ProfileBookFeel = () => {
  return (
    <ProfilePageWrapper>
      {feelData.map((value, index) => {
        return <FeelItem data={value} />;
      })}
    </ProfilePageWrapper>
  );
};

export default ProfileBookFeel;
