import React from "react";
import { Link } from 'react-router-dom';
import { useRecoilState } from "recoil";
import State from "../../atom/globalModalState";
import "../../css/utils/menu.css";
import Modal from "../../utils/Modal/modal"

function Menu() {
    const [isOpen, SetModal] = useRecoilState(State);

    const openModal = () => {
        SetModal((isOpen) => true)
    }
    return (
        <div>
            <div className="home--menu">
                <button className="menu--button" onClick={openModal}>A</button>
                <Link to="/movie" className="menu--link">B</Link>
                {isOpen && <Modal message={"나는 모달모달 ~!"} />}
            </div>
        </div>
    );
}

export default Menu;