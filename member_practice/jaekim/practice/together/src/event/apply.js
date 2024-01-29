import React, { useState } from "react";
import Intro from "./intro";
import Event from "./event";
import Create from "./create";
import Createinfo from "./create_info";
import "./event_style.css";

function Apply({footer, setFooter}) {
  const [page, setPage] = useState(true);

  return (
    <>
      <div className="body">
        <div className="body_position">
          <div className="event">
            <Intro page={page} setPage={setPage}/>
            <div className="event_detail">
              <Event footer={footer} setFooter={setFooter}/>
              {page ? <Create /> : <Createinfo />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Apply;
