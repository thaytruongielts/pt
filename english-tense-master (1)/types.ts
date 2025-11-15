
export interface MultipleChoiceQuestion {
  id: string;
  type: 'multiple-choice';
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// FIX: Add FillInTheBlankQuestion interface to be used in its component.
export interface FillInTheBlankQuestion {
  id: string;
  type: 'fill-in-the-blank';
  prompt: string;
  blanks: string[];
  explanation: string;
}

// FIX: Add SentenceCombinationQuestion interface to be used in its component.
export interface SentenceCombinationQuestion {
  id: string;
  type: 'sentence-combination';
  prompt: string;
  correctAnswer: string;
  explanation: string;
}

// FIX: Update Question to be a union of all possible question types.
export type Question = MultipleChoiceQuestion | FillInTheBlankQuestion | SentenceCombinationQuestion;

export interface SectionData {
  title: string;
  questions: Question[];
}

// FIX: Update UserAnswers to support string arrays for fill-in-the-blank questions.
export interface UserAnswers {
  [questionId: string]: string | string[];
}

export interface Results {
  [questionId: string]: boolean;
}
