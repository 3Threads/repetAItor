import React, {useContext, useEffect, useState} from 'react';
import {Header} from "../components/commonComponents/Header";
import {Col, Container, Row} from "react-bootstrap";
import FillTextTaskComp from "../components/taskComponents/FillTextTaskComp";
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
import EmailTaskComp from "../components/taskComponents/EmailTaskComp";
import EssayTaskComp from "../components/taskComponents/EssayTaskComp";
import MultipleQuestionTaskComp from "../components/taskComponents/MultipleQuestionTaskComp";
import TitlingTaskComp from "../components/taskComponents/TitlingTaskComp";
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
import {
    faCaretDown,
    faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import {
    faCircleCheck,
    faCircleXmark,
} from '@fortawesome/free-regular-svg-icons';


function TasksPage() {
    const {subject} = useParams();
    const {year} = useParams();
    const {variant} = useParams();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskResults, setTaskResults] = useState([]);
    const [userAnswers, setUserAnswers] = useState<string[][]>([]);


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
            const user_answers = data.answers;
            setTaskResults(data.points);
            setUserAnswers(data.answers);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col xs={'1'}> </Col>
                    <Col xs={'10'} style={{paddingLeft: '12px', paddingTop: '20px'}}>
                        <form onSubmit={handleSubmit}>
                            <input type={"hidden"} value={subject} name={"subject"}/>
                            <input type={"hidden"} value={year} name={"year"}/>
                            <input type={"hidden"} value={variant} name={"variant"}/>
                            <ul style={{paddingLeft: '0px'}}>
                                {tasks.map((task: Task, index: number) => {
                                    return <li key={index}>
                                        <details>
                                            <summary>
                                                <div
                                                    className={'btn btn-task full-width mb-2 mt-2'}
                                                    style={{
                                                        textAlign: 'left',
                                                        fontSize: " 20px"
                                                    }}>
                                                    <Row>
                                                        <Col>
                                                            Task {task.task_number} {task.task_title}
                                                        </Col>
                                                        <Col xs={'auto'} ms={'auto'} style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'flex-end'
                                                        }}>
                                                            <FontAwesomeIcon icon={faCaretDown} size={"xl"}/>
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
                                                                questionText={parsed_task.text}
                                                                splitter={"……"}
                                                                options={parsed_task.options}
                                                            />
                                                        );
                                                    case 'email':
                                                        return <EmailTaskComp questionNumber={task.task_number}/>
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
                                <li key={index} className="text-white">
                                    <details>
                                        <summary>
                                            <div
                                                className={'btn btn-task full-width mb-2 mt-2'}
                                                style={{
                                                    textAlign: 'left',
                                                    fontSize: " 20px"
                                                }}>
                                                <Row>
                                                    <Col>
                                                        დავალება {index + 1} - ჯამური ქულა: {taskResult[0]}
                                                    </Col>
                                                    <Col xs={'auto'} ms={'auto'} style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'flex-end'
                                                    }}>
                                                        <FontAwesomeIcon icon={faCaretDown} size={"xl"}/>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </summary>
                                        {Object.keys(taskResult[1]).length !== 1 &&
                                            <div className="mb-3">
                                                <ul style={{
                                                    paddingTop: '6px',
                                                    paddingBottom: '6px',
                                                    paddingLeft: '32px',
                                                    paddingRight: '32px'
                                                }}>
                                                    <Row>

                                                        {Object.entries(taskResult[1]).map(([subtaskId, result], subindex) => (
                                                            <Col sm={12} lg={6} key={subindex}>

                                                                <li key={subindex}>
                                                                    {userAnswers[index][parseInt(subtaskId)] === result ? (
                                                                        <div style={{
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            paddingTop: '10px'
                                                                        }}>
                                                                            <FontAwesomeIcon icon="check-square"/>

                                                                            <FontAwesomeIcon icon={faCircleCheck}
                                                                                             className={'task-icon'}
                                                                                             size={'lg'}
                                                                                             color={'green'}
                                                                            />
                                                                            <div style={{paddingLeft: '10px'}}>
                                                                                <div>
                                                                                    შეკითხვა {(parseInt(subtaskId) + 1)}
                                                                                </div>
                                                                                <div style={{color: "dimgray"}}>
                                                                                    {"შენი პასუხი: " + (userAnswers[index][parseInt(subtaskId)] === '' ? 'N/A' : userAnswers[index][parseInt(subtaskId)])
                                                                                        + ", სწორი პასუხი: " + result}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ) : (
                                                                        <div style={{
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            paddingTop: '10px',
                                                                        }}>
                                                                            <FontAwesomeIcon icon={faCircleXmark}
                                                                                             className={'task-icon'}
                                                                                             size={'lg'}
                                                                                             color={'red'}
                                                                            />
                                                                            <div style={{paddingLeft: '10px'}}>
                                                                                <div>
                                                                                    შეკითხვა {(parseInt(subtaskId) + 1)}
                                                                                </div>
                                                                                <div style={{color: "dimgray"}}>
                                                                                    {"შენი პასუხი: " + (userAnswers[index][parseInt(subtaskId)] === '' ? 'N/A' : userAnswers[index][parseInt(subtaskId)])
                                                                                        + ", სწორი პასუხი: " + result}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </li>
                                                            </Col>
                                                        ))}
                                                    </Row>
                                                </ul>
                                            </div>
                                        }
                                    </details>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col xs={'1'}> </Col>
                </Row>
            </Container>
        </div>
    );

}

export default TasksPage;
