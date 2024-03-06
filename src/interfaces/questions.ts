export interface Question {
}


export class MultipleChoiceQuestion implements Question {
    constructor(
        public question_options: string[],
        public question_answer: string,
        public question_text: string
    ) {
    }

}

export class OpenQuestion implements Question {
    constructor(
        public correct_answers: string[],
        public question_text: string
    ) {
    }
}

// Define the EmailQuestion export class
export class EmailQuestion implements Question {
    constructor(
        public text_title: string,
        public text: string,
        public asking_information: string[]
    ) {
    }
}

// Define the EssayQuestion export class
export class EssayQuestion implements Question {
    constructor(
        public essay_title: string
    ) {
    }
}