import React from "react";
import './Button.scss';

function Button({}) {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;