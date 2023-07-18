import React from "react";
import logoImg from './../../image/Frame 227.svg'
import './../../styles/logo.css'

const Logo = () => {
    return (
        <div className="logo">
        <img src={logoImg} alt="Logo" />
        </div>
    );
};

export default Logo;