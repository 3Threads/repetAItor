import React, {useState} from 'react';
import {Image} from 'react-bootstrap';

interface Props {
    questionNumber: number;
}

const EmailTaskComp: React.FC<Props> = ({
                                            questionNumber
                                        }) => {
    const [answer, setAnswer] = useState<string>('');

    const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAnswer(event.target.value);
    };


    return (
        <div className={'pt-3 px-3 pb-3'}>
            <div className="image-parent p-2">
                {/* Use require to dynamically import the image */}
                <Image src={require(`../../images/2021-var1.png`)} alt={"Question Image"}
                       className="centered-image"/>
            </div>
            <div className={"m-2"} style={{paddingTop: '20px'}}>
                <textarea
                    id={'task' + questionNumber}
                    name={'task' + questionNumber}
                    value={answer}
                    onChange={handleAnswerChange}
                    rows={4}
                    style={{
                        width: '80%',
                        marginLeft: '10%',
                        padding: '8px',
                        fontSize: '18px',
                        borderRadius: '4px',
                        // border: '1px solid #ccc',
                    }}
                    className = {'test-input'}
                    placeholder={'Write your email here...'}
                />
            </div>
        </div>
    );
};

export default EmailTaskComp;