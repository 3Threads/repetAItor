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
            <h1>სერვისები</h1>
            <Row>
                <Col sm={12} xs={12} lg={4} className={"py-1"}>
                    <ServiceCard
                        name="უფასო"
                        description=""
                        lastIndex={2}
                        offers={
                            [
                                'წვდომა ყველა საგნის ტესტზე',
                                'ტესტური პასუხების შეფასება',
                                'წერილობითი პასუხების შეფასება (AI)',
                                'რჩევების მიღება წერილობითი დავალების უკეთ შესასრულებლად',
                                'რჩევების მიღება ცოდნის გასაღრმავებლად',
                                'წვდომა დამატებით სავარჯიშოებზე',
                            ]
                        }
                    />
                </Col>
                <Col sm={12} xs={12} lg={4} className={"py-1"}>
                    <ServiceCard
                        name="პრემიუმი"
                        description=""
                        offers={
                            [
                                'წვდომა ყველა საგნის ტესტზე',
                                'ტესტური პასუხების შეფასება',
                                'წერილობითი პასუხების შეფასება (AI)',
                                'რჩევების მიღება წერილობითი დავალების უკეთ შესასრულებლად',
                                'რჩევების მიღება ცოდნის გასაღრმავებლად',
                                'წვდომა დამატებით სავარჯიშოებზე',
                            ]
                        }
                        lastIndex={3}
                        price={10}
                        annualPrice={50}
                        monthlyButton=
                            {
                                <Button
                                    className={'btn-sign-in'}
                                    style={{
                                        height: 'auto',
                                        width: '100%',
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    }}
                                    onClick={() => handleSubscribe('Free')}
                                >
                                    Subscribe
                                </Button>
                            }
                        annuallyButton=
                            {
                                <Button
                                    className={'btn-sign-in'}
                                    style={{
                                        height: 'auto',
                                        width: '100%',
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    }}
                                    onClick={() => handleSubscribe('Free annually')}
                                >
                                    Subscribe
                                </Button>
                            }
                    />
                </Col>
                <Col sm={12} xs={12} lg={4} className={"py-1"}>
                    <ServiceCard
                        name="ულიმიტო"
                        description=""
                        offers={
                            [
                                'წვდომა ყველა საგნის ტესტზე',
                                'ტესტური პასუხების შეფასება',
                                'წერილობითი პასუხების შეფასება (AI)',
                                'რჩევების მიღება წერილობითი დავალების უკეთ შესასრულებლად',
                                'რჩევების მიღება ცოდნის გასაღრმავებლად',
                                'წვდომა დამატებით სავარჯიშოებზე',
                            ]
                        }
                        lastIndex={6}
                        price={10}
                        annualPrice={50}
                        monthlyButton=
                            {
                                <Button
                                    className={'btn-sign-in'}
                                    style={{
                                        height: 'auto',
                                        width: '100%',
                                        marginTop: '20px',
                                        marginBottom: '8px'
                                    }}
                                    onClick={() => handleSubscribe('Free')}
                                >
                                    Subscribe
                                </Button>
                            }
                        annuallyButton=
                            {
                                <Button className={'btn-sign-in'}
                                        style={{
                                            height: 'auto',
                                            width: '100%',
                                            marginTop: '20px',
                                            marginBottom: '8px'
                                        }}
                                        onClick={() => handleSubscribe('Free annually')}
                                >
                                    Subscribe
                                </Button>
                            }
                    />
                </Col>
            </Row>
        </div>
    )
}