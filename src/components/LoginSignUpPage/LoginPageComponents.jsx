import Input from "../Common/Input";
import Button from "../Common/Button";
import { LoginSignUpInputWrapper } from "./LoginSignUpCommon.style";
import { useState } from "react";

const LoginPageComponents = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <LoginSignUpInputWrapper>
      <span>로그인</span>
      <Input
        value={loginId}
        onChange={(e)=>{setLoginId(e.target.value)}}
        label={"이메일"}
       />
      <Input
        value={loginPassword}
        onChange={(e)=>{setLoginPassword(e.target.value)}}
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
