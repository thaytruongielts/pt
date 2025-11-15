
import React, { useState, useMemo } from 'react';
import { sections } from './constants';
import type { UserAnswers, Results } from './types';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import Summary from './components/Summary';
import ControlBar from './components/ControlBar';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [results, setResults] = useState<Results>({});
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = useMemo(() => sections.reduce((acc, section) => acc + section.questions.length, 0), []);
  const questionsAnswered = useMemo(() => Object.keys(userAnswers).length, [userAnswers]);

  // FIX: Update answer type to handle string arrays from fill-in-the-blank questions.
  const handleAnswerChange = (questionId: string, answer: string | string[]) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
    setShowResults(false);
    setResults(prev => {
        const newResults = {...prev};
        delete newResults[questionId];
        return newResults;
    });
  };

  const checkAnswers = () => {
    const newResults: Results = {};
    sections.forEach((section, sectionIndex) => {
      section.questions.forEach((question, questionIndex) => {
        const id = `s${sectionIndex}-q${questionIndex}`;
        const userAnswer = userAnswers[id];
        if (userAnswer === undefined) return;
        
        // FIX: Add logic to check answers for different question types.
        let isCorrect = false;
        switch (question.type) {
          case 'multiple-choice':
            if (typeof userAnswer === 'string') {
              isCorrect = userAnswer === question.correctAnswer;
            }
            break;
          case 'fill-in-the-blank':
            if (Array.isArray(userAnswer)) {
              isCorrect = question.blanks.every((correctBlank, index) => {
                const userBlank = (userAnswer[index] || '').trim().toLowerCase();
                return correctBlank.split('/').includes(userBlank);
              });
            }
            break;
          case 'sentence-combination':
            if (typeof userAnswer === 'string') {
              isCorrect = userAnswer.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();
            }
            break;
        }
        newResults[id] = isCorrect;
      });
    });
    setResults(newResults);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setResults({});
    setShowResults(false);
    setActiveSection(0);
  };
  
  const showAllAnswers = () => {
    const allCorrectAnswers: UserAnswers = {};
    const allResults: Results = {};
     sections.forEach((section, sectionIndex) => {
      section.questions.forEach((question, questionIndex) => {
         const id = `s${sectionIndex}-q${questionIndex}`;
         allResults[id] = true;
         // FIX: Add logic to show correct answers for different question types.
         switch (question.type) {
          case 'multiple-choice':
          case 'sentence-combination':
            allCorrectAnswers[id] = question.correctAnswer;
            break;
          case 'fill-in-the-blank':
            allCorrectAnswers[id] = question.blanks.map(b => b.split('/')[0]);
            break;
         }
      });
    });
    setUserAnswers(allCorrectAnswers);
    setResults(allResults);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row container mx-auto px-4 py-8 gap-8">
        <Sidebar sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1 min-w-0">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <Summary total={totalQuestions} answered={questionsAnswered} results={results} showResults={showResults} />
            <Section 
              section={sections[activeSection]}
              sectionIndex={activeSection}
              userAnswers={userAnswers}
              onAnswerChange={handleAnswerChange}
              results={results}
              showResults={showResults}
            />
            <ControlBar onCheck={checkAnswers} onReset={resetQuiz} onShowAll={showAllAnswers} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
