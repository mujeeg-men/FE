import Background from "@/components/Common/Background";
import ProfileNavigation from "@/components/ProfilePage/ProfileNaviagation";
import Profile from "@/components/ProfilePage/Profile";
import ProfileBookReview from "@/components/ProfilePage/ProfileBookReview";
import ProfileBookFeel from "@/components/ProfilePage/ProfileBookFeel";

import { useState } from "react";

const ProfilePage = () => {
  const menu = ["프로필", "독후감", "소감"];

  const [pickedMenu, setPickedMenu] = useState("프로필");

  const renderContent = {
    "프로필": <Profile />,
    "독후감": <ProfileBookReview />,
    "소감": <ProfileBookFeel />,
  };

  return (
    <Background>
      <div style={{ display: "flex" }}>
        <ProfileNavigation
          menu={menu}
          pickedMenu={pickedMenu}
          setPickedMenu={setPickedMenu}
        ></ProfileNavigation>
        {renderContent[pickedMenu]}
      </div>
    </Background>
  );
};

export default ProfilePage;
