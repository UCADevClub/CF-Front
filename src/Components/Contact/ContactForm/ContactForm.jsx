import React from 'react';
import "./ContactForm.css";

const ContactForm = () => {
    return (
        <div className="form-contact">
            <div className="form-wrap">
            <div className="name-surname">
            <div className="firstName">
                <label htmlFor="firstName" className="names">Имя</label>
                <input type="text" id="firstName" name="firstName" className="input"/>
            </div>
            <div className="lastName">
                <label htmlFor="lastName"className="names">Фамилия</label>
                <input type="text" id="lastName" name="lastname" className="input" />
            </div>
            </div>
            <div className="email">
                <label htmlFor="email" className="names">Email</label>
                <input type="email" id="email" name="email" className="input" />
            </div>
            <div className="subject">
                <label htmlFor="subject" className="names">Тема</label>
                <select name="subject" id="subject" className="input">
                    <option value="none">Выбрать</option>
                    <option value="option1">Голод</option>
                    <option value="option2">Болезнь</option>
                    <option value="option3">Бедность</option>
                    <option value="option4">Проекты</option>
                </select>
            </div>
            <div className="help">
                <label htmlFor="help" className="names">Как я могу вам помочь?</label>
                <textarea id="help" name="help" className="input"></textarea>
            </div>
            <div>
                <input type="submit" className="submit" value="Отправить" />
            </div>
        </div>
        </div>
    );
};

export default ContactForm;