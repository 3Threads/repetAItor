import {Button, Col, Image, Row} from "react-bootstrap";
import aiphoto from "../../images/aiphoto5.png";
import React from "react";

export const WelcomeImage = () => {
    return <Row>
        <Col xs={6}>
            <Image
                src={aiphoto}
                alt="Homepage Image"
                className="homepage-image"
            />
        </Col>
        <Col xs={6}>
            <h2><b>პლატფორმის შესახებ</b></h2>
            <p style={{fontSize:'18px'}}>"რეპეტაიტორი" დაგეხმარება მოემზადო ეროვნული გამოცდებისთვის ხელოვნური ინტელექტის გამოყენებით. დაწერე შენთვის სასურველი ტესტი და მიიღე შეფასებები და რჩევები "AI"-სგან.</p>
            <Button variant="primary">გაიგე მეტი</Button>
        </Col>
    </Row>
}

export default WelcomeImage;