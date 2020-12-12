import React from 'react'

function Contact() {
    return (
        <div>
            <address className="contacts">
                <li>
                    <a className="contact-list" href="mailto:noeline.onja@gmail.com">
                        <span>noeline.onja@gmail.com</span>
                    </a>
                </li>
                <li>
                    <a href="tel:+261345 142 810">
                        <span>(+261)345 142 810</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/noeline.amelia.1">
                        Facebook
                    </a>
                </li>
                <li>
                    <a href="https://github.com/vakodrazan">
                        Github
                    </a>
                </li>
            </address>
        </div>
    )
}

export default Contact
