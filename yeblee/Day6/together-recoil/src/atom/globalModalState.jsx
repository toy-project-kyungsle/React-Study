import { atom } from "recoil";

const GlobalModalState = atom({
  key: "GlobalModalState",
  default: false,
});

export default GlobalModalState;