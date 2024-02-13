import React, {useContext} from "react";
import ServiceCard from "./ServiceCard";
import {Button, Col, Row} from "react-bootstrap";
import {UserContext} from "../../contexts/UserContext";

export const Services = () => {
    const {user} = useContext(UserContext); // Use UserContext

    const handleSubscribe = async (service: string) => {
        try {
            const response = await fetch('http://localhost:8000/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user?.id,
                    subscribe_type: service
                })
            });

            if (!response.ok) {
                // Handle error
                console.log("subscription ver qna")
                return
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
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
                                    onClick={() => handleSubscribe('PremiumMonthly')}
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
                                    onClick={() => handleSubscribe('PremiumAnnually')}
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
                                    onClick={() => handleSubscribe('UltimateMonthly')}
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
                                        onClick={() => handleSubscribe('UltimateAnnually')}
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