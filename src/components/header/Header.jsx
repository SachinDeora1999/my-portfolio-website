import React from 'react'
import "./header.css";
import CTA from './CTA';
import ME from "../../assets/jayson-hinrichsen-Lt6GerKg4bw-unsplash.jpg";
import HeaderSocials from './HeaderSocials';



const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I 'm</h5>
                <h1>Sachin Deora</h1>
                <h5 className="text-light">Fullstack Debeloper</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="me-image" />
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>

            </div>
        </header>
    )
}

export default Header
