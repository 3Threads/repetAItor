// Footer.tsx
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer style={{
            backgroundColor: 'transparent',
            bottom: 0,
            width: '100%',
            paddingTop: '20px'
        }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Navigation</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact</h5>
                        <address>
                            1234 Main Street<br/>
                            City, State ZIP<br/>
                            <i className="fas fa-phone"></i> Phone: (123) 456-7890<br/>
                            <i className="fas fa-envelope"></i> Email: info@example.com
                        </address>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr/>
                        <p className="text-center">
                            © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
