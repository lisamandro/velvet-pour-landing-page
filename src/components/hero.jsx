import {useGSAP} from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import {useMediaQuery} from "react-responsive";
import { useRef } from "react";




const Hero = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(()=>{
        const heroSplit = new SplitText('.title',{ type: 'chars, words' }); //Word by word animation
        const paragraphSplit = new SplitText('.subtitle',{ type: 'lines' }); //Line by line animation

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
        });

        gsap.from(paragraphSplit.lines, {
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay:1,
        });

        gsap.timeline({
            scrollTrigger:{
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        })
            .to('.right-leaf', { y:200 }, 0) //Top leaf moves up as we scroll
            .to('.left-leaf', { y:-200 }, 0) //Bottom leaf moves down as we scroll

        const startValue = isMobile? 'top 50%' :  'center 60%';
        const endValue =isMobile? '120% top' : 'bottom top';

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true, //Allows video to be played on scroll
                pin: true, // Keeps video pinned on screen as you scroll
            },
        });

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            });
        };
    },[]);

    return (
        <>
        <section id="hero" className={"noisy"}>
            <h1 className={"title"}>MOJITOS</h1>

            <img
                src="/images/hero-left-leaf.png"
                alt='left-leaf'
                className={"left-leaf"}
            />

            <img
                src="/images/hero-right-leaf.png"
                alt='right-leaf'
                className={"right-leaf"}
            />

            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic.</p>
                        <p className="subtitle">Sip the Spirit <br /> of Summer</p>
                    </div>

                    <div className={"view-cocktails"}>
                        <p className={"subtitle"}>
                            Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
                        </p>
                        <a href={'#cocktails'}>View Cocktails</a>
                    </div>
                </div>
            </div>
        </section>

        <div className="video absolute inset-0">
            <video
                ref={videoRef}
                src="/videos/output.mp4"
                muted
                playsInline
                preload={"auto"}
            />
        </div>
            </>
    );
};
export default Hero
