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
                    <div className="icon icon-twitter"></div>
                    <div className="icon icon-instagram"></div>
                    <div className="icon icon-github"></div>
                    <div className="icon icon-linkedin-square"></div>
                </div>

            </div>
            <div className="animation">
                <Lottie lottieRef={lottieRef} onLoadedImages={()=>{
                    lottieRef.current.setSpeed(0.5)
                }} className="icon" animationData={devAnimation} />
            </div>
        </section>
    )
}
export default Hero;