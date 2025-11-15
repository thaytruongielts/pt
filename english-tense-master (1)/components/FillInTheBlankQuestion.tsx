import React from 'react';
import type { FillInTheBlankQuestion } from '../types';

interface Props {
  question: FillInTheBlankQuestion;
  questionNumber: number;
  userAnswer: string[] | undefined;
  onAnswerChange: (answers: string[]) => void;
  isCorrect: boolean | undefined;
  showResult: boolean;
}

const FillInTheBlankQuestionComponent: React.FC<Props> = ({ question, questionNumber, userAnswer = [], onAnswerChange, isCorrect, showResult }) => {
  const parts = question.prompt.split('___');

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...userAnswer];
    newAnswers[index] = value;
    onAnswerChange(newAnswers);
  };

  return (
    <div className="p-4 border border-slate-200 rounded-lg">
      <div className="text-lg text-slate-700 mb-4 leading-relaxed flex flex-wrap items-center gap-x-2">
        <span className="font-bold mr-2 self-start">{questionNumber}.</span>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            <span>{part}</span>
            {index < parts.length - 1 && (
              <input
                type="text"
                value={userAnswer[index] || ''}
                onChange={(e) => handleInputChange(index, e.target.value)}
                disabled={showResult}
                className={`inline-block w-40 px-2 py-1 border-b-2 bg-slate-50 rounded-t-md focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all ${
                  showResult && (question.blanks[index].split('/').includes((userAnswer[index] || '').trim().toLowerCase()) ? 'border-green-500' : 'border-red-500')
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      {showResult && isCorrect !== undefined && (
        <div className={`mt-4 p-3 rounded-lg text-sm ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p><span className="font-semibold">Answer:</span> {question.blanks.join(', ')}</p>
          {question.explanation && <p className="mt-1"><span className="font-semibold">Explanation:</span> {question.explanation}</p>}
        </div>
      )}
    </div>
  );
};

export default FillInTheBlankQuestionComponent;