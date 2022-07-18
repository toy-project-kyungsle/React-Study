import React from "react";
import { useRecoilState } from "recoil";
import GlobalState from "./globalState";

function State() {
  const [globalState, setGlobalState] = useRecoilState(GlobalState);
  const onClick = () => {
    setGlobalState((prev) => prev + 1);
  };

  return (
    <>
      <p>{globalState}</p>
      <button onClick={onClick}>Add Num</button>
    </>
  );
}

export default State;
