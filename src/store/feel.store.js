import { feelData } from "@/assets/data/temp";
import { atom } from "recoil";

export const feelDataState = atom({
  key: "feelDataState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const pickedDateState = atom({
  key: "pickedDateState",
  default: null,
});
