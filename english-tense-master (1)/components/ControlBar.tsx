
import React from 'react';

interface ControlBarProps {
  onCheck: () => void;
  onReset: () => void;
  onShowAll: () => void;
}

const ControlBar: React.FC<ControlBarProps> = ({ onCheck, onReset, onShowAll }) => {
  return (
    <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-4 justify-center sm:justify-end">
      <button
        onClick={onShowAll}
        className="px-6 py-2 rounded-lg font-semibold text-sm text-sky-600 bg-sky-100 hover:bg-sky-200 transition-colors"
      >
        Show Answers
      </button>
      <button
        onClick={onReset}
        className="px-6 py-2 rounded-lg font-semibold text-sm text-slate-600 bg-slate-200 hover:bg-slate-300 transition-colors"
      >
        Reset
      </button>
      <button
        onClick={onCheck}
        className="px-8 py-2 rounded-lg font-semibold text-sm text-white bg-green-500 hover:bg-green-600 transition-colors shadow-md"
      >
        Check Answers
      </button>
    </div>
  );
};

export default ControlBar;
