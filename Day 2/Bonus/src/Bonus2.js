import React, { useState } from "react";

function Bonus() {
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

export default Bonus;
