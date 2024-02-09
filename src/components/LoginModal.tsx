import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from "react-bootstrap";
import {Tabs} from "@mantine/core/lib";

interface Props {
    show: boolean;
    handleClose: () => void;
}

function LoginModal({show, handleClose}: Props) {
    const [tabValue, setTabValue] = useState('login');

    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton className={"modal-color"}>
                    <Tabs style={{display: 'flex', justifyContent: 'center', width: '100%'}} value={tabValue}
                          color="#8540f5" radius="xs">
                        <Tabs.List id={'List'}
                                   style={{display: 'flex', justifyContent: 'center', borderStyle: 'none'}}>
                            <a href={"/tests/georgian"}
                               style={{
                                   textDecoration: 'none',
                                   color: tabValue === 'georgian' ? '#8540f5' : 'white'
                               }}>
                                <Tabs.Tab style={{height: '72px'}} value="georgian">
                                    ქართული
                                </Tabs.Tab>
                            </a>
                            <a href={"/tests/english"}
                               style={{
                                   textDecoration: 'none',
                                   color: subject === 'english' ? '#8540f5' : 'white'
                               }}>
                                <Tabs.Tab value="english" style={{height: '72px'}}>
                                    ინგლისური
                                </Tabs.Tab>
                            </a>
                            <a href={"/tests/math"}
                               style={{
                                   textDecoration: 'none',
                                   color: subject === 'math' ? '#8540f5' : 'white'
                               }}>
                                <Tabs.Tab value="math" style={{height: '72px'}}>
                                    მათემატიკა
                                </Tabs.Tab>
                            </a>
                            <a href={"/tests/history"}
                               style={{
                                   textDecoration: 'none',
                                   color: subject === 'history' ? '#8540f5' : 'white'
                               }}>
                                <Tabs.Tab value="history" style={{height: '72px'}}>
                                    ისტორია
                                </Tabs.Tab>
                            </a>
                        </Tabs.List>
                    </Tabs>
                </Modal.Header>
                <Modal.Body className={"modal-color"}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className={"modal-color"}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default LoginModal;