import React from "react";
// import profile1 from "../profile 1.png";
// import profile2 from "../profile 2.png";
// import profile3 from "../profile 3.png";
// import profile4 from "../profile 4.png";
// import profile5 from "../profile 5.png";
// import profile6 from "../profile 6.png";
import "./event_style.css";

function Footer() {
  const picture = [1, 2, 3, 4, 5, 6];
  const names = ["tkim", "kyungsle", "jimin", "seunam", "jaekim", "seongyle"];
  

  const images = picture.map(image => {
      return <img key={image} src={require(`../profile ${image}.png`)} className="profile" alt=""/>
  });
  // const names = picture.map(name => {
  //   return <img key={name} src={require(`../profile ${name}.png`)} className="profile" alt=""/>
  // });
  return (
    <>
        <div className="list_box">
          <div className="list">
            <div className="list_title">
              <h1>친바 신청 목록</h1>
            </div>
            <div className="attendees_info">
              <div className="attendees">
                {/* 이미지, 이름을 하나의 블록에 넣기 */}
                <div className="attendee_picture">
                  {images}
                </div>
                <div className="attendee_name">
                  {names.map(name => <p>{name}</p>)}
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Footer;

// import React, { useState, useEffect } from "react";
// import "./style.css";

// function Event() {
//   const [jip, setJip] = useState(0);

//   console.log(jip);
//   useEffect(() => {
//     if (jip === 2)
//       alert("2다.");  
//     }, [jip]
//   )

//   const clicksetJip = () => {
//     setJip(jip + 1);
//   }

//   return (
//     <>
//         <div className="events">
//           <div className="events_title"><h3>이벤트 생성하기</h3></div>
//           <div className="events_contents">
//             <li> 가상 이벤트1 </li>
//             <li onClick={clicksetJip}> 가상 이벤트2 </li>
//             <li> 가상 이벤트3 </li>
//           </div>
//         </div>
//     </>
//   );
// }

// export default Event;
