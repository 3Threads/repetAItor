import React, {useContext, useState} from 'react'; // Import useContext
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from "react-bootstrap";
import {Tabs} from "@mantine/core";
import {UserContext} from "../../contexts/UserContext";

interface Props {
    show: boolean;
    handleClose: () => void;
}

function LoginModal({show, handleClose}: Props) {
    const {setUser} = useContext(UserContext); // Use UserContext
    const [tabValue, setTabValue] = useState('signin'); // Default value is "signin"
    const [username, setUsername] = useState("")
    const [loginMail, setLoginMail] = useState("")
    const [registerMail, setRegisterMail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const [message, setMessage] = useState("");

    const close = () => {
        setTimeout(() => {
            setTabValue('signin');
        }, 1000);

        handleClose();
    }

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform login and get user data
        try {
            const response = await fetch('http://localhost:8000/login/' + loginMail + "/" + loginPassword);

            if (!response.ok) {
                // Handle error
                setMessage("ელ. ფოსტა ან პაროლი არასწორია")
                return
            }

            const data = await response.json();
            console.log(data.user)
            const userData = {
                id: data.user.id,
                name: data.user.username,
                email: data.user.email,
                subscriptionType: data.user.subscribe_type
            };

            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData)); // Save user data to local storage
            handleClose();
            setLoginMail("")
            setLoginPassword("")
            setUsername("")
            setRegisterMail("")
            setRegisterPassword("")
            setMessage("")

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email: registerMail,
                    password: registerPassword
                })
            });

            if (!response.ok) {
                // Handle error
                setMessage("რეგისტრაცია ვერ მოხერხდა")
                return
            }

            const data = await response.json();
            console.log(data.user)
            const userData = {
                id: data.user.id,
                name: data.user.username,
                email: data.user.email,
                subscriptionType: data.user.subscribe_type
            };

            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData)); // Save user data to local storage
            handleClose();
            setLoginMail("")
            setLoginPassword("")
            setUsername("")
            setRegisterMail("")
            setRegisterPassword("")
            setMessage("")
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    const RegisterModalBody = (
        <div>
            <Form.Group className="mb-3" controlId="registerForm.ControlInput1">
                <Form.Label>ზედმეტსახელი</Form.Label>
                <Form.Control
                    type="Username"
                    placeholder="User1"
                    style={{backgroundColor: '#2f2348', color: 'lightgray', borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signInForm.ControlInput2">
                <Form.Label>მეილის მისამართი</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    style={{backgroundColor: '#2f2348', color: 'lightgray', borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    onChange={(e) => setRegisterMail(e.target.value)}
                    value={registerMail}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signInForm.ControlInput2">
                <Form.Label>პაროლი</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{backgroundColor: '#2f2348', color: 'lightgray', borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    value={registerPassword}
                />
            </Form.Group>
        </div>
    );

    const SignInModalBody = (
        <div>
            {/* Sign In form fields */}
            <Form.Group className="mb-3" controlId="signInForm.ControlInput1">
                <Form.Label>მეილის მისამართი</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    style={{backgroundColor: '#2f2348', color: 'lightgray', borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    autoFocus
                    onChange={(e) => setLoginMail(e.target.value)}
                    value={loginMail}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signInForm.ControlInput2">
                <Form.Label>პაროლი</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{backgroundColor: '#2f2348', color: 'lightgray', borderColor: 'rgba(255, 255, 255, 0.1)'}}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    value={loginPassword}
                />
            </Form.Group>
        </div>
    );

    return (
        <div>
            <Modal show={show} onHide={close} centered>
                <Modal.Header className={"modal-color"} style={{paddingTop: '0', paddingBottom: '0'}}>
                    <Tabs style={{display: 'flex', justifyContent: 'center', width: '100%'}} value={tabValue}
                          color="#8540f5" radius="xs">
                        <Tabs.List id={'List'}
                                   style={{display: 'flex', justifyContent: 'center', borderStyle: 'none'}}>
                            <Tabs.Tab style={{height: '60px'}} value="register" onClick={() => {
                                setLoginMail("")
                                setLoginPassword("")
                                setUsername("")
                                setRegisterMail("")
                                setRegisterPassword("")
                                setMessage("")
                                setTabValue('register')
                            }}>
                                რეგისტრაცია
                            </Tabs.Tab>
                            <Tabs.Tab style={{height: '60px'}} value="signin" onClick={() => {
                                setLoginMail("")
                                setLoginPassword("")
                                setUsername("")
                                setRegisterMail("")
                                setRegisterPassword("")
                                setMessage("")
                                setTabValue('signin')
                            }}>
                                ავტორიზაცია
                            </Tabs.Tab>
                        </Tabs.List>
                    </Tabs>
                </Modal.Header>
                <Form onSubmit={tabValue === 'register' ? handleRegister : handleLogin}>
                    <Modal.Body className={"modal-color"}>
                        {tabValue === 'register' ? RegisterModalBody : SignInModalBody}
                        <div className={'error-message'}>{message}</div>
                    </Modal.Body>
                    <Modal.Footer className={"modal-color"}>
                        <Button variant="primary" onClick={close}>
                            დახურვა
                        </Button>
                        <Button type={"submit"} variant="sign-in" style={{height: 'auto'}}>
                            {tabValue === 'register' ? "რეგისტრაცია" : "შესვლა"}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}

export default LoginModal;
