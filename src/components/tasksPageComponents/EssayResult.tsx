import {Card, Col, Row} from "react-bootstrap";
import {RingProgress, Text} from "@mantine/core";
import React from "react";
import EvaluationCard from "./EvaluationCard";

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
            </Row>

        </div>
    );
}

export default EssayResult;