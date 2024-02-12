import React from "react";
import ServiceCard from "./ServiceCard";
import {Button, Col, Row} from "react-bootstrap";

export const Services = () => {
    const handleSubscribe = (service: string) => {
        // Handle subscription logic here
        console.log(`Subscribed to ${service}`);
    };

    return (
        <div className={"pb-4"}>
            <h1>Our Services</h1>
            <Row>
                <Col sm={12} xs={12} lg={4} className={"py-1"}>
                    <ServiceCard
                        name="Free"
                        description="Get access to our services on a daily basis."
                        offers={['Offer 1', 'Offer 2']}
                    />
                </Col>
                <Col sm={12} xs={12} lg={4} className={"py-1"}>
                    <ServiceCard
                        name="Premium"
                        description="Get access to our services on a monthly basis."
                        offers={['Offer 1', 'Offer 2']}
                        price={10}
                        annualPrice={50}
                        monthlyButton={<Button className={'btn-sign-in'} style={{height: 'auto'}}
                                               onClick={() => handleSubscribe('Free')}>Subscribe</Button>}
                        annuallyButton={<Button className={'btn-sign-in'} style={{height: 'auto'}}
                                                onClick={() => handleSubscribe('Free annually')}>Subscribe</Button>}
                    />
                </Col>
                <Col sm={12} xs={12} lg={4} className={"py-1"}>
                    <ServiceCard
                        name="Ultimate"
                        description="Get access to our services on an annual basis."
                        offers={['Offer 1', 'Offer 2']}
                        price={10}
                        annualPrice={50}
                        monthlyButton={<Button className={'btn-sign-in'} style={{height: 'auto'}}
                                               onClick={() => handleSubscribe('Free')}>Subscribe</Button>}
                        annuallyButton={<Button className={'btn-sign-in'} style={{height: 'auto'}}
                                                onClick={() => handleSubscribe('Free annually')}>Subscribe</Button>}
                    />
                </Col>
            </Row>
        </div>
    )
}