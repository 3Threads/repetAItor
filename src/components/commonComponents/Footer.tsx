// Footer.tsx
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer style={{
            backgroundColor: 'transparent',
            bottom: 0,
            width: '100%',
            marginTop: 'auto',
            paddingTop: '80px',
        }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <h5 style={{fontWeight: 'bold'}}>ნავიგაცია</h5>
                        <ul className="list-unstyled">
                            <li><a className={'footer-a'}
                                href={"/tests/georgian"}>ქართული</a></li>
                            <li><a className={'footer-a'}
                                href={"/tests/english"}>ინგლისური</a></li>
                            <li><a className={'footer-a'}
                                href={"/tests/math"}>მათემატიკა</a></li>
                            <li><a className={'footer-a'}
                                href={"/tests/history"}>ისტორია</a></li>
                            <li><a className={'footer-a'}
                                href="#/action-2">დაგვიკავშირდი</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 style={{fontWeight: 'bold'}}>კომპანია</h5>
                        <ul className="list-unstyled">
                            <li><a className={'footer-a'}
                                   href="/terms">Terms of Service</a></li>
                            <li><a className={'footer-a'}
                                   href="/privacy">Privacy Policy</a></li>
                            <li><a className={'footer-a'}
                                   href="/faq">FAQ</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 style={{fontWeight: 'bold'}}>კავშირი</h5>
                        <address>
                            <i className="fas fa-phone"></i> ნომერი: (123) 456-7890<br/>
                            <i className="fas fa-envelope"></i> Email: info@example.com
                        </address>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr/>
                        <p className="text-center">
                            © {new Date().getFullYear()} RepetAItor. All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
