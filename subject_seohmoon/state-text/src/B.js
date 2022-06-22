import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageB = () => {
    const navigate = useNavigate();

    useEffect(() => {
        alert("/로 이동")
        navigate("/");
    }, [navigate]);

    return (
        <div>
            <h1> PageB 입니다. </h1>
        </div>
    );
};

export default PageB;