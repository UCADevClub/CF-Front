import React, { useState } from "react";
// import './RegisterForm.css'


const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    return(
        <div className="form-wrapper-loginpage">
            <h2 className="title-loginpage title-1-loginpage">Добрый День!</h2>
            <h2 className="title-loginpage title-2-loginpage">Добро Пожаловать</h2>
            <div className="form-loginpage">
                <div className="name-surname">
                    <input type="text" className="input-loginpage"placeholder="имя"/>
                    <input type="text"className="input-loginpage" placeholder="фамилия" />
                </div>
                <input type="text" className="input-loginpage" placeholder="Введите вашу эл. почту" />
                <div className="password-field-loginpage">
                    <input type={showPassword ? 'text' : 'password'} className="input-loginpage" placeholder="*********" />
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} role="img" aria-label="eye" className="eye-icon-loginpage">👁️</span>
                    <input type={showPassword ? 'text' : 'password'} className="input-loginpage" placeholder="*********" />
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} role="img" aria-label="eye" className="eye-icon-loginpage" >👁️</span>
                </div>
                <div className="flex-loginpage">
                    <div className="remember-loginpage">
                        <input type="checkbox" id="remember-me-loginpage" />
                        <label htmlFor="rembember-me" className="remember-me-loginpage">
                            <p>
                            Вы согласны с нашими <b>Условиями обслуживания, Политикой компании и Настройками сайта по умолчанию</b>
                            </p>
                        </label>
                    </div>
                </div>
                <div className="submit-in-loginpage">
                <button className="cancel-loginpage">Отмена</button>
                <button className="submit-loginpage">Регистрация</button>
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
export default RegisterForm;