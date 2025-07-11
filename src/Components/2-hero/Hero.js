import "./Hero.css";
import devAnimation from "../../animation/dev.json";
import Lottie from "lottie-react";
import { useRef } from "react";
import { motion } from "framer-motion";

function Hero(){
    const lottieRef = useRef()
    return(
        <section className="d-flex hero">
            <div className="left-section">
                <div className="d-flex aprent-avatar">
                    <motion.img
                    initial={{transform: 'scale(0)'}}
                    animate={{transform: 'scale(1.1)'}}
                    transition={{damping: 7, type: 'spring', stiffness: 100}}
                    className="avatar" src="/YahyaSaad.png" alt="YahyaSaad" />
                    <div className="icon-verified"/>
                </div>

                <motion.h1
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 2}}
                className="title">
                    Front-End Developer
                </motion.h1>
                <p className="sub-title">Front-End Developer with strong experience in React, building dynamic, responsive interfaces with high design accuracy. I turn Figma concepts into engaging, user-friendly web apps. Passionate about UI precision, seamless interactions, and delivering polished experiences.</p>

                <div className="d-flex all-icons">
                    <a className="icon" href="https://x.com/Ya7yaSaad?" target="_blank" rel="noopener noreferrer">
                        <div className="icon icon-twitter"></div>
                    </a>
                    <a className="icon" href="https://www.instagram.com/yahyasaad0" target="_blank" rel="noopener noreferrer">
                        <div className="icon icon-instagram"></div>
                    </a>
                    <a className="icon" href="https://github.com/YahyaSaad1" target="_blank" rel="noopener noreferrer">
                        <div className="icon icon-github"></div>
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/yahyasaad1" target="_blank" rel="noopener noreferrer">
                        <div className="icon icon-linkedin-square"></div>
                    </a>
                </div>

            </div>
            <div className="animation">
                <Lottie className="icon-dev" lottieRef={lottieRef} onLoadedImages={()=>{
                    lottieRef.current.setSpeed(0.5)
                }} animationData={devAnimation} />
            </div>
        </section>
    )
}
export default Hero;