import COLOR from "@/constants/color";
import {
  ProfileNavigationContainer,
  ProfileNavigationItem,
  ProfileNavigationItemWrapper,
} from "./ProfileNavigation.style";

const ProfileNavigation = ({ menu, pickedMenu, setPickedMenu }) => {
  return (
    <ProfileNavigationContainer>
      <ProfileNavigationItemWrapper>
        {menu.map((value, index) => {
          return (
            <ProfileNavigationItem
              key={index}
              style={{
                color: pickedMenu === value ? COLOR.defalutColor : null,
              }}
              onClick={()=>{
                setPickedMenu(value)
              }}
            >
              {value}
            </ProfileNavigationItem>
          );
        })}
      </ProfileNavigationItemWrapper>
    </ProfileNavigationContainer>
  );
};

export default ProfileNavigation;
