import { atom } from "recoil";

export const isLoginState = atom({
    key: 'isLoginState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });