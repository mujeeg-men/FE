import useInput from "../../hooks/useInput";

import { LoginSignUpInputWrapper } from "./LoginSignUpCommon.style";

import Input from "../Common/Input";
import Button from "../Common/Button";

const SignUpPageComponents = () => {
  const [signUpId, setSignUpId] = useInput("");
  const [signUpPassword, setSignUpPassword] = useInput("");
  const [signUpPasswordCheck, setSignUpPasswordCheck] = useInput("");

  return (
    <LoginSignUpInputWrapper>
      <span>회원가입</span>
      <Input value={signUpId} onChange={setSignUpId} label={"이메일"} />
      <Input
        value={signUpPassword}
        onChange={setSignUpPassword}
        label={"비밀번호"}
      />
      <Input
        value={signUpPasswordCheck}
        onChange={setSignUpPasswordCheck}
        label={"비밀번호 확인"}
      />
      <Button
        onClick={() => {
          console.log(signUpId, signUpPassword, signUpPasswordCheck);
        }}
      >
        회원가입하기
      </Button>
    </LoginSignUpInputWrapper>
  );
};

export default SignUpPageComponents;
