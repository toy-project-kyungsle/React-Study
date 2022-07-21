import { atom } from "recoil";

const GlobalMovieState = atom({
  key: "GlobalMovieState",
  default: 0,
});

export default GlobalMovieState;