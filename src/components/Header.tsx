import React, { useEffect } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import { Tabs } from "@mantine/core";
import { useParams } from "react-router-dom";

export const Header: React.FC = () => {
    const { subject } = useParams();

    useEffect(() => {
        document.documentElement.setAttribute('data-mantine-color-scheme', 'dark');
    }, []);

    return (
        <Navbar expand="lg" variant="dark" className={"mb-4 custom-navbar"}>
            <Container>
                <Navbar.Brand href="/">
                    <h1>
                        <span style={{ color: 'orange' }}>A</span>biturient<span style={{ color: 'orange' }}>I</span>
                    </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <Tabs value={subject} color="yellow" radius="xs">
                            <Tabs.List >
                                <a href={"/tests/georgian"} style={{ textDecoration: 'none', color: subject === "georgian" ? '#f08c00' : 'white' }}>
                                    <Tabs.Tab value="georgian">
                                        ქართული
                                    </Tabs.Tab>
                                </a>
                                <a href={"/tests/english"} style={{ textDecoration: 'none', color: subject === "english" ? '#f08c00' : 'white' }}>
                                    <Tabs.Tab value="english">
                                        ინგლისური
                                    </Tabs.Tab>
                                </a>
                                <a href={"/tests/math"} style={{ textDecoration: 'none', color: subject === "math" ? '#f08c00' : 'white' }}>
                                    <Tabs.Tab value="math">
                                        მათემატიკა
                                    </Tabs.Tab>
                                </a>
                                <a href={"/tests/history"} style={{ textDecoration: 'none', color: subject === "history" ? '#f08c00' : 'white' }}>
                                    <Tabs.Tab value="history">
                                        ისტორია
                                    </Tabs.Tab>
                                </a>
                            </Tabs.List>
                        </Tabs>
                    </div>

                    <Navbar.Brand>
                        <Button variant="outline-warning" className={'m-1'}>Sign in</Button>
                        <Button variant="outline-warning" className={'m-1'}>Contact Us</Button>
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
