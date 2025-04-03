import useInput from "../../hooks/useInput";
import { LoginInputWrapper } from "./LoginPageComponents.style";
import Input from "../Common/Input";

const LoginPageComponents = () => {
  const [loginId, setLoginId] = useInput("");
  const [loginPassword, setLoginPassword] = useInput("");

  return (
    <LoginInputWrapper>
      <span>로그인</span>
      <Input value={loginId} onChange={setLoginId} label={"아이디"} />
      <Input
        value={loginPassword}
        onChange={setLoginPassword}
        label={"비밀번호"}
      />
      <button
        onClick={() => {
          console.log(loginId, loginPassword);
        }}
      >
        임시
      </button>
    </LoginInputWrapper>
  );
};

export default LoginPageComponents;
