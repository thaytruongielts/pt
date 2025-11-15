
import React from 'react';
// FIX: Import question components and update type imports to handle different question types.
import type { SectionData, UserAnswers, Results, Question } from '../types';
import MultipleChoiceQuestionComponent from './MultipleChoiceQuestion';
import FillInTheBlankQuestionComponent from './FillInTheBlankQuestion';
import SentenceCombinationQuestionComponent from './SentenceCombinationQuestion';

interface SectionProps {
  section: SectionData;
  sectionIndex: number;
  userAnswers: UserAnswers;
  // FIX: Update onAnswerChange to handle string arrays for fill-in-the-blank questions.
  onAnswerChange: (questionId: string, answer: string | string[]) => void;
  results: Results;
  showResults: boolean;
}

const Section: React.FC<SectionProps> = ({ section, sectionIndex, userAnswers, onAnswerChange, results, showResults }) => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-800 mb-6 border-b pb-4 border-slate-200">{section.title}</h2>
      <div className="space-y-8">
        {section.questions.map((question, questionIndex) => {
          const id = `s${sectionIndex}-q${questionIndex}`;
          // FIX: Render the correct component based on the question type.
          switch (question.type) {
            case 'multiple-choice':
              return (
                <MultipleChoiceQuestionComponent
                  key={id}
                  question={question}
                  questionNumber={questionIndex + 1}
                  userAnswer={userAnswers[id] as string | undefined}
                  onAnswerChange={(answer) => onAnswerChange(id, answer)}
                  isCorrect={results[id]}
                  showResult={showResults}
                />
              );
            case 'fill-in-the-blank':
              return (
                <FillInTheBlankQuestionComponent
                  key={id}
                  question={question}
                  questionNumber={questionIndex + 1}
                  userAnswer={userAnswers[id] as string[] | undefined}
                  onAnswerChange={(answers) => onAnswerChange(id, answers)}
                  isCorrect={results[id]}
                  showResult={showResults}
                />
              );
            case 'sentence-combination':
              return (
                <SentenceCombinationQuestionComponent
                  key={id}
                  question={question}
                  questionNumber={questionIndex + 1}
                  userAnswer={userAnswers[id] as string | undefined}
                  onAnswerChange={(answer) => onAnswerChange(id, answer)}
                  isCorrect={results[id]}
                  showResult={showResults}
                />
              );
            default:
              const _exhaustiveCheck: never = question;
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default Section;
