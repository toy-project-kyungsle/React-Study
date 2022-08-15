import React from "react";

function State({ globalState, setGlobalState }) {
  const onClick = () => {
    setGlobalState((prev) => prev + 1);
    window.confirm("방을 나가시겠습니까?");
  };

  return (
    <>
      <p>{globalState}</p>
      <button onClick={onClick}>Add Num</button>
    </>
  );
}

export default State;
