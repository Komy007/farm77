import { useState, useRef, useEffect } from 'react';
import { useLanguage, Language, languages } from '@/contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 text-sm font-medium text-gray-700 hover:text-farm-green transition-colors bg-white rounded-lg shadow-md border border-gray-300"
        data-testid="language-selector-btn"
      >
        <span className="text-lg">{languages[language].flag}</span>
        <span className="text-xs sm:text-sm font-medium hidden sm:inline">{languages[language].name}</span>
        <i className={`fas fa-chevron-down text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[120px]">
          {(Object.keys(languages) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => {
                changeLanguage(lang);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-sm transition-colors hover:bg-gray-50 ${
                language === lang ? 'bg-farm-green/10 text-farm-green font-semibold' : 'text-gray-700 hover:text-farm-green'
              }`}
              data-testid={`language-option-${lang}`}
            >
              <span className="text-lg">{languages[lang].flag}</span>
              <span>{languages[lang].name}</span>
              {language === lang && <i className="fas fa-check text-farm-green ml-auto"></i>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}