import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Design from './components/design.js/Design'
import Header from './components/header/Header'
import Home from './components/homepage/Home'

function App() {
    return (
        <div>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/design">
                    <Design />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </div>
    )
}

export default App
