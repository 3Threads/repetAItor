import React, {useState} from 'react';

interface Props {
    questionNumber: number;
    questionPrompt: string;
    questionText: string;
    splitter: string;
    options: string[];
}

const FillInTheBlanksQuestion: React.FC<Props> = ({
                                                      questionNumber,
                                                      questionPrompt,
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
        <div>
            <h3>Task {questionNumber}: {questionPrompt}</h3>
            <div className={'p-2'}>
                {options.map((option, index) => (
                    <label className={'p-1'}>{String.fromCharCode(65 + index)}). {option}</label>
                ))}
            </div>
            <form>
                <p>{questionParts.map((questionPart, index) => {
                    if (index === questionParts.length - 1) {
                        return <span key={index}>{questionPart}</span>
                    } else {
                        return <span key={index}>{questionPart} <input type="text" value={answers[index]} className={'m-1'}
                                                                       onChange={(e) => handleAnswerChange(index, e.target.value)}/> </span>
                    }
                })}</p>
            </form>
        </div>
    );
};

export default FillInTheBlanksQuestion;
