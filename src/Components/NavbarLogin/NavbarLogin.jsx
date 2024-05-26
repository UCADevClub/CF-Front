import React, {useState} from "react";
import './NavbarLogin.css'


const NavbarLogin=()=> {
    return(
        <div className="page-navbar-login">
            <nav className="navbar-login">
                <ul className="nav-list-login">
                    <li><a href="/" className="nav-link-login">Главная</a></li>
                    <li><a href="/about" className="nav-link-login">О нас</a></li>
                    <li><a href="projects" className="nav-link-login">Проекты</a></li>
                    <li><a href="contacts" className="nav-link-login">Контакты</a></li>
                    <li><a href="best" className="nav-link-login">Лучшее</a></li>
                    <li><a href="faq" className="nav-link-login">FAQ</a></li>
                </ul>
            </nav>
            <div className="login-register-navbar-login">
                <li> <a href="/login" className="login-1-navbar-login">Логин</a></li>
                <li><a href="/register" className="login-2-navbar-login">Регистрация</a></li>
            </div>
        </div>
    )
}
export default NavbarLogin;