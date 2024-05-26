import React, { useState } from "react";
import './RegisterForm.css'


const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    return(
        <div className="form-wrapper-registrpage">
            <h2 className="title-registrpage title-1-registrpage">Добрый День!</h2>
            <h2 className="title-registrpage title-2-registrpage">Добро Пожаловать</h2>
            <div className="form-registrpage">
                <div className="name-surname-registr">
                    <input type="text" className="input-registrpage"placeholder="имя"/>
                    <input type="text"className="input-registrpage" placeholder="фамилия" />
                </div>
                <input type="text" className="input-registrpage" placeholder="Введите вашу эл. почту" />
                <div className="password-field-registrpage">
                    <input type={showPassword ? 'text' : 'password'} className="input-registrpage" placeholder="*********" />
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} role="img" aria-label="eye" className="eye-icon-loginpage">👁️</span>
                    <input type={showPassword ? 'text' : 'password'} className="input-registrpage" placeholder="*********" />
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} role="img" aria-label="eye" className="eye-icon-loginpage" >👁️</span>
                </div>
                <div className="flex-loginpage">
                    <div className="remember-registrpage">
                        <input type="checkbox" id="remember-me-registrpage" />
                        <label htmlFor="rembember-me" className="remember-me-registrpage">
                            <p>
                            Вы согласны с нашими <b>Условиями обслуживания, Политикой компании и Настройками сайта по умолчанию</b>
                            </p>
                        </label>
                    </div>
                </div>
                <div className="submit-in-registrpage">
                <button className="cancel-registrpage">Отмена</button>
                <button className="submit-registrpage">Регистрация</button>
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