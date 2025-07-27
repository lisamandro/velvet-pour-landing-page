import React from 'react'
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import {gsap} from "gsap";
import Hero from "./components/hero.jsx";
import Cocktails from "./components/cocktails.jsx";
import About from "./components/about.jsx";
import Art from "./components/art.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
            <Art />
        </main>
    )
}
export default App
