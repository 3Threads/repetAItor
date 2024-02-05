import React from 'react';
import {Header} from "../components/Header";
import {useParams} from "react-router-dom";
import {Col, Container, Dropdown, Row} from "react-bootstrap";

export const TestLists = () => {
    const {subject} = useParams();
    const years = Array.from({length: 12}, (_, index) => 2012 + index);
    years.reverse();

    return (
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col lg={8}>
                        <h2>{subject!.charAt(0).toUpperCase() + subject!.slice(1)} Tests</h2>
                        <div className={'row'}>
                            {years.map(year => (
                                <Dropdown className={'col-4'}>
                                    <Dropdown.Toggle variant={'outline-warning'} id="dropdown-basic"
                                                     className={'btn btn-outline-warning full-width mb-2 mt-2'}>
                                        {year}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className={'w-100 bg-dark'}>
                                        {[1, 2, 3, 4].map(num => (
                                            <Dropdown.Item className={'text-warning bg-dark'}
                                                href={`/tests/${subject}/${year}/var${num}`}>Variant {num}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            ))}
                        </div>
                    </Col>
                    <Col lg={4} className={'bg-warning'}>
                        {/* Add content for the right column */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TestLists;
