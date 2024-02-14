import React, {useContext, useEffect, useState} from 'react'; // Import useContext
import {Accordion} from "react-bootstrap";
import {
    EmailTask,
    EssayTask,
    FillTextTask,
    FillWithArticlesTask,
    ListeningTask,
    ReadAndWriteTask,
    Task,
    TitlingTask
} from "../../interfaces/tasks";
import FillTextTaskComp from "../taskComponents/FillTextTaskComp";
import EmailTaskComp from "../taskComponents/EmailTaskComp";
import EssayTaskComp from "../taskComponents/EssayTaskComp";
import {
    EmailQuestion,
    EssayQuestion,
    FillTextQuestion,
    FillWithArticlesQuestion,
    MultipleChoiceQuestion,
    TitlingQuestion
} from "../../interfaces/questions";
import MultipleQuestionTaskComp from "../taskComponents/MultipleQuestionTaskComp";
import TitlingTaskComp from "../taskComponents/TitlingTaskComp";
import {useParams} from "react-router-dom";
import {Loader} from "@mantine/core";
import {UserContext} from "../../contexts/UserContext";

interface Props {
    setTaskResults: React.Dispatch<React.SetStateAction<any[]>>;
    setUserAnswers: React.Dispatch<React.SetStateAction<string[][]>>;
}

function TasksList({setTaskResults, setUserAnswers}: Props) {
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
                const curr_task = task.task as ListeningTask;
                const questions = curr_task.questions as MultipleChoiceQuestion[];

                created_task = new ListeningTask(questions);
            } else if (task.task_type === "titling") {
                const curr_task = task.task as TitlingTask;
                const questions = curr_task.questions as TitlingQuestion[];

                created_task = new TitlingTask(questions, curr_task.paragraphs);
            } else if (task.task_type === "reading") {
                const curr_task = task.task as ReadAndWriteTask;
                const questions = curr_task.questions as MultipleChoiceQuestion[];

                created_task = new ReadAndWriteTask(questions, curr_task.text);
            } else if (task.task_type === "filling") {
                const curr_task = task.task as FillTextTask;
                const questions = curr_task.questions as FillTextQuestion[];

                created_task = new FillTextTask(questions, curr_task.text, curr_task.options);
            } else if (task.task_type === "articles") {
                const curr_task = task.task as FillWithArticlesTask;
                const questions = curr_task.questions as FillWithArticlesQuestion[];

                created_task = new FillWithArticlesTask(questions, curr_task.text);
            } else if (task.task_type === "email") {
                const curr_task = task.task as EmailTask;
                const questions = curr_task.questions as EmailQuestion[];

                created_task = new EmailTask(questions, curr_task.text);
            } else if (task.task_type === "essay") {
                const curr_task = task.task as EssayTask;
                const questions = curr_task.questions as EssayQuestion[];

                created_task = new EssayTask(questions, curr_task.title);
            } else {
                console.log("Wrong task type");
                created_task = task.task;
            }
            return new Task(task.task_number, task.task_title, task.point, task.task_type, created_task);
        })
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        try {
            const response = await fetch('http://localhost:8000/tasks', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                console.log('Network response was not ok');
                return;
            }
            // Handle successful response
            const data = await response.json();
            setTaskResults(data.points);
            setUserAnswers(data.answers);
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
                                        <div style={{display: 'inline-block', marginRight: '10px', marginBottom:'10px'}}>
                                            Task {task.task_number}
                                        </div>
                                        <div style={{display: 'inline-block', color: '#8540f5'}}>
                                            ({task.point} ქულა)
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
                                                const parsed_task = task.task as FillTextTask;
                                                return (
                                                    <FillTextTaskComp
                                                        questionNumber={task.task_number}
                                                        questionText={parsed_task.text}
                                                        splitter={"……"}
                                                        options={parsed_task.options}
                                                    />
                                                );
                                            case 'email':
                                                const email_task: EmailTask = task.task as EmailTask
                                                return <EmailTaskComp questionNumber={task.task_number}
                                                                      emailText={email_task.text}/>
                                            case 'essay':
                                                const essay_task = task.task as EssayTask;
                                                return <EssayTaskComp questionNumber={task.task_number}
                                                                      essayTitle={essay_task.title}/>
                                            case 'articles':
                                                const fill_with_articles_task = task.task as FillWithArticlesTask;
                                                return <FillTextTaskComp questionNumber={task.task_number}
                                                                         questionText={fill_with_articles_task.text}
                                                                         splitter={"….."}
                                                                         options={[]}/>

                                            case 'reading':
                                                const read_and_write_task = task.task as ReadAndWriteTask;
                                                const read_and_write_questions = read_and_write_task.getQuestions() as MultipleChoiceQuestion[];
                                                return <MultipleQuestionTaskComp
                                                    questionNumber={task.task_number}
                                                    text={read_and_write_task.text}
                                                    questions={read_and_write_questions}/>

                                            case 'listening':
                                                const listening_task = task.task as ListeningTask;
                                                const listening_questions = listening_task.getQuestions() as MultipleChoiceQuestion[];
                                                return <MultipleQuestionTaskComp
                                                    questionNumber={task.task_number}
                                                    text={""}
                                                    questions={listening_questions}/>

                                            case 'titling':
                                                const titling_task = task.task as TitlingTask;
                                                const titling_questions = titling_task.getQuestions() as TitlingQuestion[];
                                                const paragraphs = titling_questions.map((question: TitlingQuestion) => question.title);
                                                return <TitlingTaskComp questionNumber={task.task_number}
                                                                        question={task.task_title}
                                                                        titles={titling_task.paragraphs}
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
