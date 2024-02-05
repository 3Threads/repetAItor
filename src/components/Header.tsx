import React from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';

export const Header: React.FC = () => {
    return (
        <Navbar expand="lg" variant="dark" className={"mb-4"}>
            <Container>
                <Navbar.Brand href="/">
                    <h1>
                        <span style={{color: 'orange'}}>A</span>biturient<span style={{color: 'orange'}}>I</span>
                    </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/tests/english" className={'p-0 m-1'}><Button
                            variant={'warning'}>ინგლისური</Button></Nav.Link>
                        <Nav.Link href="/tests/georgian" className={'p-0 m-1'}><Button
                            variant={'warning'}>ქართული</Button></Nav.Link>
                        <Nav.Link href="/tests/math" className={'p-0 m-1'}><Button
                            variant={'warning'}>მათემატიკა</Button></Nav.Link>
                        <Nav.Link href="/tests/history" className={'p-0 m-1'}><Button
                            variant={'warning'}>ისტორია</Button></Nav.Link>
                    </Nav>
                    <Navbar.Brand href="#contact-us">
                        <Button variant="outline-warning" className={'m-1'}>Contact Us</Button>
                    </Navbar.Brand>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}


