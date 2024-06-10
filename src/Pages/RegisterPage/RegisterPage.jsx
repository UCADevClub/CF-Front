import React from 'react';
import RegisterForm from '../../Components/RegisterForm/RegisterForm.jsx';
import NavbarLogin from '../../Components/NavbarLogin/NavbarLogin.jsx';
import './RegisterPage.css'

const RegistrPage = () => {
    return (
        <div className="body">
            <NavbarLogin/>
            <div className="register-page">
            <img src="./rain-bow.png" alt="rainbow" className="img-1" />
               <div className="img"> <img src="./Hand-register.png" alt="" width={'400px'} height={'531px'}/></div>
               <div className="register1"><RegisterForm/></div>
            </div>
        </div>
    );
};

export default RegistrPage;