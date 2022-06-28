import React from 'react';
import State1 from './State1';
import State2 from './State2';
import State3 from './State3';
import './router1.css';
import Navi1 from './Navi1';
import { useState, useEffect } from 'react';

export default function Router1() {
  const [Createmode, SetCreatemode] = useState(false);

  const createeventlist = () => {
    SetCreatemode((prev) => !prev);
  };

  const onClick = () => {
    alert('신청되었습니다!');
  };

  const onSubmit = () => {
    alert('제출되었습니다!');
  };

  return (
    <>
      <div class="header">
        <img src="../../header_image.png"></img>
        <p>Together 42</p>
      </div>
      <div class="nav">
        <div>
          <button>A</button>
        </div>
        <Navi1></Navi1>
      </div>
      <div class="body">
        <div className="register">친바 신청하기</div>
        <div className="eventclick" onClick={createeventlist}>
          이벤트 생성
        </div>
        <div className="register_box">
          <div className="box_list">
            <p class="list_title">신청가능 목록</p>
            <p class="list_event">가상 이벤트 1</p>
            <p class="list_event">가상 이벤트 2</p>
            <p class="list_event">가상 이벤트 3</p>
          </div>
          {Createmode ? (
            <div className="box_content">
              <form onSubmit={onSubmit}>
                <p class="title">친바 제목</p>
                <input type="text" placeholder="친바 제목" />
                <p class="title">친바 설명</p>
                <p>
                  <textarea
                    cols="50"
                    rows="8"
                    placeholder="친바 내용"
                  ></textarea>
                </p>
                <div class="registerbutton" onClick={onClick}>
                  친바 신청
                </div>
              </form>
            </div>
          ) : (
            <div className="box_content">
              <p class="list_event">
                이벤트를 생성하고 신청할 수 있는 페이지 입니다
              </p>
              <p class="list_event">이벤트를 클릭해주세요 !</p>
              <p class="list_event">이벤트 생성도 가능하답니다 ~</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// A B 사이가 너무 멈....
// 함수 분리가 안된다 ㅎㅎ
