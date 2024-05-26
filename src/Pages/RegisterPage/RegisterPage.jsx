import React from 'react';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';
import NavbarLogin from '../../Components/NavbarLogin/NavbarLogin';
import './RegisterPage.css'

const RegisterPage = () => {
    return (
        <div className="body-registr">
            <NavbarLogin/>
            <div className="register-page">
            <img src="./rain-bow.png" alt="rainbow" className="img-1-registr" />
               <div className="img-registr"> <img src="./registr-hand.png" alt="" width={'860px'} height={'530px'}/></div>
               <div className="register"><RegisterForm/></div>
            </div>
        </div>
    );
};

export default RegisterPage;