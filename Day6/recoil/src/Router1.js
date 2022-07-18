import React from "react";
import State1 from "./State1";
import State2 from "./State2";
import State3 from "./State3";
import { useRecoilValue } from "recoil";
import GlobalState from "./globalState";

export default function Router1() {
  const globalState = useRecoilValue(GlobalState);

  return (
    <>
      <h1>globalState</h1>
      <p>{globalState}</p>
      <h1>State1</h1>
      <State1 />
      <h1>State2</h1>
      <State2 />
      <h1>State3</h1>
      <State3 />
    </>
  );
}
