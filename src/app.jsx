import React from 'react'
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import {gsap} from "gsap";
import Hero from "./components/hero.jsx";
import Cocktails from "./components/cocktails.jsx";
import About from "./components/about.jsx";
import Art from "./components/art.jsx";
import Menu from "./components/menu.jsx";
import Contact from "./components/contact.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
            <Art />
            <Menu />
            <Contact />
        </main>
    )
}
export default App
