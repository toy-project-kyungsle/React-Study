import React from "react";
import { useRecoilState } from "recoil";
import GlobalState from "./globalState";

function LittelState() {
  const [globalState, setGlobalState] = useRecoilState(GlobalState);
  const onClick = () => {
    setGlobalState((prev) => prev + 1);
  };

  return (
    <>
      <h2>im son of state 3!</h2>
      <p>{globalState}</p>
      <button onClick={onClick}>Add Num</button>
    </>
  );
}

export default LittelState;
