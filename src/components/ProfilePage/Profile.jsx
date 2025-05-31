import { ProfilePageWrapper } from "./ProfilePage.style";
import BookCarousel from "../MainPage/BookCarousel";
import { useRecoilState } from "recoil";
import { myInterestBookState } from "@/store/user.store";

const Profile = () => {
  const [myInterestBook, setMyInterestBook] = useRecoilState(myInterestBookState)

  return (
    <ProfilePageWrapper>
      <div style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}>
        <span>홍길동</span>
      </div>
      <div>
        <span>관심있는 책</span>
        <BookCarousel data={myInterestBook} />
      </div>
    </ProfilePageWrapper>
  );
};

export default Profile;
