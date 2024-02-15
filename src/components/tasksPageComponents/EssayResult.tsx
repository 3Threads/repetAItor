import {Card, Col, Row, Table} from "react-bootstrap";
import {RingProgress, Text} from "@mantine/core";
import React from "react";
import EvaluationCard from "./EvaluationCard";
import {log} from "node:util";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCircleXmark} from "@fortawesome/free-regular-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";

interface Props {
    point: number;
    jsonResult: JSON;
}

interface JSON {
    "my_total_point": number;
    "max_total_point": number;
    "my_Fluency/Task_fulfilment_point": number;
    "max_Fluency/Task_fulfilment_point": number;
    "my_grammar_point": number;
    "max_grammar_point": number;
    "grammar_mistakes": [string];
    "corrected_version_of_grammar_mistakes": [string];
    "possible_arguments": [string];
}

function EssayResult({point, jsonResult}: Props) {
    return (
        <div>
            <div style={{
                textAlign: 'center',
                fontSize: '30px',
                paddingTop: '14px',
                paddingBottom: '14px'
            }}>
                <b>ესეს შეფასება:</b>
            </div>
            <Row className="justify-content-center">
                <EvaluationCard
                    title={"Fluency"}
                    point={jsonResult["my_Fluency/Task_fulfilment_point"]}
                    maxPoint={jsonResult["max_Fluency/Task_fulfilment_point"]}
                />
                <EvaluationCard
                    title={"Total Points"}
                    point={jsonResult["my_total_point"]}
                    maxPoint={jsonResult["max_total_point"]}
                />
                <EvaluationCard
                    title={"Grammar"}
                    point={jsonResult["my_grammar_point"]}
                    maxPoint={jsonResult["max_grammar_point"]}
                />
                <Col>
                    <div style={{boxShadow: '20px solid black'}}>
                        <div style={{paddingTop: '8px', paddingBottom: '10px', fontSize: '20px'}}><b>გრამატიკული
                            შეცდომები:</b></div>

                        <Table responsive="sm">
                            <thead>
                            <tr>
                                <th style={{width: '50%'}}>Mistake</th>
                                <th style={{width: '50%'}}>Corrected</th>
                            </tr>
                            </thead>
                            <tbody>
                            {(jsonResult["grammar_mistakes"] || []).map((mistake, index) => (
                                <tr key={index}>
                                    <td style={{alignContent: 'center'}}>
                                        <FontAwesomeIcon icon={faCircleXmark}
                                                         size={'lg'}
                                                         color={'red'}
                                                         style={{paddingLeft: '2px', paddingRight: '10px'}}
                                        />
                                        {mistake}</td>
                                    <td>
                                        <FontAwesomeIcon icon={faCircleCheck}
                                                         size={'lg'}
                                                         color={'green'}
                                                         style={{paddingLeft: '2px', paddingRight: '10px'}}
                                        />
                                        {(jsonResult["corrected_version_of_grammar_mistakes"] || [])[index]}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>


                    <div style={{paddingTop: '8px', paddingBottom: '10px', fontSize: '20px'}}>
                        <b>შესაძლო არგუმენტები:</b>
                    </div>
                    <Table responsive="sm">
                        <tbody>
                        {(jsonResult["possible_arguments"] || []).map((argument, index) => (
                            <tr key={index}>
                                <td style={{alignContent: 'center'}}>
                                    <FontAwesomeIcon icon={faCircle}
                                                     size={"xs"}
                                                     color={"#2f2348"}
                                                     style={{paddingLeft: '2px', paddingRight: '10px'}}
                                    />
                                    {argument}
                                </td>

                            </tr>
                        ))}
                        </tbody>
                    </Table>

                </Col>
            </Row>

        </div>
    );
}

export default EssayResult;