import React from 'react';
import { useLocation } from 'react-router-dom';
import {Header} from "../components/commonComponents/Header";
import {Button, Col, Container, Dropdown, Row} from "react-bootstrap";
import NewTasksList from "../components/tasksPageComponents/NewTasksList";
import Footer from "../components/commonComponents/Footer";

interface LocationState {
  selectedItems: string[];
}

const TaskDetailsPage: React.FC = () => {
  const location = useLocation();
  const { selectedItems } = location.state as LocationState; // Ensure correct type for state

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
                        {selectedItems.map((item: string, index: number) => (
                            <div key={index}>
                                <h3>{item}</h3>
                            </div>
                        ))}
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
