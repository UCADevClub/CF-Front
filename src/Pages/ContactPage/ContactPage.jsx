import React from 'react';
import ContactForm from '../../Components/Contact/ContactForm/ContactForm.jsx';
import ContactInfo from '../../Components/Contact/ContactInfo/ContactInfo.jsx';
import ContactHelp from '../../Components/Contact/ContactHelp/ContactHelp.jsx';
import './ContactPage.css'



const ContactPage = () => {
    return (
        <div className="contact-page">
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
        </div>
    );
};


export default ContactPage;