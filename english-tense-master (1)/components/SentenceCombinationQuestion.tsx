
import React from 'react';
import type { SentenceCombinationQuestion } from '../types';

interface Props {
  question: SentenceCombinationQuestion;
  questionNumber: number;
  userAnswer: string | undefined;
  onAnswerChange: (answer: string) => void;
  isCorrect: boolean | undefined;
  showResult: boolean;
}

const SentenceCombinationQuestionComponent: React.FC<Props> = ({ question, questionNumber, userAnswer = '', onAnswerChange, isCorrect, showResult }) => {
  return (
    <div className="p-4 border border-slate-200 rounded-lg">
      <div className="mb-4">
        <p className="text-lg text-slate-700 mb-2">
          <span className="font-bold mr-2">{questionNumber}.</span> Combine the sentences using the given conjunction.
        </p>
        <p className="pl-6 text-slate-600 italic">{question.prompt}</p>
      </div>
      <textarea
        value={userAnswer}
        onChange={(e) => onAnswerChange(e.target.value)}
        disabled={showResult}
        rows={2}
        className={`w-full p-2 border-2 bg-slate-50 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all ${
          showResult && (isCorrect ? 'border-green-500' : 'border-red-500')
        }`}
        placeholder="Your combined sentence..."
      />
      {showResult && isCorrect !== undefined && (
        <div className={`mt-4 p-3 rounded-lg text-sm ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          <p><span className="font-semibold">Correct Answer:</span> {question.correctAnswer}</p>
          {question.explanation && <p className="mt-1"><span className="font-semibold">Explanation:</span> {question.explanation}</p>}
        </div>
      )}
    </div>
  );
};

export default SentenceCombinationQuestionComponent;
