// ServiceCard.tsx
import React, {useState} from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import CustomSwitch from "./CustomSwitch";

interface ServiceCardProps {
    name: string;
    description: string;
    offers: string[];
    price?: number;
    annualPrice?: number;
    monthlyButton?: React.ReactNode
    annuallyButton?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
                                                     name,
                                                     description,
                                                     offers,
                                                     price,
                                                     annualPrice,
                                                     monthlyButton,
                                                     annuallyButton
                                                 }) => {
    const [checked, setChecked] = useState(false);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>
                    <ul>
                        {offers.map((offer, index) => <li key={index}>{offer}</li>)}
                    </ul>
                    {checked && (
                        <div style={{textAlign: "center", width: "100%"}}>
                            <h3>${annualPrice}/annually</h3>
                        </div>
                    )}

                    {!checked && price &&
                        <div style={{textAlign: "center", width: "100%"}}>
                            <h3>${price}/monthly</h3>
                        </div>}
                    {price && annualPrice && <CustomSwitch checked={checked} setChecked={setChecked}/>}

                    {checked && <div>
                        {annuallyButton}
                    </div>}
                    {!checked && price &&
                        <div>
                            {monthlyButton}
                        </div>}
                </Card.Text>


            </Card.Body>
        </Card>
    );
};

export default ServiceCard;
