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

    // Extract the questions
    const questions = emailText.match(/<br>\d\.(.*?)$/gm)?.map(q => q.replace(/<br>\d\./, ''));

    // Replace <b> tags with <span class="bordered-text"> tags
    let styledEmailText = emailText;
    if (questions) {
        let i = 0;
        styledEmailText = styledEmailText.replace(/<b>(.*?)<\/b>/g, function(match) {
            return `<span class="bordered-text" title="${questions[i++].trim()}">${match.slice(3, -4)}</span>`;
        });
    }

    return (
        <div>
            <div className="px-5 pb-3 pt-3" style={{textAlign:'justify'}}>
                <div dangerouslySetInnerHTML={{__html: styledEmailText}}/>
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
                    placeholder={'Write your essay here...'}
                    hidden
                />}
            </div>
        </div>
    );
};

export default EmailTaskComp;
