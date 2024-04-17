'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';

const LanguageContext = createContext({
  language: 'english',
  setLanguage: (lang: string) => {}
});

interface LanguageProviderProps {
  children: ReactNode,
  initialLanguage: string
}

export function LanguageProvider({children, initialLanguage}: LanguageProviderProps) {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    Cookies.set('language', language)
  }, [language]);

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext);
}