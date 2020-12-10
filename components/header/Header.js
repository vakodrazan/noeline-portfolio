import React from 'react';
import noeline from "../../assets/noeline.png"

import "./header.scss"

function Header() {
    return (
        <header className="header">
            <h1>
                <img src={noeline} alt="Noeline Marie" />
            </h1>
            <div className="about">
                <nav className="navigation">   
                    <div className="description">
                        <strong>Noeline Marie</strong>
                        <span>Front-end developer</span>
                    </div>
                    <address className="contacts">
                        <a className="contact-list" href="mailto:noeline.onja@gmail.com">
                            <span>noeline.onja@gmail.com</span>
                        </a>
                        <a href="tel:+261345 142 810">
                            <span>(+261)345 142 810</span>
                        </a>
                    </address>
                </nav>
                <p>
                    I'm a fron end developer from Madagascar. I look forward to work with teams all over the world.
                </p>
            </div>
        </header>
    )
}

export default Header
