import {Card, Col, Row} from "react-bootstrap";
import aiphoto from "../../images/aiphoto.jpg";
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faPenToSquare} from '@fortawesome/free-regular-svg-icons';
import {faCheckDouble} from '@fortawesome/free-solid-svg-icons';


export const HowItWorks = () => {
    return (
        <div className={"py-5"}>
            <h2 className="text-center mb-4">როგორ მუშაობს?</h2>
            <Row className="justify-content-center">
                {[
                    {
                        icon: faAddressCard,
                        title: "ნაბიჯი 1",
                        text: "გაიარე რეგისტრაცია"
                    },
                    {
                        icon: faBriefcase,
                        title: "ნაბიჯი 2",
                        text: "აირჩიე შენთვის სასურველი სერვისი"
                    },
                    {
                        icon: faPenToSquare,
                        title: "ნაბიჯი 3",
                        text: "დაწერე ეროვნული გამოცდების ანალოგი ტესტი"
                    },
                    {
                        icon: faCheckDouble,
                        title: "ნაბიჯი 4",
                        text: "გაეცანი შეფასებას, მიიღე რჩევები და განვითარდი"
                    }
                ].map((step, index) => (
                    <Col key={index} xs={12} sm={6} lg={3} style={{display: 'flex'}}>
                        <Card className="shadow mb-4" style={{flex: 1}}>
                            <FontAwesomeIcon icon={step.icon}  size={'6x'} style={{paddingTop: '20px'}}/>
                            <Card.Body>
                                <Card.Title className="text-center">{step.title}</Card.Title>
                                <Card.Text className="text-center">{step.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default HowItWorks;
