import React from "react";

function State() {
  const A = [1, 2, 4, 8];

  return (
    <>
      <p>{`이전 배열 : ${A}`}</p>
      <div>
        {A.map((elem) => (
          <p>{elem * 2}</p>
        ))}
      </div>
    </>
  );
}

export default State;
