import React from 'react';
import "./footer.scss"

function Footer() {
    return (
        <footer>
            <address className="contacts">
                <a className="mail" href="mailto:noeline.onja@gmail.com" target="_blank">
                    <i className="ri-mail-line"></i>
                </a>
                <a href="tel:+261345 142 810">
                    <i className="ri-contacts-line"></i>
                </a>
                <a className="facebook" href="https://www.facebook.com/noeline.amelia.1" target="_blank">
                    <i className="ri-facebook-circle-fill"></i>
                </a>
                <a href="https://github.com/vakodrazan" target="_blank">
                    <i className="ri-github-fill"></i>
                </a>
            </address>
        </footer>
    )
}

export default Footer
