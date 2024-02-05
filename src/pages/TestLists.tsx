import React from 'react';
import {Header} from "../components/Header";
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

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
                        <ul className={'row'}>
                            {years.map(year => (
                                <li key={year} className={'col-4'}>
                                    <details>
                                        <summary>
                                            <div className={'btn btn-outline-warning full-width mb-2 mt-2'}>{year}</div>
                                        </summary>
                                        <ul>
                                            {/* Generate four links for each year */}
                                            {[1, 2, 3, 4].map(num => (
                                                <li key={num}>
                                                    <a href={`/tests/${subject}/${year}/exam${num}`}>Exam {num}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </li>
                            ))}
                        </ul>
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
