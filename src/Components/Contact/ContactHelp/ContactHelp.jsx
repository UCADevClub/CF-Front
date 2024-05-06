import React from 'react';
import "./ContactHelp.css"

const ContactHelp = () => {
    return (
        <div className="help-contact1">
            <div>
                <h3>
                    Контакты
                </h3>
                <h1>
                    Чем Мы Можем Вам Помочь?
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, perferendis corporis. Voluptatibus quibusdam nesciunt maiores delectus, modi atque dicta sit quidem aut praesentium rem nostrum mollitia officia quas in asperiores?
                    
                </p>
            </div>
            <div>
                <div className="option">
                    <button type="button">
                        <img src="./plus.png" alt="plus" />
                    </button>
                    <span className="names1">Projects</span>
                </div>
                <hr style={{ width: '60%', margin: '0 10px' }} />
                <div className="option">
                <button type="button">
                        <img src="./plus.png" alt="plus" />
                    </button>
                    <span className="names1">Donate</span>
                </div>
                <hr style={{ width: '60%', margin: '0 10px' }} />
                <div className="option">
                <button type="button">
                        <img src="./plus.png" alt="plus" />
                    </button>
                    <span className="names1">Support</span>
                </div>
                <hr style={{ width: '60%', margin: '0 10px' }} />
            </div>
        </div>
    );
};

export default ContactHelp;