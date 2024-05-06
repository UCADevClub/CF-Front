import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className="information">
            <div className="Location">
                <figure className="figure-info">
                    <img src="./location-sign 1.png" alt="Location"/>
                    <figcaption className="names-info">UCA</figcaption>
                    <figcaption>Naryn c., Lenin 310</figcaption>
                </figure>
            </div>
            <div className="Email-Address">
                <figure className="figure-info">
                    <img src="./mail 1.png" alt="Email Address" />
                    <figcaption className="names-info">Email</figcaption>
                    <figcaption>viinn2002@gmail.com </figcaption>
                </figure>
            </div>
            <div className="Phone-Number">
                <figure className="figure-info">
                    <img src="./phone-handset 1.png" alt="Phone Number" />
                    <figcaption className="names-info">Phone</figcaption>
                    <figcaption>
                    +996 500 355 100
                    </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default ContactInfo;