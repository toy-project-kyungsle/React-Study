import React from "react";
import AddEvent from "./AddEvent";
import Navi from "./Navi";
import header_image from "./header_image.png";
import "./State.css";

export default function State() {
    return (
        <div className="main_wrapper">
            <div className="main_A">
                <img src ={header_image} alt = {header_image}></img>
                <h1>Together 42</h1>
            </div>
            <div className="main_B">
                <Navi />
            </div>
            <div className="main_C">
                <AddEvent />
            </div>

        </div>

    );
}