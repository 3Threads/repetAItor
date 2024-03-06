import React, {useContext, useEffect, useState} from 'react'; // Import useContext
import {Accordion} from "react-bootstrap";
import {
    ConversationTask,
    EmailTask,
    EssayTask,
    FillTextTask,
    FillTextWithoutOptionsTask,
    ListeningTask,
    MatchParagraphsTask,
    ReadingTask,
    Task,
} from "../../interfaces/tasks";
import FillTextTaskComp from "../taskComponents/FillTextTaskComp";
import EmailTaskComp from "../taskComponents/EmailTaskComp";
import EssayTaskComp from "../taskComponents/EssayTaskComp";
import {EmailQuestion, EssayQuestion, MultipleChoiceQuestion, OpenQuestion,} from "../../interfaces/questions";
import MultipleQuestionTaskComp from "../taskComponents/MultipleQuestionTaskComp";
import TitlingTaskComp from "../taskComponents/TitlingTaskComp";
import {useParams} from "react-router-dom";
import {Loader} from "@mantine/core";
import {UserContext} from "../../contexts/UserContext";

interface Props {
    setTaskResults: React.Dispatch<React.SetStateAction<any[]>>;
    setUserAnswers: React.Dispatch<React.SetStateAction<string[][]>>;
    setLoadingResults: React.Dispatch<React.SetStateAction<boolean>>;
}

function TasksList({setTaskResults, setUserAnswers, setLoadingResults}: Props) {
    const {subject} = useParams();
    const {year} = useParams();
    const {variant} = useParams();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const {user} = useContext(UserContext); // Use UserContext

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:8000/tasks/' + subject + '/' + year + '/' + variant);
                if (!response.ok) {
                    const data = await response.json();
                    console.log(data.message)
                    setLoading(false);
                    setErrorMessage(data.message);
                    setTasks([])
                    return;
                }
                const data = await response.json();
                console.log(data);
                const parsedTasks: Task[] = parseTasks(data.tasks); // Function to parse the response into Task instances
                setLoading(false);
                setErrorMessage("")
                setTasks(parsedTasks);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [subject, variant, year]);

    const parseTasks = (responseData: any[]): Task[] => {
        return responseData.map((task: any) => {
            let created_task;
            if (task.task_type === "listening") {
                created_task = task as ListeningTask;
                // const questions = curr_task.questions as MultipleChoiceQuestion[];

            } else if (task.task_type === "matching") {
                created_task = task as MatchParagraphsTask;
                // const questions = curr_task.questions as OpenQuestion[];
                //
                // created_task = new MatchParagraphsTask(questions, curr_task.paragraphs);
            } else if (task.task_type === "reading") {
                created_task = task as ReadingTask;
                // const questions = curr_task.questions as MultipleChoiceQuestion[];

                // created_task = new ReadAndWriteTask(questions, curr_task.text);
            } else if (task.task_type === "filling") {
                created_task = task as FillTextTask;
                // const questions = curr_task.questions as FillTextQuestion[];

                // created_task = new FillTextTask(questions, curr_task.text, curr_task.options);
            } else if (task.task_type === "filling_without_options") {
                created_task = task as FillTextWithoutOptionsTask;
                // const questions = curr_task.questions as FillWithArticlesQuestion[];
                //
                // created_task = new FillWithArticlesTask(questions, curr_task.text);
            } else if (task.task_type === "conversation") {
                created_task = task as ConversationTask;
                // const questions = curr_task.questions as FillWithArticlesQuestion[];
                //
                // created_task = new FillWithArticlesTask(questions, curr_task.text);
            } else if (task.task_type === "email") {
                created_task = task as EmailTask;
                // const questions = curr_task.questions as EmailQuestion[];
                //
                // created_task = new EmailTask(questions, curr_task.text);
            } else if (task.task_type === "essay") {
                created_task = task as EssayTask;
                // const questions = curr_task.questions as EssayQuestion[];

                // created_task = new EssayTask(questions, curr_task.title);
            } else {
                console.log("Wrong task type");
                created_task = task as Task;
            }
            return created_task;
        })
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        try {
            setLoadingResults(true);
            const response = await fetch('http://localhost:8000/tasks', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                console.log('Network response was not ok');
                setLoadingResults(false);
                return;
            }
            // Handle successful response
            const data = await response.json();
            console.log(data.points);
            setTaskResults(data.points);
            setUserAnswers(data.answers);
            setLoadingResults(false);

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <h2>წელი: {year}, ვარიანტი: {variant}</h2><br></br>
            {user ?
                <>{tasks.length > 0 && <form onSubmit={handleSubmit}>
                    <input type={"hidden"} value={subject} name={"subject"}/>
                    <input type={"hidden"} value={year} name={"year"}/>
                    <input type={"hidden"} value={variant} name={"variant"}/>
                    <Accordion alwaysOpen style={{paddingLeft: '0px'}}>
                        {tasks.map((task: Task, index: number) => {
                            return <Accordion.Item eventKey={"" + index} className={"btn-accordion"}>
                                <Accordion.Header
                                    className={"btn-task"}
                                >
                                    <div>
                                        <div style={{
                                            display: 'inline-block',
                                            marginRight: '10px',
                                            marginBottom: '10px'
                                        }}>
                                            Task {task.task_number}:
                                        </div>
                                        <div style={{display: 'inline-block', color: '#8540f5'}}>
                                            ({task.task_point} ქულა)
                                        </div>
                                        <div>
                                            {task.task_title}
                                        </div>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    {(() => {
                                        switch (task.task_type) {
                                            case 'filling':
                                                const parsed_task = task as FillTextTask;
                                                return (
                                                    <FillTextTaskComp
                                                        questionNumber={task.task_number}
                                                        questionText={parsed_task.text}
                                                        splitter={"……"}
                                                        options={parsed_task.options}
                                                    />
                                                );
                                            case 'email':
                                                const email_task: EmailTask = task as EmailTask
                                                const email_question = email_task.questions[0] as EmailQuestion;
                                                return <EmailTaskComp questionNumber={task.task_number}
                                                                      emailText={email_question.text}/>
                                            case 'essay':
                                                const essay_task = task as EssayTask;
                                                const essay_question = essay_task.questions[0] as EssayQuestion
                                                return <EssayTaskComp questionNumber={task.task_number}
                                                                      essayTitle={essay_question.essay_title}/>
                                            case 'filling_without_options':
                                                const fill_without_options_task = task as FillTextWithoutOptionsTask
                                                return <FillTextTaskComp questionNumber={task.task_number}
                                                                         questionText={fill_without_options_task.text}
                                                                         splitter={"….."}
                                                                         options={[]}/>

                                            case 'reading':
                                                const reading_task = task as ReadingTask;
                                                const reading_questions = reading_task.questions as MultipleChoiceQuestion[];
                                                return <MultipleQuestionTaskComp
                                                    questionNumber={task.task_number}
                                                    text={reading_task.text}
                                                    questions={reading_questions}/>

                                            case 'listening':
                                                const listening_task = task as ListeningTask;
                                                const listening_questions = listening_task.questions as MultipleChoiceQuestion[];
                                                return <MultipleQuestionTaskComp
                                                    questionNumber={task.task_number}
                                                    text={""}
                                                    questions={listening_questions}/>

                                            case 'matching':
                                                const matching_task = task as MatchParagraphsTask;
                                                const matching_questions = matching_task.questions as OpenQuestion[];
                                                const paragraphs = matching_questions.map((question: OpenQuestion) => question.question_text);
                                                return <TitlingTaskComp questionNumber={task.task_number}
                                                                        question={task.task_title}
                                                                        titles={matching_task.paragraphs}
                                                                        paragraphs={paragraphs}/>
                                            default:
                                                return <div>Task {task.task_number}: {task.task_title}</div>;
                                        }
                                    })()}
                                </Accordion.Body>
                            </Accordion.Item>

                        })}
                    </Accordion>
                    <button type={"submit"} className={'btn-sign-in mt-2 mb-5'}
                            style={{float: 'right'}}>დასრულება
                    </button>
                </form>
                }
                    {loading && <div style={{width: "100%", textAlign: "center"}}><Loader color="#8540f5"/></div>}
                    {errorMessage && <h1 style={{width: "100%", textAlign: "center"}}>{errorMessage}</h1>}
                </> : <h3>გთხოვთ შეხვიდეთ სისტემაში ტესტის დასაწერად</h3>
            }
        </>
    )
}

export default TasksList;
