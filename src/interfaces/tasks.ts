// Define TaskType interface
import {QuestionType} from "./questions";

export interface TaskType {
    questions: QuestionType[];

    getQuestions(): QuestionType[];
}

// Define TaskType class
abstract class TaskTypeImpl implements TaskType {
    constructor(public questions: QuestionType[]) {
    }

    // Implement getQuestions method
    getQuestions(): QuestionType[] {
        return this.questions;
    }
}

// Define ListeningTask class
export class ListeningTask extends TaskTypeImpl {
}

// Define TitlingTask class
export class TitlingTask extends TaskTypeImpl {

    constructor(questions: QuestionType[], public titles: string[]) {
        super(questions);
    }
}

// Define ReadAndWriteTask class
export class ReadAndWriteTask extends TaskTypeImpl {
    constructor(questions: QuestionType[], public text: string) {
        super(questions);
    }
}

// Define FillTextTask class
export class FillTextTask extends TaskTypeImpl {
    constructor(questions: QuestionType[], public text: string, public options: string[]) {
        super(questions);
    }
}

// Define FillWithArticlesTask class
export class FillWithArticlesTask extends TaskTypeImpl {
    constructor(questions: QuestionType[], public text: string) {
        super(questions);
    }
}

// Define EmailTask class
export class EmailTask extends TaskTypeImpl {
    constructor(questions: QuestionType[], public imgLink: string) {
        super(questions);
    }
}

// Define EssayTask class
export class EssayTask extends TaskTypeImpl {
    constructor(questions: QuestionType[], public title: string) {
        super(questions);
    }
}

// Define Task interface
export class Task {
    constructor(
        public task_number: number,
        public task_title: string,
        public point: number,
        public task_type: string,
        public task: TaskType
    ) {
    }
}