import React from "react";

function State({ globalState, setGlobalState }) {
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
