import { Card, Col, Row } from "react-bootstrap";
import aiphoto from "../../images/aiphoto.jpg";
import React from "react";

export const HowItWorks = () => {
    return (
        <div className={"py-5"}>
            <h2 className="text-center mb-4">How It Works</h2>
            <h5>Our AI will help you:</h5>
            <Row className="justify-content-center">
                <Col xs={12} sm={6} lg={3}>
                    <Card className="shadow mb-4">
                        <Card.Img variant="top" src={aiphoto} />
                        <Card.Body>
                            <Card.Title className="text-center">Step 1</Card.Title>
                            <Card.Text className="text-center">
                                Sign up for an account
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={3}>
                    <Card className="shadow mb-4">
                        <Card.Img variant="top" src={aiphoto} />
                        <Card.Body>
                            <Card.Title className="text-center">Step 2</Card.Title>
                            <Card.Text className="text-center">
                                Explore our features
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={3}>
                    <Card className="shadow mb-4">
                        <Card.Img variant="top" src={aiphoto} />
                        <Card.Body>
                            <Card.Title className="text-center">Step 3</Card.Title>
                            <Card.Text className="text-center">
                                Start using our platform
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={3}>
                    <Card className="shadow mb-4">
                        <Card.Img variant="top" src={aiphoto} />
                        <Card.Body>
                            <Card.Title className="text-center">Step 4</Card.Title>
                            <Card.Text className="text-center">
                                Start using our platform
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default HowItWorks;
