import React from "react";
import "../css/main/attendeeList.css";
import Img1 from "../img/profile 1.png";
import Img2 from "../img/profile 2.png";
import Img3 from "../img/profile 3.png";
import Img4 from "../img/profile 4.png";
import Img5 from "../img/profile 5.png";
import Img6 from "../img/profile 6.png";

function AttendeeList({globalState}) {
    const imgList = [{path:Img1, name:"tkim"}, {path:Img2, name:"kyungsle"}, {path:Img3, name:"seongyle"}, {path:Img4, name:"jolim"}, {path:Img5, name:"ywee"}, {path:Img6, name:"jaekim"}];
    return (

        <div className={(globalState ? "attendee" : "data_none_div")}>
            <p className="attendee--title">찬바 신청 목록</p>
            <div className="attendee--imgList">
                {
                    imgList.map((item) => (
                    <div className="attendee--img" key={item.name}>
                        <img className="" src={item.path} alt={item.path}></img>
                        <p className="attendee--text">{item.name}</p>
                   </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AttendeeList;