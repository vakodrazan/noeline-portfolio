import React from 'react';
import noeline from "../../assets/noeline.png";
import Footer from '../footer/Footer';

function Home() {
    return (
        <main>
            <h3>
                <img src={noeline} alt="Noeline Marie" />
            </h3>
            <div>
                <strong>Noeline Marie</strong>
                <span>Front-end developer</span>
            </div>
            <p>
                Thinking ability will safeguard you.
            </p>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}

export default Home
