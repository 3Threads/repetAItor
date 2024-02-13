import React, {useState} from 'react';
import {Header} from "../components/commonComponents/Header";
import {Col, Container, Row} from "react-bootstrap";
import Footer from "../components/commonComponents/Footer";
import TasksList from "../components/tasksPage/TasksList";
import TasksResults from "../components/tasksPage/TasksResults";


function TasksPage() {
    const [taskResults, setTaskResults] = useState<any[]>([]);
    const [userAnswers, setUserAnswers] = useState<string[][]>([]);


    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: "100vh"}}>
            <Header/>
            <Container>
                <Row>
                    <Col xs={'1'}> </Col>
                    <Col xs={'10'} style={{paddingLeft: '12px', paddingTop: '20px'}}>
                        <TasksList setTaskResults={setTaskResults} setUserAnswers={setUserAnswers}/>
                        <TasksResults taskResults={taskResults} userAnswers={userAnswers}/>
                    </Col>
                    <Col xs={'1'}> </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default TasksPage;