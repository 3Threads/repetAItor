import React, {useEffect, useState} from 'react';
import {Header} from "../components/Header";
import {Col, Container, Row} from "react-bootstrap";
import FillTextTaskComp from "../components/FillTextTaskComp";
import {
    EmailTask,
    EssayTask,
    FillTextTask,
    FillWithArticlesTask,
    ListeningTask,
    ReadAndWriteTask,
    Task,
    TitlingTask
} from "../interfaces/tasks";
import EmailTaskComp from "../components/EmailTaskComp";
import EssayTaskComp from "../components/EssayTaskComp";
import MultipleQuestionTaskComp from "../components/MultipleQuestionTaskComp";
import TitlingTaskComp from "../components/TitlingTaskComp";
import {useParams} from "react-router-dom";
import {
    EmailQuestion,
    EssayQuestion,
    FillTextQuestion,
    FillWithArticlesQuestion,
    MultipleChoiceQuestion,
    TitlingQuestion
} from "../interfaces/questions";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';


function TestPage() {
    const {subject} = useParams();
    const {year} = useParams();
    const {variant} = useParams();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskResults, setTaskResults] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/tasks/english/2021/1/');
                if (!response.ok) {
                    console.log('Network response was not ok');
                    return;
                }
                const data = await response.json();
                const parsedTasks: Task[] = parseTasks(data); // Function to parse the response into Task instances
                setTasks(parsedTasks);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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

                created_task = new TitlingTask(questions, curr_task.titles);
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

                created_task = new EmailTask(questions, curr_task.imgLink);
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
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <Header/>
            <Container>
                <form onSubmit={handleSubmit}>
                    <input type={"hidden"} value={subject} name={"subject"}/>
                    <input type={"hidden"} value={year} name={"year"}/>
                    <input type={"hidden"} value={variant} name={"variant"}/>
                    <ul>
                        {tasks.map((task: Task, index: number) => {
                            return <li key={index}>
                                <details>
                                    <summary>
                                        <div
                                            className={'btn btn-primary full-width mb-2 mt-2'}
                                            style={{
                                                textAlign: 'left',
                                                fontSize: " 20px"
                                            }}>
                                            <Row>
                                                <Col xs={10} ms={11}>
                                                    Task {task.task_number} {task.task_title}
                                                </Col>
                                                <Col xs={2} ms={1} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-end'
                                                }}>
                                                    <FontAwesomeIcon icon={faCaretDown} beat size={"2xl"}/>
                                                </Col>
                                            </Row>
                                        </div>
                                    </summary>
                                    {(() => {
                                        switch (task.task_type) {
                                            case 'filling':
                                                const parsed_task = task.task as FillTextTask;
                                                return (
                                                    <FillTextTaskComp
                                                        questionNumber={task.task_number}
                                                        questionPrompt={task.task_title}
                                                        questionText={parsed_task.text}
                                                        splitter={"……"}
                                                        options={parsed_task.options}
                                                    />
                                                );
                                            case 'email':
                                                const email_task = task.task as EmailTask;
                                                return <EmailTaskComp questionNumber={task.task_number}
                                                                      questionPrompt={task.task_title}
                                                                      image_link={email_task.imgLink}/>
                                            case 'essay':
                                                const essay_task = task.task as EssayTask;
                                                return <EssayTaskComp questionNumber={task.task_number}
                                                                      questionPrompt={task.task_title}
                                                                      essayTitle={essay_task.title}/>
                                            case 'articles':
                                                const fill_with_articles_task = task.task as FillWithArticlesTask;
                                                return <FillTextTaskComp questionNumber={task.task_number}
                                                                         questionPrompt={task.task_title}
                                                                         questionText={fill_with_articles_task.text}
                                                                         splitter={"….."}
                                                                         options={[]}/>

                                            case 'reading':
                                                const read_and_write_task = task.task as ReadAndWriteTask;
                                                const read_and_write_questions = read_and_write_task.getQuestions() as MultipleChoiceQuestion[];
                                                return <MultipleQuestionTaskComp questionNumber={task.task_number}
                                                                                 question={task.task_title}
                                                                                 text={read_and_write_task.text}
                                                                                 questions={read_and_write_questions}/>

                                            case 'listening':
                                                const listening_task = task.task as ListeningTask;
                                                const listening_questions = listening_task.getQuestions() as MultipleChoiceQuestion[];
                                                return <MultipleQuestionTaskComp questionNumber={task.task_number}
                                                                                 question={task.task_title} text={""}
                                                                                 questions={listening_questions}/>

                                            case 'titling':
                                                const titling_task = task.task as TitlingTask;
                                                const titling_questions = titling_task.getQuestions() as TitlingQuestion[];
                                                const paragraphs = titling_questions.map((question: TitlingQuestion) => question.paragraph);
                                                return <TitlingTaskComp questionNumber={task.task_number}
                                                                        question={task.task_title}
                                                                        titles={titling_task.titles}
                                                                        paragraphs={paragraphs}/>
                                            default:
                                                return <div>Task {task.task_number}: {task.task_title}</div>;
                                        }
                                    })()}
                                </details>
                            </li>
                        })}
                    </ul>
                    <button type={"submit"} className={'btn-sign-in mt-2 m-5'}>Complete</button>
                </form>
                {taskResults.length !== 0 && <h1 className="mt-5">Final
                    Result: {taskResults.reduce((accumulator, taskResult) => {
                        return accumulator + parseInt(taskResult[0]);
                    }, 0)}</h1>
                }
                <ul className="list-group mt-3">
                    {taskResults.map((taskResult, index) => (
                        <li key={index} className="list-group-item bg-dark text-white">
                            <h5 className="mb-3">Task {index + 1} Results:</h5>
                            <p><strong>Total Points:</strong> {taskResult[0]}</p>
                            {Object.keys(taskResult[1]).length !== 1 &&
                                <div className="mb-3">
                                    <strong>Mistakes:</strong>
                                    <ul className="list-group mt-2">
                                        {Object.entries(taskResult[1]).map(([subtaskId, result], subindex) => (
                                            <li key={subindex} className="list-group-item bg-dark text-white">
                                                Subtask {(parseInt(subtaskId) + 1) + ": " + result}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );

}

export default TestPage;
