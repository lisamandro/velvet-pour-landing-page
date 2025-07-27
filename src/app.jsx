import React from 'react'
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import {gsap} from "gsap";
import Hero from "./components/hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <div className={"h-dvh bg-black"}></div>
        </main>
    )
}
export default App
