import React from 'react'; // Import useContext
import Modal from 'react-bootstrap/Modal';

interface Props {
    show: boolean;
    handleClose: () => void;
    expireDate: string;
}

function SubscriptionModal({show, handleClose, expireDate}: Props) {

    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header className={"modal-color"} style={{paddingTop: '0', paddingBottom: '0'}} closeButton>
                    aqaaa
                </Modal.Header>
                <Modal.Body className={"modal-color"}>
                    {expireDate}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default SubscriptionModal;
