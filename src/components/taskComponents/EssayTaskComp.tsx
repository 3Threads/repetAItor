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
            <b><div style={{textAlign: 'justify'}}>{essayTitle}</div></b>
            <div className={"m-2"} style={{paddingTop: '20px'}}>
                <textarea
                    id={'task' + questionNumber}
                    name={'task' + questionNumber}
                    value={answer}
                    onChange={handleAnswerChange}
                    rows={10}
                    className={'test-input big-test-input'}
                    placeholder={user?.subscriptionType === 'Free' ? 'You need to upgrade to write your answer here...': 'Write your essay here...'}
                    disabled={user?.subscriptionType === 'Free'}
                />
                {user?.subscriptionType === 'Free' && <textarea
                    id={'task' + questionNumber}
                    name={'task' + questionNumber}
                    value={answer}
                    onChange={handleAnswerChange}
                    rows={10}
                    className={'test-input  big-test-input'}
                    placeholder={'Write your essay here...'}
                    hidden
                />}
            </div>
        </div>
    );
};

export default EssayTaskComp;
