
import React from 'react';
import type { Results } from '../types';

interface SummaryProps {
  total: number;
  answered: number;
  results: Results;
  showResults: boolean;
}

const Summary: React.FC<SummaryProps> = ({ total, answered, results, showResults }) => {
  const correctCount = Object.values(results).filter(Boolean).length;
  const score = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const progress = total > 0 ? Math.round((answered / total) * 100) : 0;

  return (
    <div className="mb-8 p-4 bg-slate-100 rounded-xl">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="w-full sm:w-auto">
          <h3 className="text-lg font-semibold text-slate-700">Progress</h3>
          <p className="text-sm text-slate-500">{answered} of {total} questions answered</p>
          <div className="w-full bg-slate-200 rounded-full h-2.5 mt-2">
            <div className="bg-sky-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        
        {showResults && (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-700">Your Score</h3>
            <p className={`text-4xl font-bold font-display ${score >= 70 ? 'text-green-500' : score >= 40 ? 'text-yellow-500' : 'text-red-500'}`}>
              {score}%
            </p>
            <p className="text-sm text-slate-500">{correctCount} / {total} correct</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Summary;
