import React from 'react';
import {useLocation} from 'react-router-dom';
import {Header} from "../components/commonComponents/Header";
import {Button, Col, Container, Dropdown, Row} from "react-bootstrap";
import Footer from "../components/commonComponents/Footer";
import EssayInputComponent from "../components/inputComponents/EssayInputComponent";

interface LocationState {
    itemsState: {
        [key: string]: {
            selected: boolean;
            count: number;
        };
    };
}

const TaskDetailsPage: React.FC = () => {
    const location = useLocation();
    const {itemsState} = location.state as LocationState;

    const renderTaskInput = (item: string, count: number) => {
        let inputs = [];
        for (let i = 0; i < count; i++) {
            // Determine the component based on item type
            let component;
            switch (item) {
                case 'essay':
                    component = <EssayInputComponent key={`task-${item}-${i}`} />;
                    break;
                default:
                    component = <div key={`task-${item}-${i}`}>Unknown task type</div>;
            }
            // Push the determined component to the inputs array
            inputs.push(component);
        }
        return inputs;
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Header/>
            <Container>
                <Row>
                    <Col xs={'1'}> </Col>
                    <Col xs={'10'} style={{paddingLeft: '12px', paddingTop: '20px'}}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '34px',
                                paddingBottom: '10px'
                            }}
                        >
                            Input the following details
                        </div>

                        <div>
                            {Object.entries(itemsState).map(([item, {selected, count}]) => {
                                if (selected) {
                                    return (
                                        <div key={item}>
                                            {renderTaskInput(item, count)}
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>

                    </Col>
                    <Col xs={'1'}> </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default TaskDetailsPage;
