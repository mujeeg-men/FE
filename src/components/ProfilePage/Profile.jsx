import { ProfilePageWrapper } from "./ProfilePage.style";
import BookCarousel from "../MainPage/BookCarousel";
import { useEffect, useState } from "react";
import { getMyInterestBook } from "@/apis/api/user/userBook";

const Profile = () => {
  const [myInterestBooks, setMyInterestBook] = useState([])

  useEffect(()=>{
    const fetchMyInterestBook = async ()=>{
      const res = await getMyInterestBook();
      console.log(res)
      setMyInterestBook(res.data)
    }

    fetchMyInterestBook();
  }, [])

  return (
    <ProfilePageWrapper>
      <div style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}>
        <span>홍길동</span>
      </div>
      <div>
        <span>관심있는 책</span>
        <BookCarousel data={myInterestBooks} />
      </div>
    </ProfilePageWrapper>
  );
};

export default Profile;
