import { ProfilePageWrapper } from "./ProfilePage.style";
import BookCarousel from "../MainPage/BookCarousel";

const Profile = () => {
  return (
    <ProfilePageWrapper>
      <div style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}>
        <span>홍길동</span>
      </div>
      <div>
        <span>관심있는 책</span>
        <BookCarousel />
      </div>
    </ProfilePageWrapper>
  );
};

export default Profile;
