// ServiceCard.tsx
import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';

interface ServiceCardProps {
    name: string;
    description: string;
    offers: string[];
    price?: number;
    annualPrice?: number;
    monthlyButton?: React.ReactNode
    annuallyButton?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({name, description, offers, price, annualPrice, monthlyButton, annuallyButton}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>
                    <ul>
                        {offers.map((offer, index) => <li key={index}>{offer}</li>)}
                    </ul>
                </Card.Text>
                <Row>
                    <Col xs={6}>
                        {price && <Card.Text>Price: ${price}</Card.Text>}
                        {price && monthlyButton}
                    </Col>
                    <Col xs={6}>
                        {annualPrice && <Card.Text>Annual Price: ${annualPrice}</Card.Text>}
                        {annualPrice && annuallyButton}
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    );
};

export default ServiceCard;
