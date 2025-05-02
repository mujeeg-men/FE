import Input from "../Common/Input";
import Button from "../Common/Button";
import { LoginSignUpInputWrapper } from "./LoginSignUpCommon.style";
import { useState } from "react";
import { login } from "@/apis/api/user/auth";
import { useNavigate } from "react-router";

const LoginPageComponents = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const fetchLogin = async (email, password) => {
    try {
      const response = await login(email, password); // email과 password를 login 함수로 전달
      localStorage.setItem("accessToken", response.token);
      navigate("/");
    } catch (error) {
      console.error("로그인 실패:", error); // 로그인 실패 시 에러 출력
    }
  };

  return (
    <LoginSignUpInputWrapper>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          await fetchLogin(loginId, loginPassword);
        }}
      >
        <span>로그인</span>
        <Input
          value={loginId}
          onChange={(e) => {
            setLoginId(e.target.value);
          }}
          label={"이메일"}
        />
        <Input
          value={loginPassword}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
          label={"비밀번호"}
        />
        <Button type={"submit"}>로그인하기</Button>
      </form>
    </LoginSignUpInputWrapper>
  );
};

export default LoginPageComponents;
