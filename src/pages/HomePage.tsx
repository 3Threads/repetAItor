import React from 'react';
import {Header} from "../components/commonComponents/Header";
import {Container} from "react-bootstrap";
import WelcomeImage from "../components/homepageComponents/WelcomeImage";
import HowItWorks from "../components/homepageComponents/HowItWorks";
import {Services} from "../components/homepageComponents/Services";
import Footer from "../components/commonComponents/Footer";

export const HomePage = () => {
    return <div style={{display: 'flex', flexDirection: 'column', minHeight: "100vh"}}>
        <Header/>

        <Container className="image-overlay-container mt-5">
            <WelcomeImage/>
            <HowItWorks/>
            <Services/>
        </Container>
        <Footer/>
    </div>;
};