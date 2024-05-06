import React from "react";
import { NavLink } from "react-router-dom";
import './NavbarMain.css'

const NavbarMain=()=> {
    return(
        <header className="page-navbar-main">
            <ul className="nav-list-main">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link-2-main' : 'nav-link-1-main')}>Главная</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link-2-main' : 'nav-link-1-main')}>О нас</NavLink>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link-2-main' : 'nav-link-1-main')}>Проекты</NavLink>
                <NavLink to="/create" className="nav-create-main">
                    <img class="nav-create-img-main" src="plus.svg" alt="plus sign" />
                </NavLink>
                <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'nav-link-2-main' : 'nav-link-1-main')}>Контакты</NavLink>
                <NavLink to="/best" className={({ isActive }) => (isActive ? 'nav-link-2-main' : 'nav-link-1-main')}>Лучшее</NavLink>
                <NavLink to="/faq" className={({ isActive }) => (isActive ? 'nav-link-2-main' : 'nav-link-1-main')}>FAQ</NavLink>
            </ul>
            <div className="search-login-navbar-main">
                <NavLink to="/search" className="search-navbar-main">
                    <img class="search-img-navbar-main" src="search-icon.png" alt="search icon" />
                </NavLink>
                <NavLink to="/login" className="login-navbar-main">Логин</NavLink>
            </div>
        </header>
    )
}

export default NavbarMain;