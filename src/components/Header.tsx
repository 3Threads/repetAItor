import React, {useEffect, useState} from 'react';
import {Button, Container, Dropdown} from 'react-bootstrap';
import {Tabs} from "@mantine/core";
import {useParams} from "react-router-dom";

export const Header: React.FC = () => {
    const {subject} = useParams();
    const [showButtons, setShowButtons] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-mantine-color-scheme', 'dark');
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1000);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        setIsLoaded(true);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleToggle = () => {
        setShowButtons(!showButtons);
    };

    return (
        <div className={"custom-navbar"}
             style={{paddingBottom: '0', display: 'flex', justifyContent: 'space-between'}}>
            <Container style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between'
            }}>

                <h2 style={{border: '0', margin: 0}}>
                    <a href={'/'}
                       style={{
                           textDecoration: 'none',
                           color: 'white'
                       }}>
                        <span style={{color: 'white'}}>A</span>biturient<span style={{color: 'white'}}>I</span>
                    </a>
                </h2>

                {isSmallScreen ? (
                    <Dropdown data-bs-theme="dark">
                        <Dropdown.Toggle id="dropdown-button-dark-example1" className={'btn-sign-in'}>
                            List
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href={"/tests/georgian"}>
                                ქართული
                            </Dropdown.Item>
                            <Dropdown.Item href={"/tests/english"}>
                                ინგლისური
                            </Dropdown.Item>
                            <Dropdown.Item href={"/tests/math"}>
                                მათემატიკა
                            </Dropdown.Item>
                            <Dropdown.Item href={"/tests/history"}>
                                ისტორია
                            </Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item href="#/action-1">Sign In</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Contact Us</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                ) : (
                    <>
                        {isLoaded && (
                            <Tabs style={{display: 'flex', justifyContent: 'center', width: '100%'}} value={subject}
                                  color="#8540f5" radius="xs">
                                <Tabs.List id={'List'}
                                           style={{display: 'flex', justifyContent: 'center', borderStyle: 'none'}}>
                                    <a href={"/tests/georgian"}
                                       style={{
                                           textDecoration: 'none',
                                           color: subject === 'georgian' ? '#8540f5': 'white'
                                       }}>
                                        <Tabs.Tab style={{height: '72px'}} value="georgian">
                                            ქართული
                                        </Tabs.Tab>
                                    </a>
                                    <a href={"/tests/english"}
                                       style={{
                                           textDecoration: 'none',
                                           color: subject === 'english' ? '#8540f5': 'white'
                                       }}>
                                        <Tabs.Tab value="english" style={{height: '72px'}}>
                                            ინგლისური
                                        </Tabs.Tab>
                                    </a>
                                    <a href={"/tests/math"}
                                       style={{
                                           textDecoration: 'none',
                                           color: subject === 'math' ? '#8540f5': 'white'
                                       }}>
                                        <Tabs.Tab value="math" style={{height: '72px'}}>
                                            მათემატიკა
                                        </Tabs.Tab>
                                    </a>
                                    <a href={"/tests/history"}
                                       style={{
                                           textDecoration: 'none',
                                           color: subject === 'history' ? '#8540f5': 'white'
                                       }}>
                                        <Tabs.Tab value="history" style={{height: '72px'}}>
                                            ისტორია
                                        </Tabs.Tab>
                                    </a>
                                </Tabs.List>
                            </Tabs>
                        )}
                    </>
                )}
                {
                    (!isSmallScreen && isLoaded) && (
                        <div style={{display: 'flex'}}>
                            <Button className={'btn-sign-in m-1'}>შესვლა</Button>
                            <Button className={'btn-contact m-1'}>დაგვიკავშირდი</Button>
                        </div>
                    )
                }
            </Container>
        </div>
    );
}