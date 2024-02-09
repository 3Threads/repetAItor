// ServiceCard.tsx
import React from 'react';
import {Card, Button} from 'react-bootstrap';

interface ServiceCardProps {
    name: string;
    description: string;
    price: number;
    onClickSubscribe: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({name, description, price, onClickSubscribe}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>Price: ${price}</Card.Text>
                <Button onClick={onClickSubscribe}>Subscribe</Button>
            </Card.Body>
        </Card>
    );
};

export default ServiceCard;
