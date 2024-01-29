import React, { useState } from "react";

function State() {
  const [name, setName] = useState(false);

  const onClick = () => {
    setName(true);
  };

  return (
    <>
      <p>{name ? "true" : "false"}</p>
      <button onClick={onClick}>go!</button>
    </>
  );
}

export default State;
