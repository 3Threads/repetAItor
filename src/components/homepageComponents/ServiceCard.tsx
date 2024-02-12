// ServiceCard.tsx
import React, {useState} from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import CustomSwitch from "./CustomSwitch";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCircleXmark} from "@fortawesome/free-regular-svg-icons";

interface ServiceCardProps {
    name: string;
    description: string;
    offers: string[];
    lastIndex: number;
    price?: number;
    annualPrice?: number;
    monthlyButton?: React.ReactNode
    annuallyButton?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
                                                     name,
                                                     description,
                                                     offers,
                                                     lastIndex,
                                                     price,
                                                     annualPrice,
                                                     monthlyButton,
                                                     annuallyButton
                                                 }) => {
    const [checked, setChecked] = useState(false);

    return (
        <Card style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <Card.Body style={{display: 'flex', flexDirection: 'column', paddingBottom: '10px'}}>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text style={{marginBottom: '0'}}>
                    <ul style={{paddingLeft: '4px'}}>
                        {offers.map((offer, index) =>

                            <li key={index} style={{display: 'flex', alignItems: 'flex-start', paddingBottom: '16px'}}>
                                {index < lastIndex ? (
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        size={'lg'}
                                        color={'green'}
                                        style={{
                                            padding: '8px',
                                            paddingTop: '0px',
                                            display: 'flex',
                                            alignItems: 'flex-start'
                                        }}
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faCircleXmark}
                                        size={'lg'}
                                        color={'red'}
                                        style={{
                                            padding: '8px',
                                            paddingTop: '0px',
                                            display: 'flex',
                                            alignItems: 'flex-start'
                                        }}
                                    />
                                )
                                }
                                <div style={{alignSelf: 'flex-start', lineHeight: '22px'}}>
                                    {offer}
                                </div>
                            </li>
                        )}
                    </ul>
                </Card.Text>
                <Card.Text style={{marginTop: 'auto'}}>
                    {checked && (
                        <div style={{textAlign: "center", width: "100%"}}>
                            <h3 style={{ marginBottom: '20px'}}>${annualPrice}</h3>
                        </div>
                    )}

                    {!checked && price &&
                        <div style={{textAlign: "center", width: "100%"}}>
                            <h3 style={{ marginBottom: '20px'}}>${price}</h3>
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
