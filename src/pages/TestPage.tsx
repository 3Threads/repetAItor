import React, {useEffect, useState} from 'react';
import {Header} from "../components/Header";
import {Container} from "react-bootstrap";
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
import {
    EmailQuest,
    EssayQuest,
    FillTextQuest,
    FillWithArticlesQuest,
    MultipleChoiceQuest,
    TitlingQuest
} from "../interfaces/questions";
import EmailTaskComp from "../components/EmailTaskComp";
import EssayTaskComp from "../components/EssayTaskComp";
import MultipleQuestionTaskComp from "../components/MultipleQuestionTaskComp";
import TitlingTaskComp from "../components/TitlingTaskComp";


function TestPage() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/tasks/2021/1/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const parsedTasks: Task[] = parseTasks(data); // Function to parse the response into Task instances
                setTasks(parsedTasks);
                // console.log(parsedTasks);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const parseTasks = (responseData: any[]): Task[] => {
        return responseData.map((task: any) => {
            let created_task = null;
            if (task.task_type === "listening") {
                const questions = task.task.questions;
                questions.map((question: any) => {
                    return new MultipleChoiceQuest(question.question, question.options, question.correct_option);
                });
                created_task = new ListeningTask(questions);
            } else if (task.task_type === "titling") {
                const questions = task.task.question;
                const question = new TitlingQuest(questions.titles, questions.paragraphs, questions.correct_paragraphs);

                created_task = new TitlingTask(question);
            } else if (task.task_type === "readAndWrite") {
                const questions = task.task.questions;
                questions.map((question: any) => {
                    return new MultipleChoiceQuest(question.question, question.options, question.correct_option);
                });
                created_task = new ReadAndWriteTask(task.task.text, questions);
            } else if (task.task_type === "fillText") {
                const questions = task.task.question;
                const question = new FillTextQuest(questions.text, questions.options, questions.correct_answers);

                created_task = new FillTextTask(question);
            } else if (task.task_type === "fillWithArticles") {
                const questions = task.task.question;
                const question = new FillWithArticlesQuest(questions.text, questions.correct_answers);

                created_task = new FillWithArticlesTask(question);
            } else if (task.task_type === "email") {
                const questions = task.task.question;
                const question = new EmailQuest(questions.img_link);

                created_task = new EmailTask(question);
            } else if (task.task_type === "essay") {
                const questions = task.task.question;
                const question = new EssayQuest(questions.title);

                created_task = new EssayTask(question);
            } else {
                created_task = task.task;
            }
            return new Task(task.task_number, task.task_title, task.point, task.task_type, created_task);
        })
    };

    return (
        <div>
            <Header/>
            <Container>
                {tasks.map((task: Task) => {
                    switch (task.task_type) {
                        case 'fillText':
                            const parsed_task = task.task as FillTextTask
                            const question = parsed_task.question as FillTextQuest;
                            return <FillTextTaskComp questionNumber={task.task_number}
                                                     questionPrompt={task.task_title}
                                                     questionText={question.text} splitter={"……"}
                                                     options={question.options}/>
                        case 'email':
                            const email_task = task.task as EmailTask;
                            const email_question = email_task.question as EmailQuest;
                            return <EmailTaskComp questionNumber={task.task_number} questionPrompt={task.task_title}
                                                  image_link={email_question.img_link}/>
                        case 'essay':
                            const essay_task = task.task as EssayTask;
                            const essay_question = essay_task.question as EssayQuest;
                            return <EssayTaskComp questionNumber={task.task_number} questionPrompt={task.task_title}
                                                  essayTitle={essay_question.title}/>
                        case 'fillWithArticles':
                            const fill_with_articles_task = task.task as FillWithArticlesTask;
                            const fill_with_articles_question = fill_with_articles_task.question as FillWithArticlesQuest;
                            return <FillTextTaskComp questionNumber={task.task_number}
                                                     questionPrompt={task.task_title}
                                                     questionText={fill_with_articles_question.text}
                                                     splitter={"….."}
                                                     options={[]}/>

                        case 'readAndWrite':
                            const read_and_write_task = task.task as ReadAndWriteTask;
                            const read_and_write_question = read_and_write_task.questions as MultipleChoiceQuest[];
                            return <MultipleQuestionTaskComp questionNumber={task.task_number}
                                                             question={task.task_title} text={read_and_write_task.text}
                                                             questions={read_and_write_question}/>

                        case 'listening':
                            const listening_task = task.task as ListeningTask;
                            const listening_question = listening_task.questions as MultipleChoiceQuest[];
                            return <MultipleQuestionTaskComp questionNumber={task.task_number}
                                                             question={task.task_title} text={""}
                                                             questions={listening_question}/>

                        case 'titling':
                            const titling_task = task.task as TitlingTask;
                            const titling_question = titling_task.question as TitlingQuest;
                            return <TitlingTaskComp questionNumber={task.task_number} question={task.task_title}
                                                    titles={titling_question.titles}
                                                    paragraphs={titling_question.paragraphs}/>
                    }


                    return <div>Task {task.task_number}: {task.task_title}</div>

                })}


            </Container>
        </div>
    )
        ;
}

export default TestPage;
