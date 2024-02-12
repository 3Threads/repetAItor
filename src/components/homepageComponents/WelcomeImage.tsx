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
            <h2>Explore our products</h2>
            <p>Discover our latest offerings and find what you need.</p>
            <Button variant="primary">Shop Now</Button>
        </Col>
    </Row>
}

export default WelcomeImage;