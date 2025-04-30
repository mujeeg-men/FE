import { atom } from "recoil";

export const bestSellerDataState = atom({
    key: 'bestSellerDataState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });