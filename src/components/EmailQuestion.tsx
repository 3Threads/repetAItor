import React, {useState} from 'react';
import {Image} from 'react-bootstrap';

interface Props {
    questionNumber: number;
    questionPrompt: string;
    year: number;
    variant: number;
}

const EmailQuestion: React.FC<Props> = ({
                                            questionNumber,
                                            questionPrompt,
                                            year,
                                            variant
                                        }) => {
    const [answer, setAnswer] = useState<string>('');

    const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAnswer(event.target.value);
    };


    return (
        <div className={'pt-3 pb-3'}>
            <h3>Task {questionNumber}: {questionPrompt}</h3>
            <div className="image-parent p-2">
                {/* Use require to dynamically import the image */}
                <Image src={require(`../images/${year}-var${variant}.png`)} alt={`Image ${year} - variant ${variant}`}
                       className="centered-image"/>
            </div>
            <div className={"m-2"}>
                <textarea
                    id="email"
                    name="email"
                    value={answer}
                    onChange={handleAnswerChange}
                    rows={4}
                    style={{
                        width: '80%',
                        marginLeft: '10%',
                        padding: '8px',
                        fontSize: '18px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                    }}
                    placeholder={'Write your email here...'}
                />
            </div>
        </div>
    );
};

export default EmailQuestion;
