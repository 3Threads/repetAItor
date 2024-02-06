import {QuestionType} from './questions';

interface TaskType {
    getQuestions(): QuestionType[];

    getQuestion(): QuestionType;
}

export class ListeningTask implements TaskType {
    constructor(public questions: QuestionType[]) {

    }

    getQuestions(): QuestionType[] {
        return this.questions;
    }

    getQuestion(): QuestionType {
        return this.questions[0];
    }
}

export class TitlingTask implements TaskType {
    constructor(public question: QuestionType) {
    }

    getQuestion(): QuestionType {
        return this.question;
    }

    getQuestions(): QuestionType[] {
        return [];
    }
}

export class ReadAndWriteTask implements TaskType {
    constructor(public text: string, public questions: QuestionType[]) {
    }

    getQuestions(): QuestionType[] {
        return this.questions;
    }

    getQuestion(): QuestionType {
        return this.questions[0];
    }
}

export class FillTextTask implements TaskType {
    constructor(public question: QuestionType) {
    }

    getQuestions(): QuestionType[] {
        return [this.question];
    }

    getQuestion(): QuestionType {
        return this.question;
    }
}

export class FillWithArticlesTask implements TaskType {
    constructor(public question: QuestionType) {
    }

    getQuestions(): QuestionType[] {
        return [this.question];
    }

    getQuestion(): QuestionType {
        return this.question;
    }
}

export class EmailTask implements TaskType {
    constructor(public question: QuestionType) {
    }

    getQuestions(): QuestionType[] {
        return [this.question];
    }

    getQuestion(): QuestionType {
        return this.question;
    }
}

export class EssayTask implements TaskType {
    constructor(public question: QuestionType) {
    }

    getQuestions(): QuestionType[] {
        return [this.question];
    }

    getQuestion(): QuestionType {
        return this.question;
    }
}

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