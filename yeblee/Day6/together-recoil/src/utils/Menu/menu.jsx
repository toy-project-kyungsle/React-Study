import React from "react";
import { Link } from 'react-router-dom';
import "../../css/utils/menu.css";

function Menu() {
    return (
        <div>
            <div className="home--menu">
                <button className="menu--link">A</button>
                <Link to="/movie" className="menu--link">B</Link>
            </div>
        </div>
    );
}

export default Menu;