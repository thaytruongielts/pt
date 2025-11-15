
import React from 'react';
import type { SectionData } from '../types';

interface SidebarProps {
  sections: SectionData[];
  activeSection: number;
  setActiveSection: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeSection, setActiveSection }) => {
  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="bg-white p-4 rounded-2xl shadow-lg h-full">
        <h2 className="text-lg font-bold font-display mb-4 text-slate-700">Sections</h2>
        <nav>
          <ul>
            {sections.map((section, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => setActiveSection(index)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === index
                      ? 'bg-sky-500 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
