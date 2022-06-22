import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./navi.css";

const NaviPageB = () => {
    const navigate = useNavigate();
    const [goPageB, setGoPageB] = useState(false);

    useEffect(() => {
        if (goPageB) {
            navigate("/B");
        }
    }, [goPageB, navigate]);

    const clickGoPageB = () => {
        setGoPageB((prev) => !prev);
    }

    return (
        <div className="button_bg">
            <button className="button_A">A</button>
            <button className="button_B" onClick={clickGoPageB}>B</button>
        </div>
    );
};

export default NaviPageB;