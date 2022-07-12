import React from "react";
import "../css/main/attendeeList.css";
import "../css/main/main.css";
import Img1 from "../img/profile 1.png";
import Img2 from "../img/profile 2.png";
import Img3 from "../img/profile 3.png";
import Img4 from "../img/profile 4.png";
import Img5 from "../img/profile 5.png";
import Img6 from "../img/profile 6.png";

function AttendList({globalState}) {
    const imgList = [{path:Img1, name:"yeblee"},{path:Img2, name:"yeblee"},{path:Img3, name:"yeblee"},{path:Img4, name:"yeblee"},{path:Img5, name:"yeblee"},{path:Img6, name:"yeblee"} ];
    return (
        <div className="main">
        {
            globalState ?
            <div className="main--attend">
                <p className="main--title">찬바 신청 목록</p>
                <div className="main--img">
                    {
                        imgList.map((img) => (
                        <div>
                            <img src={img.path} alt={img.path}></img>
                            <p className="main--text">{img.name}</p>
                        </div>
                        ))
                    }
                </div>
            </div>
            :
            <>
            </>
        }
        </div>
    );
}

export default AttendList;