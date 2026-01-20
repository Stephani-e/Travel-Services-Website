import React, { useState } from "react";
import '../App.css'
import { Button } from "./Button";
import './styles/HeroSection.css'
import { motion as Motion } from 'framer-motion'

function HeroSection() {

    const [isLoading, setIsLoading] = useState(false);

    const handleGetStartedClick = () => {
        setIsLoading(true);
        // Simulate async operation (like API call)
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="Hero-Container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <Motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                ADVENTURE AWAITS
            </Motion.h1>
            <Motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                What Are You Waiting For?
            </Motion.p>
            <Motion.div className="hero-btns"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >

                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={handleGetStartedClick} loading={isLoading} >GET STARTED</Button>

                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={handleGetStartedClick} loading={isLoading} >WATCH TRAILER <i className="fa fa-play-circle"></i> </Button>

            </Motion.div>
        </div>
    )
}

export default HeroSection