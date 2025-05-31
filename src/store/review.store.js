import { feelData } from "@/assets/data/temp";
import { atom } from "recoil";

export const reviewDataState = atom({
  key: "reviewDataState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
