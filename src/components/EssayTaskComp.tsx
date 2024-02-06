import React, {useState} from 'react';

interface Props {
    questionNumber: number;
    questionPrompt: string;
    essayTitle: string;
}

const EssayTaskComp: React.FC<Props> = ({
                                            questionNumber,
                                            questionPrompt,
                                            essayTitle
                                        }) => {
    const [answer, setAnswer] = useState<string>('');

    const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAnswer(event.target.value);
    };


    return (
        <div className={'pt-3 pb-3'}>
            <h3>Task {questionNumber}: {questionPrompt}</h3>

            <b><h4>{essayTitle}</h4></b>
            <div className={"m-2"}>

                <textarea
                    id="email"
                    name="email"
                    value={answer}
                    onChange={handleAnswerChange}
                    rows={10}
                    style={{
                        width: '80%',
                        marginLeft: '10%',
                        padding: '8px',
                        fontSize: '18px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                    }}
                    placeholder={'Write your essay here...'}
                />
            </div>
        </div>
    );
};

export default EssayTaskComp;
