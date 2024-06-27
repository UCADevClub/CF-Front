import React from 'react';
import "./ContactHelp.css"

const ContactHelp = () => {
    return (
        <div className="help-contact">
            <div>
                <h3>Контакты</h3>
                <h1>Чем Мы Можем Вам Помочь?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, perferendis corporis. Voluptatibus quibusdam nesciunt maiores delectus, modi atque dicta sit quidem aut praesentium rem nostrum mollitia officia quas in asperiores?</p>
            </div>
            <div class="topics-contacthelp">
                <div className="option-contacthelp">
                    <button type="button" class="button-contacthelp">
                        <img src="./plus.png" alt="plus" />
                    </button>
                    <p className="names-contacthelp">Projects</p>
                </div>
                <hr class="hr-contacthelp" />
                <div className="option-contacthelp">
                    <button type="button" class="button-contacthelp">
                        <img src="./plus.png" alt="plus" />
                    </button>
                    <p className="names-contacthelp">Donate</p>
                </div>
                <hr class="hr-contacthelp" />
                <div className="option-contacthelp">
                    <button type="button" class="button-contacthelp">
                        <img src="./plus.png" alt="plus" />
                    </button>
                    <p className="names-contacthelp">Support</p>
                </div>
                <hr class="hr-contacthelp" />
            </div>
        </div>
    );
};

export default ContactHelp;