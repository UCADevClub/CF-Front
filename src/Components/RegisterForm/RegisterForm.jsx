import React, { useState } from "react";
import './RegisterForm.css'

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="form-wrapper1">
            <h2 className="title1">Добрый День!</h2>
            <h2 className="title-2">Добро Пожаловать</h2>
            <div className="form1">
                <div className="name-surname1">
                    <input type="text" className="input1" placeholder="Имя" />
                    <input type="text" className="input1" placeholder="Фамилия" />
                </div>
                <input type="text" className="input1 full-width" placeholder="Введите вашу эл. почту" />
                <div className="password-field1">
                    <input type={showPassword ? 'text' : 'password'} className="input1 full-width" placeholder="Пароль" />
                    <span onClick={togglePasswordVisibility} className="eye-icon1" role="img" aria-label="eye"><img src="./eye.png" alt="eye-icon" /></span>
                </div>
                <div className="password-field1">
                    <input type={showPassword ? 'text' : 'password'} className="input1 full-width" placeholder="Повторите пароль" />
                    <span onClick={togglePasswordVisibility} className="eye-icon1" role="img" aria-label="eye"><img src="./eye.png" alt="eye-icon" /></span>
                </div>
                <div className="flex1">
                    <div className="remember1">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me" className="remember-me1">
                            <p>Вы согласны с нашими <b>Условиями обслуживания, Политикой компании и Настройками сайта по умолчанию</b></p>
                        </label>
                    </div>
                </div>
                <div className="submit-in1">
                    <button className="cancel1">Отмена</button>
                    <button className="submit1">Регистрация</button>
                </div>
                <div className="images-container1">
                    <img src="./vkontakte1.png" alt="vk-icon" width={20} height={20} />
                    <img src="./facebook1.png" alt="facebook-icon" width={20} height={20} />
                    <img src="./twitter1.png" alt="twitter-icon" width={20} height={20} />
                    <img src="./google1.png" alt="google-icon" width={20} height={20} />
                    <img src="./insta1.png" alt="insta-icon" width={20} height={20} />
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;