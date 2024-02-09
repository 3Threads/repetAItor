import React from 'react';
import MultipleChoiceQuestionComp from "./MultipleChoiceQuestionComp";
import {MultipleChoiceQuestion} from "../interfaces/questions";

interface Props {
    questionNumber: number;
    question: string;
    text: string;
    questions: MultipleChoiceQuestion[]
}


const MultipleQuestionTaskComp: React.FC<Props> = ({question, questions, questionNumber, text}) => {
    return (
        <div className={'pt-3 pb-3'}>
            <h4>{text}</h4>
            <ul>
                {questions.map((quest, index) => (
                    <li key={index}>
                        <MultipleChoiceQuestionComp question={quest.question} choices={quest.options}
                                                    questionNumber={index + 1}/>
                        <input id={'task' + questionNumber}
                               name={'task' + questionNumber}
                               type="text"
                               className={'m-1'}
                        />
                    </li>

                ))}
            </ul>

        </div>
    );
};

export default MultipleQuestionTaskComp;
