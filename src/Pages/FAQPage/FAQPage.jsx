import React from 'react';
import "./FAQPage.css";
import NavbarMain from "../../Components/NavbarMain/NavbarMain.jsx"

const Faq = () => {
    return (
        <div className="faq-page">
            <NavbarMain/>
            <div className="faq-name">
                <h1>
                    Frequently Asked Questions
                </h1>
            </div>
            <div className="faq-page-noname">
            <div className="lines-and-buttons">
                <div className="lines-question">
                    <div className="lines-faq">
                    <input type="text" className="textarea" value="ask any question" readOnly/>  
                    <button className="plus-button">
                        <img src="./plus.png" alt="" />
                    </button> 
                    </div>
                    <div className="lines-faq" >
                    <input type="text" className="textarea" value="ask any question" readOnly/>    
                    <button className="plus-button">
                        <img src="./plus.png" alt="" />
                    </button> 
                    </div>
                    <div className="lines-faq">
                    <input type="text" className="textarea" value="ask any question" readOnly/>    
                    <button className="plus-button">
                        <img src="./plus.png" alt=""/>
                    </button> 
                    </div>
                    <div className="lines-faq">
                    <input type="text" className="textarea" value="ask any question" readOnly/>   
                    <button className="plus-button">
                        <img src="./plus.png" alt="" />
                    </button> 
                    </div>
                    <div className="lines-faq">
                    <input type="text" className="textarea" value="ask any question" readOnly/>    
                    <button className="plus-button">
                        <img src="./plus.png" alt="" />
                    </button> 
                    </div>
                    <div className="lines-faq">
                    <input type="text" className="textarea" value="ask any question" readOnly/>    
                    <button className="plus-button">
                        <img src="./plus.png" alt="" />
                    </button> 
                    </div>
                </div>  
                <div className="right-left-buttons">
                    <button className="right-left">
                        <img src="./Left.png" alt="" />
                    </button>
                    <button className="right-left">
                        <img src="./Right1.png" alt="" />
                    </button>
                </div>  
            <div>
                </div>            
            </div>
             
            <div className="questions-submit">
                <div>
                    <img src="./People_questions.png" alt="" className="img-people" />
                </div>
                <div className="any-question">
                <div>
                    <div>
                        <h3>
                            Any Questions?
                        </h3>
                    </div>
                    <div>
                        <p className="p-1">
                        You can ask anything you want to know about Feedback
                        </p>
                    </div>
                </div>
                <div>
                    <p className="p-2">
                        Let me know:
                    </p>
                    <input type="text" className="comment-question"/>
                </div>
                <div className="submit-button-div">
                    <button type="submit" className="submit-button-faq">Отправить</button>
                </div>
                </div>
            </div>
            </div>
            <h2 className="logo-faqpage">KYRGYZ<span className="logo-crowd-homepage">CROWD</span></h2>
        </div>
    );
};

export default Faq;