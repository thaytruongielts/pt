
import React from 'react';
import type { MultipleChoiceQuestion } from '../types';

interface Props {
  question: MultipleChoiceQuestion;
  questionNumber: number;
  userAnswer: string | undefined;
  onAnswerChange: (answer: string) => void;
  isCorrect: boolean | undefined;
  showResult: boolean;
}

const CheckIcon: React.FC<{className: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

const XIcon: React.FC<{className: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
  </svg>
);

const MultipleChoiceQuestionComponent: React.FC<Props> = ({ question, questionNumber, userAnswer, onAnswerChange, isCorrect, showResult }) => {
  return (
    <div className="p-4 border border-slate-200 rounded-lg">
      <p className="text-lg text-slate-700 mb-4">
        <span className="font-bold mr-2">{questionNumber}.</span> 
        {question.prompt.split('___').map((part, index) => 
            <React.Fragment key={index}>{part}{index < question.prompt.split('___').length - 1 && <span className="font-semibold text-sky-600">...</span>}</React.Fragment>
        )}
      </p>
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = userAnswer === option;
          const isCorrectAnswer = option === question.correctAnswer;
          let ringColor = 'ring-slate-300';
          let textColor = 'text-slate-700';

          if (showResult) {
            if (isSelected) {
              ringColor = isCorrect ? 'ring-green-500' : 'ring-red-500';
            } else if (isCorrectAnswer) {
              ringColor = 'ring-green-500';
            }
          }
          
          return (
            <label
              key={index}
              className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                isSelected ? 'bg-sky-50 border-sky-400 ring-2 ring-sky-300' : 'bg-white border-slate-300 hover:bg-slate-50'
              }`}
            >
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={isSelected}
                onChange={() => onAnswerChange(option)}
                className="sr-only"
                disabled={showResult}
              />
              <span className="flex-1 text-slate-800">{option}</span>
              {showResult && (isCorrectAnswer || isSelected) && (
                isCorrectAnswer ? <CheckIcon className="w-6 h-6 text-green-500"/> : <XIcon className="w-6 h-6 text-red-500" />
              )}
            </label>
          );
        })}
      </div>
      {showResult && isCorrect !== undefined && (
        <div className={`mt-4 p-3 rounded-lg text-sm ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p><span className="font-semibold">Answer:</span> {question.correctAnswer}</p>
          {question.explanation && <p className="mt-1"><span className="font-semibold">Explanation:</span> {question.explanation}</p>}
        </div>
      )}
    </div>
  );
};

export default MultipleChoiceQuestionComponent;
