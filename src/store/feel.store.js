import { feelData } from "@/assets/data/temp";
import { atom } from "recoil";

export const feelDataState = atom({
    key: 'feelDataState', // unique ID (with respect to other atoms/selectors)
    default: feelData, // default value (aka initial value)
  });