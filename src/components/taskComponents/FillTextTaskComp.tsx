import React, {useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import aiphoto from "../../images/aiphoto.jpg";

interface Props {
    questionNumber: number;
    questionText: string;
    splitter: string;
    options: string[];
}

const FillTextTaskComp: React.FC<Props> = ({
                                               questionNumber,
                                               questionText,
                                               splitter,
                                               options
                                           }) => {
    const [answers, setAnswers] = useState<string[]>(new Array(options.length).fill(''));
    const questionParts = questionText.split(splitter);

    const handleAnswerChange = (index: number, value: string) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    return (
        <div className={'large-window'} style={{textAlign: 'justify'}}>
            <Row className="justify-content-center">
                {options.map((option, index) => (
                    <Col xs={12} sm={6} lg={2} key={index}>
                        <Card className="shadow mb-4">
                            <Card.Body style={{padding: '0', paddingTop:'2px', paddingBottom: '2px'}}>
                                <Card.Text className="text-center">
                                    {option} ({String.fromCharCode(65 + index)})
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


            <p>{questionParts.map((questionPart, index) => {
                if (index === questionParts.length - 1) {
                    return <span key={index}>{questionPart}</span>
                } else {
                    return <span key={index}>{questionPart} <input id={'task' + questionNumber}
                                                                   name={'task' + questionNumber}
                                                                   type="text"
                                                                   value={answers[index]}
                                                                   className={'test-input m-1'}
                                                                   style={{width: '50px'}}
                                                                   placeholder={'Answer'}
                                                                   onChange={(e) => handleAnswerChange(index, e.target.value)}/> </span>
                }
            })}</p>
        </div>
    );
};

export default FillTextTaskComp;
