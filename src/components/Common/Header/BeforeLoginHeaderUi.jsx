import Button from "../Button";
import { HeaderButton } from "./Header.style";

const BeforeLoginHeaderUi = ({navigate}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
      <HeaderButton onClick={()=>{navigate('/login')}}>로그인</HeaderButton>
      <HeaderButton onClick={()=>{navigate('/sign-up')}}>회원가입</HeaderButton>
    </div>
  );
};

export default BeforeLoginHeaderUi;
