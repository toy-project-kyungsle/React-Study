import React, { useEffect } from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import "./page.css";

function PageB() {
    const navigate = useNavigate();
    useEffect(() => {
        alert("페이지를 이동합니다!");
        navigate("/");
      }, []);
    return (
        <div className="home">
            <Header />
        </div>
    );
}

export default PageB;