import React from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm.jsx';
import NavbarLogin from '../../Components/NavbarLogin/NavbarLogin.jsx';
import "./LoginPage.css"
const LoginPage = () => {
    return (
        <div className="login-page">
            <NavbarLogin/>
            <div className="login-page-hero">
                <img src="./rain-bow.png" alt="rainbow" className="img-1" />
                <div className="img-hand"><img src="./Hand.png" alt="Hand"/></div>
                <div className="login"><LoginForm/></div>
            </div>
        </div>
    );
};

export default LoginPage;