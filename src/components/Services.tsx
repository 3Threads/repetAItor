import React from "react";
import ServiceCard from "./ServiceCard";
import {Col, Row} from "react-bootstrap";

export const Services = () => {
    const handleSubscribe = (service: string) => {
        // Handle subscription logic here
        console.log(`Subscribed to ${service}`);
    };

    return (
        <div className={"pb-4"}>
            <h1>Our Services</h1>
            <Row>
                <Col sm={4} xs={12} className={"py-1"}>
                    <ServiceCard
                        name="Daily Subscription"
                        description="Get access to our services on a daily basis."
                        price={1}
                        onClickSubscribe={() => handleSubscribe('Daily')}
                    />
                </Col>
                <Col sm={4} xs={12} className={"py-1"}>
                    <ServiceCard
                        name="Monthly Subscription"
                        description="Get access to our services on a monthly basis."
                        price={10}
                        onClickSubscribe={() => handleSubscribe('Monthly')}
                    />
                </Col>
                <Col sm={4} xs={12} className={"py-1"}>
                    <ServiceCard
                        name="Annual Subscription"
                        description="Get access to our services on an annual basis."
                        price={100}
                        onClickSubscribe={() => handleSubscribe('Annual')}
                    />
                </Col>
            </Row>
        </div>
    )
}