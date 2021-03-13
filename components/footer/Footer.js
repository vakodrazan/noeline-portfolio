import React from 'react';
import "./footer.scss"

function Footer() {
    return (
        <footer>
            <ul className="contacts">
                <li>
                    <a className="mail" href="mailto:noeline.onja@gmail.com" target="_blank">
                        Email
                    </a>
                </li>
                <li>
                    <a href="tel:+261345142810">
                        Call
                    </a>
                </li>
                <li>
                    <a className="facebook" href="https://www.facebook.com/noeline.amelia.1" target="_blank">
                        Facebook
                    </a>
                </li>
                <li>
                    <a href="https://github.com/vakodrazan" target="_blank">
                        Github
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
