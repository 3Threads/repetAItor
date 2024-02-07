import React from 'react';

interface Props {
    questionNumber: number;
    question: string;
    choices: string[];
}

const MultipleChoiceQuestionComp: React.FC<Props> = ({question, choices, questionNumber}) => {

    return (
        <div className={'pt-3 pb-3'}>
            {questionNumber}). {question}
            <ul>
                {choices.map((choice, index) => (
                    <li key={index}>
                        <label>
                            {choice}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MultipleChoiceQuestionComp;
