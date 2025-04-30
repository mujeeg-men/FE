import Input from "../Common/Input";
import Button from "../Common/Button";
import { LoginSignUpInputWrapper } from "./LoginSignUpCommon.style";
import { useState } from "react";
import { login } from "@/apis/api/user/auth";

const LoginPageComponents = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const fetchLogin = async (email, password) => {
    try {
      const response = await login(email, password); // email과 password를 login 함수로 전달
      console.log(response); // 로그인 성공 시 응답 출력
    } catch (error) {
      console.error("로그인 실패:", error); // 로그인 실패 시 에러 출력
    }
  };
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
        func={async () => {
          await fetchLogin(loginId, loginPassword);
        }}
      >
        로그인하기
      </Button>
    </LoginSignUpInputWrapper>
  );
};

export default LoginPageComponents;
