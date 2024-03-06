// Define TaskType interface
import {Question} from "./questions";

export interface Task {
    getQuestions(): Question[];

}

// Define TaskType class
abstract class TaskTypeImpl implements Task {
    protected constructor(
        public questions: Question[],
        public task_id: number,
        public task_number: number,
        public task_title: string,
        public task_point: number,
        public task_type: string,
        public exam_id: number
    ) {
    }

    // Implement getQuestions method
    getQuestions(): Question[] {
        return this.questions;
    }
}

// Define ListeningTask class
export class ListeningTask extends TaskTypeImpl {
    public text_title: string;
    public text: string;
    constructor(
        task_id: number,
        task_number: number,
        task_title: string,
        task_point: number,
        task_type: string,
        exam_id: number,
        questions: Question[],
        text_title: string,
        text: string
       ) {
            super(questions, task_id, task_number, task_title, task_point, task_type, exam_id);
            this.text_title = text_title;
            this.text = text;
    }

}

export class MatchParagraphsTask extends TaskTypeImpl {
    public text_title: string;
    public paragraphs: string[];
    constructor(
        task_id: number,
        task_number: number,
        task_title: string,
        task_point: number,
        task_type: string,
        exam_id: number,
        questions: Question[],
        text_title: string,
        paragraphs: string[]
    ) {
        super(questions, task_id, task_number, task_title, task_point, task_type, exam_id);
        this.text_title = text_title;
        this.paragraphs = paragraphs;
    }
}

export class ReadingTask extends TaskTypeImpl {
    public text_title: string;
    public text: string;
    constructor(
        task_id: number,
        task_number: number,
        task_title: string,
        task_point: number,
        task_type: string,
        exam_id: number,
        questions: Question[],
        text_title: string,
        text: string
    ) {
        super(questions, task_id, task_number, task_title, task_point, task_type, exam_id);
        this.text_title = text_title;
        this.text = text;
    }
}

// Define FillTextTask class
export class FillTextTask extends TaskTypeImpl {
    public text_title: string;
    public text: string;
    public options: string[];

    constructor(
        task_id: number,
        task_number: number,
        task_title: string,
        task_point: number,
        task_type: string,
        exam_id: number,
        questions: Question[],
        text_title: string,
        text: string,
        options: string[]
    ) {
        super(questions, task_id, task_number, task_title, task_point, task_type, exam_id);
        this.text_title = text_title;
        this.text = text;
        this.options = options;
    }
}

// Define FillWithArticlesTask class
export class FillTextWithoutOptionsTask extends TaskTypeImpl {
    public text_title: string;
    public text: string;
    constructor(
        task_id: number,
        task_number: number,
        task_title: string,
        task_point: number,
        task_type: string,
        exam_id: number,
        questions: Question[],
        text_title: string,
        text: string
    ) {
        super(questions, task_id, task_number, task_title, task_point, task_type, exam_id);
        this.text_title = text_title;
        this.text = text;
    }
}

// Define EmailTask class
export class ConversationTask extends TaskTypeImpl {
    public text_title: string;
    public text: string;
    public dialogue: string[];
    constructor(
        task_id: number,
        task_number: number,
        task_title: string,
        task_point: number,
        task_type: string,
        exam_id: number,
        questions: Question[],
        text_title: string,
        text: string,
        dialogue: string[]
    ) {
        super(questions, task_id, task_number, task_title, task_point, task_type, exam_id);
        this.text_title = text_title;
        this.text = text;
        this.dialogue = dialogue;
    }
}

export class EmailTask extends TaskTypeImpl {
    constructor(
        task_id: number,
        task_number: number,
        task_title: string,
        task_point: number,
        task_type: string,
        exam_id: number,
        questions: Question[],
    ) {
        super(questions, task_id, task_number, task_title, task_point, task_type, exam_id);
    }

}

// Define EssayTask class
export class EssayTask extends TaskTypeImpl {
    constructor(
        task_id: number,
        task_number: number,
        task_title: string,
        task_point: number,
        task_type: string,
        exam_id: number,
        questions: Question[],
    ) {
        super(questions, task_id, task_number, task_title, task_point, task_type, exam_id);
    }
}

