import { HeaderButton } from "./Header.style";

const AfterLoginHeaderUi = ({navigate}) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
    >
      <HeaderButton onClick={()=>{
        navigate('/profile')
      }}>내 정보</HeaderButton>
    </div>
  );
};

export default AfterLoginHeaderUi;
