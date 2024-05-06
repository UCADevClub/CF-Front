import React, { useState } from "react";
import './Navbar.css'


const Navbar=()=> {
    return(
        <div className="page">
            <nav className="navbar">
                <ul className="nav-list">
                    <li><a href="#" className="nav-link">Главная</a></li>
                    <li><a href="#" className="nav-link">О нас</a></li>
                    <li><a href="#" className="nav-link">Проекты</a></li>
                    <li><a href="#" className="nav-link">Контакты</a></li>
                    <li><a href="#" className="nav-link">Лучшее</a></li>
                    <li><a href="#" className="nav-link">FAQ</a></li>
                </ul>
        </nav>
        <div className="login-registr">
            <li> <a href="#" className="login-1">Логин</a></li>
            <li><a href="#" className="login-2">Регистрация</a></li>
        </div>
        </div>
        
    )
}
export default Navbar;