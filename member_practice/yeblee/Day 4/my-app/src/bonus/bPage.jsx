import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PageB() {
    const navigate = useNavigate();
    useEffect(() => {
        alert("페이지를 이동합니다!");
        navigate("/");
      }, []);
    return (
        <></>
    );
}

export default PageB;