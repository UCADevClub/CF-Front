import React from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import Navbar from '../../Components/Navbar/Navbar';
import "./LoginPage.css"
const LoginPage = () => {
    
    return (
        <div className='body'>
            <Navbar/>
            <div className='login-page-hero'>
                <img src="./rain-bow.png" alt="rainbow" className="img-1" />
                <div className='img'><img src="./Hand.png" alt="Hand" width={'860px'} height={'530px'}/></div>
                <div className='login'><LoginForm/></div>

            </div>                              
        </div>
        
    );
};

export default LoginPage;