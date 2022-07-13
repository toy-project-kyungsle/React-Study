import React from "react";
import Together42 from "../../img/header_image.png"
import "../../css/utils/header.css";

function Header() {
    return (
        <div className="header">
            <img src={Together42} className="header--image"/>
            <p className="header--title">Together 42</p>
        </div>
    );
}

export default Header;