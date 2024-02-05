import React, {useState} from 'react';

interface Props {
    questionNumber: number;
    question: string;
    choices: string[];
}

const MultipleChoiceQuestion: React.FC<Props> = ({question, choices, questionNumber}) => {
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

    const handleChoiceSelect = (choice: string) => {
        setSelectedChoice(choice);
    };

    return (
        <div>
            <h3>Task {questionNumber}: {question}</h3>
            <ul>
                {choices.map((choice, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="radio"
                                value={choice}
                                checked={selectedChoice === choice}
                                onChange={() => handleChoiceSelect(choice)}
                            />
                            {choice}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MultipleChoiceQuestion;
