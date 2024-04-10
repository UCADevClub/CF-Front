import React, { useState } from "react";
// import './RegistrForm.css'


const RegistrForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    return(
        <div className="form-wrapper">
            <h2 className="title title-1">Добрый День!</h2>
            <h2 className="title title-2">Добро Пожаловать</h2>
            <div className="form">
                <div className="name-surname">
                    <input type="text" className="input"placeholder="имя"/>
                    <input type="text"className="input" placeholder="фамилия" />
                </div>
                <input type="text" className="input" placeholder="Введите вашу эл. почту" />
                <div className="password-field">
                    <input type={showPassword ? 'text' : 'password'} className="input" placeholder="*********" />
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} role="img" aria-label="eye" className="eye-icon">👁️</span>
                    
                    <input type={showPassword ? 'text' : 'password'} className="input" placeholder="*********" />
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} role="img" aria-label="eye" className="eye-icon" >👁️</span>
                </div>
                <div className="flex">
                    <div className="remember">
                        <input type="checkbox" id="rembember-me" />
                        <label htmlFor="rembember-me" className="remember-me">
                            <p>
                            Вы согласны с нашими <b>Условиями обслуживания, Политикой компании и Настройками сайта по умолчанию</b>
                            </p>
                        </label>
                    </div>
                </div>
                <div className="submit-in">
                <button className="cancel">Отмена</button>
                <button className="submit">Регистарция</button>

                </div>
                <img src="./vkontakte.png" alt=""width={15}height={15} />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    )
}
export default RegistrForm;