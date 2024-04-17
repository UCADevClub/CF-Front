import React, {useState} from "react";
import './NavbarMain.css'


const NavbarMain=()=> {
    return(
        <div className="page-navbar-main">
            <nav className="navbar-main">
                <ul className="nav-list-main">
                    <a href="" className="nav-link-2-main">Главная</a>
                    <a href="about" className="nav-link-1-main">О нас</a>
                    <a href="projects" className="nav-link-1-main">Проекты</a>
                    <a href="create" className="nav-create-main">
                        <img class="nav-create-img-main" src="plus.svg" alt="plus sign" />
                    </a>
                    <a href="contacts" className="nav-link-1-main">Контакты</a>
                    <a href="best" className="nav-link-1-main">Лучшее</a>
                    <a href="faq" className="nav-link-1-main">FAQ</a>
                </ul>
            </nav>
            <a href="search" className="search-navbar-main">
                <img class="search-img-navbar-main" src="search-icon.png" alt="search icon" />
            </a>
            <a href="login" className="login-navbar-main">Логин</a>
        </div>
    )
}
export default NavbarMain;