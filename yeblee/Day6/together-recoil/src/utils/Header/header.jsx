import React from "react";
import Together42 from "../../img/header_image.png"
import { Link } from 'react-router-dom';
import "../../css/utils/header.css";

function Header() {
    return (
        <div className="header">
            <Link to="/"><img src={Together42} className="header--image"/></Link>
            <p className="header--title">Together 42</p>
        </div>
    );
}

export default Header;