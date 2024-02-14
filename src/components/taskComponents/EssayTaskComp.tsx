import React, {useContext, useState} from 'react';
import {UserContext} from "../../contexts/UserContext";

interface Props {
    questionNumber: number;
    essayTitle: string;
}

const EssayTaskComp: React.FC<Props> = ({
                                            questionNumber,
                                            essayTitle
                                        }) => {
    const [answer, setAnswer] = useState<string>('');
    const {user} = useContext(UserContext);

    const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAnswer(event.target.value);
    };


    return (
        <div className={'pt-3 px-3 pb-3'}>
            <b><h4>{essayTitle}</h4></b>
            <div className={"m-2"} style={{paddingTop: '20px'}}>
                <textarea
                    id={'task' + questionNumber}
                    name={'task' + questionNumber}
                    value={answer}
                    onChange={handleAnswerChange}
                    rows={10}
                    style={{
                        width: '80%',
                        marginLeft: '10%',
                        padding: '8px',
                        fontSize: '18px',
                        borderRadius: '4px',
                        // border: '1px solid #ccc',
                    }}
                    className={'test-input'}
                    placeholder={user?.subscriptionType === 'Free' ? 'You need to upgrade to write your answer here...': 'Write your essay here...'}
                    disabled={user?.subscriptionType === 'Free'}
                />
                {user?.subscriptionType === 'Free' && <textarea
                    id={'task' + questionNumber}
                    name={'task' + questionNumber}
                    value={answer}
                    onChange={handleAnswerChange}
                    rows={10}
                    style={{
                        width: '80%',
                        marginLeft: '10%',
                        padding: '8px',
                        fontSize: '18px',
                        borderRadius: '4px',
                        // border: '1px solid #ccc',
                    }}
                    className={'test-input'}
                    placeholder={'Write your essay here...'}
                    hidden
                />}
            </div>
        </div>
    );
};

export default EssayTaskComp;
