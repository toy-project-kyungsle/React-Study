import React from "react";
import { useSetRecoilState } from "recoil";
import "../../css/utils/modal.css";
import State from "../../atom/globalModalState";

function Modal({message}) {
    const SetModal = useSetRecoilState(State);

    const closeModal = () => {
        SetModal((isOpen) => false)
    }
    return (
        <div className="modal">
            <div>
                <button onClick={closeModal}>&#x2716;</button>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Modal;