import React from "react";
import "./AboutPage.css";
import NavbarMain from "../../Components/NavbarMain/NavbarMain";

function AboutPage() {
    return (<div className="aboutpage">
        <NavbarMain />
        <div className="content-aboutpage">
            <div className="section-1-aboutpage">
                <div className="text-1-aboutpage">
                    <h1 className="title-aboutpage">Наша Команда</h1>
                    <p className="description-aboutpage">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="description-aboutpage">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="circle-1-aboutpage"></div>
            </div>
            <div className="section-2-aboutpage">
                <img className="image-1-aboutpage" src="colleagues-giving-fist-bump-scaled 1.png" alt="group fistbump"/>
            </div>
            <div className="section-3-aboutpage">
                <div className="text-2-aboutpage">
                    <h1 className="hook-1-aboutpage">“</h1>
                    <h2 className="quote-aboutpage">Наша работа заключается в том, чтобы мы развивали проекты наших сограждан</h2>
                    <div className="sign-and-hook-aboutpage">
                        <p className="signature-aboutpage">Дженифер Краус, Директор</p>
                        <h1 className="hook-2-aboutpage">”</h1>
                    </div>
                </div>
                <img className="portrait-1-aboutpage" src="S-chego-nachat-v-professii-dizajnera 1.png" alt="portrait"/>
            </div>
            <div className="section-4-aboutpage">
                <div className="decoration-aboutpage">
                    <img className="portrait-2-aboutpage" src="IMG_4664 1.png" alt="portrait"/>
                    <img className="portrait-3-aboutpage" src="16a 1.png" alt="portrait"/>
                    <img className="portrait-4-aboutpage" src="IMG_4763 1.png" alt="portrait"/>
                    <div className="circle-2-aboutpage"></div>
                </div>
                <div className="text-3-aboutpage">
                    <h1 className="title-aboutpage">Члены Команды</h1>
                    <p className="description-aboutpage">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="description-aboutpage">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </div>)
}

export default AboutPage