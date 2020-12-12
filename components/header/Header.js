import React from 'react';
import { Link } from 'react-router-dom';

import "./header.scss"

function Header() {
    return (
        <header className="header">
            <h1>
                Noeline
            </h1>
            <div className="about">
                <nav className="navigation">   
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/design">Design</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contacts</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
