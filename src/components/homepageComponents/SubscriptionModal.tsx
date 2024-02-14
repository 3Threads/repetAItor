import React, {useContext} from 'react'; // Import useContext
import Modal from 'react-bootstrap/Modal';
import {UserContext} from "../../contexts/UserContext";
import Button from "react-bootstrap/Button";

interface Props {
    show: boolean;
    handleClose: () => void;
    expireDate: string;
}

function SubscriptionModal({show, handleClose, expireDate}: Props) {
    const {user} = useContext(UserContext); // Use UserContext

    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header className={"modal-color"} closeButton>
                    <Modal.Title>წარმატებული გადახდა</Modal.Title>
                </Modal.Header>
                <Modal.Body className={"modal-color"}>
                    მიმდინარე სტატუსი: {user?.subscriptionType}
                    <br></br>
                    ამოწურვის თარიღი: {expireDate}
                </Modal.Body>
                <Modal.Footer className={"modal-color"}>
                    <Button variant="primary" onClick={() => handleClose()}>
                        დახურვა
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default SubscriptionModal;
