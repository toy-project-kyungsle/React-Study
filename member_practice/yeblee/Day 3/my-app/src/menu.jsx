import React from "react";
import { Link } from 'react-router-dom';
import "./page.css";

function Menu() {
    return (
        <div>
            <div className="home--menu">
                <Link to="/" className="menu--link">A</Link>
                <Link to="/B" className="menu--link">B</Link>
            </div>
        </div>
    );
}

export default Menu;