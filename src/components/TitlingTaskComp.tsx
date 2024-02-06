import React, {useState} from 'react';

interface Props {
    questionNumber: number;
    question: string;
    paragraphs: string[];
    titles: string[];
}


const TitlingTaskComp: React.FC<Props> = ({question, questionNumber, paragraphs, titles}) => {
    const [answers, setAnswers] = useState<string[]>(new Array(paragraphs.length).fill(''));

    const handleAnswerChange = (index: number, value: string) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };
    return (
        <div className={'pt-3 pb-3'}>
            <h3>Task {questionNumber}: {question}</h3>
            <h4>Which paragraph</h4>
            <ul>
                {titles.map((title, index) => (
                    <li key={index}>
                        <p>{title}</p>
                    </li>
                ))}
            </ul>
            <ul>
                {paragraphs.map((paragraph, index) => (
                    <li key={index + 2}>
                        <p>{paragraph}<input type="text" value={answers[index]} className={'m-1'}
                                             onChange={(e) => handleAnswerChange(index, e.target.value)}/></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TitlingTaskComp;
