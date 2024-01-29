import React from "react";
import Together42 from "./img/header_image.png"
import Menu from "./menu";
import "./page.css";

function Header() {
    return (
        <div>
            <div className="home--header">
                <img src={Together42} className="header--image"/>
                <p className="header--title">Together 42</p>
            </div>
            <Menu />
        </div>
    );
}

export default Header;