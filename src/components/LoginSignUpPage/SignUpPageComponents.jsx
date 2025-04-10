import useInput from "../../hooks/useInput";

import { LoginSignUpInputWrapper } from "./LoginSignUpCommon.style";

import { Terms } from "./SignUpPageComponents.style";

import Input from "../Common/Input";
import Button from "../Common/Button";
import { SIGNUP_VALIDATION_MESSAGES } from "@/constants/validationMessage";
import { useState } from "react";

const SignUpPageComponents = () => {
  // 이메일 밸리데이션 함수
  const validateEmail = (value) => {
    if (!value) return SIGNUP_VALIDATION_MESSAGES.required;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(value)) return SIGNUP_VALIDATION_MESSAGES.invalidEmail;
    return ""; // 정상
  };

  // 비밀번호 밸리데이션 함수
  const validatePassword = (value) => {
    if (!value) return SIGNUP_VALIDATION_MESSAGES.required;
    if (value.length < 8) return SIGNUP_VALIDATION_MESSAGES.invalidPassword;

    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const validCount = [hasLetter, hasNumber, hasSpecial].filter(
      Boolean
    ).length;
    if (validCount < 3) return SIGNUP_VALIDATION_MESSAGES.invalidPassword;

    return "";
  };

  const validatePasswordCheck = (value) => {
    if (!value) return SIGNUP_VALIDATION_MESSAGES.required;
    if (value !== passwordInput.value)
      return SIGNUP_VALIDATION_MESSAGES.passwordMismatch;
    return "";
  };

  const emailInput = useInput("", validateEmail);
  const passwordInput = useInput("", validatePassword);
  const passwordCheckInput = useInput("", validatePasswordCheck);

  return (
    <LoginSignUpInputWrapper>
      <span>회원가입</span>
      <Input
        value={emailInput.value}
        onChange={emailInput.onChange}
        label="이메일"
        isValidation={emailInput.isError}
        validationText={emailInput.error}
      />

      <Input
        value={passwordInput.value}
        onChange={passwordInput.onChange}
        label="비밀번호"
        isValidation={passwordInput.isError}
        validationText={passwordInput.error}
        type="password"
      />

      <Input
        value={passwordCheckInput.value}
        onChange={passwordCheckInput.onChange}
        label="비밀번호 확인"
        isValidation={passwordCheckInput.isError}
        validationText={passwordCheckInput.error}
        type="password"
      />

      <Terms>{`이용약관~~~~~~\n이용약관~~~~~~\n이용약관~~~~~~\n이용약관~~~~~~\n이용약관~~~~~~\n이용약관~~~~~~\n이용약관~~~~~~\n이용약관~~~~~~\n이용약관~~~~~~\n이용약관~~~~~~\n이용약관~~~~~~\n이용약관~~~~~~\n이용약관~~~~~~\n이용약관~~~~~~\n이용약관~~~~~~\n`}</Terms>
      <div>
        <input type="checkbox" />
        이용약관에 동의합니다.
      </div>

      <Button
        onClick={() => {
          console.log(emailInput, passwordInput, passwordCheckInput);
        }}
      >
        회원가입하기
      </Button>
    </LoginSignUpInputWrapper>
  );
};

export default SignUpPageComponents;
