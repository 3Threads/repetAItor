import React, {useContext, useState} from "react";
import ServiceCard from "./ServiceCard";
import {Button, Col, Row} from "react-bootstrap";
import {UserContext} from "../../contexts/UserContext";
import SubscriptionModal from "./SubscriptionModal";

export const Services = () => {
    const {user, setUser} = useContext(UserContext); // Use UserContext
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [expireDate, setExpireDate] = useState("");

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
            const data = await response.json();
            const userData = {
                id: data.user.id,
                name: data.user.username,
                email: data.user.email,
                subscriptionType: data.user.subscribe_type
            };
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            setExpireDate(data.user.subscribe_end_date)
            handleShow();

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
                                    ყიდვა
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
                                    ყიდვა
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
                                    disabled
                                >
                                    მალე
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
                                        disabled
                                >
                                    მალე
                                </Button>
                            }
                    />
                </Col>
            </Row>
            <SubscriptionModal show={show} handleClose={handleClose} expireDate={expireDate}/>
        </div>
    )
}