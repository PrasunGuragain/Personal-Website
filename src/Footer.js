import React from 'react';
import my_logo from "./img/my_logo.png";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <img src={my_logo} alt="" className="img"/>
            <span className="copyright">@2022 Prasun Guragain. All rights reserved.</span>
        </div>
    )
}

export default Footer