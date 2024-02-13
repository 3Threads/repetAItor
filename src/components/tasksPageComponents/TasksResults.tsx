import React from 'react';
import {Accordion, Col, Row} from "react-bootstrap";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck, faCircleXmark,} from '@fortawesome/free-regular-svg-icons';

interface Props {
    taskResults: any[];
    userAnswers: string[][];

}

function TasksResults({taskResults, userAnswers}: Props) {
    return (
        <>
            {
                taskResults.length !== 0 && <h1 className="mt-5" style={{paddingTop: '40px'}}>საბოლოო ქულა: {taskResults.reduce((accumulator, taskResult) => {
                        return accumulator + parseInt(taskResult[0]);
                    }, 0)}</h1>
            }

            <Accordion alwaysOpen style={{paddingLeft: '0px'}}>
                {taskResults.map((taskResult, index) => (
                    <Accordion.Item eventKey={"" + index} className={"btn-accordion"}>
                        <Accordion.Header
                            className={"btn-task"}
                        >
                            დავალება {index + 1} - ჯამური ქულა: {taskResult[0]}
                        </Accordion.Header>
                        <Accordion.Body>
                            {taskResult[1].length !== 1 &&
                                <div className="mb-3">
                                    <ul style={{
                                        paddingTop: '6px',
                                        paddingBottom: '6px',
                                        paddingLeft: '32px',
                                        paddingRight: '32px'
                                    }}>
                                        <Row>
                                            {taskResult[1].map((result: any, subindex: any) => (
                                                <Col sm={12} lg={6} key={subindex}>

                                                    <li key={subindex}>
                                                        {result[0] > 0 ? (
                                                            <div style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                paddingTop: '10px'
                                                            }}>
                                                                <FontAwesomeIcon icon="check-square"/>

                                                                <FontAwesomeIcon icon={faCircleCheck}
                                                                                 className={'task-icon'}
                                                                                 size={'lg'}
                                                                                 color={'green'}
                                                                />
                                                                <div style={{paddingLeft: '10px'}}>
                                                                    <div>
                                                                        შეკითხვა {(parseInt(subindex) + 1)}
                                                                    </div>
                                                                    <div style={{color: "dimgray"}}>
                                                                        {"შენი პასუხი: " + (userAnswers[index][parseInt(subindex)] === '' ? 'N/A' : userAnswers[index][parseInt(subindex)])
                                                                            + ", სწორი პასუხი: " + result[1]}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                paddingTop: '10px',
                                                            }}>
                                                                <FontAwesomeIcon icon={faCircleXmark}
                                                                                 className={'task-icon'}
                                                                                 size={'lg'}
                                                                                 color={'red'}
                                                                />
                                                                <div style={{paddingLeft: '10px'}}>
                                                                    <div>
                                                                        შეკითხვა {(parseInt(subindex) + 1)}
                                                                    </div>
                                                                    <div style={{color: "dimgray"}}>
                                                                        {"შენი პასუხი: " + (userAnswers[index][parseInt(subindex)] === '' ? 'N/A' : userAnswers[index][parseInt(subindex)])
                                                                            + ", სწორი პასუხი: " + result[1]}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </li>
                                                </Col>
                                            ))}
                                        </Row>
                                    </ul>
                                </div>
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    )
        ;
}

export default TasksResults;