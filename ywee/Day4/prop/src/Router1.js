import React, { useState } from "react";
import State1 from "./State1";
import State2 from "./State2";
import State3 from "./State3";

export default function Router1() {
  const [globalState, setGlobalState] = useState(0);

  return (
    <>
      <h1>globalState</h1>
      <p>{globalState}</p>
      <h1>State1</h1>
      <State1 globalState={globalState} setGlobalState={setGlobalState} />
      <h1>State2</h1>
      <State2 globalState={globalState} setGlobalState={setGlobalState} />
      <h1>State3</h1>
      <State3 globalState={globalState} setGlobalState={setGlobalState} />
    </>
  );
}
