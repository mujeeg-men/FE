import useInput from "../../hooks/useInput";
import Input from "../Common/Input";
import Button from "../Common/Button";
import { LoginSignUpInputWrapper } from "./LoginSignUpCommon.style";

const LoginPageComponents = () => {
  const [loginId, setLoginId] = useInput("");
  const [loginPassword, setLoginPassword] = useInput("");

  return (
    <LoginSignUpInputWrapper>
      <span>로그인</span>
      <Input value={loginId} onChange={setLoginId} label={"이메일"} />
      <Input
        value={loginPassword}
        onChange={setLoginPassword}
        label={"비밀번호"}
      />
      <Button
        onClick={() => {
          console.log(loginId, loginPassword);
        }}
      >
        로그인하기
      </Button>
    </LoginSignUpInputWrapper>
  );
};

export default LoginPageComponents;
