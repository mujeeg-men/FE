import useInput from "../../hooks/useInput";

import { SingUpInputWrapper } from "./SignUpPageComponents.style";

import Input from "../Common/Input";

const SignUpPageComponents = () => {
  const [signUpId, setSignUpId] = useInput("");
  const [signUpPassword, setSignUpPassword] = useInput("");
  const [signUpPasswordCheck, setSignUpPasswordCheck] = useInput("");

  return (
    <SingUpInputWrapper>
      <span>회원가입</span>
      <Input value={signUpId} onChange={setSignUpId} label={"아이디"} />
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
      <button
        onClick={() => {
          console.log(signUpId, signUpPassword, signUpPasswordCheck);
        }}
      >
        임시
      </button>
    </SingUpInputWrapper>
  );
};

export default SignUpPageComponents;
