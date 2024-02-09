import React from 'react';
import {Header} from "../components/Header";
import {Container} from "react-bootstrap";
import WelcomeImage from "../components/WelcomeImage";
import HowItWorks from "../components/HowItWorks";
import {Services} from "../components/Services";
import Footer from "../components/Footer";

export const HomePage = () => {
    return <>
        <Header/>

        <Container className="image-overlay-container mt-5">
            <WelcomeImage/>
            <HowItWorks/>
            <Services/>
            <Footer/>
        </Container>

    </>;
};