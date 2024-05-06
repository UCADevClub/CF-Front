import React, { useState } from "react";
import './RegisterForm.css'


const RegistrForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    return(
        <div className="form-wrapper1">
            <h2 className="title title-1">Добрый День!</h2>
            <h2 className="title title-2">Добро Пожаловать</h2>
            <div className="form1">
                <div className="name-surname1">
                    <input type="text1" className="input1"placeholder="имя"/>
                    <input type="text1"className="input1" placeholder="фамилия" />
                </div>
                <input type="text1" className="input1" placeholder="Введите вашу эл. почту" />
                <div className="password-field1">
                    <input type={showPassword ? 'text' : 'password'} className="input1" placeholder="*********" />
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} role="img" aria-label="eye" className="eye-icon">👁️</span>
                    
                    <input type={showPassword ? 'text' : 'password'} className="input1" placeholder="*********" />
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} role="img" aria-label="eye" className="eye-icon" >👁️</span>
                </div>
                <div className="flex1">
                    <div className="remember1">
                        <input type="checkbox" id="rembember-me" />
                        <label htmlFor="rembember-me" className="remember-me1">
                            <p>
                            Вы согласны с нашими <b>Условиями обслуживания, Политикой компании и Настройками сайта по умолчанию</b>
                            </p>
                        </label>
                    </div>
                </div>
                <div className="submit-in1">
                <button className="cancel1">Отмена</button>
                <button className="submit1">Регистарция</button>

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