
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.25a.75.75 0 01.75.75v1.5a5.25 5.25 0 005.25 5.25h1.5a.75.75 0 010 1.5h-1.5a5.25 5.25 0 00-5.25 5.25v1.5a.75.75 0 01-1.5 0v-1.5a5.25 5.25 0 00-5.25-5.25H4.5a.75.75 0 010-1.5h1.5a5.25 5.25 0 005.25-5.25v-1.5A.75.75 0 0112 2.25z" />
            </svg>
            <h1 className="text-2xl font-bold font-display text-slate-800">English Tense Master</h1>
        </div>
        <div className="text-sm text-slate-500">Practice & Improve</div>
      </div>
    </header>
  );
};

export default Header;
