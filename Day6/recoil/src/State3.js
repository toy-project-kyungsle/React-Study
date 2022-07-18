import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import GlobalState from "./globalState";
import LittelState from "./LittelState";

function State() {
  const [globalState, setGlobalState] = useRecoilState(GlobalState);
  const onClick = () => {
    setGlobalState((prev) => prev + 1);
  };

  return (
    <>
      <p>{globalState}</p>
      <button onClick={onClick}>Add Num</button>
      <RecoilRoot>
        <LittelState></LittelState>
      </RecoilRoot>
    </>
  );
}

export default State;
