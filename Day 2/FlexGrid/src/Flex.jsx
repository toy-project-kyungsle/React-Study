import React from 'react';
import './flex.css';

function Flex() {
  const onClick = () => {
    alert('클릭되었습니다.');
  };

  const onSubmit = () => {
    alert('제출되었습니다.');
  };

  return (
    <>
      <div className="flex">
        <div className="intro">
          <p>어서오세요 사서님! 친해질 시간입니다.</p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="id">
            <span>아이디</span>
            <input type="text" onChange={(e) => console.log(e.target.value)} />
          </div>
          <div className="password">
            <span>비밀번호</span>
            <input
              type="password"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="login">
            <button onClick={onClick}>로그인</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Flex;

// onsubmit, onclick 따로 뺄수 없나여
// 클릭되었습니다 제출되었습니다 같이 나오는거 싫은디 ....
