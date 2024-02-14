import React, {useContext, useState} from 'react';
import {UserContext} from "../../contexts/UserContext";

interface Props {
    questionNumber: number;
    emailText: string;
}

const EmailTaskComp: React.FC<Props> = ({
                                            questionNumber,
                                            emailText,
                                        }) => {
    const [answer, setAnswer] = useState<string>('');
    const {user} = useContext(UserContext); // Use UserContext

    const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAnswer(event.target.value);
    };


    return (
        <div className={'pt-3 px-3 pb-3'}>
            <div className="p-2">
                <div dangerouslySetInnerHTML={{__html: emailText}}/>
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
                    className={'test-input'}
                    placeholder={'Write your email here...'}
                    disabled={user?.subscriptionType === 'Free'}
                />
                {user?.subscriptionType === 'Free' && <textarea
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
                    className={'test-input'}
                    placeholder={'Write your email here...'}
                    hidden
                />}
            </div>
        </div>
    );
};

export default EmailTaskComp;
