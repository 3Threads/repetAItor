import React, {useContext, useState} from 'react'; // Import useContext
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from "react-bootstrap";
import {Tabs} from "@mantine/core";
import {UserContext} from "../../UserContext"; // Import UserContext
interface Props {
    show: boolean;
    handleClose: () => void;
}

function LoginModal({show, handleClose}: Props) {
    const {user, setUser} = useContext(UserContext); // Use UserContext
    const [tabValue, setTabValue] = useState('signin'); // Default value is "signin"
    const [username, setUsername] = useState("")
    const [loginMail, setLoginMail] = useState("")
    const [registerMail, setRegisterMail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const close = () => {
        setTimeout(() => {
            setTabValue('signin');
        }, 1000);

        handleClose();
    }

    const handleLogin = () => {
        // Perform login and get user data
        const userData = {
            name: username,
            email: loginMail,
        };

        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData)); // Save user data to local storage
    };

    const RegisterModalBody = (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="registerForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="Username"
                    placeholder="User1"
                    style={{backgroundColor: '#2f2348', color: 'lightgray', borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signInForm.ControlInput2">
                <Form.Label>Register Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    style={{backgroundColor: '#2f2348', color: 'lightgray', borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    onChange={(e) => setRegisterMail(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signInForm.ControlInput2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{backgroundColor: '#2f2348', color: 'lightgray', borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
            </Form.Group>
        </Form>
    );

    const SignInModalBody = (
        <Form onSubmit={handleLogin}>
            {/* Sign In form fields */}
            <Form.Group className="mb-3" controlId="signInForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    style={{backgroundColor: '#2f2348', color: 'lightgray', borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    autoFocus
                    onChange={(e) => setLoginMail(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signInForm.ControlInput2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{backgroundColor: '#2f2348', color: 'lightgray', borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
            </Form.Group>
            {/* Add more fields if needed */}
        </Form>
    );

    return (
        <div>
            <Modal show={show} onHide={close} centered>
                <Modal.Header className={"modal-color"} style={{paddingTop: '0', paddingBottom: '0'}}>
                    <Tabs style={{display: 'flex', justifyContent: 'center', width: '100%'}} value={tabValue}
                          color="#8540f5" radius="xs">
                        <Tabs.List id={'List'}
                                   style={{display: 'flex', justifyContent: 'center', borderStyle: 'none'}}>
                            <Tabs.Tab style={{height: '60px'}} value="register" onClick={() => setTabValue('register')}>
                                რეგისტრაცია
                            </Tabs.Tab>
                            <Tabs.Tab style={{height: '60px'}} value="signin" onClick={() => setTabValue('signin')}>
                                ავტორიზაცია
                            </Tabs.Tab>
                        </Tabs.List>
                    </Tabs>
                </Modal.Header>
                <Modal.Body className={"modal-color"}>
                    {tabValue === 'register' ? RegisterModalBody : SignInModalBody}
                </Modal.Body>
                <Modal.Footer className={"modal-color"}>
                    <Button variant="primary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="sign-in" style={{height: 'auto'}} onClick={() => {
                        handleLogin();
                        close()
                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default LoginModal;
