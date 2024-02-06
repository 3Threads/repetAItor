export interface QuestionType {
}

export class MultipleChoiceQuest implements QuestionType {
    constructor(
        public question: string,
        public options: string[],
        public correct_option: string
    ) {
    }
}

export class TitlingQuest implements QuestionType {
    constructor(
        public titles: string[],
        public paragraphs: string[],
        public correct_titles: { [key: number]: string[] }
    ) {
    }
}

export class FillTextQuest implements QuestionType {
    constructor(
        public text: string,
        public options: string[],
        public correct_answers: string[]
    ) {
    }
}

export class FillWithArticlesQuest implements QuestionType {
    constructor(
        public text: string,
        public correct_answers: string[][]
    ) {
    }
}

export class EmailQuest implements QuestionType {
    constructor(public img_link: string) {
    }
}

export class EssayQuest implements QuestionType {
    constructor(public title: string) {
    }
}

export type Question = MultipleChoiceQuest | TitlingQuest | FillTextQuest | FillWithArticlesQuest | EmailQuest | EssayQuest;
