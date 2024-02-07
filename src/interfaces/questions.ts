export interface QuestionType {
}


export class MultipleChoiceQuestion implements QuestionType {
    constructor(
        public question: string,
        public options: string[],
        public correctOption: string
    ) {
    }

}

// Define the TitlingQuestion export class
export class TitlingQuestion implements QuestionType {
    constructor(
        public paragraph: string,
        public correctTitles: string[]
    ) {
    }

}

// Define the FillTextQuestion export class
export class FillTextQuestion implements QuestionType {
    constructor(public correctAnswer: string) {
    }

}

// Define the FillWithArticlesQuestion export class
export class FillWithArticlesQuestion implements QuestionType {
    constructor(public correctAnswers: string[]) {
    }

}

// Define the EmailQuestion export class
export class EmailQuestion implements QuestionType {

}

// Define the EssayQuestion export class
export class EssayQuestion implements QuestionType {

}