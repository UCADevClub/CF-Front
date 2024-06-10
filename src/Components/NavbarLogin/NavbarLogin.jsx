import React, { useState } from "react";
import './NavbarLogin.css'
import { NavLink } from "react-router-dom";

const NavbarLogin=()=> {
    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return(
        <div className="page">
            <nav className="navbar">
                <ul className="nav-list">
                    <li><a href="/" className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabChange('home')}>Главная</a></li>
                    <li><a href="/about" className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} onClick={() => handleTabChange('about')}>О нас</a></li>
                    <li><a href="/projects" className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => handleTabChange('projects')}>Проекты</a></li>
                    <li><a href="/contacts" className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => handleTabChange('contact')}>Контакты</a></li>
                    <li><a href="/best" className={`nav-link ${activeTab === 'best' ? 'active' : ''}`} onClick={() => handleTabChange('best')}>Лучшее</a></li>
                    <li><a href="/faq" className={`nav-link ${activeTab === 'faq' ? 'active' : ''}`} onClick={() => handleTabChange('faq')}>FAQ</a></li>
                </ul>
            </nav>
            <div className="login-registr">
                {/* <li>
                    <a href="#" className="login-nav">Логин</a>
                </li>
                <li>
                    <a href="#" className="registration-nav">Регистрация</a>
                </li> */}
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? "login-nav" : "registration-nav"
                    }
                    >
                    Логин
                </NavLink>
                <NavLink
                    to="/register"
                    className={({ isActive }) =>
                        isActive ? "login-nav" : "registration-nav"
                    }
                    >
                    Регистрация
                </NavLink>

            </div>
        </div>
    )
}

export default NavbarLogin;