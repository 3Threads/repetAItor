import React from 'react';
import MultipleChoiceQuestionComp from "./MultipleChoiceQuestionComp";
import {MultipleChoiceQuestion} from "../../interfaces/questions";

interface Props {
    questionNumber: number;
    text: string;
    questions: MultipleChoiceQuestion[]
}


const MultipleQuestionTaskComp: React.FC<Props> = ({questions, questionNumber, text}) => {
    return (
        <div className={'large-window'}>
            <div style={{textAlign: 'justify'}}>{text}</div>
            <ul className={'ul-window'}>
                {questions.map((quest, index) => (
                    <li key={index}>
                        <MultipleChoiceQuestionComp question={quest.question_text} choices={quest.question_options}
                                                    questionNumber={index + 1}/>
                        <input id={'task' + questionNumber}
                               name={'task' + questionNumber}
                               type="text"
                               placeholder={'Answer'}
                               className={'test-input m-1'}
                        />
                    </li>

                ))}
            </ul>

        </div>
    );
};

export default MultipleQuestionTaskComp;
