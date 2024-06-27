import React from 'react';
import ContactForm from '../../Components/Contact/ContactForm/ContactForm.jsx';
import ContactInfo from '../../Components/Contact/ContactInfo/ContactInfo.jsx';
import ContactHelp from '../../Components/Contact/ContactHelp/ContactHelp.jsx';
import './ContactPage.css'
import NavbarMain from "../../Components/NavbarMain/NavbarMain";


const ContactPage = () => {
    return (
        <div className="contact-page">
            <NavbarMain />
            <div className="contact-page-content">
                <div className="contact-help-form">
                    <div className="contactpage-form">
                        <ContactForm />
                    </div>
                    <div className="contactpage-help">
                        <ContactHelp />
                    </div>
                </div>
                <div className="contact-info">
                    <ContactInfo />
                </div>
                <h2 className="logo-contactpage">KYRGYZ<span className="logo-crowd-contactpage">CROWD</span></h2>
            </div>
        </div>
    );
};


export default ContactPage;