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
        <div>
            <ul className={'large-window'} style={{textAlign: 'justify'}}>
                {titles.map((title, index) => (
                    <li key={index}>
                        <p>{title}</p>
                    </li>
                ))}
            </ul>
            <h4>Which paragraph</h4>

            <ul className={'ul-window'} style={{paddingTop: '14px'}}>
                {paragraphs.map((paragraph, index) => (
                    <li key={index + 2}>
                        <p>{paragraph} - <input id={'task' + questionNumber}
                                                name={'task' + questionNumber}
                                                type="text"
                                                value={answers[index]}
                                                placeholder={'Answer'}
                                                className={'test-input m-1'}
                                                onChange={(e) => handleAnswerChange(index, e.target.value)}/></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TitlingTaskComp;
