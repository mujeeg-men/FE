// hooks/useInput.js
import { useState } from "react";

const useInput = (initialValue, validateFn) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const val = e.target.value;
    setValue(val);

    // 밸리데이션 로직 실행
    if (validateFn) {
      const validationResult = validateFn(val);
      setError(validationResult); // validationResult가 에러 메시지거나 빈 문자열
    }
  };

  return {
    value,
    onChange,
    error,
    isError: !!error,
  };
};

export default useInput;
