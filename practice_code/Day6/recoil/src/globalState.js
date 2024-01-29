import { atom } from "recoil";

const GlobalState = atom({
  key: "GlobalState",
  default: 0,
});

export default GlobalState;
