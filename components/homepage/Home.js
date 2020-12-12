import React from 'react'
import Contact from '../contact/Contact'
import noeline from "../../assets/noeline.png";

function Home() {
    return (
        <main>
            <h3>
                <img src={noeline} alt="Noeline Marie" />
            </h3>
            <strong>Noeline Marie</strong>
            <span>Front-end developer</span>
            <p>
                Thinking ability will safeguard you.
            </p>
            <footer>
                <Contact />
            </footer>
        </main>
    )
}

export default Home
