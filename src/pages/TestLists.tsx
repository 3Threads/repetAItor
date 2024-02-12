import React from 'react';
import {Header} from "../components/commonComponents/Header";
import {useParams} from "react-router-dom";
import {Col, Container, Dropdown, Row} from "react-bootstrap";
import Footer from "../components/commonComponents/Footer";

export const TestLists = () => {
    const {subject} = useParams();
    const years = Array.from({length: 12}, (_, index) => 2012 + index);
    years.reverse();

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: "100vh"}}>
            <Header/>
            <Container>
                <Row>
                    <Col xs={'1'}> </Col>
                    <Col xs={'10'}>
                        <h2 className={'mt-3'}>{subject!.charAt(0).toUpperCase() + subject!.slice(1)} Tests</h2>
                        <div className={'row mt-4'}>
                            {years.map(year => (
                                <Dropdown data-bs-theme="dark" className={'col-4'}>
                                    <Dropdown.Toggle id="dropdown-basic"
                                                     className={'btn btn-primary full-width mb-2 mt-2'}>
                                        {year}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className={'w-100'}>
                                        {[1, 2, 3, 4].map(num => (
                                            <Dropdown.Item
                                                href={`/tests/${subject}/${year}/${num}`}>ვარიანტი {num}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>

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

export default TestLists;
