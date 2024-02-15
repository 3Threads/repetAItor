import {Card, Col} from "react-bootstrap";
import {RingProgress, Text} from "@mantine/core";
import React from "react";

interface Props {
    title: string;
    point: number;
    maxPoint: number;
}

function EvaluationCard({title, point, maxPoint}: Props) {
    return (
        <Col xs={12} lg={4}>
            <Card className="shadow mb-4 text-center"
                  style={{backgroundColor: 'transparent',}}>
                <Card.Body style={{
                    padding: '0',
                    paddingTop: '2px',
                    paddingBottom: '2px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Card.Text style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            fontSize: '24px',
                            paddingTop: '14px',
                            paddingBottom: '4px',
                        }}>
                            <b>{title}</b>
                        </div>
                        <RingProgress size={150} thickness={16}
                                      sections={[{
                                          value: Math.round(point / maxPoint * 100),
                                          color: '#6d2bf2'
                                      }]}
                                      label={
                                          <Text c="#6d2bf2" fw={700} ta="center" size="xl">
                                              {Math.round(point / maxPoint * 100)}%
                                          </Text>
                                      }
                        />
                        <div style={{
                            fontSize: '20px',
                            paddingTop: '6px',
                            paddingBottom: '4px',

                        }}>
                            <div style={{color: '#A69EBF', display: 'inline-block'}}>
                                {point}
                            </div>
                            <div style={{display: 'inline-block', marginLeft:'6px'}}>/</div>
                            <div style={{display: 'inline-block', marginLeft:'6px'}}>
                                {maxPoint}
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default EvaluationCard