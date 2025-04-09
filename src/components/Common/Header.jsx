import { useNavigate } from "react-router";
import { HeaderContainer } from "./Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <i
        onClick={() => {
          navigate("/");
        }}
        style={{ cursor: "pointer" }}
      >
        Share Book
      </i>
      <div
        style={{
          position: "relative",
          // cursor: "pointer"
        }}
      >
        <input
          type="text"
          style={{
            borderRadius: 50,
            padding: "10px 30px",
            border: "1px solid gray",
          }}
          placeholder="책을 검색하세요"
        />
        <FontAwesomeIcon
          icon="fa-solid fa-magnifying-glass"
          style={{ position: "absolute", top: 10, left: 10 }}
          color="gray"
        />
      </div>
      <span>메뉴1</span>
      <span>메뉴2</span>
    </HeaderContainer>
  );
};

export default Header;
