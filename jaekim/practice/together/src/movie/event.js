import React from "react";
import "./movie_style.css";

function Event({setFooter}) {

  return (
    <>
        <div className="events">
          <div className="events_title"><h3>신청 가능 목록</h3></div>
          <div className="events_contents">
            <li onClick={() => {
              setFooter(1);
            }}> 가상 이벤트1 </li>
            <li onClick={() => {
              setFooter(2);
            }}> 가상 이벤트2 </li>
            <li onClick={() => {
              setFooter(3);
            }}> 가상 이벤트3 </li>
          </div>
        </div>
    </>
  );
}

export default Event;
