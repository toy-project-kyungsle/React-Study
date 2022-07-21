import { atom } from "recoil";

const GlobalApplyState = atom({
  key: "GlobalApplyState",
  default: false,
});

export default GlobalApplyState;