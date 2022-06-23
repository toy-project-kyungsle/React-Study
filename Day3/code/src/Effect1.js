import React, { useState, useEffect } from "react";

const Effect1 = () => {
  const [countClick, setCount] = useState(0);

  // 컴포넌트가 생기는 순간에 실행!
  useEffect(() => {
    alert("컴포넌트 시작!");
  }, []);

  // 컴포넌트가 생기는 순간에 실행!
  // 컴포넌트의 deps가 바뀌면 실행
  useEffect(() => {
    alert("countClick!");
  }, [countClick]);

  const showClickNo = () => {
    setCount(countClick + 1);
  };

  return (
    <div>
      <p>{countClick}</p>
      <button onClick={showClickNo}>Click Me</button>
    </div>
  );
};

export default Effect1;
