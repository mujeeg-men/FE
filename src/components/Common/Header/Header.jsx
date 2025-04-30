import { useNavigate } from "react-router";
import { HeaderContainer } from "./Header.style";
import BeforeLoginHeaderUi from "./BeforeLoginHeaderUi";
import AfterLoginHeaderUi from "./AfterLoginHeaderUi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [inputText, setInputText] = useState("");

  const activeButton = ()=>{
    if (!inputText.trim()) {
      // 빈 문자열 (혹은 공백만 입력한 경우) -> 이동 막기
      return;
    }
    navigate(`/search?searchText=${inputText}`)
  }
  const activeEnter = (e)=>{
    if(e.key === 'Enter'){
      activeButton();
    }
  }

  return (
    <HeaderContainer>
      <i
        onClick={() => {
          navigate("/");
        }}
        style={{ cursor: "pointer", flex: 1 }}
      >
        Share Book
      </i>
      <div
        style={{
          position: "relative",
          // cursor: "pointer"
          flex: 1,
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
          onChange={(e)=>{
            setInputText(e.target.value)
          }}
          onKeyDown={(e)=>{
            activeEnter(e)
          }}
        />
        <FontAwesomeIcon
          icon="fa-solid fa-magnifying-glass"
          style={{ position: "absolute", top: 10, left: 10 }}
          color="gray"
        />
      </div>
      <div style={{ flex: 2 }}>
        {isLogin ? <AfterLoginHeaderUi navigate={navigate} /> : <BeforeLoginHeaderUi navigate={navigate} />}
      </div>
    </HeaderContainer>
  );
};

export default Header;
