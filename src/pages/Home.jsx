import React from "react";
import '../App.css'
import HeroSection from '../components/HeroSection.jsx';
import Cards from "../components/Cards.jsx";

function Home(){
    return(
        <>
            <HeroSection />
            <Cards />
        </>
    )
}

export default Home;