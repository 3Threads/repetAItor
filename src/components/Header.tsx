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
        <div className={"mb-4 custom-navbar parent"}
             style={{paddingBottom: '0', display: 'flex', justifyContent: 'space-between'}}>
            <Container style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: !isSmallScreen && isLoaded && showButtons ? 'space-between' : 'space-between'
            }}>

                <h1 style={{border: '0', margin: 0}}>
                    <a href={'/'}
                       style={{
                           textDecoration: 'none',
                           color: 'white'
                       }}>
                        <span style={{color: 'orange'}}>A</span>biturient<span style={{color: 'orange'}}>I</span>
                    </a>
                </h1>

                {isSmallScreen ? (
                    <Dropdown data-bs-theme="dark">
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant={'outline-warning'}>
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
                                  color="#ffc107" radius="xs">
                                <Tabs.List id={'List'}
                                           style={{display: 'flex', justifyContent: 'center', borderStyle: 'none'}}>
                                    <a href={"/tests/georgian"}
                                       style={{
                                           textDecoration: 'none',
                                           color: subject === "georgian" ? '#ffc107' : 'white'
                                       }}>
                                        <Tabs.Tab style={{height: '66px'}} value="georgian">
                                            ქართული
                                        </Tabs.Tab>
                                    </a>
                                    <a href={"/tests/english"}
                                       style={{
                                           textDecoration: 'none',
                                           color: subject === "english" ? '#ffc107' : 'white'
                                       }}>
                                        <Tabs.Tab value="english" style={{height: '66px'}}>
                                            ინგლისური
                                        </Tabs.Tab>
                                    </a>
                                    <a href={"/tests/math"}
                                       style={{
                                           textDecoration: 'none',
                                           color: subject === "math" ? '#ffc107' : 'white'
                                       }}>
                                        <Tabs.Tab value="math" style={{height: '66px'}}>
                                            მათემატიკა
                                        </Tabs.Tab>
                                    </a>
                                    <a href={"/tests/history"}
                                       style={{
                                           textDecoration: 'none',
                                           color: subject === "history" ? '#ffc107' : 'white'
                                       }}>
                                        <Tabs.Tab value="history" style={{height: '66px'}}>
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
                            <Button variant="outline-warning" className={'m-1'}>Sign&nbsp;in</Button>
                            <Button variant="outline-warning" className={'m-1'}>Contact&nbsp;Us</Button>
                        </div>
                    )
                }
            </Container>
        </div>
    );
}