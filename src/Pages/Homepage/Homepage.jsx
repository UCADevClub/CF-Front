import React from "react";
import "./Homepage.css";
import NavbarMain from "../../Components/NavbarMain/NavbarMain";

function Homepage() {
    return (<div className="homepage">
        <NavbarMain />
        <div className="content-homepage">
            <div className="text-homepage">
                <h1 className="title-homepage">Инвестируй В Будущее</h1>
                <p className="description-homepage">Более 1000 проектов наших сограждан, которые нуждаются в твоей поддержке</p>
                <div className="buttons-homepage">
                    <a href="invest" className="button-invest-homepage">Инвестировать</a>
                    <a href="projects" className="button-projects-homepage">Проекты</a>
                </div>
                <div className="examples-homepage">
                    <div className="statistics-homepage">
                        <h3 className="number-homepage">500+</h3>
                        <p className="descriptor-homepage">Вложившихся Инвесторов</p>
                    </div>
                    <div className="divider-homepage"></div>
                    <div className="statistics-homepage">
                        <h3 className="number-homepage">1000+</h3>
                        <p className="descriptor-homepage">Проектов</p>
                    </div>
                    <div className="divider-homepage"></div>
                    <div className="statistics-homepage">
                        <h3 className="number-homepage">100+</h3>
                        <p className="descriptor-homepage">Реализованных Проектов</p>
                    </div>
                </div>
                <h2 className="logo-homepage">KYRGYZ<span className="logo-crowd-homepage">CROWD</span></h2>
            </div>
            <div className="decoration-homepage">
                <div className="circle-2-homepage"></div>
                <div className="circle-3-homepage"></div>
                <div className="circle-4-homepage"></div>
                <img className="image-homepage" src="people_image.png" alt="People celebrating"/>
                <div className="circle-1-homepage"></div>
            </div>
        </div>
    </div>)
}

export default Homepage