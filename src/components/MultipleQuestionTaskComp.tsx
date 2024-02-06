import React from 'react';
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import {MultipleChoiceQuest} from "../interfaces/questions";

interface Props {
    questionNumber: number;
    question: string;
    text: string;
    questions: MultipleChoiceQuest[]
}


const MultipleQuestionTaskComp: React.FC<Props> = ({question, questions, questionNumber, text}) => {
    return (
        <div className={'pt-3 pb-3'}>
            <h3>Task {questionNumber}: {question}</h3>
            <h4>{text}</h4>
            <ul>
                {questions.map((quest, index) => (
                    <li key={index}>
                        <MultipleChoiceQuestion question={quest.question} choices={quest.options}
                                                questionNumber={index + 1}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MultipleQuestionTaskComp;
