import { HeaderButton } from "./Header.style";

const AfterLoginHeaderUi = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
    >
      <HeaderButton>내 정보</HeaderButton>
    </div>
  );
};

export default AfterLoginHeaderUi;
