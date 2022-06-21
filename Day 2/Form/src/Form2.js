import React from "react";

function Form2() {
  const onClick = () => {
    alert("im clicked!");
  };

  const onSubmit = () => {
    alert("im submitted");
  };

  return (
    <>
      <form className="form2" onSubmit={onSubmit}>
        <input
          className="input2"
          onChange={(e) => console.log(e.target.value)}
        ></input>
        <button onClick={onClick}>go!</button>
      </form>
    </>
  );
}

export default Form2;
