import React, { useState } from "react";
import "./LoginForm.css";
// import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="form-wrapper-loginpage">
            <h2 className="title-loginpage title-1-loginpage">Добрый День!</h2>
            <h2 className="title-loginpage title-2-loginpage">Добро Пожаловать</h2>
            <div className="form-loginpage">
                <input type="text" className="input-loginpage" placeholder="Введите вашу эл. почту" />
                <div className="password-field-loginpage">
                    <input type={showPassword ? 'text' : 'password'} className="input-loginpage" placeholder="*********" />
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} role="img" aria-label="eye" className="eye-icon-loginpage">👁️</span>
                </div>
                <div className="flex-loginpage">
                    <div>
                        <input type="checkbox" id="remember-me-loginpage" />
                        <label htmlFor="forgotPassword" className="remember-me-loginpage">Запомнить Меня</label>
                    </div>
                    <div className="forgot-loginpage">
                        <a href="" className="forgot-password-loginpage">
                            <p>Забыли пароль?</p>
                        </a>
                    </div>
                </div>
                <button className="submit-in-loginpage">Войти</button>
                <div className="divider-loginpage">
                    <hr />
                    <p>войти через</p>
                    <hr />
                </div>
                <button className="submit-google-loginpage">
                    <span>Google</span>
                    <img src="./googleicon.png" alt="google-icon" className="google-icon-loginpage" />
                </button>
                <div className="registration-loginpage">
                    <a href="" className="registration-1-loginpage">
                        <p>Нет аккаунта?</p>
                    </a>
                    <a href="" className="registration-2-loginpage">
                        <p>Зарегистрироваться</p>
                    </a>
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

export default LoginForm;
